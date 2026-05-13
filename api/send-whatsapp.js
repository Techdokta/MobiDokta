// MobiDokta — Vercel Serverless: Send WhatsApp via Twilio
// Environment variables: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: 'Missing required fields: to, message' });
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+27100001234';

  // Format SA number for WhatsApp
  let whatsappTo = to.replace(/\s/g, '');
  if (whatsappTo.startsWith('0')) whatsappTo = '+27' + whatsappTo.substring(1);
  if (!whatsappTo.startsWith('+')) whatsappTo = '+' + whatsappTo;
  whatsappTo = 'whatsapp:' + whatsappTo;

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const params = new URLSearchParams();
    params.append('From', from);
    params.append('To', whatsappTo);
    params.append('Body', message);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ success: true, sid: data.sid });
    }
    return res.status(response.status).json({ error: 'Twilio error', details: data.message });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send WhatsApp', details: error.message });
  }
}
