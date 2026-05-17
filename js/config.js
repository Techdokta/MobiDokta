// ==========================================
// MobiDokta Configuration File
// ==========================================
// HOW TO CONNECT YOUR DATABASE:
// 1. Go to https://supabase.com and create a free account.
// 2. Click "New Project" and name it "MobiDokta".
// 3. Once it finishes building, go to Settings (Gear Icon) -> API.
// 4. Copy the "Project URL" into SUPABASE_URL below.
// 5. Copy the "anon / public" API key into SUPABASE_ANON_KEY below.
// ==========================================

const MOBI_CONFIG = {
  // Supabase Database Config
  SUPABASE_URL: 'https://sdtulqzaxourrugtdosc.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_KdZxSbssnHkZ7M_Ok7prTA_nT7cFW33',
  
  // Automation Webhook (n8n, Make, Zapier) to generate Invoice & Email
  N8N_WEBHOOK_URL: '', // Paste your n8n webhook URL here
  
  // Example payment gateways mappings for later
  DEPOSIT_PERCENTAGE: 0.40
};

// Make accessible to other scripts
window.MOBI_CONFIG = MOBI_CONFIG;
