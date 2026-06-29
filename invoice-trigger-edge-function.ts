// supabase/functions/invoice-trigger/index.ts
// MobiDokta Invoice Trigger Edge Function
// Deploy: supabase functions deploy invoice-trigger
// @ts-nocheck — Deno runtime; VS Code TS server does not resolve Deno module URLs

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Configuration
const CONFIG = {
  N8N_WEBHOOK_URL: Deno.env.get('N8N_WEBHOOK_URL') || '',
  N8N_WEBHOOK_SECRET: Deno.env.get('N8N_WEBHOOK_SECRET') || '', // Optional: verify n8n is the caller
  MAX_RETRIES: 3,
  RETRY_DELAY_MS: 2000,
  REQUEST_TIMEOUT_MS: 15000,

  // Price catalog (must match frontend but server is source of truth)
  SERVICE_PRICES: {
    'screen_replacement': 1200.00,
    'battery_replacement': 800.00,
    'water_damage_repair': 1500.00,
    'charging_port_repair': 600.00,
    'software_repair': 500.00,
    'diagnostic': 200.00,
    'data_recovery': 1000.00
  }
};

// Types
interface BookingRecord {
  id: string;
  brand: string;
  model: string;
  issue?: string;
  services: string[];
  total_price: number;
  deposit_amount: number;
  date: string;
  time: string;
  location: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  status: string;
  created_at: string;
}

interface WebhookPayload {
  event: string;
  timestamp: string;
  data: BookingRecord;
}

// Validation functions
function validateBooking(record: any): { valid: boolean; errors: string[]; sanitized: Partial<BookingRecord> } {
  const errors: string[] = [];

  // Required fields
  if (!record.id || typeof record.id !== 'string') errors.push('Missing or invalid booking ID');
  if (!record.brand || record.brand.length < 1) errors.push('Brand is required');
  if (!record.model || record.model.length < 1) errors.push('Model is required');
  if (!record.customer_name || record.customer_name.length < 2) errors.push('Customer name is required');

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!record.customer_email || !emailRegex.test(record.customer_email)) {
    errors.push('Valid customer email is required');
  }

  // Phone validation (South African + international)
  const phoneRegex = /^[+]?[0-9\s\-]{10,}$/;
  if (!record.customer_phone || !phoneRegex.test(record.customer_phone)) {
    errors.push('Valid phone number is required');
  }

  // Services must be array
  let services: string[] = [];
  if (Array.isArray(record.services)) {
    services = record.services;
  } else if (typeof record.services === 'string') {
    try {
      services = JSON.parse(record.services);
    } catch {
      errors.push('Services must be a valid JSON array');
    }
  }

  // Price validation (Dynamic based on model)
  const clientPrice = parseFloat(record.total_price) || 0;
  let calculatedTotal = clientPrice; // Trust client price for MVP due to complex dynamic model pricing

  if (clientPrice < 0) {
    errors.push('Total price cannot be negative');
  }

  // Deposit validation (typically 50% of total)
  const deposit = parseFloat(record.deposit_amount) || 0;
  if (deposit < 0) errors.push('Deposit cannot be negative');
  if (deposit > calculatedTotal) errors.push('Deposit cannot exceed total price');

  // Date validation
  if (!record.date || !/^\d{4}-\d{2}-\d{2}$/.test(record.date)) {
    errors.push('Date must be in YYYY-MM-DD format');
  }

  // Sanitize text fields (prevent XSS in downstream systems)
  const sanitize = (str: string) => str.replace(/[<>"']/g, '').trim();

  const sanitized: Partial<BookingRecord> = {
    id: record.id,
    brand: sanitize(record.brand || ''),
    model: sanitize(record.model || ''),
    issue: sanitize(record.issue || ''),
    services: services,
    total_price: calculatedTotal > 0 ? calculatedTotal : clientPrice,
    deposit_amount: deposit,
    date: record.date,
    time: record.time || '',
    location: sanitize(record.location || ''),
    customer_name: sanitize(record.customer_name || ''),
    customer_phone: record.customer_phone?.replace(/\s/g, '') || '',
    customer_email: record.customer_email?.toLowerCase().trim() || '',
    status: record.status || 'pending',
    created_at: record.created_at || new Date().toISOString()
  };

  return { valid: errors.length === 0, errors, sanitized };
}

// Retry logic with exponential backoff
async function fetchWithRetry(url: string, options: RequestInit, maxRetries: number): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), CONFIG.REQUEST_TIMEOUT_MS);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // If success or client error (4xx), don't retry
      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return response;
      }

      // Server error (5xx) - retry
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    } catch (error) {
      lastError = error as Error;
      console.warn(`Webhook attempt ${attempt}/${maxRetries} failed: ${lastError.message}`);

      if (attempt < maxRetries) {
        const delay = CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt - 1); // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`Failed after ${maxRetries} attempts: ${lastError?.message}`);
}

// Main handler
serve(async (req) => {
  // CORS headers for preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse payload
    const payload = await req.json();
    console.log('Received webhook payload:', JSON.stringify(payload, null, 2));

    // Handle both Supabase DB Webhook format and direct format
    const record = payload.record || payload.data || payload;

    if (!record) {
      return new Response(JSON.stringify({ error: 'Missing record data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate and sanitize
    const validation = validateBooking(record);

    if (!validation.valid) {
      console.error('Validation failed:', validation.errors);
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: validation.errors 
      }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const sanitizedRecord = validation.sanitized as BookingRecord;

    // Build n8n payload
    const n8nPayload: WebhookPayload = {
      event: 'booking_created',
      timestamp: new Date().toISOString(),
      data: sanitizedRecord
    };

    // Verify n8n URL is configured
    if (!CONFIG.N8N_WEBHOOK_URL) {
      console.error('N8N_WEBHOOK_URL not configured');
      return new Response(JSON.stringify({ error: 'Webhook URL not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send to n8n with retry
    console.log(`Forwarding to n8n: ${CONFIG.N8N_WEBHOOK_URL}`);

    const response = await fetchWithRetry(
      CONFIG.N8N_WEBHOOK_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Secret': CONFIG.N8N_WEBHOOK_SECRET,
          'X-Source': 'supabase-edge-function'
        },
        body: JSON.stringify(n8nPayload)
      },
      CONFIG.MAX_RETRIES
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`n8n returned ${response.status}: ${errorText}`);

      // Return 200 to Supabase so it doesn't retry, but log the error
      // n8n failures should be handled by n8n's own retry mechanism
      return new Response(JSON.stringify({ 
        success: false, 
        warning: 'n8n processing failed but booking is saved',
        n8nStatus: response.status 
      }), {
        status: 200, // Acknowledge to Supabase
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    console.log(`Successfully forwarded booking ${sanitizedRecord.id} to n8n`);

    return new Response(JSON.stringify({ 
      success: true, 
      bookingId: sanitizedRecord.id,
      totalPrice: sanitizedRecord.total_price,
      priceRecalculated: Math.abs((parseFloat(record.total_price) || 0) - sanitizedRecord.total_price) > 0.01
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Edge function error:', error);

    return new Response(JSON.stringify({ 
      error: 'Internal processing error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
});
