// MobiDokta — Vercel Serverless: Send SMS via Sennza
// Environment variables: SENNZA_API_KEY, SENNZA_API_URL, SENNZA_SENDER_ID

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: 'Missing required fields: to, message' });
  }

  // Format SA number
  let phone = to.replace(/\s/g, '');
  if (phone.startsWith('0')) phone = '27' + phone.substring(1);
  if (phone.startsWith('+')) phone = phone.substring(1);

  try {
    const response = await fetch(process.env.SENNZA_API_URL || 'https://api.sennza.co.za/v1/sms/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENNZA_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: phone,
        from: process.env.SENNZA_SENDER_ID || 'MobiDokta',
        message: message
      })
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ success: true, messageId: data.messageId });
    }
    return res.status(response.status).json({ error: 'Sennza error', details: data });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send SMS', details: error.message });
  }
}
