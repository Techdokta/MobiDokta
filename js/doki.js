/* ─────────────────────────────────────────────────────────────────────
   Doki — MobiDokta Chatbot Assistant
   Pure JS, no dependencies, state-machine conversation flows.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var WA = '27781541350';
  var STORE_KEY = 'doki-state-v1';

  // ── Conversation Flows ──────────────────────────────────────────────

  var FLOWS = {
    greeting: {
      msg: "Hey! I'm Doki — your MobiDokta assistant. What brings you in today?",
      chips: [
        { label: 'Cracked screen', next: 'screen-device' },
        { label: 'Battery problem', next: 'battery-type' },
        { label: 'Buy or sell a phone', next: 'buy-sell' },
        { label: 'Something else', next: 'other' }
      ]
    },
    'screen-device': {
      msg: 'Which phone is it?',
      chips: [
        { label: 'iPhone', next: 'screen-iphone' },
        { label: 'Samsung', next: 'screen-samsung' },
        { label: 'Other Android', next: 'screen-android' }
      ]
    },
    'screen-iphone': {
      msg: 'iPhone screen repairs from R1,800 — same day, OEM-grade parts, 6-month warranty. Have an iPhone Air or 16e? We\'re one of very few SA shops that handle those.',
      chips: [
        { label: 'Book now', href: 'book.html' },
        { label: 'iPhone Air / 16e', wa: 'Hi, I need an iPhone Air or 16e repair — my model is: ' },
        { label: 'Get exact price', wa: 'Hi, I need an iPhone screen repair price. My model: ' }
      ]
    },
    'screen-samsung': {
      msg: 'Samsung screens from R1,400 — same day at Danville, Pretoria West. Galaxy S, A, Note, and Fold all covered.',
      chips: [
        { label: 'Book now', href: 'book.html' },
        { label: 'WhatsApp price', wa: 'Hi, I need a Samsung screen repair price. My model: ' }
      ]
    },
    'screen-android': {
      msg: 'WhatsApp us your phone model and we quote within minutes. Most Android brands covered.',
      chips: [
        { label: 'WhatsApp us', wa: 'Hi, I need an Android screen repair. My model: ', green: true }
      ]
    },
    'battery-type': {
      msg: "What's the battery doing?",
      chips: [
        { label: 'Drains too fast', next: 'battery-drain' },
        { label: "Won't charge", next: 'battery-charge' },
        { label: 'Swollen / bulging', next: 'battery-swollen' }
      ]
    },
    'battery-drain': {
      msg: 'Battery health below 80% throttles your phone deliberately — it\'s being slowed, not broken. R550, 45 minutes, back to 100%.',
      chips: [
        { label: 'Book battery swap', href: 'book.html' },
        { label: 'WhatsApp us', wa: 'Hi, my battery drains too fast and I need a replacement' }
      ]
    },
    'battery-charge': {
      msg: 'Check the port first — compacted lint is the #1 cause. If it\'s clear, it\'s likely the charging IC. Free diagnosis, no charge if we can\'t fix it.',
      chips: [
        { label: 'Book free diagnosis', href: 'book.html' },
        { label: 'WhatsApp for advice', wa: 'Hi, my phone is not charging at all — can you help?', green: true }
      ]
    },
    'battery-swollen': {
      msg: 'Stop charging it now — a swollen battery can rupture. Bring it in today and we handle it safely.',
      chips: [
        { label: 'WhatsApp urgently', wa: 'Hi, I have a swollen battery — this is urgent', green: true },
        { label: 'Book urgent slot', href: 'book.html' }
      ]
    },
    'buy-sell': {
      msg: 'We do both. Which way?',
      chips: [
        { label: 'Sell my phone', next: 'sell' },
        { label: 'Buy a phone', next: 'buy' },
        { label: 'Refurb mine to sell', next: 'refurb' }
      ]
    },
    sell: {
      msg: 'We buy working and damaged phones — cash offer same day. WhatsApp a photo + model for a quick quote.',
      chips: [
        { label: 'Send photo + model', wa: 'Hi, I want to sell my phone. Photo and model: ', green: true }
      ]
    },
    buy: {
      msg: 'Appl3City has IMEI-verified, engineer-tested iPhones and Samsung devices — all with a written warranty.',
      chips: [
        { label: 'Browse stock', href: 'applecity.html' },
        { label: 'WhatsApp for stock', wa: 'Hi, I want to buy a phone — what do you have in stock?' }
      ]
    },
    refurb: {
      msg: 'Smart move — a Resale-Ready refurb can add R1,500–R4,000 to your selling price. Includes a condition certificate and IMEI report.',
      chips: [
        { label: 'See packages', href: 'refurbish.html' },
        { label: 'WhatsApp us', wa: 'Hi, I want to refurbish my iPhone before selling it' }
      ]
    },
    other: {
      msg: "No problem. What sounds closest?",
      chips: [
        { label: 'Foldable / rare device', next: 'exclusive' },
        { label: 'Data recovery', next: 'data' },
        { label: 'Locked out of my phone', next: 'lockout' },
        { label: 'IMEI check', next: 'imei' }
      ]
    },
    exclusive: {
      msg: 'We handle devices most SA shops won\'t touch — iPhone Air (2025), Huawei Mate XS2/X3/X5 foldables, Samsung Z Fold/Flip, OnePlus Open. WhatsApp your model and damage first so we can confirm parts before you travel.',
      chips: [
        { label: 'iPhone Air / 16e', wa: 'Hi, I need an iPhone Air or 16e repair. My model is: ', green: false },
        { label: 'Huawei Mate XS / X3 / X5', wa: 'Hi, I need a Huawei foldable repair. My model is: ' },
        { label: 'Samsung Z Fold / Flip', wa: 'Hi, I need a Samsung foldable repair. My model is: ' },
        { label: 'See exclusive repairs', href: 'collections/exclusive-gadgets/' }
      ]
    },
    data: {
      msg: 'We recover data from dead phones, failed hard drives, and corrupted SSDs. Free diagnosis — no fix, no charge.',
      chips: [
        { label: 'Data recovery page', href: 'data-recovery.html' },
        { label: 'WhatsApp us', wa: 'Hi, I need data recovery. My situation: ', green: true }
      ]
    },
    lockout: {
      msg: 'Locked out of your own device? We restore access through official processes — verified owners only, diagnosis always free.',
      chips: [
        { label: 'Access recovery', href: 'data-recovery.html#access-recovery' },
        { label: 'WhatsApp us', wa: 'Hi, I am locked out of my device. My situation: ', green: true }
      ]
    },
    imei: {
      msg: 'Our CheckForYou service checks SA blacklists, iCloud lock, Find My, and network lock. From R99 — result in 15 minutes.',
      chips: [
        { label: 'IMEI checker', href: 'checkforyou.html#imei-tool' },
        { label: 'WhatsApp IMEI', wa: 'Hi, I need an IMEI check. IMEI: ' }
      ]
    },
    hours: {
      msg: 'Open 7 days — Mon–Sat 09:00–21:00, Sun 12:00–21:00, including public holidays. Walk-ins welcome — no appointment needed for basic repairs.',
      chips: [
        { label: 'Get directions', href: 'https://maps.google.com/?q=Shop+6+Madeira+Isles+262+Klitsgras+St+Danville+Pretoria', external: true },
        { label: 'Book a slot', href: 'book.html' }
      ]
    }
  };

  // Proactive hints — rotate through these
  var HINTS = [
    "July Sale: 30% off all repairs — ends 31 July.",
    "Most repairs are done same day. Walk-ins welcome at Danville.",
    "Did you know your iPhone slows down when battery health drops below 80%?",
    "Selling your phone? A refurb can add R1,500–R4,000 to the price.",
    "Cracked screen? Quick answer above or WhatsApp us for an instant price.",
    "We're open 7 days — Mon–Sat 09:00–21:00, Sun 12:00–21:00 — including public holidays.",
    "Free diagnosis on all board-level and data recovery jobs — no fix, no charge."
  ];
  var hintIdx = 0;

  // ── State ────────────────────────────────────────────────────────────

  var panel, bubble, badge, msgBox, chipBar;
  var isOpen = false;
  var hasEngaged = false;
  var badgeCount = 0;
  var proactiveTimer = null;
  var autoOpenTimer = null;

  function getStored() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function setStored(obj) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(obj)); } catch (e) {}
  }

  // ── DOM Helpers ──────────────────────────────────────────────────────

  function el(tag, cls, text) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (text) d.textContent = text;
    return d;
  }

  function scrollBottom() {
    if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;
  }

  // ── Widget Build ─────────────────────────────────────────────────────

  function build() {
    var w = el('div', 'doki-widget');
    w.setAttribute('role', 'complementary');
    w.setAttribute('aria-label', 'Doki — MobiDokta chat assistant');

    // Panel
    panel = el('div', 'doki-panel');
    panel.setAttribute('aria-hidden', 'true');

    var hdr = el('div', 'doki-header');
    var av  = el('div', 'doki-avatar');
    av.textContent = 'D';
    var info = el('div', 'doki-hdr-info');
    var nm   = el('div', 'doki-name');
    nm.textContent = 'Doki';
    var st   = el('div', 'doki-status-line');
    var dot  = el('span', 'doki-status-dot');
    st.appendChild(dot);
    st.appendChild(document.createTextNode(' Online — MobiDokta'));
    info.appendChild(nm);
    info.appendChild(st);
    var closeBtn = el('button', 'doki-close');
    closeBtn.setAttribute('aria-label', 'Close chat');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closePanel);
    hdr.appendChild(av);
    hdr.appendChild(info);
    hdr.appendChild(closeBtn);

    msgBox  = el('div', 'doki-messages');
    msgBox.setAttribute('aria-live', 'polite');
    msgBox.setAttribute('aria-atomic', 'false');

    chipBar = el('div', 'doki-chips');

    var fnote = el('div', 'doki-footer-note');
    fnote.textContent = 'Tap a reply or WhatsApp us anytime — 078 154 1350';

    panel.appendChild(hdr);
    panel.appendChild(msgBox);
    panel.appendChild(chipBar);
    panel.appendChild(fnote);

    // Bubble
    bubble = el('button', 'doki-bubble');
    bubble.setAttribute('aria-label', 'Chat with Doki, MobiDokta assistant');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    badge = el('span', 'doki-badge');
    badge.setAttribute('aria-hidden', 'true');
    bubble.appendChild(badge);
    bubble.addEventListener('click', togglePanel);

    // Hide button on bubble (×)
    var hideBtn = el('button', 'fab-hide-btn');
    hideBtn.setAttribute('aria-label', 'Hide chat and WhatsApp buttons');
    hideBtn.innerHTML = '&times;';
    hideBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideFabs();
    });
    bubble.appendChild(hideBtn);

    w.appendChild(panel);
    w.appendChild(bubble);
    document.body.appendChild(w);

    // Restore tab
    var restoreTab = el('button', 'fab-restore');
    restoreTab.setAttribute('aria-label', 'Show chat and WhatsApp buttons');
    restoreTab.innerHTML = '<span class="fab-restore-icon">💬</span><span class="fab-restore-label">Chat</span>';
    restoreTab.addEventListener('click', showFabs);
    document.body.appendChild(restoreTab);
  }

  // ── Messages ─────────────────────────────────────────────────────────

  function addTyping() {
    var t = el('div', 'doki-typing');
    t.appendChild(el('span'));
    t.appendChild(el('span'));
    t.appendChild(el('span'));
    msgBox.appendChild(t);
    scrollBottom();
    return t;
  }

  function addMsg(text, isUser) {
    var m = el('div', 'doki-msg ' + (isUser ? 'doki-msg--user' : 'doki-msg--bot'));
    m.textContent = text;
    msgBox.appendChild(m);
    scrollBottom();
    return m;
  }

  function botSay(text, delay, cb) {
    delay = delay || 500;
    setTimeout(function () {
      var typing = addTyping();
      var readTime = Math.min(1200, 500 + text.length * 18);
      setTimeout(function () {
        if (typing.parentNode) typing.parentNode.removeChild(typing);
        addMsg(text, false);
        if (cb) cb();
      }, readTime);
    }, delay);
  }

  // ── Chips ─────────────────────────────────────────────────────────────

  function clearChips() {
    chipBar.innerHTML = '';
  }

  function showChips(chips) {
    clearChips();
    chips.forEach(function (chip) {
      var btn = el('button', 'doki-chip' + (chip.green ? ' green' : ''));
      btn.textContent = chip.label;
      btn.addEventListener('click', function () { onChip(chip); });
      chipBar.appendChild(btn);
    });
  }

  function onChip(chip) {
    hasEngaged = true;
    setStored({ engaged: true, ts: Date.now() });
    clearChips();
    addMsg(chip.label, true);

    if (chip.next) {
      var flow = FLOWS[chip.next];
      if (flow) {
        botSay(flow.msg, 300, function () {
          showChips(flow.chips || []);
        });
      }
    } else if (chip.wa) {
      var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(chip.wa);
      botSay("Opening WhatsApp for you — we'll respond within minutes.", 300, function () {
        setTimeout(function () { window.open(url, '_blank', 'noopener'); }, 600);
      });
    } else if (chip.href) {
      var isExt = chip.external || chip.href.startsWith('http');
      botSay('Taking you there now...', 300, function () {
        setTimeout(function () {
          if (isExt) window.open(chip.href, '_blank', 'noopener');
          else window.location.href = chip.href;
        }, 600);
      });
    }
  }

  // ── Open / Close ──────────────────────────────────────────────────────

  function openPanel() {
    if (isOpen) return;
    isOpen = true;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    bubble.setAttribute('aria-expanded', 'true');
    bubble.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>';
    badge.appendChild(el('span', 'doki-badge'));
    clearBadge();

    if (!hasEngaged && msgBox.children.length === 0) {
      startGreeting();
    }

    if (autoOpenTimer) { clearTimeout(autoOpenTimer); autoOpenTimer = null; }
    scrollBottom();
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    badge.innerHTML = '';
    badge.appendChild(document.createTextNode(''));
  }

  function togglePanel() {
    if (isOpen) closePanel(); else openPanel();
  }

  // ── Badge ──────────────────────────────────────────────────────────────

  function showBadge(n) {
    badgeCount = n;
    badge.textContent = n > 0 ? n : '';
    badge.className = 'doki-badge' + (n > 0 ? ' show' : '');
  }

  function clearBadge() { showBadge(0); }

  // ── Greeting ───────────────────────────────────────────────────────────

  function readSearchCtx() {
    try {
      var raw = localStorage.getItem('doki-search-ctx');
      if (!raw) return null;
      var ctx = JSON.parse(raw);
      if (!ctx || !ctx.ts) return null;
      if (Date.now() - ctx.ts > 10 * 60 * 1000) return null;
      return ctx;
    } catch (ex) { return null; }
  }

  function startGreeting() {
    var ctx = readSearchCtx();
    var flow = FLOWS.greeting;

    if (ctx && ctx.serviceId) {
      var ctxMap = {
        'screen':          'I see you were checking screen repair options. Let me help you book!',
        'battery':         'Looks like you were checking battery pricing. A fresh battery makes your phone feel brand new.',
        'water':           '⚡ Water damage? Every minute matters — let me guide you through the right steps.',
        'board':           'Board-level repair is specialist work. Let me help you get the right assessment.',
        'iphone-air':      'iPhone Air repair — you\'re in the right place. One of very few SA shops with specialist tooling for this.',
        'huawei-foldable': 'Huawei outward-fold repair — we can help. Let me find out what you need.',
        'foldable':        'Foldable phone repair — specialist work. Which model do you have?',
        'checkforyou':     'IMEI check — smart move before buying second-hand. I can walk you through it.',
        'trackforyou':     '🚨 Phone stolen? Let\'s act fast — I\'ll guide you to the right steps right now.',
        'data-recovery':   'Data recovery — the most important thing is to stop using the device immediately.'
      };
      var ctxMsg = ctxMap[ctx.serviceId] || ('I see you were searching for "' + (ctx.query || ctx.serviceId) + '" — let me help!');
      botSay(ctxMsg, 300, function () {
        botSay(flow.msg, 700, function () {
          showChips(flow.chips);
        });
      });
      return;
    }

    botSay(flow.msg, 400, function () {
      showChips(flow.chips);
    });
  }

  // ── Proactive Hints ────────────────────────────────────────────────────

  function scheduleProactive() {
    // First nudge: 22 seconds after load, if not already engaged
    autoOpenTimer = setTimeout(function () {
      var stored = getStored();
      if (stored.engaged) return;
      // Don't interrupt if search is open
      if (document.getElementById('md-search-modal') &&
          document.getElementById('md-search-modal').classList.contains('mds-open')) return;
      showBadge(1);
      // Auto-open after another 4 seconds if still not interacted
      autoOpenTimer = setTimeout(function () {
        if (!isOpen && !hasEngaged) openPanel();
      }, 4000);
    }, 22000);

    // Recurring hint in chat if user has opened but not fully engaged
    proactiveTimer = setTimeout(function () {
      tickHint();
    }, 90000);
  }

  function tickHint() {
    if (!isOpen && !hasEngaged) {
      showBadge(badgeCount + 1);
    } else if (isOpen && !hasEngaged) {
      var hint = HINTS[hintIdx % HINTS.length];
      hintIdx++;
      var hintEl = el('div', 'doki-msg doki-msg--bot');
      hintEl.style.cssText = 'font-style:italic;opacity:.8;font-size:.76rem;';
      hintEl.textContent = hint;
      msgBox.appendChild(hintEl);
      scrollBottom();
    }
    proactiveTimer = setTimeout(tickHint, 150000);
  }

  // ── FAB Visibility ────────────────────────────────────────────────────

  function hideFabs() {
    if (isOpen) closePanel();
    document.body.classList.add('fabs-hidden');
    try { sessionStorage.setItem('doki-fabs-hidden', '1'); } catch (e) {}
  }

  function showFabs() {
    document.body.classList.remove('fabs-hidden');
    try { sessionStorage.removeItem('doki-fabs-hidden'); } catch (e) {}
  }

  // ── Init ───────────────────────────────────────────────────────────────

  function init() {
    var stored = getStored();
    if (stored.engaged) { hasEngaged = true; }

    build();
    scheduleProactive();

    // Restore hidden state within the same session
    try {
      if (sessionStorage.getItem('doki-fabs-hidden') === '1') {
        document.body.classList.add('fabs-hidden');
      }
    } catch (e) {}

    // Keyboard: Escape closes the panel
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closePanel();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
