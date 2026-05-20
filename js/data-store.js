/* ============================================
   MobiDokta — Data Store (localStorage Abstraction)
   Acts as a mock database for local demo.
   ============================================ */

const MobiStore = {
  /* ─── Core Helpers ─── */
  _get(key) {
    try { return JSON.parse(localStorage.getItem('md_' + key)) || []; }
    catch { return []; }
  },
  _set(key, data) {
    localStorage.setItem('md_' + key, JSON.stringify(data));
  },
  _id() {
    return 'MD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
  },

  /* ─── Bookings ─── */
  getBookings() { return this._get('bookings'); },
  addBooking(booking) {
    const bookings = this.getBookings();
    booking.id = this._id();
    booking.status = booking.status || 'pending';
    booking.createdAt = new Date().toISOString();
    bookings.push(booking);
    this._set('bookings', bookings);
    this.addAuditLog('Booking created: ' + booking.id);
    return booking;
  },
  updateBooking(id, updates) {
    const bookings = this.getBookings();
    const idx = bookings.findIndex(b => b.id === id);
    if (idx !== -1) {
      Object.assign(bookings[idx], updates, { updatedAt: new Date().toISOString() });
      this._set('bookings', bookings);
      this.addAuditLog('Booking updated: ' + id);
    }
    return bookings[idx];
  },
  cancelBooking(id) {
    return this.updateBooking(id, { status: 'cancelled' });
  },
  getUpcomingBookings() {
    const now = new Date();
    return this.getBookings().filter(b => new Date(b.date) >= now && b.status !== 'cancelled');
  },

  /* ─── Payments ─── */
  getPayments() { return this._get('payments'); },
  addPayment(payment) {
    const payments = this.getPayments();
    payment.id = this._id();
    payment.status = payment.status || 'completed';
    payment.createdAt = new Date().toISOString();
    payments.push(payment);
    this._set('payments', payments);
    this.addAuditLog('Payment recorded: ' + payment.id + ' via ' + payment.gateway);
    return payment;
  },
  getTotalRevenue() {
    return this.getPayments()
      .filter(p => p.status === 'completed')
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  },
  getRevenueByGateway() {
    const result = { paystack: 0, eft: 0, yoco: 0, peach: 0, ozow: 0 };
    this.getPayments().filter(p => p.status === 'completed').forEach(p => {
      if (result[p.gateway] !== undefined) result[p.gateway] += p.amount;
    });
    return result;
  },

  /* ─── Customers ─── */
  getCustomers() { return this._get('customers'); },
  addCustomer(customer) {
    const customers = this.getCustomers();
    const existing = customers.find(c => c.phone === customer.phone);
    if (existing) {
      Object.assign(existing, customer);
      this._set('customers', customers);
      return existing;
    }
    customer.id = this._id();
    customer.createdAt = new Date().toISOString();
    customers.push(customer);
    this._set('customers', customers);
    return customer;
  },
  getCustomerById(id) {
    return this.getCustomers().find(c => c.id === id);
  },

  /* ─── Feedback ─── */
  getFeedback() { return this._get('feedback'); },
  addFeedback(fb) {
    const feedbacks = this.getFeedback();
    fb.id = this._id();
    fb.createdAt = new Date().toISOString();
    feedbacks.push(fb);
    this._set('feedback', feedbacks);
    this.addAuditLog('Feedback submitted: ' + fb.id);
    return fb;
  },
  getAverageRating() {
    const fbs = this.getFeedback();
    if (fbs.length === 0) return 0;
    return (fbs.reduce((s, f) => s + (f.rating || 0), 0) / fbs.length).toFixed(1);
  },
  getNPS() {
    const fbs = this.getFeedback().filter(f => f.nps !== undefined);
    if (fbs.length === 0) return 0;
    const promoters = fbs.filter(f => f.nps >= 9).length;
    const detractors = fbs.filter(f => f.nps <= 6).length;
    return Math.round(((promoters - detractors) / fbs.length) * 100);
  },

  /* ─── Audit Log ─── */
  getAuditLogs() { return this._get('audit'); },
  addAuditLog(action) {
    const logs = this.getAuditLogs();
    logs.push({ action, timestamp: new Date().toISOString(), user: this.isAdminLoggedIn() ? 'admin' : 'customer' });
    if (logs.length > 500) logs.splice(0, logs.length - 500);
    this._set('audit', logs);
  },

  /* ─── Admin Auth ─── */
  isAdminLoggedIn() {
    const session = sessionStorage.getItem('md_admin_session');
    if (!session) return false;
    try {
      const s = JSON.parse(session);
      return s.expires > Date.now();
    } catch { return false; }
  },
  adminLogin(pin) {
    /* Demo PIN: 1234 */
    if (pin === '1234') {
      sessionStorage.setItem('md_admin_session', JSON.stringify({
        loggedIn: true,
        expires: Date.now() + (2 * 60 * 60 * 1000), /* 2 hours */
        twoFactorVerified: true
      }));
      this.addAuditLog('Admin login successful');
      return true;
    }
    this.addAuditLog('Admin login failed');
    return false;
  },
  adminLogout() {
    sessionStorage.removeItem('md_admin_session');
    this.addAuditLog('Admin logout');
  },

  /* ─── Available Slots ─── */
  getAvailableSlots(dateStr) {
    const booked = this.getBookings()
      .filter(b => b.date === dateStr && b.status !== 'cancelled')
      .map(b => b.time);
    const allSlots = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'];
    return allSlots.map(t => ({ time: t, available: !booked.includes(t) }));
  },

  /* ─── Seed Demo Data ─── */
  seedDemoData() {
    if (this.getBookings().length > 0) return; // already seeded

    const names = ['Thabo Molefe','Naledi Khumalo','Sipho Dlamini','Lerato Mahlangu','Kagiso Motaung','Zanele Sithole','Bongani Nkosi','Palesa Mokoena'];
    const phones = ['0712345678','0823456789','0619876543','0734567890','0845678901','0656789012','0767890123','0878901234'];
    const services = [
      { name: 'Screen Transplant', price: 1999, duration: 60 },
      { name: 'Battery Resuscitation', price: 799, duration: 30 },
      { name: 'Water Damage ICU', price: 1499, duration: 90 },
      { name: 'Charging Port Surgery', price: 699, duration: 30 },
      { name: 'Software Recovery', price: 499, duration: 45 }
    ];
    const brands = ['Apple','Samsung','Huawei'];
    const locations = ['Alberton Randhart Home Studio', 'Tele', 'Public Meetup'];
    const gateways = ['yoco','peach','ozow'];

    for (let i = 0; i < 8; i++) {
      const svc = services[i % services.length];
      const d = new Date();
      d.setDate(d.getDate() - Math.floor(Math.random() * 14) + Math.floor(Math.random() * 7));
      const dateStr = d.toISOString().split('T')[0];
      const timeStr = ['09:00','10:30','11:00','13:00','14:30','15:00','16:00'][i % 7];

      this.addCustomer({ name: names[i], phone: phones[i], email: names[i].toLowerCase().replace(' ','.') + '@gmail.com' });

      const booking = this.addBooking({
        customerName: names[i],
        customerPhone: phones[i],
        brand: brands[i % 3],
        service: svc.name,
        price: svc.price,
        duration: svc.duration,
        date: dateStr,
        time: timeStr,
        location: locations[i % 3],
        status: i < 6 ? 'confirmed' : 'pending'
      });

      if (i < 6) {
        this.addPayment({
          bookingId: booking.id,
          customerName: names[i],
          amount: svc.price,
          gateway: gateways[i % 3],
          status: 'completed'
        });
      }

      if (i < 5) {
        this.addFeedback({
          customerName: names[i],
          bookingId: booking.id,
          rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
          nps: Math.floor(Math.random() * 4) + 7, // 7-10
          comment: ['Excellent service!', 'Very professional team', 'Quick repair, happy!', 'Will definitely come back', 'Great experience overall'][i]
        });
      }
    }
  }
};

// Seed on first load
MobiStore.seedDemoData();
