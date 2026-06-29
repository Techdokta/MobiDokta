/* ============================================
   MobiDokta — Shared App Utilities
   ============================================ */

const MobiApp = {
  /* ─── Mobile Nav Drawer ─── */
  initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const closeBtn = document.querySelector('.nav-close');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.nav-overlay');

    const openNav = () => {
      if(sideNav) sideNav.classList.add('open');
      if(overlay) overlay.classList.add('open');
    };

    const closeNav = () => {
      if(sideNav) sideNav.classList.remove('open');
      if(overlay) overlay.classList.remove('open');
    };

    if (toggle) toggle.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    
    // Close nav when clicking a link
    if (sideNav) {
      sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNav);
      });
    }
    // Scroll effect for navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
      });
    }
    // Mark active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && (href === currentPage || href.endsWith('/' + currentPage))) {
        a.classList.add('active');
      }
    });
  },

  /* ─── Intersection Observer for Scroll Animations ─── */
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  },

  /* ─── Toast Notifications ─── */
  toast(message, type = 'info', duration = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position:fixed;top:90px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
      document.body.appendChild(container);
    }
    const icons = { 
      success: '<i data-lucide="check-circle-2" class="icon-sm"></i>', 
      error: '<i data-lucide="alert-circle" class="icon-sm"></i>', 
      info: '<i data-lucide="info" class="icon-sm"></i>', 
      warning: '<i data-lucide="alert-triangle" class="icon-sm"></i>' 
    };
    const colors = {
      success: 'rgba(52,211,153,0.95)',
      error: 'rgba(248,113,113,0.95)',
      info: 'rgba(45,212,191,0.95)',
      warning: 'rgba(251,146,60,0.95)'
    };
    const borderColors = {
      success: 'rgba(52,211,153,0.6)',
      error: 'rgba(248,113,113,0.6)',
      info: 'rgba(45,212,191,0.6)',
      warning: 'rgba(251,146,60,0.6)'
    };

    const toast = document.createElement('div');
    toast.className = 'mobi-toast';
    toast.style.cssText = `
      background:${colors[type]};border:1px solid ${borderColors[type]};
      backdrop-filter:blur(20px) saturate(1.2);border-radius:12px;padding:14px 20px;
      color:#f5f5f7;font-size:14px;display:flex;align-items:center;gap:10px;
      animation:slideInRight 0.3s ease forwards;min-width:280px;max-width:380px;
      font-family:'Inter',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.4);
    `;
    toast.innerHTML = `${icons[type]}<span>${message}</span>`;
    container.appendChild(toast);

    if (window.lucide) {
      lucide.createIcons({
        attrs: { class: 'icon-sm' },
        nameAttr: 'data-lucide'
      });
    }

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  /* ─── Format Currency ─── */
  formatRand(amount) {
    return 'R' + Number(amount).toLocaleString('en-ZA', { minimumFractionDigits: 0 });
  },

  /* ─── Format Date ─── */
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  /* ─── Rate Limiter (for login) ─── */
  _loginAttempts: 0,
  _lockoutUntil: 0,
  checkRateLimit() {
    if (Date.now() < this._lockoutUntil) {
      const remaining = Math.ceil((this._lockoutUntil - Date.now()) / 1000);
      return { allowed: false, message: `Too many attempts. Try again in ${remaining}s.` };
    }
    return { allowed: true };
  },
  recordLoginAttempt(success) {
    if (success) {
      this._loginAttempts = 0;
      return;
    }
    this._loginAttempts++;
    if (this._loginAttempts >= 5) {
      this._lockoutUntil = Date.now() + 60000; // 1 min lockout
      this._loginAttempts = 0;
    }
  },

  /* ─── Input Sanitization ─── */
  sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  /* ─── Validate SA Phone ─── */
  isValidPhone(phone) {
    return /^0[6-8][0-9]{8}$/.test(phone.replace(/\s/g, ''));
  },

  /* ─── Validate Email ─── */
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  /* ─── Theme Toggle ─── */
  initTheme() {
    const root = document.documentElement;
    const desktopToggle = document.getElementById('theme-toggle');
    const mobileToggle = document.getElementById('theme-toggle-mobile');
    const themeIcons = document.querySelectorAll('.theme-icon, #theme-toggle .icon-sm');

    // Dark is the default — light mode must be explicitly chosen
    const savedTheme = localStorage.getItem('mobidokta-theme') || 'dark';
    if (savedTheme === 'dark') {
      root.classList.add('dark-theme');
      updateIcons('sun');
    }

    function updateIcons(iconName) {
      themeIcons.forEach(icon => {
        if (icon) {
          icon.setAttribute('data-lucide', iconName);
        }
      });
      if (window.lucide) window.lucide.createIcons();
    }

    function toggleTheme() {
      root.classList.toggle('dark-theme');
      const isDark = root.classList.contains('dark-theme');
      localStorage.setItem('mobidokta-theme', isDark ? 'dark' : 'light');
      updateIcons(isDark ? 'sun' : 'moon');
    }

    if (desktopToggle) desktopToggle.addEventListener('click', toggleTheme);
    if (mobileToggle) mobileToggle.addEventListener('click', toggleTheme);
  },

  /* ─── Admin Keyboard Shortcut ─── */
  initAdminShortcut() {
    document.addEventListener('keydown', (e) => {
      // Ctrl + Alt + A or Ctrl + Shift + L redirects to admin dashboard
      if ((e.ctrlKey && e.altKey && e.key.toLowerCase() === 'a') || 
          (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l')) {
        e.preventDefault();
        MobiApp.toast('🔒 Accessing Staff Portal...', 'warning', 1500);
        setTimeout(() => window.location.href = 'admin-dashboard.html', 800);
      }
    });
  },

  /* ─── Init Everything ─── */
  init() {
    this.initTheme();
    this.initNav();
    this.initScrollAnimations();
    this.initAdminShortcut();
    
    // Initialize Lucide Icons if core library is present
    if (window.lucide) {
      lucide.createIcons();
    }
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => MobiApp.init());
