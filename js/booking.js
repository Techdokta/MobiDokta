/* ============================================
   MobiDokta — Booking Logic
   ============================================ */

(function() {
  let currentStep = 1;
  let booking = { brand: null, model: null, cart: [], totalPrice: 0, totalDuration: 0, date: null, time: null, location: 'Danville Studio (Madeira Isles, Pretoria)', address: '' };

  const baseServices = [
    // ── Apple / iPhone Services ──
    { id: 'iphone-oem', icon: 'smartphone', name: 'Screen Transplant (OEM)', desc: 'Factory-quality OEM Original Grade', price: 6500, duration: 30, brand: 'Apple', dynType: 'oem' },
    { id: 'iphone-eco', icon: 'smartphone', name: 'Screen Transplant (Eco)', desc: 'Quality Aftermarket Eco Grade', price: 3700, duration: 30, brand: 'Apple', dynType: 'eco' },
    { id: 'iphone-glass-only', icon: 'layers', name: 'Screen Glass Replacement', desc: 'Top glass only — OLED/LCD stays intact. UV-cured OCA adhesive. Saves R200–R1,500 vs full swap.', price: 399, duration: 60, brand: 'Apple' },
    { id: 'iphone-battery', icon: 'battery-full', name: 'Battery Resuscitation', desc: 'Health restored to 100%', price: 1399, duration: 30, brand: 'Apple', dynType: 'batt' },
    { id: 'iphone-port', icon: 'plug', name: 'Charging Port Repair', desc: 'Lightning or USB-C port — board-level replacement', price: 750, duration: 30, brand: 'Apple', dynType: 'port' },
    { id: 'iphone-water', icon: 'droplets', name: 'Water Damage Recovery', desc: 'Ultrasonic board clean & component recovery — Free diagnosis', price: 799, duration: 90, brand: 'Apple' },
    { id: 'iphone-camera', icon: 'camera', name: 'Camera Repair', desc: 'Front, rear, autofocus or lens module swap', price: 649, duration: 45, brand: 'Apple' },
    { id: 'iphone-back', icon: 'layers', name: 'Back Glass & Frame', desc: 'Shattered back panel or bent frame restoration', price: 549, duration: 60, brand: 'Apple', dynType: 'back' },
    { id: 'iphone-soft', icon: 'cpu', name: 'Software / OS Repair', desc: 'iOS recovery & firmware flash', price: 650, duration: 30, brand: 'Apple' },

    // ── Samsung Services ──
    { id: 'samsung-screen', icon: 'smartphone', name: 'AMOLED Specialist Screen', desc: 'AMOLED restoration surgery', price: 6500, duration: 30, brand: 'Samsung', dynType: 'oem' },
    { id: 'samsung-battery', icon: 'battery-full', name: 'Battery Resuscitation', desc: 'Health restored to 100%', price: 1499, duration: 30, brand: 'Samsung', dynType: 'batt' },
    { id: 'samsung-port', icon: 'plug', name: 'Charging Port Repair', desc: 'USB-C port board-level replacement', price: 699, duration: 30, brand: 'Samsung' },
    { id: 'samsung-water', icon: 'droplets', name: 'Water Damage Recovery', desc: 'Ultrasonic clean & corrosion repair', price: 1200, duration: 90, brand: 'Samsung' },
    { id: 'samsung-soft', icon: 'cpu', name: 'Software / OS Repair', desc: 'Android recovery & flash', price: 650, duration: 30, brand: 'Samsung' },

    // ── Huawei Services ──
    { id: 'huawei-screen', icon: 'smartphone', name: 'Screen Transplant (OEM)', desc: 'Factory-quality OEM Screen', price: 4500, duration: 30, brand: 'Huawei', dynType: 'oem' },
    { id: 'huawei-battery', icon: 'battery-full', name: 'Battery Resuscitation', desc: 'Health restored to 100%', price: 1299, duration: 30, brand: 'Huawei', dynType: 'batt' },
    { id: 'huawei-port', icon: 'plug', name: 'Charging Port Repair', desc: 'USB-C port board-level replacement', price: 650, duration: 30, brand: 'Huawei' },
    { id: 'huawei-soft', icon: 'cpu', name: 'Software / OS Repair', desc: 'HarmonyOS/Android recovery', price: 650, duration: 30, brand: 'Huawei' },

    // ── MacBook & Laptops ──
    { id: 'laptop-screen', icon: 'laptop', name: 'Screen Replacement', desc: 'Retina LCD, IPS & OLED specialists', price: 1800, duration: 60, brand: 'Laptop' },
    { id: 'laptop-battery', icon: 'battery-full', name: 'Battery Replacement', desc: 'MacBook battery health fully restored', price: 1500, duration: 45, brand: 'Laptop' },
    { id: 'laptop-thermal', icon: 'thermometer', name: 'Thermal ICU Service', desc: 'Thermal paste refresh + fan deep clean', price: 400, duration: 45, brand: 'Laptop' },
    { id: 'laptop-keyboard', icon: 'keyboard', name: 'Keyboard Replacement', desc: 'Sticky keys, liquid spill or dead keys', price: 1200, duration: 60, brand: 'Laptop' },
    { id: 'laptop-water', icon: 'droplets', name: 'Liquid Damage Recovery', desc: 'Ultrasonic board clean & chip-level repair', price: 1400, duration: 90, brand: 'Laptop' },
    { id: 'laptop-board', icon: 'cpu', name: 'Logic Board Repair', desc: 'No-power, kernel panic & micro-soldering', price: 1800, duration: 120, brand: 'Laptop' },
    { id: 'laptop-soft', icon: 'code', name: 'macOS / OS Reinstall', desc: 'Clean reinstall, data migration, optimisation', price: 550, duration: 60, brand: 'Laptop' },

    // ── Consoles ──
    { id: 'console-hdmi', icon: 'monitor', name: 'HDMI Port Repair', desc: 'Micro-soldered 4K signal port — PS5, Xbox, PS4', price: 1250, duration: 90, brand: 'Console' },
    { id: 'console-heat', icon: 'thermometer', name: 'Overheating & Fan Repair', desc: 'Thermal paste + deep clean — stops shutdown', price: 550, duration: 60, brand: 'Console' },
    { id: 'console-disc', icon: 'disc', name: 'Disc Drive Repair', desc: 'Not reading, grinding or random eject', price: 850, duration: 60, brand: 'Console' },
    { id: 'console-drift', icon: 'joystick', name: 'Controller Stick Drift', desc: 'Hall-effect analog upgrade — the permanent fix', price: 550, duration: 45, brand: 'Console' },
    { id: 'console-power', icon: 'zap', name: 'No Power / Won\'t Turn On', desc: 'PSU diagnosis & board-level power repair', price: 950, duration: 90, brand: 'Console' },
    { id: 'console-usb', icon: 'usb', name: 'USB & Charging Port', desc: 'Switch USB-C, PS5 USB hub or Xbox controller port', price: 650, duration: 45, brand: 'Console' },

    // ── iPad & Apple Watch / Gadgets ──
    { id: 'gadget-screen', icon: 'tablet', name: 'Screen Replacement', desc: 'iPad, Apple Watch or tablet display', price: 1800, duration: 60, brand: 'Gadgets', dynType: 'oem' },
    { id: 'gadget-battery', icon: 'battery-full', name: 'Battery Replacement', desc: 'Full charge health restored to 100%', price: 1000, duration: 45, brand: 'Gadgets', dynType: 'batt' },
    { id: 'gadget-port', icon: 'plug', name: 'Charging Port Repair', desc: 'USB-C, Lightning or watch magnetic port', price: 700, duration: 30, brand: 'Gadgets' },
    { id: 'gadget-water', icon: 'droplets', name: 'Water Damage Recovery', desc: 'Ultrasonic clean & corrosion treatment', price: 1200, duration: 90, brand: 'Gadgets' },
    { id: 'gadget-diag', icon: 'search', name: 'Full Diagnostic', desc: 'Device assessment + written quote', price: 350, duration: 30, brand: 'Gadgets' },

    // ── DJI & Drones ──
    { id: 'dji-gimbal', icon: 'camera', name: 'Camera / Gimbal Repair', desc: 'Lens, sensor & gimbal stabilisation fault', price: 1200, duration: 60, brand: 'DJI' },
    { id: 'dji-motor', icon: 'settings', name: 'Motor Replacement', desc: 'Dead or damaged flight motor swap', price: 750, duration: 45, brand: 'DJI' },
    { id: 'dji-shell', icon: 'shield', name: 'Shell & Arm Repair', desc: 'Crash damage — body, arm & propeller guard', price: 850, duration: 60, brand: 'DJI' },
    { id: 'dji-remote', icon: 'radio', name: 'Remote Controller Fix', desc: 'Joystick drift, screen or charging port', price: 650, duration: 30, brand: 'DJI' },
    { id: 'dji-diag', icon: 'search', name: 'Full Drone Diagnostic', desc: 'Flight test, sensor & gimbal assessment', price: 450, duration: 45, brand: 'DJI' },

    // ── Specialty (shown for all brands) ──
    { id: 'gsm-check', icon: 'search', name: 'GSM CheckForMe™', desc: 'Pre-purchase inspection & report', price: 350, duration: 20 },
    { id: 'tech-at-door', icon: 'home', name: 'Request A Techie™', desc: 'On-site home repair call-out', price: 149, duration: 0 },
    { id: 'teletech-consult', icon: 'video', name: 'TeleTech Consultation', desc: 'Remote video call with a senior engineer', price: 199, duration: 30 },
    { id: 'practical-solution', icon: 'life-buoy', name: 'Free Practical Solutions', desc: 'Remote advice & WhatsApp troubleshooting', price: 0, duration: 15 }
  ];

  const models = {
    Apple: [
      'iPhone 17 Pro Max','iPhone 17 Pro','iPhone 17 Plus','iPhone 17',
      'iPhone Air (2025) ⭐ Rare Service',
      'iPhone 16 Pro Max','iPhone 16 Pro','iPhone 16 Plus','iPhone 16','iPhone 16e',
      'iPhone 15 Pro Max','iPhone 15 Pro','iPhone 15 Plus','iPhone 15',
      'iPhone 14 Pro Max','iPhone 14 Pro','iPhone 14 Plus','iPhone 14',
      'iPhone 13 Pro Max','iPhone 13 Pro','iPhone 13','iPhone 13 Mini',
      'iPhone 12 Pro Max','iPhone 12 Pro','iPhone 12','iPhone 12 Mini',
      'iPhone 11 Pro Max','iPhone 11 Pro','iPhone 11',
      'iPhone XS Max','iPhone XS','iPhone X','iPhone XR',
      'iPhone 8 Plus','iPhone 8','iPhone SE (2022)','iPhone SE (2020)','iPhone SE',
      'Other (Type manually...)'
    ],
    Samsung: [
      'Galaxy S25 Ultra','Galaxy S25+','Galaxy S25',
      'Galaxy S24 Ultra','Galaxy S24+','Galaxy S24',
      'Galaxy S23 Ultra','Galaxy S23+','Galaxy S23',
      'Galaxy Z Fold 6','Galaxy Z Fold 5','Galaxy Z Fold 4',
      'Galaxy Z Flip 6','Galaxy Z Flip 5','Galaxy Z Flip 4',
      'Galaxy A55','Galaxy A54','Galaxy A35','Galaxy A34','Galaxy A25','Galaxy A24','Galaxy A15','Galaxy A14',
      'Other (Type manually...)'
    ],
    Huawei: [
      'Mate XS2 ⭐ Rare Service','Mate X3 ⭐ Rare Service','Mate X5 ⭐ Rare Service',
      'Pura 70 Ultra','Pura 70 Pro','Pura 70',
      'Mate 60 Pro+','Mate 60 Pro','Mate 60',
      'P60 Pro','P60','Mate 50 Pro','P50 Pro',
      'Nova 12 Pro','Nova 12','Nova 11 Pro','Nova 11','Nova 10',
      'Y9a','MatePad Pro 13.2','MatePad 11',
      'Other (Type manually...)'
    ],
    MacBook: [
      'MacBook Pro M4 (16")','MacBook Pro M4 (14")','MacBook Pro M3 (16")','MacBook Pro M3 (14")',
      'MacBook Pro M2 (16")','MacBook Pro M2 (14")','MacBook Pro M1 (16")','MacBook Pro M1 (14")',
      'MacBook Air M3','MacBook Air M2','MacBook Air M1',
      'Intel MacBook Pro (2019–2020)','Intel MacBook Pro (2017–2018)','Intel MacBook Air',
      'iMac 24" M3 (2023)','iMac 24" M1 (2021)','iMac 27" Intel','iMac 21.5" Intel',
      'Mac Mini M4','Mac Mini M2','Mac Mini M1',
      'Other (Type manually...)'
    ],
    Console: [
      'PS5 (Disc Edition)','PS5 Digital Edition',
      'PS4 Pro','PS4 Slim','PS4',
      'PS3 (all models)',
      'Xbox Series X','Xbox Series S',
      'Xbox One X','Xbox One S','Xbox One',
      'Nintendo Switch OLED','Nintendo Switch','Nintendo Switch Lite',
      'DualSense Controller','DualShock 4','Xbox Wireless Controller','Joy-Con (L/R)',
      'Other (Type manually...)'
    ],
    Gadgets: [
      'Apple Watch Ultra 2','Apple Watch Series 10','Apple Watch Series 9','Apple Watch Series 8','Apple Watch SE (2nd gen)','Apple Watch SE',
      'iPad Pro 13" M4','iPad Pro 11" M4','iPad Pro 12.9" M2','iPad Pro 11" M2',
      'iPad Air M2 13"','iPad Air M2 11"','iPad Air M1',
      'iPad 10th Gen','iPad 9th Gen','iPad Mini 7','iPad Mini 6',
      'Samsung Galaxy Tab S10 Ultra','Samsung Galaxy Tab S10+','Samsung Galaxy Tab S9 Ultra','Samsung Galaxy Tab S9+','Samsung Galaxy Tab S9','Samsung Galaxy Tab A9+','Samsung Galaxy Tab A9',
      'Microsoft Surface Pro 11','Microsoft Surface Pro 10','Microsoft Surface Laptop 6','Microsoft Surface Go',
      'AirPods Pro 2nd Gen','AirPods Max','Samsung Galaxy Buds 3 Pro','Samsung Galaxy Buds 3','Sony WH-1000XM5',
      'GoPro Hero 13','GoPro Hero 12','GoPro Hero 11',
      'Garmin Fenix 8','Garmin Fenix 7','Samsung Galaxy Watch 7','Samsung Galaxy Watch 6',
      'Other (Type manually...)'
    ],
    Exclusive: [
      '— iPhone Air Models —',
      'iPhone Air (2025)',
      '— Huawei Foldables —',
      'Huawei Mate XS2 (Outward Fold)',
      'Huawei Mate X3 (Outward Fold)',
      'Huawei Mate X5 (Outward Fold)',
      '— Samsung Foldables —',
      'Galaxy Z Fold 6',
      'Galaxy Z Fold 5',
      'Galaxy Z Flip 6',
      'Galaxy Z Flip 5',
      '— Other Exclusives —',
      'OnePlus Open',
      'Google Pixel Fold',
      'Motorola Razr+ (2024)',
      'Other (Type manually...)'
    ],
    DJI: [
      'DJI Mini 4 Pro','DJI Mini 3 Pro','DJI Mini 3','DJI Mini 2 SE','DJI Mini 2',
      'DJI Air 3S','DJI Air 3','DJI Air 2S',
      'DJI Mavic 3 Pro','DJI Mavic 3 Classic','DJI Mavic 3',
      'DJI Avata 2','DJI Avata','DJI FPV',
      'DJI Osmo Action 5 Pro','DJI Osmo Action 4','DJI Osmo Action 3',
      'DJI Osmo Pocket 3','DJI Osmo Pocket 2',
      'DJI RC 2 Remote','DJI RC-N2 Remote','DJI RC-N1 Remote','DJI Smart Controller',
      'Other (Type manually...)'
    ]
  };

  // Retail replacement cost reference (approx SA market — used for value comparison bar)
  const retailPrices = {
    'iPhone Air (2025) ⭐ Rare Service': 27999,
    'iPhone 17 Pro Max': 29999, 'iPhone 17 Pro': 27499, 'iPhone 17 Plus': 22999, 'iPhone 17': 20999,
    'iPhone 16 Pro Max': 25999, 'iPhone 16 Pro': 22999, 'iPhone 16 Plus': 19999, 'iPhone 16': 18499,
    'iPhone 15 Pro Max': 24999, 'iPhone 15 Pro': 21999, 'iPhone 15 Plus': 18999, 'iPhone 15': 16499,
    'iPhone 14 Pro Max': 21999, 'iPhone 14 Pro': 18999, 'iPhone 14 Plus': 15999, 'iPhone 14': 14499,
    'iPhone 13 Pro Max': 17999, 'iPhone 13 Pro': 15999, 'iPhone 13': 12999, 'iPhone 13 Mini': 10999,
    'iPhone 12 Pro Max': 14999, 'iPhone 12 Pro': 12999, 'iPhone 12': 10499, 'iPhone 12 Mini': 9499,
    'iPhone 11 Pro Max': 12999, 'iPhone 11 Pro': 10999, 'iPhone 11': 8999,
    'iPhone XS Max': 7999, 'iPhone XS': 6999, 'iPhone X': 5999, 'iPhone XR': 4999
  };

  const pricingMap = {
    // ── iPhone Air — ultra-thin chassis, specialist tooling required ──
    // oem = July Sale price · wasOem = regular price · eco = quality aftermarket · port/back = per PDF
    'iPhone Air (2025) ⭐ Rare Service': { oem: 4999, wasOem: 5999, eco: 3500, batt: 1699, wasBatt: 1999, port: 1899, back: 2999 },
    'iPhone 16e': { oem: 2599, wasOem: 3199, eco: 1820, batt: 999, wasBatt: 1199, port: 1199, back: 1499 },

    // ── iPhone 17 ──
    'iPhone 17 Pro Max': { oem: 4699, wasOem: 5599, eco: 3300, batt: 1799, wasBatt: 2099, port: 1999, back: 2999 },
    'iPhone 17 Pro':     { oem: 4299, wasOem: 5199, eco: 3000, batt: 1699, wasBatt: 1999, port: 1899, back: 2799 },
    'iPhone 17 Plus':    { oem: 3799, wasOem: 4599, eco: 2650, batt: 1599, wasBatt: 1849, port: 1799, back: 2599 },
    'iPhone 17':         { oem: 3799, wasOem: 4599, eco: 2650, batt: 1599, wasBatt: 1849, port: 1799, back: 2599 },

    // ── iPhone 16 ──
    'iPhone 16 Pro Max': { oem: 3499, wasOem: 4199, eco: 2450, batt: 1499, wasBatt: 1749, port: 1699, back: 2399 },
    'iPhone 16 Pro':     { oem: 3199, wasOem: 3849, eco: 2240, batt: 1349, wasBatt: 1599, port: 1599, back: 2199 },
    'iPhone 16 Plus':    { oem: 2799, wasOem: 3349, eco: 1960, batt: 1249, wasBatt: 1449, port: 1449, back: 1999 },
    'iPhone 16':         { oem: 2599, wasOem: 3149, eco: 1820, batt: 1199, wasBatt: 1399, port: 1399, back: 1899 },

    // ── iPhone 15 ──
    'iPhone 15 Pro Max': { oem: 3199, wasOem: 3849, eco: 2240, batt: 1299, wasBatt: 1499, port: 1549, back: 2199 },
    'iPhone 15 Pro':     { oem: 2799, wasOem: 3349, eco: 1960, batt: 1199, wasBatt: 1399, port: 1449, back: 1999 },
    'iPhone 15 Plus':    { oem: 2499, wasOem: 2999, eco: 1750, batt: 1149, wasBatt: 1299, port: 1349, back: 1799 },
    'iPhone 15':         { oem: 2299, wasOem: 2749, eco: 1610, batt: 1099, wasBatt: 1249, port: 1299, back: 1699 },

    // ── iPhone 14 ──
    'iPhone 14 Pro Max': { oem: 2799, wasOem: 3349, eco: 1960, batt: 1199, wasBatt: 1399, port: 1449, back: 1999 },
    'iPhone 14 Pro':     { oem: 2499, wasOem: 2999, eco: 1750, batt: 1099, wasBatt: 1299, port: 1349, back: 1799 },
    'iPhone 14 Plus':    { oem: 2199, wasOem: 2649, eco: 1540, batt: 1049, wasBatt: 1199, port: 1249, back: 1599 },
    'iPhone 14':         { oem: 1999, wasOem: 2399, eco: 1400, batt: 999,  wasBatt: 1149, port: 1199, back: 1499 },

    // ── iPhone 13 ──
    'iPhone 13 Pro Max': { oem: 1699, wasOem: 2049, eco: 1190, batt: 849,  wasBatt: 979,  port: 1099, back: 1399 },
    'iPhone 13 Pro':     { oem: 1499, wasOem: 1799, eco: 1050, batt: 799,  wasBatt: 919,  port: 999,  back: 1299 },
    'iPhone 13':         { oem: 1199, wasOem: 1449, eco: 840,  batt: 749,  wasBatt: 869,  port: 899,  back: 1199 },
    'iPhone 13 Mini':    { oem: 1099, wasOem: 1299, eco: 770,  batt: 749,  wasBatt: 869,  port: 899,  back: 1099 },

    // ── iPhone 12 ──
    'iPhone 12 Pro Max': { oem: 1249, wasOem: 1499, eco: 875,  batt: 799,  wasBatt: 919,  port: 699,  back: 799 },
    'iPhone 12 Pro':     { oem: 999,  wasOem: 1199, eco: 700,  batt: 699,  wasBatt: 799,  port: 649,  back: 799 },
    'iPhone 12':         { oem: 799,  wasOem: 999,  eco: 560,  batt: 649,  wasBatt: 749,  port: 579,  back: 799 },
    'iPhone 12 Mini':    { oem: 799,  wasOem: 999,  eco: 560,  batt: 599,  wasBatt: 699,  port: 579,  back: 799 },

    // ── iPhone 11 ──
    'iPhone 11 Pro Max': { oem: 1149, wasOem: 1399, eco: 805,  batt: 699,  wasBatt: 799,  port: 649,  back: 899 },
    'iPhone 11 Pro':     { oem: 999,  wasOem: 1199, eco: 700,  batt: 649,  wasBatt: 749,  port: 599,  back: 799 },
    'iPhone 11':         { oem: 749,  wasOem: 899,  eco: 525,  batt: 599,  wasBatt: 699,  port: 549,  back: 699 },

    // ── iPhone X / XS / XR ──
    'iPhone XS Max': { oem: 949, wasOem: 1149, eco: 665, batt: 699, wasBatt: 799, port: 599, back: 799 },
    'iPhone XS':     { oem: 849, wasOem: 999,  eco: 595, batt: 649, wasBatt: 749, port: 549, back: 749 },
    'iPhone X':      { oem: 799, wasOem: 949,  eco: 560, batt: 649, wasBatt: 749, port: 549, back: 699 },
    'iPhone XR':     { oem: 699, wasOem: 849,  eco: 490, batt: 349, wasBatt: 399, port: 549, back: 699 },

    // ── iPhone 8 / 7 / SE ──
    'iPhone 8 Plus':    { oem: 699, wasOem: 849, eco: 490, batt: 399, wasBatt: 449, port: 499, back: 699 },
    'iPhone 8':         { oem: 649, wasOem: 799, eco: 455, batt: 399, wasBatt: 449, port: 499, back: 649 },
    'iPhone SE (2022)': { oem: 599, wasOem: 749, eco: 420, batt: 299, wasBatt: 349, port: 449, back: 549 },
    'iPhone SE (2020)': { oem: 599, wasOem: 749, eco: 420, batt: 299, wasBatt: 349, port: 449, back: 549 },
    'iPhone SE':        { oem: 599, wasOem: 749, eco: 420, batt: 299, wasBatt: 349, port: 449, back: 549 },

    // ── Samsung ──
    'Galaxy S25 Ultra': { oem: 7500, batt: 1799 },
    'Galaxy S25+':      { oem: 6200, batt: 1599 },
    'Galaxy S25':       { oem: 5500, batt: 1499 },
    'Galaxy S24 Ultra': { oem: 6500, batt: 1699 },
    'Galaxy S24+':      { oem: 5500, batt: 1499 },
    'Galaxy S24':       { oem: 5000, batt: 1399 },
    'Galaxy S23 Ultra': { oem: 5000, batt: 1599 },
    'Galaxy S23+':      { oem: 4300, batt: 1399 },
    'Galaxy S23':       { oem: 4300, batt: 1299 },
    'Galaxy Z Fold 6':  { oem: 7200, batt: 1999 },
    'Galaxy Z Fold 5':  { oem: 6500, batt: 1899 },
    'Galaxy Z Fold 4':  { oem: 5500, batt: 1799 },
    'Galaxy Z Flip 6':  { oem: 4500, batt: 1599 },
    'Galaxy Z Flip 5':  { oem: 3900, batt: 1499 },
    'Galaxy Z Flip 4':  { oem: 3500, batt: 1399 },
    'Galaxy A55':       { oem: 2200, batt: 999 },
    'Galaxy A54':       { oem: 1799, batt: 899 },
    'Galaxy A35':       { oem: 1799, batt: 899 },
    'Galaxy A34':       { oem: 1799, batt: 849 },
    'Galaxy A25':       { oem: 1200, batt: 799 },
    'Galaxy A24':       { oem: 1099, batt: 749 },
    'Galaxy A15':       { oem: 999,  batt: 699 },
    'Galaxy A14':       { oem: 1099, batt: 699 },

    // ── Huawei Foldables — specialist fold-screen repair, limited SA availability ──
    'Mate XS2 ⭐ Rare Service': { oem: 9500, batt: 2800 },
    'Mate X3 ⭐ Rare Service':  { oem: 10500, batt: 3000 },
    'Mate X5 ⭐ Rare Service':  { oem: 11500, batt: 3200 },

    // ── iPad ──
    'iPad Pro 13" M4':     { oem: 6500, batt: 2000 },
    'iPad Pro 11" M4':     { oem: 5200, batt: 1800 },
    'iPad Pro 12.9" M2':   { oem: 5500, batt: 1900 },
    'iPad Pro 11" M2':     { oem: 4500, batt: 1700 },
    'iPad Air M2 13"':     { oem: 4000, batt: 1500 },
    'iPad Air M2 11"':     { oem: 3200, batt: 1300 },
    'iPad Air M1':         { oem: 2800, batt: 1200 },
    'iPad 10th Gen':       { oem: 2400, batt: 1050 },
    'iPad 9th Gen':        { oem: 1800, batt: 900 },
    'iPad Mini 7':         { oem: 2800, batt: 1100 },
    'iPad Mini 6':         { oem: 2400, batt: 1000 },

    // ── Apple Watch ──
    'Apple Watch Ultra 2':     { oem: 3500, batt: 1600 },
    'Apple Watch Series 10':   { oem: 2800, batt: 1300 },
    'Apple Watch Series 9':    { oem: 2400, batt: 1200 },
    'Apple Watch Series 8':    { oem: 2000, batt: 1100 },
    'Apple Watch SE (2nd gen)': { oem: 1600, batt: 950 },
    'Apple Watch SE':           { oem: 1400, batt: 850 }
  };

  // Calendar state
  let calYear, calMonth;
  const today = new Date();
  calYear = today.getFullYear();
  calMonth = today.getMonth();

  /* ─── Step Navigation ─── */
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  nextBtn.addEventListener('click', () => {
    if (currentStep < 4) { goToStep(currentStep + 1); }
  });
  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) { goToStep(currentStep - 1); }
  });

  function goToStep(step) {
    document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step-' + step).classList.add('active');

    document.querySelectorAll('.progress-step').forEach(ps => {
      const s = parseInt(ps.dataset.step);
      ps.classList.remove('active', 'completed');
      if (s === step) ps.classList.add('active');
      else if (s < step) ps.classList.add('completed');
    });

    currentStep = step;
    prevBtn.style.display = step === 1 ? 'none' : '';
    nextBtn.style.display = step === 4 ? 'none' : '';
    validateStep();

    if (step === 2) renderServices();
    if (step === 3) renderCalendar();
    if (step === 4) populateSummary();
  }

  function validateStep() {
    let valid = false;
    switch (currentStep) {
      case 1: valid = !!booking.brand && !!booking.model; break;
      case 2: valid = booking.cart.length > 0; break;
      case 3: valid = !!booking.date && !!booking.time; break;
    }
    nextBtn.disabled = !valid;
  }

  /* ─── Step 1: Brand Selection ─── */
  document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      booking.brand = card.dataset.brand;

      const modelSelect = document.getElementById('device-model');
      const modelGroup = document.getElementById('model-group');
      const manualInput = document.getElementById('manual-model-input');
      if (manualInput) manualInput.style.display = 'none';

      modelSelect.innerHTML = '<option value="">Choose your model...</option>';
      (models[booking.brand] || []).forEach(m => {
        modelSelect.innerHTML += `<option value="${m}">${m}</option>`;
      });
      modelGroup.style.display = 'block';
      booking.model = null;
      validateStep();
    });
  });

  document.getElementById('device-model').addEventListener('change', function() {
    const manualContainer = document.getElementById('manual-model-container');
    if (this.value === 'Other (Type manually...)') {
      if (manualContainer) manualContainer.style.display = 'block';
      booking.model = ''; // Reset until they type
    } else {
      if (manualContainer) manualContainer.style.display = 'none';
      booking.model = this.value;
      if (this.value !== '') {
        // Auto-glide to Step 2
        setTimeout(() => goToStep(2), 300);
      }
    }
    validateStep();
  });

  // URL Router Initialization
  window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const pBrand = params.get('brand');
    const pModel = params.get('model');
    const pSvc = params.get('svc');
    
    if (pBrand && pModel) {
      booking.brand = pBrand;
      booking.model = pModel;
      
      // Update DOM to match URL state implicitly (hidden Step 1)
      const brandCard = document.querySelector(`.brand-card[data-brand="${pBrand}"]`);
      if (brandCard) {
        document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('selected'));
        brandCard.classList.add('selected');
        
        // Populate specific model list secretly
        const modelSelect = document.getElementById('device-model');
        modelSelect.innerHTML = '<option value="">Choose your model...</option>';
        (models[booking.brand] || []).forEach(m => {
          modelSelect.innerHTML += `<option value="${m}" ${m===pModel ? 'selected':''}>${m}</option>`;
        });
        document.getElementById('model-group').style.display = 'block';
      }

      if (pSvc) {
        // We must artificially run renderServices so activeServices arrays are ready
        renderServices();
        const targetSvc = activeServices.find(s => s.dynType === pSvc || s.id.includes(pSvc));
        if (targetSvc) {
           booking.cart.push(targetSvc);
           updateCartUI();
        }
        // Force fast-forward entirely skipping UI selection natively
        setTimeout(() => goToStep(3), 200);
      } else {
        // Just auto-glide to step 2 dynamically
        setTimeout(() => goToStep(2), 200); 
      }
    }
  });

  // Handle manual typing
  const manualInputElement = document.getElementById('manual-model-input');
  if (manualInputElement) {
    manualInputElement.addEventListener('input', function() {
      booking.model = this.value.trim();
      validateStep();
    });
  }

  const manualProceedBtn = document.getElementById('manual-proceed-btn');
  if (manualProceedBtn) {
    manualProceedBtn.addEventListener('click', () => {
      if (booking.model.length > 1) {
        goToStep(2);
      } else {
        MobiApp.toast('Please type a device model.', 'error');
      }
    });
  }

  /* ─── Step 2: Dynamic Service Generation ─── */
  let activeServices = [];

  function renderServices() {
    const serviceGrid = document.getElementById('service-grid');
    serviceGrid.innerHTML = '';

    // Value-comparison bar: show repair-vs-replace context for mapped Apple models
    const modelMap = pricingMap[booking.model] || null;
    const retail = retailPrices[booking.model] || null;
    if (modelMap && retail && modelMap.oem) {
      const savingsVsReplace = retail - modelMap.oem;
      const bar = document.createElement('div');
      bar.className = 'value-compare-bar';
      bar.innerHTML = `
        <span class="vcb-repair">Screen repair <strong>R${modelMap.oem.toLocaleString()}</strong></span>
        <span class="vcb-vs">vs</span>
        <span class="vcb-replace">New device <strong>~R${retail.toLocaleString()}</strong></span>
        <span class="vcb-save">Save ~R${savingsVsReplace.toLocaleString()}</span>
      `;
      serviceGrid.appendChild(bar);
    }

    // Deep clone and modify pricing per model map
    activeServices = baseServices.map(svc => {
      let freshSvc = { ...svc };
      if (booking.model && modelMap) {
        if (freshSvc.dynType === 'oem'  && modelMap.oem)  { freshSvc.price = modelMap.oem;  freshSvc.wasPrice = modelMap.wasOem  || null; }
        if (freshSvc.dynType === 'eco'  && modelMap.eco)  { freshSvc.price = modelMap.eco; }
        if (freshSvc.dynType === 'batt' && modelMap.batt) { freshSvc.price = modelMap.batt; freshSvc.wasPrice = modelMap.wasBatt || null; }
        if (freshSvc.dynType === 'port' && modelMap.port) { freshSvc.price = modelMap.port; }
        if (freshSvc.dynType === 'back' && modelMap.back) { freshSvc.price = modelMap.back; }
      }
      return freshSvc;
    });

    activeServices.forEach(svc => {
      // Determine expected service brand tag
      const expectedBrand = booking.brand === 'MacBook' ? 'Laptop' : booking.brand;

      // If service has a brand tag, it MUST match the selected brand exactly
      if (svc.brand && svc.brand !== expectedBrand) {
        return;
      }

      const el = document.createElement('div');
      el.className = 'service-option';
      if (booking.cart.find(s => s.id === svc.id)) el.classList.add('selected');

      el.dataset.serviceId = svc.id;

      const wasBadge = (svc.wasPrice && svc.wasPrice > svc.price)
        ? `<div class="svc-was"><del>R${svc.wasPrice.toLocaleString()}</del> <span class="svc-save-badge">Save R${(svc.wasPrice - svc.price).toLocaleString()}</span></div>`
        : '';

      el.innerHTML = `
        <div class="svc-icon"><i data-lucide="${svc.icon}" class="icon-lg" style="color:var(--accent)"></i></div>
        <h4>${svc.name}</h4>
        <p>${svc.desc}</p>
        ${wasBadge}
        <div class="svc-price">${svc.price === 0 ? 'FREE' : 'R' + svc.price.toLocaleString()}</div>
        <div class="svc-duration">~${svc.duration} min</div>
      `;
      el.addEventListener('click', () => {
        if (svc.id === 'tech-at-door') {
          const idx = booking.cart.findIndex(s => s.id.startsWith('tech-at-door'));
          if (idx > -1) {
            booking.cart.splice(idx, 1);
            el.classList.remove('selected');
            updateCartUI();
            validateStep();
            return;
          }
          const modal = document.getElementById('techie-modal');
          if (modal) modal.classList.add('active');
          window.currentTechieTrigger = el;
          window.currentTechieSvc = svc;
          return;
        }

        const idx = booking.cart.findIndex(s => s.id === svc.id);
        if (idx > -1) {
          booking.cart.splice(idx, 1);
          el.classList.remove('selected');
        } else {
          booking.cart.push(svc); // Push evaluated service with deep-copy price
          el.classList.add('selected');
        }
        updateCartUI();
        validateStep();
      });
      serviceGrid.appendChild(el);
    });
    // Re-trigger icon rendering
    if (window.lucide) lucide.createIcons();
  }

  function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');
    
    if (booking.cart.length === 0) {
      list.innerHTML = '<p style="color:var(--text-tertiary);font-size:var(--text-sm);">No services selected yet.</p>';
      totalEl.textContent = 'R0';
      booking.totalPrice = 0;
      booking.totalDuration = 0;
      return;
    }

    list.innerHTML = '';
    let total = 0;
    let duration = 0;

    booking.cart.forEach(item => {
      total += item.price;
      duration += item.duration;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">R${item.price.toLocaleString()}</span>
      `;
      list.appendChild(row);
    });

    booking.totalPrice = total;
    booking.totalDuration = duration;
    totalEl.textContent = 'R' + total.toLocaleString();

    // 40% Deposit Logic
    const depositAmount = Math.ceil(total * (window.MOBI_CONFIG ? window.MOBI_CONFIG.DEPOSIT_PERCENTAGE : 0.40));
    booking.depositAmount = depositAmount;
    
    const depositEl = document.getElementById('cart-deposit-price');
    if(depositEl) depositEl.textContent = 'R' + depositAmount.toLocaleString();

    // Auto-location logic for TeleTech
    const clinicSelect = document.getElementById('clinic-select');
    if (clinicSelect) {
      const hasRemote = booking.cart.some(item => item.id === 'teletech-consult' || item.id === 'practical-solution');
      if (hasRemote) {
        clinicSelect.value = 'Tele';
        clinicSelect.disabled = true;
      } else {
        clinicSelect.disabled = false;
        if (clinicSelect.value === 'Tele') {
          clinicSelect.value = 'Danville Studio (Madeira Isles, Pretoria)';
        }
      }
      clinicSelect.dispatchEvent(new Event('change'));
    }
  }
  
  // Initialize dynamic icons
  if (window.lucide) {
    lucide.createIcons();
  }

  document.querySelectorAll('.duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      booking.duration = parseInt(btn.dataset.duration);
    });
  });

  /* ─── Step 3: Calendar ─── */
  function renderCalendar() {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('cal-month-year').textContent = monthNames[calMonth] + ' ' + calYear;

    const daysContainer = document.getElementById('cal-days');
    daysContainer.innerHTML = '';

    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const offset = (firstDay === 0) ? 6 : firstDay - 1; // Monday start
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

    for (let i = 0; i < offset; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day disabled';
      daysContainer.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dayEl = document.createElement('div');
      dayEl.className = 'cal-day';
      dayEl.textContent = d;

      const dateObj = new Date(calYear, calMonth, d);
      const dateStr = dateObj.toISOString().split('T')[0];
      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSunday = dateObj.getDay() === 0;

      if (isPast || isSunday) {
        dayEl.classList.add('disabled');
      } else {
        dayEl.classList.add('has-slots');
        if (dateStr === new Date().toISOString().split('T')[0]) dayEl.classList.add('today');

        dayEl.addEventListener('click', () => {
          document.querySelectorAll('.cal-day').forEach(c => c.classList.remove('selected'));
          dayEl.classList.add('selected');
          booking.date = dateStr;
          showSlots(dateStr);
          validateStep();
        });
      }
      daysContainer.appendChild(dayEl);
    }
  }

  document.getElementById('cal-prev').addEventListener('click', () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderCalendar();
  });

  function showSlots(dateStr) {
    const panel = document.getElementById('slots-panel');
    const list = document.getElementById('slots-list');
    const label = document.getElementById('slot-date-label');
    panel.style.display = 'block';

    const d = new Date(dateStr);
    label.textContent = d.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' });
    list.innerHTML = '';

    const slots = MobiStore.getAvailableSlots(dateStr);
    slots.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'slot-btn' + (s.available ? '' : ' unavailable');
      btn.textContent = s.time;
      if (s.available) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          booking.time = s.time;
          validateStep();
        });
      }
      list.appendChild(btn);
    });
  }

  const clinicSelect = document.getElementById('clinic-select');
  const addressContainer = document.getElementById('address-container');
  const clientAddress = document.getElementById('client-address');
  const safetyWarning = document.getElementById('safety-warning');

  if (clinicSelect) {
    clinicSelect.addEventListener('change', function() {
      booking.location = this.value;
      const requiresAddress = ['Public Meetup', 'House Call', 'Office Call', 'Residence Call', 'Courier Option', 'Courier Collection', 'On-Site Call-Out'].includes(this.value);
      const requiresWarning = ['House Call', 'Residence Call', 'On-Site Call-Out'].includes(this.value);
      
      if (addressContainer) {
        addressContainer.style.display = requiresAddress ? 'block' : 'none';
      }
      if (safetyWarning) {
        safetyWarning.style.display = requiresWarning ? 'flex' : 'none';
      }
    });
  }

  if (clientAddress) {
    clientAddress.addEventListener('input', function() {
      booking.address = this.value.trim();
    });
  }
  /* ─── Step 4: Summary & Confirm ─── */
  function populateSummary() {
    document.getElementById('sum-device').textContent = booking.brand + ' ' + (booking.model || '');
    
    const list = document.getElementById('sum-services-list');
    list.innerHTML = '';
    booking.cart.forEach(item => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.justifyContent = 'space-between';
      row.style.fontSize = 'var(--text-sm)';
      row.style.color = 'var(--text-secondary)';
      row.innerHTML = `<span>${item.name}</span><span>R${item.price.toLocaleString()}</span>`;
      list.appendChild(row);
    });

    document.getElementById('sum-date').textContent = MobiApp.formatDate(booking.date);
    document.getElementById('sum-time').textContent = booking.time;
    let fullLocation = booking.location;
    if (booking.address) {
      fullLocation += ` (${booking.address})`;
    }
    document.getElementById('sum-location').textContent = fullLocation;
    document.getElementById('sum-cost').textContent = booking.totalPrice === 0 ? 'FREE' : MobiApp.formatRand(booking.totalPrice);
    
    const sumDepositEl = document.getElementById('sum-deposit');
    if (sumDepositEl) sumDepositEl.textContent = booking.totalPrice === 0 ? 'R0' : MobiApp.formatRand(booking.depositAmount);
  }

  // Form validation for confirm
  const nameInput = document.getElementById('cust-name');
  const phoneInput = document.getElementById('cust-phone');
  const emailInput = document.getElementById('cust-email');
  const consentCheck = document.getElementById('consent-check');
  const confirmBtn = document.getElementById('confirm-booking-btn');

  function validateConfirmForm() {
    const valid = nameInput && nameInput.value.trim().length >= 2
      && phoneInput && MobiApp.isValidPhone(phoneInput.value)
      && emailInput && MobiApp.isValidEmail(emailInput.value)
      && consentCheck && consentCheck.checked;
    if (confirmBtn) confirmBtn.disabled = !valid;
  }

  [nameInput, phoneInput, emailInput, consentCheck].forEach(el => {
    el.addEventListener('input', validateConfirmForm);
    el.addEventListener('change', validateConfirmForm);
  });

  if (confirmBtn) {
    confirmBtn.addEventListener('click', async () => {
      confirmBtn.disabled = true;
      confirmBtn.textContent = "Securing Booking...";

    // Security: Honeypot check
    const faxInput = document.getElementById('cust-fax');
    if (faxInput && faxInput.value.trim() !== '') {
      console.warn("Automated submission detected.");
      confirmBtn.textContent = "Error";
      return;
    }

    const name = MobiApp.sanitize(nameInput.value.trim());
    const phone = MobiApp.sanitize(phoneInput.value.trim());
    const email = MobiApp.sanitize(emailInput.value.trim());
    
    const issueDesc = document.getElementById('cust-issue') ? MobiApp.sanitize(document.getElementById('cust-issue').value.trim()) : '';

    // Save customer
    MobiStore.addCustomer({ name, phone, email });

    // Payload for DB
    const dbPayload = {
      brand: booking.brand,
      model: booking.model,
      issue: issueDesc,
      cart: booking.cart.map(i => i.name),
      totalPrice: booking.totalPrice,
      depositAmount: booking.depositAmount,
      date: booking.date,
      time: booking.time,
      location: booking.location + (booking.address ? ` - ${booking.address}` : ''),
      custName: name,
      custPhone: phone,
      custEmail: email
    };

    // Save booking locally
    const savedBooking = MobiStore.addBooking({
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      brand: booking.brand,
      model: booking.model,
      services: booking.cart.map(i => i.name).join(', '),
      price: booking.totalPrice,
      duration: booking.totalDuration,
      date: booking.date,
      time: booking.time,
      location: booking.location + (booking.address ? ` - ${booking.address}` : '')
    });

    // Save to Supabase Cloud Database; capture id so we can attach photos.
    let dbBookingId = null;
    if (window.insertBookingToDB) {
      dbBookingId = await window.insertBookingToDB(dbPayload);
    }

    // Upload any damage photos the customer attached. Non-blocking on failure —
    // the booking still succeeds even if uploads fail; admin will see the row without photos.
    const picsInput = document.getElementById('cust-pictures');
    const picFiles = picsInput && picsInput.files ? Array.from(picsInput.files) : [];
    if (dbBookingId && picFiles.length > 0 && window.uploadBookingAttachments) {
      try {
        const uploaded = await window.uploadBookingAttachments(dbBookingId, picFiles);
        if (uploaded.length < picFiles.length) {
          MobiApp.toast(`${uploaded.length} of ${picFiles.length} photos uploaded. Others were too large or not images.`, 'info', 5000);
        }
      } catch (e) {
        console.error('Attachment upload error:', e);
      }
    }

    MobiApp.toast('Booking secured. Your invoice is on the way.', 'success', 5000);

    if (booking.totalPrice > 0) {
      showSuccessStep(savedBooking, booking);
    } else {
      MobiApp.toast('Free diagnostic — no payment needed.', 'info');
      setTimeout(() => { window.location.href = 'support.html'; }, 1500);
    }
  });
  }

  function showSuccessStep(saved, b) {
    document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) progressBar.style.display = 'none';
    const stepNav = document.querySelector('.step-nav');
    if (stepNav) stepNav.style.display = 'none';

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const fmt = (n) => 'R' + (Number(n) || 0).toLocaleString('en-ZA');

    set('success-ref', saved.id);
    set('success-device', (`${b.brand || ''} ${b.model || ''}`).trim() || '—');
    set('success-services', b.cart.map(i => i.name).join(', ') || '—');
    set('success-when', `${b.date} at ${b.time}`);
    set('success-location', b.location + (b.address ? ` — ${b.address}` : ''));
    set('success-total', fmt(b.totalPrice));
    set('success-deposit', fmt(b.depositAmount));
    set('success-eft-ref', saved.id);

    const successStep = document.getElementById('step-success');
    if (successStep) {
      successStep.classList.add('active');
      successStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.lucide) lucide.createIcons();
  }

  /* ─── Techie Modal Logic ─── */
  const techieModal = document.getElementById('techie-modal');
  const closeTechieBtn = document.getElementById('close-techie-modal');
  
  if (closeTechieBtn) {
    closeTechieBtn.addEventListener('click', () => {
      if (techieModal) techieModal.classList.remove('active');
    });
  }

  document.querySelectorAll('.techie-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const isCourier = opt.classList.contains('courier-option');
      let svc = { ...window.currentTechieSvc };
      
      if (isCourier) {
        const courierName = opt.dataset.courier;
        svc.id = 'tech-at-door-courier-' + courierName.replace(/\s+/g, '-').toLowerCase();
        svc.name = 'Courier: ' + courierName;
        svc.desc = 'Arranging secure transit. Pricing confirmed upon dispatch.';
        svc.price = 0; // TBD
        
        const clinicSelect = document.getElementById('clinic-select');
        if (clinicSelect) {
           let courierOpt = Array.from(clinicSelect.options).find(o => o.value === 'Courier Collection');
           if (!courierOpt) {
             clinicSelect.innerHTML += `<option value="Courier Collection">Courier Collection</option>`;
           }
           clinicSelect.value = 'Courier Collection';
           clinicSelect.dispatchEvent(new Event('change'));
        }
      } else {
        const area = opt.dataset.area;
        const price = parseInt(opt.dataset.price);
        
        svc.id = 'tech-at-door-' + area.replace(/\s+/g, '-').toLowerCase();
        svc.name = 'On-site: ' + area;
        svc.price = price;
        svc.desc = price === 0 ? 'Safety & distance evaluation pending.' : 'Call-out fee for ' + area;
        
        const clinicSelect = document.getElementById('clinic-select');
        if (clinicSelect) {
           let areaOpt = Array.from(clinicSelect.options).find(o => o.value === 'On-Site Call-Out');
           if (!areaOpt) {
             clinicSelect.innerHTML += `<option value="On-Site Call-Out">On-Site Call-Out</option>`;
           }
           clinicSelect.value = 'On-Site Call-Out';
           clinicSelect.dispatchEvent(new Event('change'));
        }
      }

      booking.cart.push(svc);
      if (window.currentTechieTrigger) {
        window.currentTechieTrigger.classList.add('selected');
      }
      
      if (techieModal) techieModal.classList.remove('active');
      updateCartUI();
      validateStep();
    });
  });

})();
