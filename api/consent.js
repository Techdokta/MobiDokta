/**
 * POST /api/consent
 * POPIA audit trail — logs consent decisions to Vercel runtime logs.
 * Phase 2 upgrade: replace log with Supabase insert.
 */
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.mobidokta.co.za');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    var body = req.body;
    if (!body || typeof body.analytics === 'undefined') {
      return res.status(400).json({ error: 'Missing analytics field' });
    }

    var record = {
      essential: true,
      analytics: Boolean(body.analytics),
      savedAt: body.savedAt || new Date().toISOString(),
      page: body.page || 'unknown',
      consent_version: 'md_consent_v1',
      receivedAt: new Date().toISOString()
    };

    // Phase 1: log to Vercel runtime (viewable in Vercel dashboard → Logs for 24h)
    console.log('[POPIA_CONSENT]', JSON.stringify(record));

    /*
     * Phase 2 (when ready): insert into Supabase
     * const { createClient } = require('@supabase/supabase-js');
     * const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
     * await supabase.from('consent_log').insert(record);
     */

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[CONSENT_ERROR]', err.message);
    return res.status(500).json({ error: 'Internal error' });
  }
};
