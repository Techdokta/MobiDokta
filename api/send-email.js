// MobiDokta — Vercel Serverless: Send Email via SendGrid
// Environment variables: SENDGRID_API_KEY, FROM_EMAIL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, html, text } = req.body;

  if (!to || !subject) {
    return res.status(400).json({ error: 'Missing required fields: to, subject' });
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: process.env.FROM_EMAIL || 'noreply@mobidokta.co.za', name: 'MobiDokta' },
        subject: subject,
        content: [
          { type: 'text/plain', value: text || subject },
          { type: 'text/html', value: html || `<p>${text || subject}</p>` }
        ]
      })
    });

    if (response.ok || response.status === 202) {
      return res.status(200).json({ success: true, message: 'Email sent' });
    }
    const error = await response.text();
    return res.status(response.status).json({ error: 'SendGrid error', details: error });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
