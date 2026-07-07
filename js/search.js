/* ─────────────────────────────────────────────────────────────────────────────
   MobiDokta Intelligent Search
   Intent-aware, friction-free assistant — no backend, pure JS
   ───────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ── Knowledge Base ──────────────────────────────────────────────────────────

  var KB = [

    // ── REPAIRS ──────────────────────────────────────────────────────────────

    {
      id: 'screen', type: 'service', icon: '📱',
      title: 'Screen Replacement',
      tagline: 'Cracked, shattered, or dead display — same day.',
      answer: 'We replace iPhone and Samsung screens with Hard OLED, Incell LCD, or Soft OLED panels — we explain the difference before you decide. Touch ID and Face ID are preserved.',
      tip: 'Don\'t press on a cracked screen — pressure spreads the fracture into the LCD underneath, turning a cheaper fix into a much more expensive one.',
      price: 'From R1,800', eta: 'Same day',
      keywords: ['screen','cracked','shattered','broken','display','glass','touch','lcd','oled','smashed','crack','shatter','black screen','flickering','screen damage','damaged screen','phone screen'],
      ctas: [
        { label: 'Book Screen Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+screen+replacement+price', primary: false }
      ]
    },

    {
      id: 'battery', type: 'service', icon: '🔋',
      title: 'Battery Replacement',
      tagline: 'Draining fast, swollen, or won\'t hold a charge.',
      answer: 'OEM-grade battery fitted in 45 minutes. iOS CPU throttling disappears once health is restored above 80%. We disclose the exact health percentage before and after.',
      tip: 'Replace your iPhone battery when health drops below 80%. iOS actively throttles CPU speed below that threshold — your phone isn\'t slow because it\'s old, it\'s being slowed on purpose.',
      price: 'From R550', eta: '45 minutes',
      keywords: ['battery','charging','drain','draining','slow','health','swollen','percent','die','dies','shut down','not charging','charge','power','battery life','low battery','battery dead','battery health'],
      ctas: [
        { label: 'Book Battery Swap', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+battery+replacement+price', primary: false }
      ]
    },

    {
      id: 'water', type: 'service', icon: '💧', urgent: true,
      title: 'Water Damage Recovery',
      tagline: 'Act fast — every hour matters.',
      answer: 'Ultrasonic logic board cleaning + component-level corrosion removal. We\'ve recovered phones brought in 72 hours after pool drops. Free diagnosis. Data recovery also possible.',
      tip: '⚠️ Power it off immediately. Do NOT plug it in or charge it. Do NOT put it in rice — rice does nothing for moisture inside a phone. Bring it in within 24 hours. Every extra hour increases corrosion and data loss risk.',
      price: 'Diagnosis free · From R800', eta: 'Same day assessment',
      keywords: ['water','wet','dropped','pool','ocean','rain','liquid','rice','submerged','toilet','sink','spilled','splash','damp','flooded','water damage','fell in water','dropped in water','water damaged'],
      ctas: [
        { label: 'WhatsApp Us Now', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+has+water+damage+and+I+need+urgent+help', primary: true },
        { label: 'Book Repair', href: 'book.html', primary: false }
      ]
    },

    {
      id: 'camera', type: 'service', icon: '📷',
      title: 'Camera Repair',
      tagline: 'Blurry, autofocus failing, or cracked lens.',
      answer: 'Front and rear camera module replacement. A cracked sapphire lens causes purple haze and autofocus hunting — we can often replace just the lens instead of the full module.',
      tip: 'A R89 camera lens protector prevents a R1,800+ camera module replacement. The iPhone lens is precision-ground sapphire glass — one drop without a protector can scratch it permanently.',
      price: 'From R750', eta: 'Same day',
      keywords: ['camera','blurry','lens','photo','autofocus','flash','zoom','selfie','front camera','rear camera','cracked lens','focus','purple','haze','camera not working','camera blurry','camera black'],
      ctas: [
        { label: 'Book Camera Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+camera+repair+price', primary: false }
      ]
    },

    {
      id: 'charging-port', type: 'service', icon: '🔌',
      title: 'Charging Port Repair',
      tagline: 'Won\'t charge, loose cable, or no connection.',
      answer: 'Lightning and USB-C port replacement at board level — not a rubber-fix. We also diagnose the charging IC and power management chips when the port alone isn\'t the cause.',
      tip: 'Before booking: try a different cable and charger block. If the cable works on another phone but not yours, it\'s the port. If no cable works on any device, the charger block is faulty.',
      price: 'From R650', eta: 'Same day',
      keywords: ['charging port','port','lightning','usb','usb-c','cable','not charging','loose','connector','plug','socket','charge port','wont charge','doesnt charge','no charge'],
      ctas: [
        { label: 'Book Port Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+charging+port+repair', primary: false }
      ]
    },

    {
      id: 'backglass', type: 'service', icon: '🔲',
      title: 'Back Glass Replacement',
      tagline: 'Shattered ceramic back panel — full restoration.',
      answer: 'Laser separation system removes shattered ceramic back glass. Frame realignment for bent titanium/aluminium. MagSafe and wireless charging fully preserved after repair.',
      tip: 'A cracked back glass compromises your phone\'s IP water resistance rating — fix it before your next poolside visit or rainy commute.',
      price: 'From R950', eta: 'Same day',
      keywords: ['back glass','back','rear','frame','bent','titanium','magsafe','ceramic','back panel','back cracked','shattered back','broken back','back broken'],
      ctas: [
        { label: 'Book Back Glass Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+back+glass+replacement', primary: false }
      ]
    },

    {
      id: 'speaker', type: 'service', icon: '🔊',
      title: 'Speaker & Microphone',
      tagline: 'No sound, muffled calls, or mic not working.',
      answer: 'Earpiece, loudspeaker, and microphone replacement or cleaning. Dust-blocked grilles are the most common cause of muffled audio — often fixed without parts.',
      tip: 'Before booking: try cleaning your speaker grille with a dry soft-bristle toothbrush. Lint buildup is the #1 cause of muffled audio and may resolve it completely for free.',
      price: 'From R450', eta: 'Same day',
      keywords: ['speaker','sound','audio','mic','microphone','muffled','no sound','quiet','loud speaker','earpiece','calls','hear','voice','sound not working','cant hear'],
      ctas: [
        { label: 'Book Speaker Fix', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+speaker+or+mic+repair', primary: false }
      ]
    },

    {
      id: 'board', type: 'service', icon: '🔧',
      title: 'Board-Level & Data Recovery',
      tagline: 'For phones other shops said were gone.',
      answer: 'Micro-soldering, component-level logic board repair, and NAND data recovery. No fix, no charge. We handle phones that have been refused by other shops.',
      tip: 'Board-level repair is the only way to recover data after severe damage — and usually the last resort before replacing the device. It\'s worth trying before giving up.',
      price: 'Diagnosis free · From R1,200', eta: '24–48 hours',
      keywords: ['board','logic board','motherboard','micro solder','data recovery','data','not turning on','dead','bricked','bootloop','no power','wont turn on','phone dead','not powering on','wont start'],
      ctas: [
        { label: 'WhatsApp for Assessment', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+board-level+repair+or+data+recovery', primary: true },
        { label: 'Book Repair', href: 'book.html', primary: false }
      ]
    },

    {
      id: 'samsung', type: 'service', icon: '📲',
      title: 'Samsung Repairs',
      tagline: 'Galaxy screens, batteries, ports — same day.',
      answer: 'Screen replacements, battery swaps, charging ports, and board-level repair for Samsung Galaxy S-series, A-series, Note, and Fold devices. OEM-grade parts.',
      price: 'Screens from R1,400', eta: 'Same day',
      keywords: ['samsung','galaxy','s24','s23','s22','s21','s20','note','fold','flip','a54','a34','a14','android','samsung repair','samsung screen'],
      ctas: [
        { label: 'Book Samsung Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+Samsung+repair+price', primary: false }
      ]
    },

    {
      id: 'iphone', type: 'service', icon: '🍎',
      title: 'iPhone Repairs',
      tagline: 'All models iPhone 7 – iPhone 17 Pro Max.',
      answer: 'Screen replacement, battery swap, water damage, camera, charging port, back glass, and board-level repair for all iPhone models. OEM-grade parts. 6-month warranty.',
      price: 'Screens from R1,800', eta: 'Same day',
      keywords: ['iphone','iphone 7','iphone 8','iphone x','iphone 11','iphone 12','iphone 13','iphone 14','iphone 15','iphone 16','iphone 17','iphone se','apple','iphone repair'],
      ctas: [
        { label: 'Book iPhone Repair', href: 'book.html', primary: true },
        { label: 'See iPhone Services', href: 'collections/iphone-repairs/', primary: false }
      ]
    },

    // ── PRODUCTS ──────────────────────────────────────────────────────────────

    {
      id: 'screen-protector', type: 'product', icon: '🛡️',
      title: 'Screen Protectors',
      tagline: 'Tempered glass & anti-spy options — fitted free.',
      answer: 'Reinforced tempered glass screen protectors for iPhone and Android. Anti-spy privacy protectors also available. We fit them in-store for free.',
      tip: 'A R89–149 screen protector prevents a R1,800 screen replacement. The maths is easy.',
      price: 'From R89',
      keywords: ['screen protector','protector','tempered glass','glass protector','privacy','anti spy','protection','protect screen'],
      ctas: [
        { label: 'Browse Screen Protectors', href: 'shop.html', primary: true },
        { label: 'WhatsApp to Order', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+screen+protector', primary: false }
      ]
    },

    {
      id: 'case', type: 'product', icon: '📦',
      title: 'Phone Cases',
      tagline: 'Silicone, MagSafe, and clear cases.',
      answer: 'Silicone cases with MagSafe magnets, liquid clear cases, and logo pouches for iPhone and Samsung. Drop-tested and engineer-approved.',
      price: 'From R150',
      keywords: ['case','cover','pouch','silicone','magsafe','clear case','phone case','protective case'],
      ctas: [
        { label: 'Browse Cases', href: 'shop.html', primary: true },
        { label: 'WhatsApp to Order', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+phone+case', primary: false }
      ]
    },

    {
      id: 'charger', type: 'product', icon: '⚡',
      title: 'Fast Chargers',
      tagline: '20W–65W GaN chargers for iPhone & Android.',
      answer: 'Apple-compatible 20W adapters, 65W GaN dual-port fast chargers, and USB-C to Lightning cables. All engineer-vetted before listing.',
      price: 'From R149',
      keywords: ['charger','fast charger','adapter','20w','65w','gan','charging brick','wall charger','cable','usb-c','lightning cable'],
      ctas: [
        { label: 'Browse Chargers', href: 'shop.html', primary: true },
        { label: 'WhatsApp to Order', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+charger', primary: false }
      ]
    },

    {
      id: 'earbuds', type: 'product', icon: '🎧',
      title: 'Earphones & Earbuds',
      tagline: 'TWS earbuds and wired 3.5mm options.',
      answer: 'True Wireless Stereo (TWS) earbuds with charging case and wired 3.5mm earphones compatible with iPhone and Android. Engineer-tested audio quality.',
      price: 'From R199',
      keywords: ['earbuds','earphones','headphones','tws','wireless earbuds','audio','music','3.5mm','aux','bluetooth earbuds'],
      ctas: [
        { label: 'Browse Audio', href: 'shop.html', primary: true },
        { label: 'WhatsApp to Order', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+earbuds+or+earphones', primary: false }
      ]
    },

    // ── INFO / HELP ───────────────────────────────────────────────────────────

    {
      id: 'location', type: 'info', icon: '📍',
      title: 'Our Location',
      tagline: 'Danville, Pretoria West',
      answer: 'Shop 6, Madeira Isles Shopping Complex, 262 Klitsgras St, Danville, Pretoria 0183. Easy parking, walk-ins welcome.',
      keywords: ['address','location','where','directions','find','shop','danville','pretoria','madeira','how to get','klitsgras'],
      ctas: [
        { label: 'Get Directions', href: 'https://maps.google.com/?q=Shop+6+Madeira+Isles+262+Klitsgras+St+Danville+Pretoria', primary: true }
      ]
    },

    {
      id: 'hours', type: 'info', icon: '🕐',
      title: 'Opening Hours',
      tagline: '7 days a week, 09:00–19:00',
      answer: 'Monday to Sunday, 09:00–19:00. Open every day including public holidays. Walk-ins welcome — no appointment needed for basic repairs.',
      keywords: ['hours','open','time','close','when','weekend','saturday','sunday','days','working hours','available','what time','public holiday'],
      ctas: [{ label: 'Book a Time Slot', href: 'book.html', primary: true }]
    },

    {
      id: 'warranty', type: 'info', icon: '🛡️',
      title: '6-Month Repair Warranty',
      tagline: 'Parts and workmanship, guaranteed.',
      answer: 'Every repair carries a 6-month warranty. If the same fault returns within 6 months, we fix it at no charge. We also provide written job cards for every repair.',
      tip: 'The warranty covers the repair — not physical damage afterwards. Fit a case before you leave to protect your investment.',
      keywords: ['warranty','guarantee','warranty period','cover','covered','months','6 month','warranty policy'],
      ctas: [{ label: 'Book a Repair', href: 'book.html', primary: true }]
    },

    {
      id: 'pricing', type: 'info', icon: '💰',
      title: 'Pricing & Quotes',
      tagline: 'Transparent pricing — free diagnosis.',
      answer: 'Screen replacements from R1,800 · Batteries from R550 · Back glass from R950 · Camera from R750 · Charging port from R650. Free diagnosis on arrival. All prices include VAT.',
      tip: 'WhatsApp us your device model and fault for an exact quote in minutes — no need to come in first.',
      keywords: ['price','cost','how much','fee','rand','quote','expensive','cheap','affordable','pricing','rates','charges'],
      ctas: [
        { label: 'WhatsApp for Quote', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+repair+quote', primary: true },
        { label: 'Book Repair', href: 'book.html', primary: false }
      ]
    },

    {
      id: 'turnaround', type: 'info', icon: '⚡',
      title: 'How Long Does It Take?',
      tagline: 'Most repairs same day.',
      answer: 'Screens and batteries: under 2 hours. Charging ports and speakers: 1–3 hours. Back glass: 2–4 hours. Water damage: same day assessment, 24–48 hours full repair. Board-level: 24–72 hours.',
      keywords: ['how long','turnaround','time','fast','quick','same day','duration','wait','ready','when will','repair time','how fast'],
      ctas: [{ label: 'Book Your Repair', href: 'book.html', primary: true }]
    },

    {
      id: 'contact', type: 'info', icon: '📞',
      title: 'Contact MobiDokta',
      tagline: 'WhatsApp for fastest response.',
      answer: 'WhatsApp or call: 078 154 1350. We respond on WhatsApp within minutes during business hours. Email: techrepair@mobidokta.co.za',
      keywords: ['contact','call','phone number','number','whatsapp','reach','talk','speak','email','get in touch'],
      ctas: [
        { label: 'WhatsApp Us', href: 'https://wa.me/27781541350', primary: true },
        { label: 'Call Us', href: 'tel:+27781541350', primary: false }
      ]
    },

    {
      id: 'trade-in', type: 'info', icon: '🔄',
      title: 'Trade-ins & Buy-Backs',
      tagline: 'Sell or trade your old device.',
      answer: 'We buy working and damaged phones. Bring it in for a same-day assessment and cash offer. Trade-in value can be applied towards a repair or an Appl3City device.',
      keywords: ['trade in','trade-in','sell','buy my phone','buy back','exchange','swap','cash for phone','sell phone','sell iphone'],
      ctas: [
        { label: 'WhatsApp for Valuation', href: 'https://wa.me/27781541350?text=Hi%2C+I+want+to+trade+in+or+sell+my+phone', primary: true }
      ]
    },

    {
      id: 'house-call', type: 'info', icon: '🚗',
      title: 'We Come to You',
      tagline: 'House calls & enterprise on-site.',
      answer: 'House calls available across Pretoria, Johannesburg, Centurion, and Sandton. Call-out from R299 for Pretoria & surrounds. Nationwide courier repair also available.',
      keywords: ['house call','come to me','on-site','delivery','collect','courier','nationwide','johannesburg','centurion','home','sandton','bryanston','enterprise'],
      ctas: [
        { label: 'Book a House Call', href: 'enterprise.html', primary: true },
        { label: 'WhatsApp Us', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+house+call+repair', primary: false }
      ]
    },

    {
      id: 'pre-owned', type: 'info', icon: '📲',
      title: 'Buy a Phone — Appl3City',
      tagline: 'Pre-owned & sealed iPhones, IMEI verified.',
      answer: 'Pre-owned and sealed iPhones, Samsung Galaxy, MacBook, and Apple Watch. IMEI verified, network unlocked, engineer-tested. Written warranty on every device. All prices include VAT.',
      keywords: ['buy phone','iphone for sale','second hand','pre-owned','used','sealed','new phone','samsung for sale','purchase','device','stock','appl3city','buy iphone','buy samsung'],
      ctas: [
        { label: 'Browse Devices', href: 'applecity.html', primary: true },
        { label: 'WhatsApp for Stock', href: 'https://wa.me/27781541350?text=Hi+Appl3City%21+I%27d+like+to+see+what+phones+you+have+in+stock', primary: false }
      ]
    },

    {
      id: 'students', type: 'info', icon: '🎓',
      title: 'Student Discount — 15% Off',
      tagline: 'Show your student card, save 15%.',
      answer: 'Students save 15% on all repairs and products. Just show your valid student card when you collect. No card needed upfront — pay normal, get refunded the 15% at handover.',
      keywords: ['student','discount','student discount','university','varsity','tut','uj','unisa','student card','15%'],
      ctas: [
        { label: 'Book with Student Discount', href: 'book.html', primary: true }
      ]
    }

  ];

  // Quick searches shown before typing
  var QUICK = [
    'cracked screen', 'battery draining', 'water damage', 'price list',
    'opening hours', 'buy iPhone', 'Samsung repair', 'get a quote'
  ];

  // ── Scoring Engine ──────────────────────────────────────────────────────────

  function scoreItem(query, item) {
    var q = query.toLowerCase().trim();
    if (!q || q.length < 2) return 0;
    var s = 0;
    var words = q.split(/\s+/);
    for (var i = 0; i < item.keywords.length; i++) {
      var kw = item.keywords[i];
      if (q === kw) { s += 100; continue; }
      if (q.includes(kw)) { s += kw.split(' ').length * 14; continue; }
      if (kw.includes(q)) { s += 9; continue; }
      for (var j = 0; j < words.length; j++) {
        var w = words[j];
        if (w.length < 3) continue;
        if (kw === w) s += 10;
        else if (kw.includes(w)) s += 5;
        else if (w.includes(kw) && kw.length > 3) s += 3;
      }
    }
    // Boost urgent items when water-related
    if (item.urgent && q.match(/water|wet|pool|drop|spill/)) s += 50;
    return s;
  }

  function doSearch(query) {
    if (!query || query.trim().length < 2) return [];
    return KB
      .map(function (item) { return { item: item, score: scoreItem(query, item) }; })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (r) { return r.item; })
      .slice(0, 5);
  }

  // ── Render Helpers ──────────────────────────────────────────────────────────

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderCtas(ctas) {
    if (!ctas || !ctas.length) return '';
    return '<div class="mds-ctas">' + ctas.map(function (c) {
      var ext = c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + esc(c.href) + '" class="mds-cta ' + (c.primary ? 'mds-cta--primary' : 'mds-cta--ghost') + '"' + ext + '>' + esc(c.label) + '</a>';
    }).join('') + '</div>';
  }

  function renderChips(item) {
    var chips = [item.price, item.eta].filter(Boolean);
    if (!chips.length) return '';
    return '<div class="mds-chips">' + chips.map(function (c) { return '<span class="mds-chip">' + esc(c) + '</span>'; }).join('') + '</div>';
  }

  function renderResult(item, idx) {
    var urgentClass = item.urgent ? ' mds-result--urgent' : '';
    var tip = item.tip ? '<p class="mds-tip"><strong>Tip:</strong> ' + esc(item.tip) + '</p>' : '';
    return [
      '<div class="mds-result' + urgentClass + '" data-idx="' + idx + '" role="option" tabindex="-1">',
      '  <div class="mds-result-row">',
      '    <span class="mds-result-icon">' + esc(item.icon || '🔧') + '</span>',
      '    <div class="mds-result-info">',
      '      <strong class="mds-result-title">' + esc(item.title) + '</strong>',
      item.tagline ? '      <span class="mds-result-tag">' + esc(item.tagline) + '</span>' : '',
      '    </div>',
      renderChips(item),
      '  </div>',
      '  <p class="mds-result-answer">' + esc(item.answer) + '</p>',
      tip,
      renderCtas(item.ctas),
      '</div>'
    ].join('\n');
  }

  // ── Modal HTML ──────────────────────────────────────────────────────────────

  var MODAL_ID = 'md-search-modal';

  function buildModal() {
    var el = document.createElement('div');
    el.id = MODAL_ID;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'MobiDokta Search');
    el.innerHTML = [
      '<div class="mds-backdrop" id="mds-backdrop"></div>',
      '<div class="mds-panel" role="combobox" aria-expanded="true">',
      '  <div class="mds-input-row">',
      '    <svg class="mds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
      '    <input id="mds-input" class="mds-input" type="text" placeholder="Search repairs, prices, hours, products…" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-controls="mds-results">',
      '    <button class="mds-esc-btn" id="mds-close" type="button" aria-label="Close search">ESC</button>',
      '  </div>',
      '  <div class="mds-results" id="mds-results" role="listbox"></div>',
      '  <div class="mds-footer">',
      '    <span class="mds-hint">↑↓ navigate</span>',
      '    <span class="mds-hint">↵ open</span>',
      '    <span class="mds-hint">ESC close</span>',
      '    <a href="https://wa.me/27781541350?text=Hi%2C+I+need+some+help" target="_blank" rel="noopener" class="mds-wa-cta">',
      '      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
      '      Still need help? Chat on WhatsApp',
      '    </a>',
      '  </div>',
      '</div>'
    ].join('\n');
    document.body.appendChild(el);
  }

  // ── Body Content ────────────────────────────────────────────────────────────

  function showQuickSearches() {
    var body = document.getElementById('mds-results');
    if (!body) return;
    var quickHtml = '<div class="mds-label">Try asking…</div>'
      + '<div class="mds-quick-row">'
      + QUICK.map(function (q) { return '<button class="mds-quick" type="button">' + esc(q) + '</button>'; }).join('')
      + '</div>'
      + '<div class="mds-label" style="margin-top:14px">Top services</div>'
      + KB.filter(function (k) { return k.type === 'service'; }).slice(0, 3).map(renderResult).join('');
    body.innerHTML = quickHtml;
    body.querySelectorAll('.mds-quick').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var inp = document.getElementById('mds-input');
        if (!inp) return;
        inp.value = btn.textContent;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.focus();
      });
    });
  }

  // ── State ───────────────────────────────────────────────────────────────────

  var _query = '';
  var _active = -1;
  var _results = [];

  function onInput(e) {
    var q = e.target.value;
    if (q === _query) return;
    _query = q;
    _active = -1;
    var body = document.getElementById('mds-results');
    if (!body) return;

    if (!q.trim()) { showQuickSearches(); return; }

    _results = doSearch(q);

    if (!_results.length) {
      body.innerHTML = [
        '<div class="mds-empty">',
        '  <p>No match for <strong>"' + esc(q) + '"</strong> — try "screen", "battery", or "price".</p>',
        '  <a href="https://wa.me/27781541350?text=Hi%2C+I+need+help+with%3A+' + encodeURIComponent(q) + '"',
        '     target="_blank" rel="noopener" class="mds-cta mds-cta--primary">',
        '    Ask on WhatsApp: "' + esc(q) + '"',
        '  </a>',
        '</div>'
      ].join('\n');
      return;
    }

    body.innerHTML = _results.map(renderResult).join('');

    // Wire result clicks
    body.querySelectorAll('.mds-result').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target.closest('a')) return; // let link handle it
        var item = _results[parseInt(el.dataset.idx, 10)];
        if (item && item.ctas && item.ctas[0]) {
          var href = item.ctas[0].href;
          if (href.startsWith('http')) window.open(href, '_blank');
          else window.location.href = href;
        }
      });
    });
  }

  function onKeydown(e) {
    var items = document.querySelectorAll('.mds-result');
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _active = Math.min(_active + 1, items.length - 1);
      items.forEach(function (el, i) { el.classList.toggle('mds-result--focused', i === _active); });
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      _active = Math.max(_active - 1, 0);
      items.forEach(function (el, i) { el.classList.toggle('mds-result--focused', i === _active); });
    }
    if (e.key === 'Enter' && _active >= 0 && items[_active]) {
      var item = _results[_active];
      if (item && item.ctas && item.ctas[0]) {
        var href = item.ctas[0].href;
        if (href.startsWith('http')) window.open(href, '_blank');
        else window.location.href = href;
      }
    }
  }

  // ── Open / Close ────────────────────────────────────────────────────────────

  function openModal() {
    if (!document.getElementById(MODAL_ID)) buildModal();
    var modal = document.getElementById(MODAL_ID);
    modal.classList.add('mds-open');
    document.body.classList.add('mds-body-lock');

    var input = document.getElementById('mds-input');
    var backdrop = document.getElementById('mds-backdrop');
    var closeBtn = document.getElementById('mds-close');

    if (input) {
      input.addEventListener('input', onInput);
      input.addEventListener('keydown', onKeydown);
      setTimeout(function () { input.focus(); }, 60);
    }
    if (backdrop) backdrop.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    showQuickSearches();
  }

  function closeModal() {
    var modal = document.getElementById(MODAL_ID);
    if (!modal) return;
    modal.classList.remove('mds-open');
    document.body.classList.remove('mds-body-lock');
    // Reset
    setTimeout(function () {
      var input = document.getElementById('mds-input');
      if (input) { input.value = ''; _query = ''; }
      _active = -1;
      _results = [];
      showQuickSearches();
    }, 220);
  }

  // ── Init ─────────────────────────────────────────────────────────────────────

  function init() {
    // Keyboard shortcut ⌘K / Ctrl+K
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openModal(); }
      if (e.key === 'Escape') closeModal();
    });

    // Wire any existing trigger button with id or class
    ['md-search-btn', 'nav-search-btn'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
    });

    // Expose globally
    window.MobiSearch = { open: openModal, close: closeModal };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
