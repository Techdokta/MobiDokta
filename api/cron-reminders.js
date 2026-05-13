// MobiDokta — Vercel Cron: Appointment Reminders
// Runs every 30 minutes via vercel.json cron config
// Sends 2-hour reminders via SMS, WhatsApp, and Email

export default async function handler(req, res) {
  // Verify this is a cron invocation (optional security)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  // In production, this would query a real database.
  // For now, this is the template for the scheduled function.
  
  try {
    // Example: Find bookings happening in the next 2 hours
    const now = new Date();
    const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    
    // TODO: Replace with actual database query
    // const upcomingBookings = await db.bookings.findMany({
    //   where: {
    //     datetime: { gte: now, lte: twoHoursLater },
    //     status: 'confirmed',
    //     reminderSent: false
    //   }
    // });

    const upcomingBookings = []; // Placeholder

    let sentCount = 0;

    for (const booking of upcomingBookings) {
      const reminderMsg = `🏥 MobiDokta Reminder: Your ${booking.service} appointment is in 2 hours at ${booking.location}. Ref: ${booking.id}. See you soon!`;

      // Send SMS
      try {
        await fetch(`${baseUrl}/api/send-sms`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: booking.customerPhone, message: reminderMsg })
        });
      } catch (e) { console.error('SMS reminder failed:', e); }

      // Send WhatsApp
      try {
        await fetch(`${baseUrl}/api/send-whatsapp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: booking.customerPhone, message: reminderMsg })
        });
      } catch (e) { console.error('WhatsApp reminder failed:', e); }

      // Send Email
      if (booking.customerEmail) {
        try {
          await fetch(`${baseUrl}/api/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to: booking.customerEmail,
              subject: `Reminder: Your MobiDokta appointment is in 2 hours`,
              html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
                  <h2 style="color:#0066ff;">🏥 Appointment Reminder</h2>
                  <p>Hi ${booking.customerName},</p>
                  <p>This is a reminder that your <strong>${booking.service}</strong> appointment is in 2 hours.</p>
                  <table style="width:100%;border-collapse:collapse;margin:20px 0;">
                    <tr><td style="padding:8px;color:#666;">Service</td><td style="padding:8px;font-weight:bold;">${booking.service}</td></tr>
                    <tr><td style="padding:8px;color:#666;">Location</td><td style="padding:8px;font-weight:bold;">${booking.location}</td></tr>
                    <tr><td style="padding:8px;color:#666;">Time</td><td style="padding:8px;font-weight:bold;">${booking.time}</td></tr>
                    <tr><td style="padding:8px;color:#666;">Ref</td><td style="padding:8px;font-weight:bold;">${booking.id}</td></tr>
                  </table>
                  <p>See you soon!<br><strong>The MobiDokta Team</strong></p>
                </div>
              `
            })
          });
        } catch (e) { console.error('Email reminder failed:', e); }
      }

      sentCount++;
    }

    return res.status(200).json({
      success: true,
      message: `Processed ${upcomingBookings.length} bookings, sent ${sentCount} reminders`,
      timestamp: now.toISOString()
    });
  } catch (error) {
    console.error('Cron error:', error);
    return res.status(500).json({ error: 'Cron job failed', details: error.message });
  }
}
