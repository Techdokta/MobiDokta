// MobiDokta Database Architecture (Supabase)

// Initialize Supabase Client
const supabaseUrl = window.MOBI_CONFIG.SUPABASE_URL;
const supabaseKey = window.MOBI_CONFIG.SUPABASE_ANON_KEY;
let dbClient = null;

if (supabaseUrl !== 'YOUR_SUPABASE_PROJECT_URL_HERE') {
  // @supabase/supabase-js is loaded natively in book.html via CDN
  dbClient = window.supabase.createClient(supabaseUrl, supabaseKey);
  console.log("Supabase Connection Initialized.");
} else {
  console.warn("Supabase credentials missing. Running in local/demo mode. Bookings will NOT be saved to the database.");
}

// Returns the inserted booking's DB id on success, or null on failure.
// Callers check truthiness; the id is needed to attach uploaded files to the right row.
async function insertBookingToDB(bookingData) {
  if (!dbClient) return null;

  try {
    const { data, error } = await dbClient
      .from('bookings')
      .insert([
        {
          brand: bookingData.brand,
          model: bookingData.model,
          issue: bookingData.issue,
          services: bookingData.cart,
          total_price: bookingData.totalPrice,
          deposit_amount: bookingData.depositAmount,
          date: bookingData.date,
          time: bookingData.time,
          location: bookingData.location,
          customer_name: bookingData.custName,
          customer_phone: bookingData.custPhone,
          customer_email: bookingData.custEmail,
          created_at: new Date().toISOString()
        }
      ])
      .select('id')
      .single();

    if (error) {
      console.error("Supabase Insertion Error:", error);
      return null;
    }

    if (window.MOBI_CONFIG && window.MOBI_CONFIG.N8N_WEBHOOK_URL) {
      try {
        await fetch(window.MOBI_CONFIG.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: 'new_booking', data: bookingData, bookingId: data.id })
        });
      } catch (webhookErr) {
        console.error("Webhook Error (Invoice/Email may not have sent):", webhookErr);
      }
    }

    return data.id;
  } catch (err) {
    console.error("Database connection failed:", err);
    return null;
  }
}

// Uploads damage photos for a booking to the booking-attachments bucket and
// writes the resulting paths back onto the bookings row. Silently skips files
// that fail validation; returns the list of paths that landed successfully.
async function uploadBookingAttachments(bookingDbId, files) {
  if (!dbClient || !bookingDbId || !files || files.length === 0) return [];

  const MAX_BYTES = 5 * 1024 * 1024;
  const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
  const paths = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!ALLOWED.includes(file.type)) continue;
    if (file.size > MAX_BYTES) continue;

    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5);
    const path = `${bookingDbId}/${Date.now()}-${i}.${ext}`;

    try {
      const { error } = await dbClient.storage
        .from('booking-attachments')
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) {
        console.error('Attachment upload failed:', error);
        continue;
      }
      paths.push(path);
    } catch (err) {
      console.error('Attachment upload error:', err);
    }
  }

  if (paths.length > 0) {
    const { error: updateErr } = await dbClient
      .from('bookings')
      .update({ attachment_paths: paths })
      .eq('id', bookingDbId);
    if (updateErr) console.error('Failed to attach paths to booking:', updateErr);
  }

  return paths;
}

window.insertBookingToDB = insertBookingToDB;
window.uploadBookingAttachments = uploadBookingAttachments;
