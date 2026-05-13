/* ============================================
   MobiDokta — Payment Logic
   ============================================ */

(function() {
  const params = new URLSearchParams(window.location.search);
  const bookingId = params.get('booking');
  const amount = parseInt(params.get('amount')) || 0;

  // Populate order summary
  let bookingData = null;
  if (bookingId) {
    const bookings = MobiStore.getBookings();
    bookingData = bookings.find(b => b.id === bookingId);
  }

  document.getElementById('pay-ref').textContent = bookingId || 'N/A';
  document.getElementById('pay-total').textContent = MobiApp.formatRand(amount);
  if (bookingData) {
    document.getElementById('pay-service').textContent = bookingData.services || '—';
    document.getElementById('pay-device').textContent = (bookingData.brand || '') + ' ' + (bookingData.model || '');
  }

  /* ─── Gateway Tab Switching ─── */
  const tabs = document.querySelectorAll('.gateway-tab');
  const panels = document.querySelectorAll('.gateway-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + tab.dataset.gateway).classList.add('active');
    });
  });

  /* ─── Card Number Formatting ─── */
  document.querySelectorAll('.card-number-input').forEach(input => {
    input.addEventListener('input', function() {
      let val = this.value.replace(/\D/g, '');
      val = val.replace(/(.{4})/g, '$1 ').trim();
      this.value = val;
    });
  });

  /* Expiry Formatting */
  document.querySelectorAll('[id$="-expiry"]').forEach(input => {
    input.addEventListener('input', function() {
      let val = this.value.replace(/\D/g, '');
      if (val.length >= 2) val = val.substring(0,2) + '/' + val.substring(2);
      this.value = val;
    });
  });

  /* ─── Payment Processing Simulation ─── */
  function processPayment(gateway) {
    // Show processing overlay
    const overlay = document.createElement('div');
    overlay.className = 'processing-overlay';
    overlay.innerHTML = `
      <div class="processing-spinner"></div>
      <p style="color:var(--cta);font-weight:600;">Processing your ${gateway} payment...</p>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);">Please do not close this window.</p>
    `;
    document.body.appendChild(overlay);

    // Simulate processing
    setTimeout(() => {
      overlay.remove();

      // Record payment
      const payment = MobiStore.addPayment({
        bookingId: bookingId,
        customerName: bookingData ? bookingData.customerName : 'Customer',
        amount: amount,
        gateway: gateway,
        status: 'completed'
      });

      // Update booking status
      if (bookingId) {
        MobiStore.updateBooking(bookingId, { status: 'confirmed', paymentId: payment.id });
      }

      // Show success
      document.querySelector('.payment-layout').classList.add('hidden');
      const successEl = document.getElementById('payment-success');
      successEl.classList.remove('hidden');
      document.getElementById('success-ref').textContent = bookingId || payment.id;
      document.getElementById('success-amount').textContent = MobiApp.formatRand(amount);
      document.getElementById('success-gateway').textContent = gateway.charAt(0).toUpperCase() + gateway.slice(1);

      MobiApp.toast('Payment successful! Ref: ' + (bookingId || payment.id), 'success', 5000);
    }, 2500);
  }

  /* ─── Yoco Pay Button ─── */
  document.getElementById('yoco-pay-btn').addEventListener('click', () => {
    const name = document.getElementById('yoco-name').value.trim();
    const card = document.getElementById('yoco-card').value.replace(/\s/g, '');
    const expiry = document.getElementById('yoco-expiry').value;
    const cvv = document.getElementById('yoco-cvv').value;

    if (!name || card.length < 16 || !expiry || cvv.length < 3) {
      MobiApp.toast('Please fill in all card details correctly.', 'error');
      return;
    }
    processPayment('yoco');
  });

  /* ─── Peach Pay Button ─── */
  document.getElementById('peach-pay-btn').addEventListener('click', () => {
    const name = document.getElementById('peach-name').value.trim();
    const card = document.getElementById('peach-card').value.replace(/\s/g, '');
    const expiry = document.getElementById('peach-expiry').value;
    const cvv = document.getElementById('peach-cvv').value;

    if (!name || card.length < 16 || !expiry || cvv.length < 3) {
      MobiApp.toast('Please fill in all card details correctly.', 'error');
      return;
    }
    processPayment('peach');
  });

  /* ─── Ozow Bank Selection ─── */
  let selectedBank = null;
  document.querySelectorAll('.bank-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.bank-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedBank = card.dataset.bank;
      document.getElementById('ozow-pay-btn').disabled = false;
    });
  });

  document.getElementById('ozow-pay-btn').addEventListener('click', () => {
    if (!selectedBank) {
      MobiApp.toast('Please select your bank first.', 'warning');
      return;
    }
    processPayment('ozow');
  });

  /* ─── Invoice Download ─── */
  document.getElementById('download-invoice-btn').addEventListener('click', () => {
    const invoiceWindow = window.open('', '_blank');
    const ref = bookingId || 'N/A';
    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>MobiDokta Invoice - ${ref}</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 700px; margin: 2rem auto; padding: 2rem; color: #1a1a1a; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0071e3; padding-bottom: 1rem; margin-bottom: 2rem; }
        .logo { font-size: 1.5rem; font-weight: 800; }
        .logo span { color: #2dd4bf; }
        .invoice-title { font-size: 2rem; color: #0071e3; font-weight: 300; }
        .details { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
        .detail-group h4 { color: #666; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; }
        table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
        th { background: #f5f5f5; text-align: left; padding: 12px; font-size: 0.8rem; text-transform: uppercase; color: #666; }
        td { padding: 12px; border-bottom: 1px solid #eee; }
        .total-row { font-weight: 700; font-size: 1.2rem; color: #0066ff; }
        .footer { text-align: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #eee; color: #999; font-size: 0.8rem; }
        @media print { body { margin: 0; } }
      </style>
      </head>
      <body>
        <div class="header">
          <div class="logo"><span>+</span> MobiDokta</div>
          <div class="invoice-title">INVOICE</div>
        </div>
        <div class="details">
          <div class="detail-group">
            <h4>Bill To</h4>
            <p><strong>${bookingData ? bookingData.customerName : 'Customer'}</strong></p>
            <p>${bookingData ? bookingData.customerPhone || '' : ''}</p>
            <p>${bookingData ? bookingData.customerEmail || '' : ''}</p>
          </div>
          <div class="detail-group" style="text-align:right;">
            <h4>Invoice Details</h4>
            <p><strong>Ref:</strong> ${ref}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-ZA')}</p>
            <p><strong>Status:</strong> PAID ✓</p>
          </div>
        </div>
        <table>
          <thead><tr><th>Services</th><th>Device</th><th>Location</th><th style="text-align:right">Amount</th></tr></thead>
          <tbody>
            <tr>
              <td>${bookingData ? bookingData.services : 'Repair Service'}</td>
              <td>${bookingData ? (bookingData.brand + ' ' + (bookingData.model || '')) : '—'}</td>
              <td>${bookingData ? bookingData.location : '—'}</td>
              <td style="text-align:right">R${amount.toLocaleString()}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;border:none;" class="total-row">Total Paid</td>
              <td style="text-align:right;border:none;" class="total-row">R${amount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <div class="footer">
          <p>MobiDokta (Pty) Ltd · Gauteng, South Africa · techdokta@gmail.com</p>
          <p>Premium Parts · Certified TechDoktas · Lifetime Warranty</p>
        </div>
        <script>window.print();<\/script>
      </body></html>
    `;
    invoiceWindow.document.write(invoiceHTML);
    invoiceWindow.document.close();
  });
})();
