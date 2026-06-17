/**
 * MobiDokta Cookie Consent — POPIA Compliant
 * Consent is required before any analytics processing.
 * Three-option banner: Accept All / Essentials Only / Let Me Choose
 */
(function () {
  var CONSENT_KEY = 'md_consent_v1';
  var GA_ID = 'G-V8T79TD3GN';

  // --- Read stored consent ---
  function getConsent() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch (e) { return null; }
  }

  // --- Save consent to localStorage and fire audit POST ---
  function saveConsent(analytics) {
    var record = {
      essential: true,
      analytics: analytics,
      savedAt: new Date().toISOString(),
      page: window.location.pathname
    };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch (e) {}
    try {
      fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
        keepalive: true
      });
    } catch (e) {}
    return record;
  }

  // --- Load GA4 dynamically (consent-gated) ---
  function loadGA() {
    if (GA_ID === 'G-XXXXXXXXXX') return; // placeholder not yet replaced
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
    // Track all WhatsApp clicks as conversions — fires on any page without modifying individual links
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href*="wa.me"]');
      if (a) gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: document.title });
    });
    // Track all booking clicks
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href*="book.html"]');
      if (a) gtag('event', 'booking_click', { event_category: 'conversion', event_label: document.title });
    });
  }

  // --- Remove banner from DOM ---
  function dismissBanner(el) {
    el.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    el.style.transform = 'translateY(120%)';
    el.style.opacity = '0';
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 450);
  }

  // --- Build the banner ---
  function buildBanner() {
    var banner = document.createElement('div');
    banner.id = 'md-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = [
      '<div style="max-width:780px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px;justify-content:space-between;">',
        '<div style="flex:1;min-width:220px;">',
          '<p style="margin:0 0 4px;font-weight:700;font-size:14px;color:var(--text-primary,#1a1a1a);">We use cookies 🍪</p>',
          '<p style="margin:0;font-size:13px;color:var(--text-secondary,#555);line-height:1.5;">',
            'We use <strong>Google Analytics</strong> to understand how visitors use MobiDokta — nothing personal is shared or sold. ',
            'Required under POPIA. <a href="./legal/cookies.html" style="color:var(--accent,#0066cc);text-decoration:underline;">Cookie policy</a>.',
          '</p>',
        '</div>',
        '<div id="md-consent-btns" style="display:flex;flex-wrap:wrap;gap:8px;flex-shrink:0;">',
          '<button id="md-accept-all" style="padding:10px 20px;background:var(--cta,#0066cc);color:#fff;border:none;border-radius:999px;font-weight:600;font-size:13px;cursor:pointer;">Yes, all good ✓</button>',
          '<button id="md-essentials" style="padding:10px 20px;background:transparent;color:var(--text-primary,#1a1a1a);border:2px solid var(--border,#ddd);border-radius:999px;font-weight:600;font-size:13px;cursor:pointer;">Essentials only</button>',
          '<button id="md-choose" style="padding:10px 0;background:transparent;color:var(--text-secondary,#777);border:none;font-size:13px;cursor:pointer;text-decoration:underline;">Let me choose ›</button>',
        '</div>',
      '</div>',
      /* Expanded granular panel — hidden by default */
      '<div id="md-granular" style="display:none;max-width:780px;margin:16px auto 0;border-top:1px solid var(--border,#ddd);padding-top:16px;">',
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border,#eee);">',
          '<div>',
            '<p style="margin:0;font-size:13px;font-weight:600;color:var(--text-primary,#1a1a1a);">Essential cookies</p>',
            '<p style="margin:4px 0 0;font-size:12px;color:var(--text-secondary,#777);">Required for the site to function. Cannot be disabled.</p>',
          '</div>',
          '<span style="font-size:12px;color:var(--green,#22c55e);font-weight:700;">Always on</span>',
        '</div>',
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;">',
          '<div>',
            '<p style="margin:0;font-size:13px;font-weight:600;color:var(--text-primary,#1a1a1a);">Analytics cookies</p>',
            '<p style="margin:4px 0 0;font-size:12px;color:var(--text-secondary,#777);">Google Analytics — helps us improve the site. No personal data sold.</p>',
          '</div>',
          '<label style="position:relative;display:inline-block;width:44px;height:24px;flex-shrink:0;">',
            '<input type="checkbox" id="md-analytics-toggle" style="opacity:0;width:0;height:0;">',
            '<span id="md-toggle-track" style="position:absolute;cursor:pointer;inset:0;background:#ccc;border-radius:24px;transition:0.3s;"></span>',
            '<span id="md-toggle-thumb" style="position:absolute;left:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;transition:0.3s;"></span>',
          '</label>',
        '</div>',
        '<button id="md-save-choice" style="margin-top:8px;padding:10px 24px;background:var(--cta,#0066cc);color:#fff;border:none;border-radius:999px;font-weight:600;font-size:13px;cursor:pointer;">Save my choice</button>',
      '</div>'
    ].join('');

    /* Styles */
    banner.style.cssText = [
      'position:fixed;bottom:0;left:0;right:0;z-index:99999;',
      'background:var(--bg-card,#fff);',
      'border-top:1px solid var(--border,#ddd);',
      'padding:16px 20px;',
      'box-shadow:0 -4px 24px rgba(0,0,0,0.08);',
      'font-family:var(--font-body,system-ui,sans-serif);',
      'transform:translateY(0);',
    ].join('');

    document.body.appendChild(banner);

    /* Toggle track colour helper */
    var checkbox = banner.querySelector('#md-analytics-toggle');
    var track = banner.querySelector('#md-toggle-track');
    var thumb = banner.querySelector('#md-toggle-thumb');
    function syncToggle() {
      track.style.background = checkbox.checked ? 'var(--cta,#0066cc)' : '#ccc';
      thumb.style.transform = checkbox.checked ? 'translateX(20px)' : 'translateX(0)';
    }
    checkbox.addEventListener('change', syncToggle);
    syncToggle();

    /* Accept all */
    banner.querySelector('#md-accept-all').addEventListener('click', function () {
      saveConsent(true);
      loadGA();
      dismissBanner(banner);
    });

    /* Essentials only */
    banner.querySelector('#md-essentials').addEventListener('click', function () {
      saveConsent(false);
      dismissBanner(banner);
    });

    /* Expand granular panel */
    banner.querySelector('#md-choose').addEventListener('click', function () {
      var panel = banner.querySelector('#md-granular');
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    /* Save choice from granular panel */
    banner.querySelector('#md-save-choice').addEventListener('click', function () {
      var analytics = banner.querySelector('#md-analytics-toggle').checked;
      saveConsent(analytics);
      if (analytics) loadGA();
      dismissBanner(banner);
    });
  }

  /* --- Main: check existing consent on every page load --- */
  function init() {
    var consent = getConsent();
    if (consent) {
      /* Returning visitor — honour their previous choice */
      if (consent.analytics) loadGA();
      return;
    }
    /* New visitor — show banner after a short delay so page renders first */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { setTimeout(buildBanner, 800); });
    } else {
      setTimeout(buildBanner, 800);
    }
  }

  init();
})();
