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
      price: 'From R599', eta: 'Same day',
      social: '47+ screens replaced last month · 4.9★ Google rating',
      tiers: [
        { label: 'OEM Grade', price: 'From R599', desc: 'Factory-spec quality — True Tone & Face ID preserved, price depends on model', popular: true },
        { label: 'Aftermarket Eco', price: 'Available', desc: 'Quality-verified aftermarket — great for older models', popular: false }
      ],
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
      price: 'From R299', eta: '45 minutes',
      social: '38 batteries swapped last month · CPU throttling eliminated',
      tiers: [
        { label: 'OEM-grade cell', price: 'From R299', desc: 'Full-rated capacity — eliminates iOS throttling, exact price per model', popular: true }
      ],
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
      social: '9 water recoveries last month · Free same-day diagnosis',
      keywords: ['water','wet','dropped','pool','ocean','rain','liquid','rice','submerged','toilet','sink','spilled','splash','damp','flooded','water damage','fell in water','dropped in water','water damaged'],
      ctas: [
        { label: 'WhatsApp Us Now', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+has+water+damage+and+I+need+urgent+help', primary: true },
        { label: 'Book Repair', href: 'book.html', primary: false }
      ]
    },

    {
      id: 'glass-only', type: 'service', icon: '🔬',
      title: 'Screen Glass Replacement',
      tagline: 'Only the top glass — your OLED stays intact.',
      answer: 'If your screen still displays and touch still works but the front glass is cracked, we can replace just the glass layer using UV-cured OCA adhesive — no new OLED or LCD needed. This saves you R200–R1,500 compared to a full screen swap. Takes about 60 minutes. Available on most iPhone models (7 onwards).',
      tip: 'This only works if the display under the glass still lights up properly and touch is responsive. If the screen is black, flickering, or has LCD bleed, a full screen swap is needed instead.',
      price: 'From R399', eta: '60 minutes',
      keywords: ['glass','glass only','front glass','top glass','glass replacement','cracked glass','broken glass','glass repair','screen glass','oca','digitizer glass','refurbish screen','screen refurbishment','glass not screen','just the glass','glass is cracked','only glass broken','screen glass cracked','glass layer'],
      ctas: [
        { label: 'Book Glass Replacement', href: 'book.html', primary: true },
        { label: 'WhatsApp to Check Eligibility', href: 'https://wa.me/27781541350?text=Hi%2C+my+screen+glass+is+cracked+but+the+display+still+works.+Can+you+replace+just+the+glass%3F', primary: false }
      ]
    },

    {
      id: 'camera', type: 'service', icon: '📷',
      title: 'Camera Repair',
      tagline: 'Blurry, autofocus failing, or cracked lens.',
      answer: 'Front and rear camera module replacement. A cracked sapphire lens causes purple haze and autofocus hunting — we can often replace just the lens instead of the full module.',
      tip: 'A R89 camera lens protector prevents a R649+ camera module replacement. The iPhone lens is precision-ground sapphire glass — one drop without a protector can scratch it permanently.',
      price: 'From R750', eta: 'Same day',
      keywords: ['camera','blurry','lens','photo','autofocus','flash','zoom','selfie','front camera','rear camera','cracked lens','focus','purple','haze','camera not working','camera blurry','camera black','camera glass','lens glass','lens cracked','camera lens cracked','camera lens broken','cracked camera glass','shattered camera lens','lens cover','camera cover','broken lens','lens replacement','camera glass replacement'],
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
      keywords: ['back glass','back cover','back','rear','frame','bent','titanium','magsafe','ceramic','back panel','back cracked','shattered back','broken back','back broken','cover cracked','cover broken','back cover cracked','back cover broken','cover shattered','phone cover'],
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
      social: 'Board repairs others refused — No fix, no charge',
      keywords: ['board','logic board','motherboard','micro solder','data recovery','data','not turning on','dead','bricked','bootloop','no power','wont turn on','phone dead','not powering on','wont start','charging ic','nand','power ic','baseband','touch ic','bga','reballing','micro soldering','board repair','component repair','phone wont come on','not switching on','not coming on','phone is dead','wont switch on'],
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
      price: 'Screens from R599 · Batteries from R299', eta: 'Same day',
      keywords: ['iphone','iphone 7','iphone 8','iphone x','iphone 11','iphone 12','iphone 13','iphone 14','iphone 15','iphone 16','iphone 17','iphone se','apple','iphone repair'],
      ctas: [
        { label: 'Book iPhone Repair', href: 'book.html', primary: true },
        { label: 'See iPhone Services', href: 'collections/iphone-repairs/', primary: false }
      ]
    },

    // ── PRODUCTS ──────────────────────────────────────────────────────────────

    {
      id: 'ps5', type: 'product', icon: '🎮',
      title: 'PS5 Consoles & Controllers',
      tagline: 'New sealed & pre-owned — consoles, DualSense, headsets.',
      answer: 'We stock PS5 Disc Edition and Digital Edition (new & pre-owned), DualSense controllers in all colourways including Midnight Black, Cosmic Red and Cobalt Blue, the DualSense Edge pro controller, Pulse 3D headsets, and accessories. 3-month warranty on pre-owned units.',
      tip: 'Pre-owned PS5 consoles come tested and cleaned with a 3-month warranty — a significant saving over new retail price.',
      price: 'Consoles from R8,999 · Controllers from R1,199',
      keywords: ['ps5','playstation','playstation 5','dualsense','controller','console','gaming','ps5 console','ps5 controller','pulse 3d','gaming console','buy ps5','ps5 price','cosmic red','midnight black','cobalt blue','edge controller','ps5 headset','game'],
      ctas: [
        { label: 'Browse Gaming', href: 'shop.html', primary: true },
        { label: 'WhatsApp for Stock', href: 'https://wa.me/27781541350?text=Hi%2C+I%27m+looking+for+a+PS5+console+or+controller', primary: false }
      ]
    },

    {
      id: 'screen-protector', type: 'product', icon: '🛡️',
      title: 'Screen Protectors',
      tagline: 'Tempered glass & anti-spy options — fitted free.',
      answer: 'Reinforced tempered glass screen protectors for iPhone and Android. Anti-spy privacy protectors also available. We fit them in-store for free.',
      tip: 'A R89–149 screen protector prevents a R599+ screen replacement. The maths is easy.',
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

    // ── VERIFICATION SERVICES ────────────────────────────────────────────────

    {
      id: 'checkforyou', type: 'service', icon: '🛡️',
      title: 'CheckForYou — IMEI Verification',
      tagline: 'Is the phone stolen, locked, or blacklisted? We find out.',
      answer: 'MobiDokta\'s CheckForYou service verifies any iPhone or Android against GSMA blacklists, iCloud Activation Lock, Find My iPhone (FMI), network lock, and MDM enrollment. You receive a written report. From R99.',
      tip: 'Always get an IMEI check before buying a second-hand phone. 1 in 4 informally sold iPhones in SA has a hidden problem. A R99 check is the cheapest insurance you\'ll ever buy.',
      price: 'From R99', eta: '15–30 minutes',
      keywords: ['imei','check','verify','stolen','blacklist','blacklisted','icloud','activation lock','fmi','find my','find my iphone','locked','lock','checkforyou','check for you','second hand','used phone','buy phone safe','is this phone stolen','imei check','network lock','mdm','verify phone'],
      ctas: [
        { label: 'Use IMEI Checker', href: 'checkforyou.html#imei-tool', primary: true },
        { label: 'WhatsApp IMEI to Us', href: 'https://wa.me/27781541350?text=Hi%2C+I%27d+like+an+IMEI+check+before+buying+a+phone.+IMEI%3A+', primary: false }
      ]
    },

    {
      id: 'evaluateforyou', type: 'service', icon: '🔍',
      title: 'EValuateForYou — Physical Evaluation',
      tagline: 'Is the phone worth what the seller is asking?',
      answer: 'Our engineers physically inspect the device — battery health (independent verification), original vs. replaced screen and parts, screen type (OLED vs incell), structural damage, water ingress, and true market value. You get a written report with negotiating power.',
      price: 'R299 in-store', eta: '30–60 minutes',
      keywords: ['evaluate','evaluation','valuate','evaluation','inspect','inspection','worth','market value','battery health','original parts','replaced parts','real','genuine','fake','evaluateforyou','evaluate for you','pre-purchase','pre purchase inspection','screen type','oled','incell'],
      ctas: [
        { label: 'Book Evaluation', href: 'checkforyou.html#evaluate', primary: true },
        { label: 'WhatsApp to Book', href: 'https://wa.me/27781541350?text=Hi%2C+I%27d+like+an+EValuateForYou+inspection', primary: false }
      ]
    },

    {
      id: 'trackforyou', type: 'service', icon: '🚨', urgent: true,
      title: 'TrackForYou — Theft Recovery',
      tagline: 'Phone stolen? Act in the first 24 hours.',
      answer: 'MobiDokta\'s TrackForYou service helps you act immediately after a theft — iCloud tracking guidance, IMEI reporting to all SA networks, SAPS case documentation, GSMA blacklist submission, and an insurance evidence package. Act now — every hour reduces your chances.',
      tip: '⚠️ Do NOT reset or erase the device remotely yet — leave Find My active so tracking remains possible. WhatsApp us first and we\'ll guide you step by step.',
      price: 'R350 per case', eta: 'Same day',
      keywords: ['stolen','theft','track','tracking','lost phone','phone stolen','recover phone','find my iphone','icloud track','saps','police','report stolen','blacklist stolen','trackforyou','track for you','stolen iphone','recovery','imei block'],
      ctas: [
        { label: 'WhatsApp Us Now — Urgent', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+was+stolen+and+I+need+TrackForYou+urgent+assistance', primary: true },
        { label: 'TrackForYou Service', href: 'checkforyou.html#track', primary: false }
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
      tagline: 'Mon–Sat 10:00–21:00',
      answer: 'Monday to Saturday, 10:00–21:00. Walk-ins welcome — no appointment needed for basic repairs. Book a slot online to skip the queue.',
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
      title: 'July Sale — Lowest Prices of the Year',
      tagline: 'Anchored sale prices · July 2026 only.',
      answer: 'July Sale prices — iPhone screen from R599 (was R749) · Battery from R299 (was R379) · Back glass from R549 (was R699) · Camera from R649 (was R799) · Charging port from R449 (was R549) · Water damage from R349 · Free diagnosis on all repairs · 6-month warranty included. Prices vary by model — exact quote in 30 seconds on our booking page.',
      tip: 'These July sale prices are anchored for the month — WhatsApp us to lock in your price today before they go back up.',
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
    },

    // ── DIAGNOSTICS / KNOWLEDGE HUB ──────────────────────────────────────

    {
      id: 'battery-drain', type: 'guide', icon: '🔋',
      title: 'Why Is My Battery Draining So Fast?',
      tagline: 'Check health first — below 80% means throttling.',
      answer: 'iOS throttles CPU speed when battery health drops below 80%. This makes the phone slower AND causes more drain. Go to Settings → Battery → Battery Health. If it\'s under 80%, a battery replacement at MobiDokta takes 45 minutes and completely restores performance — from R299 during our July Sale.',
      tip: 'Also check Settings → Battery → Last 10 Days. Any app using more than 20% in the background is a rogue drain culprit.',
      price: 'Battery from R299', eta: '45 minutes',
      keywords: ['battery draining','drain','draining fast','battery health','why is my battery','battery percentage','iphone slow','battery dying quickly','battery life bad','ios throttle','throttling'],
      ctas: [
        { label: 'Book Battery Replacement', href: 'book.html', primary: true },
        { label: 'Read Full Guide', href: 'knowledge-hub.html#faq', primary: false }
      ]
    },

    {
      id: 'wont-charge', type: 'guide', icon: '⚡',
      title: 'Phone Won\'t Charge',
      tagline: 'Usually lint in the port — sometimes the charging IC.',
      answer: 'First try a different official cable. If that doesn\'t work, shine a light into your charging port — compacted lint is the #1 cause. Never use metal to remove it. If the port looks clear, it\'s likely the charging IC chip on the board (R800+). Bring it in for free diagnosis.',
      tip: 'Never use a metal pin or SIM tool to clear your charging port — you will damage the pins and turn a R0 problem into a R650 repair.',
      price: 'Port cleaning R250 · Port replacement from R449 · IC from R800', eta: '1–3 hours',
      keywords: ['not charging','won\'t charge','wont charge','charging port','lightning port','usb-c','slow charging','no charging','phone not charging','charger not working','charging issue'],
      ctas: [
        { label: 'Book Charging Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Advice', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+is+not+charging', primary: false }
      ]
    },

    {
      id: 'wont-turn-on', type: 'guide', icon: '🔴',
      title: 'Phone Won\'t Turn On',
      tagline: 'Free diagnosis — dead battery or board fault.',
      answer: 'Try charging for 15 minutes, then hold Power + Volume Down (Samsung) or just Power (iPhone) for 10 seconds. If still no response, it\'s either a completely dead battery or a board-level fault. Free diagnosis at MobiDokta — we\'ll know within 20 minutes.',
      price: 'Diagnosis free · Battery from R299 · Board diagnostic from R400', eta: 'Diagnosis same day',
      keywords: ['won\'t turn on','wont turn on','dead phone','phone dead','black screen','not turning on','phone off','can\'t switch on','no power','won\'t switch on','phone wont come on','not coming on','not switching on','wont switch on','phone is dead','iphone wont turn on','samsung wont turn on','android wont turn on','phone doesnt turn on'],
      ctas: [
        { label: 'Book Free Diagnosis', href: 'book.html', primary: true },
        { label: 'WhatsApp Us', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+won%27t+turn+on', primary: false }
      ]
    },

    {
      id: 'overheating', type: 'guide', icon: '🌡️',
      title: 'Phone Overheating',
      tagline: 'Warm under load is normal — hot at idle is not.',
      answer: 'A phone getting warm during gaming or charging is normal. A phone that\'s hot while idle or in your pocket is a battery or board fault. Remove your case (cases trap heat badly), avoid direct sun, and charge at room temperature. If it overheats at idle, bring it in — likely a failing battery generating heat under all conditions.',
      tip: 'Never charge your phone in a hot car or in direct sunlight — lithium batteries permanently lose capacity when charged above 40°C.',
      price: 'Battery from R299 · MacBook thermal treatment from R400', eta: '45 min – 2 hours',
      keywords: ['overheating','hot','phone getting hot','too hot','heat','burning','overheat','phone warm','heating up','iphone hot','samsung hot','macbook hot'],
      ctas: [
        { label: 'Book Diagnostic', href: 'book.html', primary: true },
        { label: 'Read Overheating Guide', href: 'knowledge-hub.html#symptom-checker', primary: false }
      ]
    },

    {
      id: 'ifixit', type: 'guide', icon: '🔧',
      title: 'iFixit Repair Guides & Repairability Scores',
      tagline: 'The world\'s largest free repair manual library.',
      answer: 'iFixit publishes free, step-by-step repair guides for every iPhone, Samsung and MacBook. They also score every device from 1–10 on repairability — a score of 10 means fully user-repairable, 1 means specialist tools required. MobiDokta references iFixit guides and scores to advise on repair complexity and cost.',
      keywords: ['ifixit','repair guide','repairability score','ifixit score','teardown','diy repair','repair manual','how to fix','fix myself','iphone repairability'],
      ctas: [
        { label: 'Knowledge Hub — Resources', href: 'knowledge-hub.html#resources', primary: true }
      ]
    },

    {
      id: 'diagnostics', type: 'guide', icon: '🔍',
      title: 'Free Symptom Checker',
      tagline: 'Diagnose your device issue instantly.',
      answer: 'Use MobiDokta\'s interactive symptom checker to identify likely causes and next steps for any device issue — battery drain, screen faults, charging problems, water damage, camera, speaker, Face ID, WiFi, and more. No sign-up, no charge, instant results.',
      keywords: ['diagnose','diagnosis','diagnostic','symptom','what\'s wrong','problem','issue','help','troubleshoot','troubleshooting','check my phone','what is wrong'],
      ctas: [
        { label: 'Open Symptom Checker', href: 'knowledge-hub.html#symptom-checker', primary: true }
      ]
    },

    {
      id: 'device-specs', type: 'guide', icon: '📊',
      title: 'Device Specs & Repair Costs Reference',
      tagline: 'iPhone 14–16, Samsung S24, MacBook specs.',
      answer: 'MobiDokta\'s Knowledge Hub includes full specs and iFixit repairability scores for iPhone 12–16 Pro Max, Samsung Galaxy S23–S25, and MacBook M1–M3 — with repair cost estimates for screens and batteries. Know what your repair should cost before you walk in.',
      keywords: ['specs','specifications','iphone specs','samsung specs','macbook specs','repair cost','how much','iphone 16 specs','samsung s24 specs','device reference'],
      ctas: [
        { label: 'View Device Specs', href: 'knowledge-hub.html#device-specs', primary: true }
      ]
    },

    {
      id: 'wifi-bt', type: 'service', icon: '',
      title: 'WiFi, Bluetooth & Hotspot Repair',
      tagline: 'No WiFi, no Bluetooth, hotspot not working.',
      answer: 'WiFi and Bluetooth are controlled by the same combo IC chip on most iPhones and Androids. If WiFi drops frequently, won\'t connect, or your personal hotspot doesn\'t appear, it\'s likely a WiFi/BT IC fault, antenna damage, or a software issue. We diagnose and repair at component level. Software reset first — if that fails, board-level IC work is required.',
      tip: 'Before coming in: Go to Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings. This clears saved networks and often restores WiFi on software-related drops. If it comes back within an hour, it\'s a board fault.',
      price: 'Diagnosis free · From R950', eta: 'Same day diagnosis',
      keywords: ['wifi','wi-fi','bluetooth','bt','hotspot','personal hotspot','no wifi','wifi not working','wifi dropping','wifi keeps disconnecting','bluetooth not working','no bluetooth','cant connect wifi','hotspot not showing','hotspot not working','internet not working','no internet','wireless','wifi broken','bluetooth broken','wifi repair','bluetooth repair'],
      ctas: [
        { label: 'Book WiFi Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Diagnosis', href: 'https://wa.me/27781541350?text=Hi%2C+my+phone+has+a+WiFi+or+Bluetooth+problem', primary: false }
      ]
    },

    {
      id: 'camera-glass', type: 'service', icon: '',
      title: 'Camera Glass Replacement',
      tagline: 'Cracked or scratched lens cover — not the full module.',
      answer: 'The camera glass is the sapphire or glass lens cover that protects the actual camera module. A crack or deep scratch on this piece causes purple haze, lens flare, and reduced sharpness — but the camera module itself is still fine. We replace just the lens glass without touching the camera module, which is significantly cheaper than a full camera replacement.',
      tip: 'A cracked camera glass often gets mistaken for camera module damage. Bring it in — if only the glass is damaged, you\'re looking at a fraction of the cost of a full camera repair.',
      price: 'From R450', eta: 'Same day',
      keywords: ['camera glass','lens glass','camera lens','cracked camera','scratched lens','lens scratched','camera glass cracked','camera glass broken','lens cover','camera cover glass','shattered camera glass','camera lens cracked','camera lens broken','cracked lens','lens cover broken','lens cover cracked','haze','purple haze','lens flare from crack'],
      ctas: [
        { label: 'Book Camera Glass Repair', href: 'book.html', primary: true },
        { label: 'WhatsApp for Price', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+camera+glass+replacement', primary: false }
      ]
    },

    {
      id: 'refurbish', type: 'service', icon: '',
      title: 'iPhone Refurbishing — Brand-New Aesthetic',
      tagline: 'Screen, back glass, battery, frame, deep clean, QC cert.',
      answer: 'MobiDokta professional iPhone refurbishing: four packages from a Cosmetic Refresh (R450) to Premium Pro Refurb (from R5,500). Includes OEM-grade screen replacement, back glass, battery, frame polish or replacement, 25-point QC test, and for Resale-Ready/Premium packages: a condition certificate, IMEI report, and factory reset. Legal for resale — CPA Section 41 compliant. All iPhone models 7–17 Pro Max.',
      tip: 'A Resale-Ready refurb typically recovers R1,500–R4,000 more in resale value depending on model. The certificate gives buyers confidence and removes negotiating leverage.',
      price: 'Cosmetic Refresh R450 · Aesthetic Refurb from R2,200 · Resale-Ready from R3,200 · Premium Pro from R5,500', eta: '1–3 days',
      keywords: ['refurbish','refurbishing','refurb','make iphone look new','brand new iphone','resale ready','phone resale','sell iphone','iphone resale','cosmetic repair','phone looks new','iphone refresh','iphone restoration','restore iphone','iphone makeover','clean iphone','like new iphone','refurbished iphone','frame polish','back glass replacement','resale certificate','condition grade','iphone certificate'],
      ctas: [
        { label: 'See Refurbishing Packages', href: 'refurbish.html', primary: true },
        { label: 'WhatsApp Your Model', href: 'https://wa.me/27781541350?text=Hi%2C+I%27d+like+to+refurbish+my+iPhone.+Model%3A+', primary: false }
      ]
    },

    {
      id: 'data-recovery', type: 'service', icon: '',
      title: 'Data Recovery — Phone, MacBook, Hard Drive',
      tagline: 'Dead device, failed drive, lost files — we recover it.',
      answer: 'MobiDokta recovers data from dead or damaged iPhones, Android phones, MacBooks, external hard drives (HDD/SSD), USB flash drives, and SD cards. NAND chip-level extraction for phones with board faults. SSD imaging for MacBooks. Mechanical HDD recovery. Diagnosis always free — no fix, no charge. Verified ownership required before any work begins.',
      tip: 'The single most important thing: stop using the device or drive immediately. Every additional write — new photos, new files — overwrites recoverable data. Power off and bring it in for a free assessment.',
      price: 'Diagnosis free · Phone from R1,000 · Drive from R450 · MacBook from R1,500', eta: '24–72 hours',
      keywords: ['data recovery','recover data','lost data','phone data','lost photos','recover photos','files deleted','formatted drive','hard drive recovery','ssd recovery','hdd recovery','flash drive recovery','sd card recovery','macbook data','lost files','data lost','deleted photos','recover files','usb recovery','recover contacts','lost contacts','clicking hard drive','dead hard drive','external hard drive not working','hard drive not recognised','data from dead phone'],
      ctas: [
        { label: 'WhatsApp — Describe Your Case', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+data+recovery.+My+situation%3A+', primary: true },
        { label: 'Data Recovery Page', href: 'data-recovery.html#data-recovery', primary: false }
      ]
    },

    {
      id: 'access-recovery', type: 'service', icon: '',
      title: 'Device Lockout & Access Recovery',
      tagline: 'Locked out of your own phone, MacBook, or account.',
      answer: 'Locked out of your iPhone, Android, MacBook, or Windows laptop? Forgotten your Google, Apple ID, or Microsoft account? We restore lawful owner access using manufacturer-approved processes only — never security bypasses. Proof of ownership (government ID + proof of purchase or account access) is verified before any work starts. We do not bypass iCloud Activation Lock or Google FRP. All recovery is through official channels.',
      tip: 'For a locked iPhone: before coming in, try signing into icloud.com on another device to confirm your Apple ID credentials. If you can sign into iCloud, you can complete the restore process. If you can\'t, Apple account recovery is the first step.',
      price: 'Diagnosis free · Access recovery from R350 · Account guidance from R250', eta: 'Same day in most cases',
      keywords: ['locked out','lockout','forgot password','forgotten password','phone locked','iphone disabled','iphone unavailable','phone disabled','forgot pin','forgot passcode','macbook password','macbook forgot password','android locked','samsung locked','cant get into phone','phone wont let me in','access recovery','google account locked','apple id locked','microsoft account locked','frp','factory reset protection','filevault','bitlocker','mdm','corporate device','account recovery','device locked','phone disabled connect to itunes','iphone wont open'],
      ctas: [
        { label: 'WhatsApp — Start Here', href: 'https://wa.me/27781541350?text=Hi%2C+I+am+locked+out+of+my+device.+My+situation%3A+', primary: true },
        { label: 'Access Recovery Page', href: 'data-recovery.html#access-recovery', primary: false }
      ]
    },

    {
      id: 'studio', type: 'service', icon: '',
      title: 'TRi-MobiDokta Studio — Tech Courses & IT Hub',
      tagline: 'In-person and virtual tech courses · Pretoria West.',
      answer: 'TRi-MobiDokta Studio is MobiDokta\'s immersive IT learning and gaming destination. Courses for kids (8+) and adults — Junior Tech Academy, Repair Technician, Board-Level Repair Introduction, AI Diagnostics Workshop, Coding & AI Fundamentals, Digital Literacy, and virtual online courses. Starter kits, printed guides, and video tutorials available. In-person: Danville, Pretoria West.',
      tip: 'Studio courses include mandatory practicals — not just video content. You leave with real hands-on experience and a printed reference guide.',
      price: 'Kids from R350/month · Adults from R650 per course', eta: 'Enrol anytime',
      keywords: ['course','courses','studio','tech course','repair course','iphone course','learn to repair','training','classes','tuition','kids class','children tech','junior tech','coding course','ai course','digital literacy','repair training','technician course','board repair course','gaming hub','gaming lounge','it destination','workshop','tech workshop','tri-mobidokta','tri mobidokta','starter kit','tutorial','guide','practical','certification','certificate'],
      ctas: [
        { label: 'Browse Studio Courses', href: 'studio.html', primary: true },
        { label: 'WhatsApp — Enquire', href: 'https://wa.me/27781541350?text=Hi%2C+I%27d+like+to+enquire+about+TRi-MobiDokta+Studio+courses', primary: false }
      ]
    },

    {
      id: 'iphone-air', type: 'service', icon: '⭐',
      title: 'iPhone Air (2025) Repair — Rare Service',
      tagline: 'One of very few SA shops that safely repairs the thinnest iPhone ever made.',
      answer: 'The iPhone Air is 5.65 mm thin — standard repair pry tools bend the chassis. We use adapted low-force tooling and thermal management to replace the screen (from R7,200), battery (from R2,000), and back glass without warping the frame. Also covers the iPhone 16e. WhatsApp us first to confirm parts are in stock before you travel.',
      tip: 'Never attempt to open an iPhone Air with standard spudgers — the chassis flexes at under 3 kg of lateral force. Always use a vacuum cup and suction-based opening technique.',
      price: 'Screen from R7,200 · Battery from R2,000', eta: 'WhatsApp first — specialist handling',
      social: 'One of very few SA shops with iPhone Air specialist tooling',
      tiers: [
        { label: 'Screen (OEM-grade)', price: 'R7,200', desc: 'Low-force specialist tooling — only safe option', popular: true },
        { label: 'Battery', price: 'R2,000', desc: 'Thermal-managed extraction for 5.65mm chassis', popular: false }
      ],
      keywords: ['iphone air','iphone air 2025','iphone air repair','thin iphone','thinnest iphone','iphone 16e','iphone 16e repair','iphone air screen','iphone air battery','iphone air broken','iphone air cracked','rare iphone repair','iphone air pretoria','iphone air danville'],
      ctas: [
        { label: 'WhatsApp for iPhone Air Quote', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+an+iPhone+Air+2025+repair', primary: true },
        { label: 'See iPhone Repairs', href: 'collections/iphone-repairs/', primary: false }
      ]
    },

    {
      id: 'huawei-foldable', type: 'service', icon: '⭐',
      title: 'Huawei Mate XS2, X3 & X5 Repair — Rare Service',
      tagline: 'Huawei outward-fold screen repair. Very few SA shops attempt this.',
      answer: 'Huawei\'s outward-folding flagships (Mate XS2, X3, X5) expose the flexible OLED on the outside — they crack more easily than inward-fold designs. We perform outer OLED assessment and replacement, hinge tension adjustment, and battery service. Parts are limited in SA — WhatsApp your model and damage description before visiting. Outer screen from R9,500.',
      tip: 'An outward-fold crease that suddenly deepens often means the hinge spring tension has weakened — if left, the flex cable underneath will crack. Address it early.',
      price: 'Outer screen from R9,500 · Battery from R2,800', eta: 'WhatsApp first — parts sourced on request',
      social: 'Rare SA service — Huawei outward-fold specialists',
      tiers: [
        { label: 'Outer OLED screen', price: 'R9,500', desc: 'Specialist outward-fold repair — parts sourced on request', popular: true },
        { label: 'Battery', price: 'R2,800', desc: 'Safe removal — hinge tension checked', popular: false }
      ],
      keywords: ['huawei mate xs','huawei mate xs2','mate xs2','mate x3','huawei x3','mate x5','huawei x5','huawei foldable','huawei fold','outward fold','huawei foldable repair','foldable screen repair','flexible screen repair','fold screen cracked','huawei foldable pretoria','mate xs pretoria','huawei exclusive repair'],
      ctas: [
        { label: 'WhatsApp for Huawei Foldable Quote', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+Huawei+foldable+repair.+My+model+is:', primary: true },
        { label: 'See Exclusive Repairs', href: 'collections/exclusive-gadgets/', primary: false }
      ]
    },

    {
      id: 'foldable', type: 'service', icon: '📱',
      title: 'Foldable Phone Repair — Samsung Z Fold & Z Flip',
      tagline: 'Inner fold display, hinge rebuild, outer cover screen.',
      answer: 'We repair Samsung Galaxy Z Fold 3–6 and Z Flip 3–6: inner fold display replacement, hinge rebuild, S Pen slot (Fold 5/6), outer cover screen, and battery. Inner fold screen from R7,200. Outer cover screen from R4,500. Also repair OnePlus Open and Google Pixel Fold — WhatsApp first for parts availability.',
      tip: 'Don\'t ignore a deepening crease on a Z Fold — the protective layer underneath is starting to separate. Once it lifts at the edges the display begins to delaminate and the repair cost doubles.',
      price: 'Inner fold screen from R7,200 · Outer screen from R4,500', eta: 'WhatsApp first — parts vary by model',
      social: 'Expert foldable repairs — most SA shops turn these away',
      tiers: [
        { label: 'Inner fold display', price: 'R7,200', desc: 'OEM-grade flexible OLED — hinge inspection included', popular: true },
        { label: 'Outer cover screen', price: 'R4,500', desc: 'OEM-grade cover glass replacement', popular: false }
      ],
      keywords: ['z fold','z flip','galaxy fold','galaxy flip','foldable samsung','samsung foldable','fold repair','flip repair','z fold screen','z flip screen','inner screen','fold crease','fold hinge','foldable phone repair','samsung foldable pretoria','oneplus open','pixel fold','foldable pretoria'],
      ctas: [
        { label: 'WhatsApp for Foldable Quote', href: 'https://wa.me/27781541350?text=Hi%2C+I+need+a+foldable+phone+repair.+My+device+is:', primary: true },
        { label: 'See Exclusive Repairs', href: 'collections/exclusive-gadgets/', primary: false }
      ]
    },

    {
      id: 'software-ai', type: 'service', icon: '⚡',
      title: 'Software & AI Engineering — ASi Imperium',
      tagline: 'Custom software, firmware, AI systems & web platforms.',
      answer: 'Beyond hardware repairs — ASi Imperium Technologies (the engineering studio behind MobiDokta) builds custom software platforms, firmware solutions, AI-powered systems, and high-performance web platforms. The MobiDokta website itself is a live example of this work — built entirely in-house.',
      tip: 'If you need a software system, AI integration, web platform, or firmware solution, WhatsApp us — we build the same standard you\'re experiencing right now.',
      keywords: ['software','ai','artificial intelligence','firmware','web development','app','platform','engineering','developer','code','programming','website','system','integration','iot','embedded','asi imperium','asi technologies','software engineering','tech solutions'],
      ctas: [
        { label: 'WhatsApp — Discuss a Project', href: 'https://wa.me/27781541350?text=Hi%2C+I%27d+like+to+discuss+a+software+or+AI+engineering+project+with+ASi+Imperium+Technologies', primary: true },
        { label: 'See What We Built', href: 'index.html#asi-imperium', primary: false }
      ]
    }

  ];

  // Quick searches shown before typing
  var QUICK = [
    'cracked screen', 'battery draining', 'water damage', 'IMEI check',
    'phone stolen', 'opening hours', 'software development', 'Samsung repair'
  ];

  // Flat keyword index for autocomplete (built once from KB)
  var _acIndex = (function () {
    var seen = {}, list = [];
    KB.forEach(function (item) {
      item.keywords.forEach(function (kw) {
        if (!seen[kw] && kw.length >= 3) { seen[kw] = true; list.push(kw); }
      });
    });
    return list;
  }());

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

  function renderCtas(ctas, item) {
    if (!ctas || !ctas.length) return '';
    var svcId = item ? esc(item.id || '') : '';
    var price = item ? esc(item.price || '') : '';
    return '<div class="mds-ctas">' + ctas.map(function (c) {
      var ext = c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      var ctx = ' data-svc="' + svcId + '" data-price="' + price + '"';
      return '<a href="' + esc(c.href) + '" class="mds-cta ' + (c.primary ? 'mds-cta--primary' : 'mds-cta--ghost') + '"' + ext + ctx + '>' + esc(c.label) + '</a>';
    }).join('') + '</div>';
  }

  function renderChips(item) {
    var chips = [item.price, item.eta].filter(Boolean);
    if (!chips.length) return '';
    return '<div class="mds-chips">' + chips.map(function (c) { return '<span class="mds-chip">' + esc(c) + '</span>'; }).join('') + '</div>';
  }

  function renderResult(item, idx, intent) {
    intent = (typeof intent === 'string') ? intent : 'general';
    var urgentClass = item.urgent ? ' mds-result--urgent' : '';
    var tip = item.tip ? '<p class="mds-tip"><strong>Tip:</strong> ' + esc(item.tip) + '</p>' : '';
    var quoteCard  = (idx === 0) ? renderQuoteCard(item) : '';
    var social     = (idx === 0) ? renderSocialProof(item) : '';
    var objection  = (idx === 0) ? renderObjection(intent) : '';
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
      quoteCard,
      social,
      objection,
      renderCtas(item.ctas, item),
      '</div>'
    ].join('\n');
  }

  // ── Intent & Autocomplete ───────────────────────────────────────────────────

  function classifyIntent(query) {
    var q = query.toLowerCase();
    if (q.match(/urgent|asap|emergency|now|today|water|wet|stolen|flood|drowned|spill/)) return 'urgent';
    if (q.match(/how much|price|cost|quote|rand|r\d|expensive|cheap|afford|budget/)) return 'price';
    if (q.match(/vs|versus|better|compare|difference|oem|eco|genuine|original/)) return 'comparison';
    if (q.match(/iphone|samsung|huawei|pixel|oneplus|android|galaxy|ipad|macbook|s24|s23|fold|flip/)) return 'device';
    return 'general';
  }

  function getAutocompleteSuggestions(query) {
    var q = query.toLowerCase().trim();
    if (q.length < 2) return [];
    var prefix = [], contains = [];
    for (var i = 0; i < _acIndex.length; i++) {
      var kw = _acIndex[i];
      if (kw === q) continue;
      if (kw.startsWith(q)) prefix.push(kw);
      else if (kw.indexOf(q) !== -1) contains.push(kw);
      if (prefix.length >= 4 && contains.length >= 2) break;
    }
    return prefix.concat(contains).slice(0, 5);
  }

  // ── Copilot Render Helpers ──────────────────────────────────────────────────

  function renderIntentBadge(intent) {
    var map = {
      urgent:     { icon: '⚡', label: 'Urgent', cls: 'urgent' },
      price:      { icon: '💰', label: 'Price info', cls: 'price' },
      comparison: { icon: '⚖️', label: 'Comparison', cls: 'comparison' },
      device:     { icon: '📱', label: 'Device-specific', cls: 'device' }
    };
    var m = map[intent];
    if (!m) return '';
    return '<div class="mds-intent-row"><span class="mds-intent-badge mds-intent-badge--' + m.cls + '">' + m.icon + ' ' + m.label + '</span></div>';
  }

  function renderSuggestions(suggestions) {
    if (!suggestions.length) return '';
    return '<div class="mds-suggestions">'
      + suggestions.map(function (s) {
        return '<button class="mds-suggestion-item" type="button">' + esc(s) + '</button>';
      }).join('')
      + '</div>';
  }

  function renderQuoteCard(item) {
    if (!item.tiers || !item.tiers.length) return '';
    var rows = item.tiers.map(function (t) {
      return '<div class="mds-tier' + (t.popular ? ' mds-tier--popular' : '') + '">'
        + '<div class="mds-tier-label">' + esc(t.label)
        + (t.popular ? '<span class="mds-tier-badge">Recommended</span>' : '')
        + '</div>'
        + '<div class="mds-tier-price">' + esc(t.price) + '</div>'
        + '<div class="mds-tier-desc">' + esc(t.desc) + '</div>'
        + '</div>';
    }).join('');
    return '<div class="mds-quote-card"><div class="mds-quote-label">Pricing options</div>' + rows + '</div>';
  }

  function renderSocialProof(item) {
    if (!item.social) return '';
    return '<div class="mds-social-proof">✓ ' + esc(item.social) + '</div>';
  }

  function renderObjection(intent) {
    if (intent !== 'price') return '';
    return '<details class="mds-objection">'
      + '<summary class="mds-objection-toggle">💡 Too expensive? See options</summary>'
      + '<div class="mds-objection-content">'
      + '<p>Ask about our <strong>interest-free split payment</strong>, <strong>student 15% discount</strong>, or <strong>eco-grade parts</strong> — '
      + '<a href="https://wa.me/27781541350?text=Hi%2C+I+need+a+lower-cost+repair+option" target="_blank" rel="noopener">WhatsApp us</a>.</p>'
      + '</div>'
      + '</details>';
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
      + KB.filter(function (k) { return k.type === 'service'; }).slice(0, 3).map(function (item, i) { return renderResult(item, i); }).join('');
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
  var _intent = 'general';
  var _active = -1;
  var _results = [];
  var _ctxListenerAdded = false;

  function onInput(e) {
    var q = e.target.value;
    if (q === _query) return;
    _query = q;
    _active = -1;
    var body = document.getElementById('mds-results');
    if (!body) return;

    if (!q.trim()) { showQuickSearches(); return; }

    _results = doSearch(q);
    _intent = classifyIntent(q);
    var suggestions = getAutocompleteSuggestions(q);

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

    var html = '';
    if (_intent !== 'general') html += renderIntentBadge(_intent);
    if (suggestions.length) html += renderSuggestions(suggestions);
    html += _results.map(function (item, idx) { return renderResult(item, idx, _intent); }).join('');
    body.innerHTML = html;

    // Wire autocomplete suggestion clicks
    body.querySelectorAll('.mds-suggestion-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var inp = document.getElementById('mds-input');
        if (!inp) return;
        inp.value = btn.textContent;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.focus();
      });
    });

    // Wire result clicks
    body.querySelectorAll('.mds-result').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        if (ev.target.closest('a')) return;
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

    // Wire CTA clicks for Doki context hand-off (once per modal build)
    if (!_ctxListenerAdded) {
      var resultsEl = document.getElementById('mds-results');
      if (resultsEl) {
        resultsEl.addEventListener('click', function (e) {
          var cta = e.target.closest('.mds-cta');
          if (!cta) return;
          try {
            localStorage.setItem('doki-search-ctx', JSON.stringify({
              query: _query,
              serviceId: cta.dataset.svc || '',
              topPrice: cta.dataset.price || '',
              intent: _intent,
              ts: Date.now()
            }));
          } catch (ex) {}
        });
        _ctxListenerAdded = true;
      }
    }

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
