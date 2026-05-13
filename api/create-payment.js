// MobiDokta — Vercel Serverless: Create Payment
// Handles server-side payment initiation for Yoco, Peach, and Ozow.
// Environment variables required:
//   YOCO_SECRET_KEY, PEACH_ENTITY_ID, PEACH_BEARER_TOKEN,
//   OZOW_SITE_CODE, OZOW_PRIVATE_KEY, OZOW_API_URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { gateway, amount, bookingId, customerName, customerEmail } = req.body;

  if (!gateway || !amount || !bookingId) {
    return res.status(400).json({ error: 'Missing required fields: gateway, amount, bookingId' });
  }

  try {
    let result;

    switch (gateway) {
      case 'yoco':
        result = await createYocoPayment(amount, bookingId, customerEmail);
        break;
      case 'peach':
        result = await createPeachPayment(amount, bookingId, customerEmail);
        break;
      case 'ozow':
        result = await createOzowPayment(amount, bookingId, customerEmail);
        break;
      default:
        return res.status(400).json({ error: 'Invalid gateway. Use: yoco, peach, or ozow' });
    }

    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    console.error('Payment error:', error);
    return res.status(500).json({ error: 'Payment processing failed', details: error.message });
  }
}

async function createYocoPayment(amount, bookingId, email) {
  const response = await fetch('https://payments.yoco.com/api/checkouts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.YOCO_SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: amount * 100, // Yoco uses cents
      currency: 'ZAR',
      metadata: { bookingId },
      successUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=success&booking=${bookingId}`,
      cancelUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=cancelled&booking=${bookingId}`,
      failureUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=failed&booking=${bookingId}`
    })
  });
  const data = await response.json();
  return { checkoutUrl: data.redirectUrl, paymentId: data.id };
}

async function createPeachPayment(amount, bookingId, email) {
  const params = new URLSearchParams();
  params.append('entityId', process.env.PEACH_ENTITY_ID);
  params.append('amount', amount.toFixed(2));
  params.append('currency', 'ZAR');
  params.append('paymentType', 'DB');
  params.append('merchantTransactionId', bookingId);

  const response = await fetch('https://eu-prod.oppwa.com/v1/checkouts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PEACH_BEARER_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });
  const data = await response.json();
  return { checkoutId: data.id, ndc: data.ndc };
}

async function createOzowPayment(amount, bookingId, email) {
  const response = await fetch(process.env.OZOW_API_URL || 'https://api.ozow.com/PostPaymentRequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ApiKey': process.env.OZOW_API_KEY
    },
    body: JSON.stringify({
      siteCode: process.env.OZOW_SITE_CODE,
      countryCode: 'ZA',
      currencyCode: 'ZAR',
      amount: amount,
      transactionReference: bookingId,
      bankReference: 'MobiDokta-' + bookingId,
      notifyUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/api/ozow-webhook`,
      successUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=success&booking=${bookingId}`,
      errorUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=failed&booking=${bookingId}`,
      cancelUrl: `${process.env.VERCEL_URL || 'https://mobidokta.co.za'}/pay.html?status=cancelled&booking=${bookingId}`
    })
  });
  const data = await response.json();
  return { paymentUrl: data.url, transactionId: data.paymentRequestId };
}
