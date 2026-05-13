/* ============================================
   MobiDokta — Admin Dashboard Logic
   ============================================ */

(function() {
  // Auth guard
  if (!MobiStore.isAdminLoggedIn()) {
    window.location.href = 'index.html';
    return;
  }

  /* ─── Section Switching ─── */
  window.switchSection = function(section) {
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    const panel = document.getElementById('panel-' + section);
    if (panel) panel.classList.add('active');
    const link = document.querySelector(`[data-section="${section}"]`);
    if (link) link.classList.add('active');

    const titles = { overview:'Overview', bookings:'Bookings', payments:'Payments', customers:'Customers', feedback:'Feedback', audit:'Audit Log' };
    document.getElementById('page-title').textContent = titles[section] || 'Dashboard';

    // Load data for each section
    if (section === 'overview') loadOverview();
    if (section === 'bookings') loadBookings();
    if (section === 'payments') loadPayments();
    if (section === 'customers') loadCustomers();
    if (section === 'feedback') loadFeedback();
    if (section === 'audit') loadAudit();
  };

  document.querySelectorAll('.sidebar-link[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection(link.dataset.section);
    });
  });

  // Logout
  document.getElementById('logout-btn').addEventListener('click', (e) => {
    e.preventDefault();
    MobiStore.adminLogout();
    window.location.href = 'index.html';
  });

  /* ─── OVERVIEW ─── */
  function loadOverview() {
    const bookings = MobiStore.getBookings();
    const payments = MobiStore.getPayments();
    const customers = MobiStore.getCustomers();
    const feedback = MobiStore.getFeedback();
    const revenue = MobiStore.getTotalRevenue();

    // Stats cards
    const statsEl = document.getElementById('overview-stats');
    statsEl.innerHTML = `
      <div class="stat-card">
        <div class="stat-value text-gradient">${MobiApp.formatRand(revenue)}</div>
        <div class="stat-label">Total Revenue</div>
        <div class="stat-change up">↑ From ${payments.length} transactions</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--cta)">${bookings.length}</div>
        <div class="stat-label">Total Bookings</div>
        <div class="stat-change up">${bookings.filter(b=>b.status==='pending').length} pending</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--green)">${customers.length}</div>
        <div class="stat-label">Customers</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--gold)">${MobiStore.getAverageRating()} ★</div>
        <div class="stat-label">Avg Rating</div>
        <div class="stat-change">${feedback.length} reviews</div>
      </div>
    `;

    // Revenue chart (last 7 days)
    const chartEl = document.getElementById('revenue-chart');
    chartEl.innerHTML = '';
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayLabel = d.toLocaleDateString('en-ZA', { weekday: 'short' });
      const dayRevenue = payments
        .filter(p => p.createdAt && p.createdAt.startsWith(dateStr) && p.status === 'completed')
        .reduce((sum, p) => sum + (p.amount || 0), 0);
      days.push({ label: dayLabel, amount: dayRevenue });
    }
    const maxRevenue = Math.max(...days.map(d => d.amount), 1);

    days.forEach(day => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.height = Math.max((day.amount / maxRevenue) * 100, 4) + '%';
      bar.title = MobiApp.formatRand(day.amount);
      bar.innerHTML = `<span class="chart-bar-label">${day.label}</span>`;
      chartEl.appendChild(bar);
    });

    document.getElementById('revenue-trend').textContent = MobiApp.formatRand(revenue) + ' total';

    // Gateway breakdown
    const gwData = MobiStore.getRevenueByGateway();
    const gwEl = document.getElementById('gateway-breakdown');
    gwEl.innerHTML = '';
    Object.entries(gwData).forEach(([gw, amount]) => {
      const pct = revenue > 0 ? Math.round((amount / revenue) * 100) : 0;
      gwEl.innerHTML += `
        <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
          <span style="width:60px;font-size:var(--text-sm);font-weight:600;text-transform:capitalize;">${gw}</span>
          <div style="flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--cta),var(--accent));border-radius:3px;transition:width 0.5s;"></div>
          </div>
          <span style="font-size:var(--text-sm);color:var(--text-tertiary);width:80px;text-align:right;">${MobiApp.formatRand(amount)}</span>
        </div>
      `;
    });

    // Service breakdown
    const svcCounts = {};
    bookings.forEach(b => { svcCounts[b.service] = (svcCounts[b.service] || 0) + 1; });
    const svcEl = document.getElementById('service-breakdown');
    svcEl.innerHTML = '';
    const maxSvc = Math.max(...Object.values(svcCounts), 1);
    Object.entries(svcCounts).sort((a,b) => b[1] - a[1]).forEach(([svc, count]) => {
      const pct = Math.round((count / maxSvc) * 100);
      svcEl.innerHTML += `
        <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
          <span style="width:140px;font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${svc}</span>
          <div style="flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--green),#4ade80);border-radius:3px;"></div>
          </div>
          <span style="font-size:var(--text-sm);color:var(--text-tertiary);width:30px;text-align:right;">${count}</span>
        </div>
      `;
    });

    // Recent bookings table
    const tbody = document.getElementById('recent-bookings');
    tbody.innerHTML = '';
    const statusBadge = (s) => {
      const map = { confirmed:'badge-green', pending:'badge-orange', cancelled:'badge-red' };
      return `<span class="badge ${map[s] || 'badge-cyan'}">${s}</span>`;
    };
    bookings.slice(-5).reverse().forEach(b => {
      tbody.innerHTML += `<tr>
        <td style="color:var(--cta);font-weight:600;">${b.id}</td>
        <td>${b.customerName || '—'}</td>
        <td>${b.service || '—'}</td>
        <td>${b.date ? MobiApp.formatDate(b.date) : '—'}</td>
        <td>${statusBadge(b.status)}</td>
      </tr>`;
    });
  }

  /* ─── BOOKINGS ─── */
  let bookingFilter = 'all';

  function loadBookings(searchTerm = '') {
    let bookings = MobiStore.getBookings();
    if (bookingFilter !== 'all') bookings = bookings.filter(b => b.status === bookingFilter);
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      bookings = bookings.filter(b =>
        (b.id || '').toLowerCase().includes(s) ||
        (b.customerName || '').toLowerCase().includes(s) ||
        (b.service || '').toLowerCase().includes(s)
      );
    }

    const tbody = document.getElementById('bookings-table');
    tbody.innerHTML = '';
    const statusBadge = (s) => {
      const map = { confirmed:'badge-green', pending:'badge-orange', cancelled:'badge-red' };
      return `<span class="badge ${map[s] || 'badge-cyan'}">${s}</span>`;
    };

    bookings.reverse().forEach(b => {
      tbody.innerHTML += `<tr>
        <td style="color:var(--accent-cyan);font-weight:600;">${b.id}</td>
        <td>${b.customerName || '—'}</td>
        <td>${b.brand || ''} ${b.model || ''}</td>
        <td>${b.service || '—'}</td>
        <td>${b.date ? MobiApp.formatDate(b.date) : '—'}</td>
        <td>${b.time || '—'}</td>
        <td>${b.location || '—'}</td>
        <td>${statusBadge(b.status)}</td>
        <td>
          ${b.status === 'pending' ? `<button class="action-btn" onclick="confirmBooking('${b.id}')">✓ Confirm</button>` : ''}
          ${b.status !== 'cancelled' ? `<button class="action-btn danger" onclick="cancelBooking('${b.id}')">✕ Cancel</button>` : ''}
        </td>
      </tr>`;
    });
  }

  window.confirmBooking = function(id) {
    MobiStore.updateBooking(id, { status: 'confirmed' });
    MobiApp.toast('Booking confirmed', 'success');
    loadBookings();
  };
  window.cancelBooking = function(id) {
    MobiStore.cancelBooking(id);
    MobiApp.toast('Booking cancelled', 'warning');
    loadBookings();
  };

  document.querySelectorAll('.admin-tab[data-filter]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab[data-filter]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      bookingFilter = tab.dataset.filter;
      loadBookings(document.getElementById('booking-search').value);
    });
  });
  document.getElementById('booking-search').addEventListener('input', function() {
    loadBookings(this.value);
  });

  /* ─── PAYMENTS ─── */
  function loadPayments() {
    const payments = MobiStore.getPayments();
    const revenue = MobiStore.getTotalRevenue();
    const gwData = MobiStore.getRevenueByGateway();

    document.getElementById('payment-stats').innerHTML = `
      <div class="stat-card">
        <div class="stat-value text-gradient">${MobiApp.formatRand(revenue)}</div>
        <div class="stat-label">Total Revenue</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--green)">${payments.filter(p=>p.status==='completed').length}</div>
        <div class="stat-label">Successful</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--accent)">${MobiApp.formatRand(gwData.yoco)}</div>
        <div class="stat-label">Yoco</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--orange)">${MobiApp.formatRand(gwData.peach)}</div>
        <div class="stat-label">Peach</div>
      </div>
    `;

    const tbody = document.getElementById('payments-table');
    tbody.innerHTML = '';
    payments.slice().reverse().forEach(p => {
      const statusClass = p.status === 'completed' ? 'badge-green' : p.status === 'refunded' ? 'badge-orange' : 'badge-red';
      tbody.innerHTML += `<tr>
        <td style="color:var(--cta);font-weight:600;">${p.id}</td>
        <td>${p.customerName || '—'}</td>
        <td style="font-weight:700;color:var(--green);">${MobiApp.formatRand(p.amount)}</td>
        <td><span style="text-transform:capitalize">${p.gateway || '—'}</span></td>
        <td><span class="badge ${statusClass}">${p.status}</span></td>
        <td>${p.createdAt ? MobiApp.formatDate(p.createdAt) : '—'}</td>
      </tr>`;
    });
  }

  /* ─── CUSTOMERS ─── */
  function loadCustomers(searchTerm = '') {
    let customers = MobiStore.getCustomers();
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      customers = customers.filter(c =>
        (c.name || '').toLowerCase().includes(s) ||
        (c.phone || '').toLowerCase().includes(s) ||
        (c.email || '').toLowerCase().includes(s)
      );
    }
    document.getElementById('customer-count').textContent = customers.length + ' customers';

    const bookings = MobiStore.getBookings();
    const payments = MobiStore.getPayments();

    const tbody = document.getElementById('customers-table');
    tbody.innerHTML = '';
    customers.forEach(c => {
      const custBookings = bookings.filter(b => b.customerPhone === c.phone).length;
      const custSpent = payments
        .filter(p => p.customerName === c.name && p.status === 'completed')
        .reduce((s, p) => s + (p.amount || 0), 0);

      tbody.innerHTML += `<tr>
        <td style="font-weight:600;">${c.name}</td>
        <td>${c.phone || '—'}</td>
        <td>${c.email || '—'}</td>
        <td>${custBookings}</td>
        <td style="color:var(--green);font-weight:600;">${MobiApp.formatRand(custSpent)}</td>
        <td>${c.createdAt ? MobiApp.formatDate(c.createdAt) : '—'}</td>
      </tr>`;
    });
  }
  document.getElementById('customer-search').addEventListener('input', function() {
    loadCustomers(this.value);
  });

  /* ─── FEEDBACK ─── */
  function loadFeedback() {
    const feedback = MobiStore.getFeedback();
    const avgRating = MobiStore.getAverageRating();
    const nps = MobiStore.getNPS();

    document.getElementById('feedback-stats').innerHTML = `
      <div class="stat-card">
        <div class="stat-value" style="color:var(--gold);">${avgRating} ★</div>
        <div class="stat-label">Average Rating</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:${nps >= 50 ? 'var(--green)' : nps >= 0 ? 'var(--orange)' : 'var(--red)'};">${nps}</div>
        <div class="stat-label">NPS Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--accent);">${feedback.length}</div>
        <div class="stat-label">Total Reviews</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--green);">${feedback.filter(f=>f.rating>=4).length}</div>
        <div class="stat-label">Positive (4-5★)</div>
      </div>
    `;

    const tbody = document.getElementById('feedback-table');
    tbody.innerHTML = '';
    feedback.slice().reverse().forEach(f => {
      const starsStr = '★'.repeat(f.rating || 0) + '☆'.repeat(5 - (f.rating || 0));
      const npsColor = f.nps >= 9 ? 'var(--green)' : f.nps >= 7 ? 'var(--orange)' : 'var(--red)';
      tbody.innerHTML += `<tr>
        <td style="font-weight:600;">${f.customerName || 'Anonymous'}</td>
        <td style="color:var(--gold);letter-spacing:1px;">${starsStr}</td>
        <td><span style="color:${npsColor};font-weight:700;">${f.nps !== undefined && f.nps !== null ? f.nps : '—'}</span></td>
        <td style="max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${f.comment || '—'}</td>
        <td>${f.createdAt ? MobiApp.formatDate(f.createdAt) : '—'}</td>
      </tr>`;
    });
  }

  /* ─── AUDIT LOG ─── */
  function loadAudit() {
    const logs = MobiStore.getAuditLogs();
    const tbody = document.getElementById('audit-table');
    tbody.innerHTML = '';
    logs.slice().reverse().forEach(log => {
      tbody.innerHTML += `<tr>
        <td style="font-family:monospace;font-size:var(--text-xs);color:var(--text-tertiary);">${log.timestamp ? new Date(log.timestamp).toLocaleString('en-ZA') : '—'}</td>
        <td><span class="badge ${log.user === 'admin' ? 'badge-cyan' : 'badge-green'}">${log.user}</span></td>
        <td>${log.action}</td>
      </tr>`;
    });
  }

  // Initial load
  loadOverview();
})();
