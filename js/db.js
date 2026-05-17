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

/**
 * Inserts a new booking record into the Supabase postgres database.
 * @param {Object} bookingData The booking payload
 * @returns {Promise<boolean>} Success status
 */
async function insertBookingToDB(bookingData) {
  if (!dbClient) return false;
  
  try {
    const { data, error } = await dbClient
      .from('bookings')
      .insert([
        {
          brand: bookingData.brand,
          model: bookingData.model,
          issue: bookingData.issue,
          services: bookingData.cart, // Assumes JSONB array handling in DB
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
      ]);
      
    if (error) {
      console.error("Supabase Insertion Error:", error);
      return false;
    }
    
    // Trigger Automation Webhook (e.g., n8n) for Emails/Invoices
    if (window.MOBI_CONFIG && window.MOBI_CONFIG.N8N_WEBHOOK_URL) {
      try {
        await fetch(window.MOBI_CONFIG.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: 'new_booking', data: bookingData })
        });
        console.log("Webhook triggered successfully.");
      } catch (webhookErr) {
        console.error("Webhook Error (Invoice/Email may not have sent):", webhookErr);
      }
    }
    
    return true;
  } catch (err) {
    console.error("Database connection failed:", err);
    return false;
  }
}

// Make accessible to other scripts
window.insertBookingToDB = insertBookingToDB;
