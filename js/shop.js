/* ============================================================
   MobiDokta Shop — Real Product Catalogue + Cart Engine
   Prices match the official MobiDokta Shop Catalogue.
   Student prices shown on cards; retail used for cart totals.
   Students confirm discount at time of collection.
   ============================================================ */

/* ── Product Catalogue ── */
const PRODUCTS = [

  /* ══ SCREEN PROTECTION & CASES ══ */
  { id:'sc-001', cat:'screen', name:'Tempered Glass — Standard',        sub:'Universal 9H hardness',                   price:50,   priceS:40,   icon:'shield',        color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'',        img:'img/Screen protector guard iphone transparent clear reinforced strong glass.jpg' },
  { id:'sc-002', cat:'screen', name:'Tempered Glass — Full-Cover 3D',   sub:'Edge-to-edge coverage',                   price:100,  priceS:80,   icon:'shield',        color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'Popular' },
  { id:'sc-003', cat:'screen', name:'Tempered Glass — Privacy',         sub:'Anti-spy, blocks side views',             price:100,  priceS:80,   icon:'eye-off',       color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'',        img:'img/Anti-Spy Privacy Screen Protector iPhone and Android.webp' },
  { id:'sc-004', cat:'screen', name:'Tempered Glass — Samsung / Other', sub:'Fits most Samsung & Android',             price:50,   priceS:40,   icon:'shield',        color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'' },
  { id:'sc-005', cat:'screen', name:'Camera Lens Protector',            sub:'Tempered glass lens guard',               price:89,   priceS:70,   icon:'aperture',      color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'',        img:'img/iphone Camera Lens protector.avif' },
  { id:'sc-006', cat:'screen', name:'Clear Case (TPU)',                 sub:'Crystal clear, anti-yellow formula',      price:99,   priceS:80,   icon:'smartphone',    color:'linear-gradient(135deg,#1a1a2e,#2d2d4e)', badge:'',        img:'img/Apple Transparent Pouch.webp' },
  { id:'sc-007', cat:'screen', name:'Silicone Soft-Touch Case',         sub:'Smooth premium-feel, Apple logo finish',  price:70,   priceS:60,   icon:'smartphone',    color:'linear-gradient(135deg,#1a1a2e,#2d2d4e)', badge:'',        img:'img/Apple watch with logo.webp' },
  { id:'sc-008', cat:'screen', name:'Rugged / Armor Case',              sub:'Military drop-test certified',            price:100,  priceS:80,   icon:'shield-check',  color:'linear-gradient(135deg,#1a1a2e,#2d2d4e)', badge:'' },
  { id:'sc-009', cat:'screen', name:'Wallet / Flip Case',               sub:'Card slots + kickstand',                  price:199,  priceS:160,  icon:'credit-card',   color:'linear-gradient(135deg,#1a1a2e,#2d2d4e)', badge:'' },
  { id:'sc-010', cat:'screen', name:'Privacy Screen Protector — Ceramic', sub:'Ultra-hard ceramic, dual-angle anti-spy', price:129, priceS:100,  icon:'eye-off',       color:'linear-gradient(135deg,#0f2044,#1a3a6e)', badge:'Premium', img:'img/Ceramic Anti-Spy Privacy Screen Protector.webp' },
  { id:'sc-011', cat:'screen', name:'Silicone Case — MagSafe Compatible', sub:'Liquid silicone, Apple emboss, MagSafe',  price:149, priceS:120,  icon:'smartphone',    color:'linear-gradient(135deg,#1a1a2e,#2d2d4e)', badge:'',        img:'img/Apple logo pouch Magsafe liquid silicone.avif' },

  /* ══ CABLES ══ */
  { id:'cb-001', cat:'cables', name:'Lightning Cable — Basic',          sub:'Charge & sync, standard duty',            price:50,   priceS:40,   icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'',        img:'img/image-22.webp' },
  { id:'cb-002', cat:'cables', name:'Lightning Cable — 2m',             sub:'Extra-long 2m reach, charge & sync',      price:100,  priceS:80,   icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'',        img:'img/iphone Cable USB to Ligthning 2m.webp' },
  { id:'cb-003', cat:'cables', name:'Lightning Cable — MFi Fast-Charge',sub:'Apple certified, rapid charging',         price:150,  priceS:120,  icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'Popular' },
  { id:'cb-004', cat:'cables', name:'USB-C to Lightning (1m)',           sub:'Fast charge iPhone from USB-C adapter',   price:129,  priceS:100,  icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'',        img:'img/Type C to Ligthning cable iPhone.jpeg' },
  { id:'cb-005', cat:'cables', name:'USB-C Cable — Braided (2m)',       sub:'Heavy-duty, 2m reach',                    price:169,  priceS:140,  icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'' },
  { id:'cb-006', cat:'cables', name:'USB-C to USB-C 60W Cable',         sub:'Both ends USB-C, fast charge',            price:199,  priceS:160,  icon:'zap',    color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'' },
  { id:'cb-007', cat:'cables', name:'Micro-USB Cable',                  sub:'Standard charge & data, universal',       price:79,   priceS:60,   icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'' },
  { id:'cb-008', cat:'cables', name:'3-in-1 Charging Cable',            sub:'Lightning + USB-C + Micro-USB in one',    price:149,  priceS:120,  icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'Handy' },
  { id:'cb-009', cat:'cables', name:'Lightning Cable — 2m (Alt)',        sub:'2m USB-A to Lightning, daily use',        price:99,   priceS:80,   icon:'cable',  color:'linear-gradient(135deg,#5c2800,#a04a00)', badge:'',        img:'img/iphone cable 2m USB to ligthning.webp' },

  /* ══ CHARGER HEADS ══ */
  { id:'ch-003', cat:'chargers', name:'Charger Head 20W USB-C PD — Fast', sub:'Rapid charge — phone in under 30 min',  price:150,  priceS:120,  icon:'plug-zap', color:'linear-gradient(135deg,#3a1a00,#7c3a00)', badge:'Popular', img:'img/Charger 20W (Apple Compatible).png' },
  { id:'ch-004', cat:'chargers', name:'Charger Head 30W USB-C PD',        sub:'Super-fast for phones & tablets',       price:250,  priceS:210,  icon:'plug-zap', color:'linear-gradient(135deg,#3a1a00,#7c3a00)', badge:'',        img:'img/Apple 30W adapter (Android Compatible).jpeg' },

  /* ══ POWER & AUDIO ══ */
  { id:'pa-001', cat:'power', name:'Power Bank 10,000mAh',               sub:'Compact — charges phone 2×',             price:150,  priceS:120,  icon:'battery-charging', color:'linear-gradient(135deg,#0d3320,#1a5c38)', badge:'' },
  { id:'pa-002', cat:'power', name:'Power Bank 20,000mAh',               sub:'High capacity — charges laptop too',     price:250,  priceS:210,  icon:'battery-full',     color:'linear-gradient(135deg,#0d3320,#1a5c38)', badge:'Popular' },
  { id:'pa-003', cat:'power', name:'Power Bank 20,000mAh Fast-Charge',   sub:'PD fast-charge + cables included',       price:300,  priceS:250,  icon:'battery-charging', color:'linear-gradient(135deg,#0d3320,#1a5c38)', badge:'' },
  { id:'pa-004', cat:'power', name:'Wired Earphones (3.5mm)',             sub:'Standard jack, in-line mic',             price:99,   priceS:80,   icon:'headphones',       color:'linear-gradient(135deg,#2d0a3a,#4e1a6e)', badge:'',        img:'img/wired Earphones (3.5mm aux jack).jpg' },
  { id:'pa-005', cat:'power', name:'Wired Earphones (USB-C/Lightning)',   sub:'Digital connector, hi-fi drivers',       price:124,  priceS:100,  icon:'headphones',       color:'linear-gradient(135deg,#2d0a3a,#4e1a6e)', badge:'',        img:'img/Wired headsets Apple iPhone 15 (Android Compatible).jpeg' },
  { id:'pa-006', cat:'power', name:'TWS Earbuds — Entry',                 sub:'True wireless, good isolation',          price:199,  priceS:160,  icon:'headphones',       color:'linear-gradient(135deg,#2d0a3a,#4e1a6e)', badge:'',        img:'img/TWS Earbuds.jpg' },
  { id:'pa-007', cat:'power', name:'TWS Earbuds — Premium',               sub:'ANC, 30hr battery, superior sound',      price:349,  priceS:290,  icon:'headphones',       color:'linear-gradient(135deg,#2d0a3a,#4e1a6e)', badge:'Best Sound', img:'img/TWS Earbuds Premium Black.avif' },

  /* ══ DIY SCREENS — fit it yourself, 6-month warranty ══ */
  { id:'ds-001', cat:'diy', name:'DIY Screen — iPhone 8 / SE',           sub:'Part only · fit yourself & save',        price:449,  priceS:380,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY SCREEN iPhone 8_SE.webp' },
  { id:'ds-002', cat:'diy', name:'DIY Screen — iPhone X',                sub:'Part only · fit yourself & save',        price:699,  priceS:590,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone X.jpg' },
  { id:'ds-003', cat:'diy', name:'DIY Screen — iPhone XR',               sub:'Part only · fit yourself & save',        price:599,  priceS:500,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-004', cat:'diy', name:'DIY Screen — iPhone XS',               sub:'Part only · fit yourself & save',        price:749,  priceS:630,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone XS.png' },
  { id:'ds-005', cat:'diy', name:'DIY Screen — iPhone XS Max',           sub:'Part only · fit yourself & save',        price:849,  priceS:720,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone XS Max.png' },
  { id:'ds-006', cat:'diy', name:'DIY Screen — iPhone 11',               sub:'Part only · fit yourself & save',        price:549,  priceS:470,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'Popular' },
  { id:'ds-007', cat:'diy', name:'DIY Screen — iPhone 11 Pro',           sub:'Part only · fit yourself & save',        price:999,  priceS:840,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-008', cat:'diy', name:'DIY Screen — iPhone 11 Pro Max',       sub:'Part only · fit yourself & save',        price:1099, priceS:930,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-009', cat:'diy', name:'DIY Screen — iPhone 12 / 12 Pro',      sub:'Part only · fit yourself & save',        price:649,  priceS:570,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-010', cat:'diy', name:'DIY Screen — iPhone 12 Pro Max',       sub:'Part only · fit yourself & save',        price:1099, priceS:930,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-011', cat:'diy', name:'DIY Screen — iPhone 13',               sub:'Part only · fit yourself & save',        price:999,  priceS:840,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-012', cat:'diy', name:'DIY Screen — iPhone 13 Pro',           sub:'Part only · fit yourself & save',        price:1299, priceS:1100, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone 13 Pro.png' },
  { id:'ds-013', cat:'diy', name:'DIY Screen — iPhone 13 Pro Max',       sub:'Part only · fit yourself & save',        price:1499, priceS:1270, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone 13 ProMax.jpg' },
  { id:'ds-014', cat:'diy', name:'DIY Screen — iPhone 14 / 14 Plus',     sub:'Part only · fit yourself & save',        price:1099, priceS:930,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/iphone 14 14 plus back and compare.avif' },
  { id:'ds-015', cat:'diy', name:'DIY Screen — iPhone 14 Pro',           sub:'Part only · fit yourself & save',        price:1699, priceS:1440, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-016', cat:'diy', name:'DIY Screen — iPhone 14 Pro Max',       sub:'Part only · fit yourself & save',        price:1899, priceS:1610, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone 14 ProMax.png' },
  { id:'ds-017', cat:'diy', name:'DIY Screen — iPhone 15 / 15 Plus',     sub:'Part only · fit yourself & save',        price:1399, priceS:1180, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/DIY Screen iPhone 15 Plus.png' },
  { id:'ds-018', cat:'diy', name:'DIY Screen — iPhone 15 Pro',           sub:'Part only · fit yourself & save',        price:1899, priceS:1610, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/iphone 15 15 plus back and compare.avif' },
  { id:'ds-019', cat:'diy', name:'DIY Screen — iPhone 15 Pro Max',       sub:'Part only · fit yourself & save',        price:2199, priceS:1860, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-020', cat:'diy', name:'DIY Screen — iPhone 16 / 16 Plus',     sub:'Part only · fit yourself & save',        price:1599, priceS:1350, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'',        img:'img/iphone 16 16 plus back and compare.avif' },
  { id:'ds-021', cat:'diy', name:'DIY Screen — iPhone 16 Pro',           sub:'Part only · fit yourself & save',        price:2199, priceS:1860, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-022', cat:'diy', name:'DIY Screen — iPhone 16 Pro Max',       sub:'Part only · fit yourself & save',        price:2499, priceS:2120, icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },
  { id:'ds-023', cat:'diy', name:'DIY Screen — Samsung A-series',        sub:'Part only · fit yourself & save',        price:799,  priceS:670,  icon:'monitor', color:'linear-gradient(135deg,#2a0000,#5a1010)', badge:'' },

  /* ══ DIY BATTERIES — 6-month warranty ══ */
  { id:'db-001', cat:'diy', name:'DIY Battery — iPhone 8',               sub:'OEM-grade · 6-month warranty',           price:399,  priceS:330,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-002', cat:'diy', name:'DIY Battery — iPhone X / XS',          sub:'OEM-grade · 6-month warranty',           price:449,  priceS:380,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-003', cat:'diy', name:'DIY Battery — iPhone XR',              sub:'OEM-grade · 6-month warranty',           price:449,  priceS:380,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-004', cat:'diy', name:'DIY Battery — iPhone XS Max',          sub:'OEM-grade · 6-month warranty',           price:499,  priceS:420,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-005', cat:'diy', name:'DIY Battery — iPhone 11',              sub:'OEM-grade · 6-month warranty',           price:449,  priceS:380,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'Popular' },
  { id:'db-006', cat:'diy', name:'DIY Battery — iPhone 11 Pro',          sub:'OEM-grade · 6-month warranty',           price:499,  priceS:420,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-007', cat:'diy', name:'DIY Battery — iPhone 11 Pro Max',      sub:'OEM-grade · 6-month warranty',           price:549,  priceS:460,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-008', cat:'diy', name:'DIY Battery — iPhone 12 / 12 Pro',     sub:'OEM-grade · 6-month warranty',           price:499,  priceS:420,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-009', cat:'diy', name:'DIY Battery — iPhone 12 Pro Max',      sub:'OEM-grade · 6-month warranty',           price:599,  priceS:500,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-010', cat:'diy', name:'DIY Battery — iPhone 13',              sub:'OEM-grade · 6-month warranty',           price:599,  priceS:500,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-011', cat:'diy', name:'DIY Battery — iPhone 13 Pro',          sub:'OEM-grade · 6-month warranty',           price:649,  priceS:550,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-012', cat:'diy', name:'DIY Battery — iPhone 13 Pro Max',      sub:'OEM-grade · 6-month warranty',           price:699,  priceS:590,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-013', cat:'diy', name:'DIY Battery — iPhone 14 / 14 Plus',    sub:'OEM-grade · 6-month warranty',           price:649,  priceS:550,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-014', cat:'diy', name:'DIY Battery — iPhone 14 Pro / Pro Max',sub:'OEM-grade · 6-month warranty',           price:749,  priceS:630,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-015', cat:'diy', name:'DIY Battery — iPhone 15 / 15 Plus',    sub:'OEM-grade · 6-month warranty',           price:699,  priceS:590,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-016', cat:'diy', name:'DIY Battery — iPhone 15 Pro / Pro Max',sub:'OEM-grade · 6-month warranty',           price:849,  priceS:720,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-017', cat:'diy', name:'DIY Battery — iPhone 16 series',       sub:'OEM-grade · 6-month warranty',           price:899,  priceS:760,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'db-018', cat:'diy', name:'DIY Battery — Samsung (Common)',        sub:'OEM-grade · 6-month warranty',           price:449,  priceS:380,  icon:'battery', color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },

  /* ══ DIY BACK GLASS — 6-month warranty ══ */
  { id:'bg-001', cat:'diy', name:'DIY Back Glass — iPhone 8 / SE',       sub:'Rear panel only · 6-month warranty',     price:299,  priceS:250,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-002', cat:'diy', name:'DIY Back Glass — iPhone X / XS',       sub:'Rear panel only · 6-month warranty',     price:349,  priceS:290,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-003', cat:'diy', name:'DIY Back Glass — iPhone XR',           sub:'Rear panel only · 6-month warranty',     price:349,  priceS:290,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-004', cat:'diy', name:'DIY Back Glass — iPhone 11',           sub:'Rear panel only · 6-month warranty',     price:399,  priceS:330,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-005', cat:'diy', name:'DIY Back Glass — iPhone 11 Pro / Max', sub:'Rear panel only · 6-month warranty',     price:499,  priceS:420,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-006', cat:'diy', name:'DIY Back Glass — iPhone 12',           sub:'Rear panel only · 6-month warranty',     price:399,  priceS:330,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-007', cat:'diy', name:'DIY Back Glass — iPhone 12 Pro / Max', sub:'Rear panel only · 6-month warranty',     price:549,  priceS:460,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-008', cat:'diy', name:'DIY Back Glass — iPhone 13',           sub:'Rear panel only · 6-month warranty',     price:449,  priceS:380,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-009', cat:'diy', name:'DIY Back Glass — iPhone 13 Pro / Max', sub:'Rear panel only · 6-month warranty',     price:599,  priceS:500,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-010', cat:'diy', name:'DIY Back Glass — iPhone 14 / 14 Plus', sub:'Rear panel only · 6-month warranty',     price:499,  priceS:420,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-011', cat:'diy', name:'DIY Back Glass — iPhone 14 Pro / Max', sub:'Rear panel only · 6-month warranty',     price:649,  priceS:550,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-012', cat:'diy', name:'DIY Back Glass — iPhone 15 / 15 Plus', sub:'Rear panel only · 6-month warranty',     price:549,  priceS:460,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-013', cat:'diy', name:'DIY Back Glass — iPhone 15 Pro / Max', sub:'Rear panel only · 6-month warranty',     price:699,  priceS:590,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },
  { id:'bg-014', cat:'diy', name:'DIY Back Glass — iPhone 16 series',    sub:'Rear panel only · 6-month warranty',     price:699,  priceS:590,  icon:'layers', color:'linear-gradient(135deg,#001a2e,#003d6e)', badge:'' },

  /* ══ CHARGING & PORTS ══ */
  { id:'cp-001', cat:'diy', name:'iPhone 11/12/13 Charging Flex',        sub:'Charging port flex cable',               price:449,  priceS:380,  icon:'zap',   color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },
  { id:'cp-002', cat:'diy', name:'USB-C Port (Solder Type)',              sub:'For micro-soldering repair',             price:149,  priceS:120,  icon:'cpu',   color:'linear-gradient(135deg,#1a1000,#4a3000)', badge:'' },

  /* ══ TOOLS & KITS ══ */
  { id:'tk-001', cat:'tools', name:'Opening Tool Kit — Basic',            sub:'Essential pry tools for phone opening',  price:199,  priceS:160,  icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-002', cat:'tools', name:'Repair Toolkit — Pro (30+ pcs)',      sub:'Complete phone repair set',              price:499,  priceS:420,  icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'Best Value' },
  { id:'tk-003', cat:'tools', name:'Precision Screwdriver Set',           sub:'Pentalobe, Philips, Torx bits',          price:249,  priceS:210,  icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-004', cat:'tools', name:'Pry Tools / Spudger Set',             sub:'Opening picks and spudgers',             price:79,   priceS:60,   icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-005', cat:'tools', name:'Suction Cup Tool',                    sub:'Screen removal suction handle',          price:69,   priceS:50,   icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-006', cat:'tools', name:'Tweezers (ESD Anti-Static)',          sub:'ESD safe, fine-point tip',               price:99,   priceS:80,   icon:'wrench',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-007', cat:'tools', name:'Heat Pad / Opening Mat',              sub:'Softens adhesive for safe screen lift',  price:499,  priceS:420,  icon:'flame',   color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-008', cat:'tools', name:'Adhesive Strips Pack — iPhone',       sub:'Pre-cut waterproof adhesive sets',       price:99,   priceS:80,   icon:'layers',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-009', cat:'tools', name:'B-7000 Adhesive Glue',               sub:'Screen & back glass bonding glue',       price:89,   priceS:70,   icon:'droplets',color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-010', cat:'tools', name:'Screen Adhesive (Assorted)',          sub:'Assorted sizes, waterproof',             price:119,  priceS:100,  icon:'layers',  color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'' },
  { id:'tk-011', cat:'tools', name:'DIY Screen Kit — iPhone 11',         sub:'Screen + tools + adhesive in one box',   price:799,  priceS:670,  icon:'package', color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'Kit Deal' },
  { id:'tk-012', cat:'tools', name:'DIY Screen Kit — iPhone 12',         sub:'Screen + tools + adhesive in one box',   price:999,  priceS:840,  icon:'package', color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'Kit Deal' },
  { id:'tk-013', cat:'tools', name:'DIY Battery Kit — iPhone 11',        sub:'Battery + tools + adhesive in one box',  price:699,  priceS:590,  icon:'package', color:'linear-gradient(135deg,#1c1c1c,#3a3a3a)', badge:'Kit Deal' },

  /* ══ EXTRAS ══ */
  { id:'ex-001', cat:'extras', name:'Pop Grip / Ring Holder',             sub:'Collapsible grip, doubles as stand',     price:69,   priceS:50,   icon:'circle',     color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-002', cat:'extras', name:'USB Flash Drive 64GB',               sub:'Fast USB 3.0, compact design',           price:159,  priceS:130,  icon:'hard-drive', color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-003', cat:'extras', name:'OTG Adapter (USB-C / Lightning)',    sub:'Connect USB drives & accessories',       price:89,   priceS:70,   icon:'plug',       color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-004', cat:'extras', name:'SIM Ejector Tool',                   sub:'Steel pin — pack of 5',                  price:29,   priceS:20,   icon:'circle-dot', color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-005', cat:'extras', name:'Phone Cleaning Kit',                 sub:'Microfibre cloth + 100ml spray',         price:119,  priceS:100,  icon:'sparkles',   color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-006', cat:'extras', name:'AirPods Silicone Case',              sub:'Dustproof protective sleeve',            price:99,   priceS:80,   icon:'headphones', color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
  { id:'ex-007', cat:'extras', name:'Cable Organiser / Clips',            sub:'Velcro ties, keeps cables tidy',         price:59,   priceS:50,   icon:'package',    color:'linear-gradient(135deg,#0a2a2a,#1a4a4a)', badge:'' },
];

/* ── Shipping options ── */
const SHIPPING_OPTIONS = [
  { key:'collect',    icon:'map-pin',    label:'Collect in-Store',        sub:'Shop 6, Madeira Isles, Danville',              eta:'Ready same day',      cost:0,   free700:false },
  { key:'local_std',  icon:'truck',      label:'Local Standard',          sub:'Pretoria area delivery',                       eta:'2–4 hrs, same day',   cost:35,  free700:true  },
  { key:'local_pri',  icon:'zap',        label:'Local Priority',          sub:'Pretoria area — UberSend / Bolt speed',        eta:'20 min – 1 hr',       cost:100, free700:false },
  { key:'uber',       icon:'navigation', label:'UberSend / Bolt Send',    sub:'You book driver — we hand over at the shop',   eta:'Real-time ETA',       cost:null,free700:false },
  { key:'nation_std', icon:'package',    label:'Nationwide Standard',     sub:'Courier · 2–3 business days',                 eta:'2–3 business days',   cost:150, free700:true  },
  { key:'nation_pri', icon:'rocket',     label:'Nationwide Priority',     sub:'Priority courier, arrives sooner',             eta:'1–2 business days',   cost:200, free700:false },
];

/* ── Cart Drawer HTML (injected into every page that loads shop.js) ── */
(function injectCartDrawer() {
  if (document.querySelector('.cart-drawer')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart-overlay-bg" onclick="MobiCart.closeDrawer()"></div>
    <aside class="cart-drawer" aria-label="Shopping cart">
      <div class="cart-drawer-header">
        <div class="cart-drawer-title">
          <i data-lucide="shopping-bag" class="icon-sm"></i>
          <span>Your Cart</span>
          <span class="cart-badge" hidden>0</span>
        </div>
        <button type="button" class="cart-drawer-close" onclick="MobiCart.closeDrawer()" aria-label="Close cart">
          <i data-lucide="x" class="icon-sm"></i>
        </button>
      </div>
      <div class="cart-drawer-items"></div>
      <div class="cart-ship-panel">
        <div class="cart-ship-label">Delivery method</div>
        <div class="cart-ship-list" id="cart-ship-list"></div>
      </div>
      <div class="cart-drawer-footer">
        <div class="cart-free-bar" id="cart-free-bar" hidden></div>
        <div class="cart-drawer-total-row cart-subtotal-row">
          <span>Subtotal</span>
          <strong class="cart-drawer-subtotal-val">R0</strong>
        </div>
        <div class="cart-drawer-total-row cart-ship-row">
          <span>Shipping</span>
          <strong class="cart-ship-cost-val">Free</strong>
        </div>
        <div class="cart-drawer-total-row cart-grandtotal-row">
          <span>Total</span>
          <strong class="cart-drawer-total-val">R0</strong>
        </div>
        <p class="cart-stu-note">Student? Mention it when you collect — 15% off automatically.</p>
        <button type="button" onclick="MobiCart.whatsappCheckout()" class="btn-cart-wa">
          <i data-lucide="message-circle" class="icon-sm"></i> Order via WhatsApp
        </button>
        <a href="./pay.html" class="btn-cart-pay">
          <i data-lucide="credit-card" class="icon-sm"></i> Pay Online
        </a>
        <a href="./shop.html" class="btn-cart-browse">Browse more →</a>
      </div>
    </aside>
  `);
})();

/* ── Cart Engine ── */
const MobiCart = {
  items: [],
  selectedShipping: 'collect',

  init() {
    try { this.items = JSON.parse(localStorage.getItem('md_cart') || '[]'); } catch { this.items = []; }
    this.updateBadge();
    this.renderDrawer();
    document.querySelectorAll('.cart-icon-btn').forEach(btn => {
      btn.addEventListener('click', () => this.openDrawer());
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
  },

  add(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    const existing = this.items.find(i => i.id === id);
    if (existing) existing.qty++;
    else this.items.push({ id: product.id, name: product.name, price: product.price, priceS: product.priceS, qty: 1 });
    this.save();
    this.updateBadge();
    this.renderDrawer();
    this.openDrawer();
    this._toast('Added to cart');
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    this.updateBadge();
    this.renderDrawer();
  },

  setQty(id, qty) {
    if (qty < 1) { this.remove(id); return; }
    const item = this.items.find(i => i.id === id);
    if (item) { item.qty = qty; this.save(); this.updateBadge(); this.renderDrawer(); }
  },

  total()  { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
  count()  { return this.items.reduce((s, i) => s + i.qty, 0); },
  save()   { localStorage.setItem('md_cart', JSON.stringify(this.items)); },

  setShipping(key) {
    this.selectedShipping = key;
    this.renderDrawer();
  },

  shippingCost() {
    const opt = SHIPPING_OPTIONS.find(o => o.key === this.selectedShipping);
    if (!opt || opt.cost === null) return 0;
    if (opt.free700 && this.total() >= 700) return 0;
    return opt.cost;
  },

  grandTotal() { return this.total() + this.shippingCost(); },

  updateBadge() {
    const n = this.count();
    document.querySelectorAll('.cart-badge').forEach(b => { b.textContent = n; b.hidden = n === 0; });
  },

  openDrawer() {
    document.querySelector('.cart-drawer')?.classList.add('open');
    document.querySelector('.cart-overlay-bg')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    document.querySelector('.cart-drawer')?.classList.remove('open');
    document.querySelector('.cart-overlay-bg')?.classList.remove('open');
    document.body.style.overflow = '';
  },

  renderDrawer() {
    const body        = document.querySelector('.cart-drawer-items');
    const subtotalEl  = document.querySelector('.cart-drawer-subtotal-val');
    const shipCostEl  = document.querySelector('.cart-ship-cost-val');
    const totalEl     = document.querySelector('.cart-drawer-total-val');
    const shipList    = document.getElementById('cart-ship-list');
    const freeBar     = document.getElementById('cart-free-bar');
    if (!body) return;

    if (!this.items.length) {
      body.innerHTML = `
        <div class="cart-empty-state">
          <i data-lucide="shopping-bag" style="width:48px;height:48px;opacity:0.3"></i>
          <p>Your cart is empty</p>
          <a href="./shop.html" class="btn btn-secondary btn-sm">Browse Shop</a>
        </div>`;
    } else {
      body.innerHTML = this.items.map(item => `
        <div class="cart-drawer-item">
          <div class="cdi-info">
            <div class="cdi-name">${item.name}</div>
            <div class="cdi-unit">R${item.price.toLocaleString()} retail &nbsp;·&nbsp; R${(item.priceS||Math.round(item.price*0.85)).toLocaleString()} student</div>
          </div>
          <div class="cdi-controls">
            <button type="button" class="qty-btn" onclick="MobiCart.setQty('${item.id}',${item.qty-1})">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="MobiCart.setQty('${item.id}',${item.qty+1})">+</button>
          </div>
          <div class="cdi-sub">R${(item.price*item.qty).toLocaleString()}</div>
          <button type="button" class="cdi-remove" onclick="MobiCart.remove('${item.id}')" aria-label="Remove">
            <i data-lucide="x" style="width:12px;height:12px"></i>
          </button>
        </div>`).join('');
    }

    // Shipping options
    if (shipList) {
      const sub = this.total();
      shipList.innerHTML = SHIPPING_OPTIONS.map(opt => {
        const effective = (opt.cost === null) ? null : (opt.free700 && sub >= 700 ? 0 : opt.cost);
        const costHtml = opt.cost === null
          ? `<span class="cart-ship-cost">You pay driver</span>`
          : effective === 0
            ? `<span class="cart-ship-cost cart-ship-free">Free</span>`
            : `<span class="cart-ship-cost">R${effective}</span>`;
        return `<label class="cart-ship-opt${this.selectedShipping === opt.key ? ' active' : ''}">
          <input type="radio" name="shipping" value="${opt.key}"${this.selectedShipping === opt.key ? ' checked' : ''} onchange="MobiCart.setShipping('${opt.key}')">
          <div class="cart-ship-opt-info">
            <span class="cart-ship-opt-name">${opt.label}</span>
            <span class="cart-ship-opt-sub">${opt.sub}</span>
          </div>
          <div class="cart-ship-opt-right">${costHtml}<span class="cart-ship-eta">${opt.eta}</span></div>
        </label>`;
      }).join('');
    }

    // Free shipping progress bar
    if (freeBar) {
      const sub = this.total();
      if (this.items.length && sub < 700) {
        const pct = Math.min(100, Math.round((sub / 700) * 100));
        freeBar.innerHTML = `<div class="cart-free-bar-text">Add <strong>R${(700 - sub).toLocaleString()}</strong> more for free standard shipping</div><div class="cart-free-bar-track"><div class="cart-free-bar-fill" style="width:${pct}%"></div></div>`;
        freeBar.hidden = false;
      } else if (this.items.length && sub >= 700) {
        freeBar.innerHTML = `<div class="cart-free-bar-unlocked">Free standard shipping unlocked!</div>`;
        freeBar.hidden = false;
      } else {
        freeBar.hidden = true;
      }
    }

    const sub  = this.total();
    const ship = this.shippingCost();
    const opt  = SHIPPING_OPTIONS.find(o => o.key === this.selectedShipping);
    if (subtotalEl) subtotalEl.textContent = 'R' + sub.toLocaleString();
    if (shipCostEl) {
      if (opt?.cost === null) shipCostEl.textContent = '(you arrange)';
      else if (ship === 0)    shipCostEl.textContent = 'Free';
      else                    shipCostEl.textContent = 'R' + ship.toLocaleString();
    }
    if (totalEl) totalEl.textContent = 'R' + this.grandTotal().toLocaleString();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  },

  whatsappCheckout() {
    if (!this.items.length) return;
    const lines = this.items.map(i => `• ${i.name} ×${i.qty} — R${(i.price*i.qty).toLocaleString()}`).join('\n');
    const opt  = SHIPPING_OPTIONS.find(o => o.key === this.selectedShipping);
    const ship = this.shippingCost();
    const shipLine = opt?.cost === null
      ? `Delivery: ${opt.label} — I'll arrange the driver (${opt.eta})`
      : `Delivery: ${opt?.label} — ${ship === 0 ? 'Free' : 'R' + ship.toLocaleString()} (${opt?.eta})`;
    const msg = `Hi MobiDokta! I'd like to order:\n\n${lines}\n\nSubtotal: R${this.total().toLocaleString()}\n${shipLine}\nTotal: R${this.grandTotal().toLocaleString()}\n\n(I'll confirm if student discount applies at collection)\n\nPlease confirm stock & payment. Thank you!`;
    window.open('https://wa.me/27781541350?text=' + encodeURIComponent(msg), '_blank');
  },

  _toast(msg) {
    document.querySelector('.md-cart-toast')?.remove();
    const t = document.createElement('div');
    t.className = 'md-cart-toast';
    t.innerHTML = `<i data-lucide="check-circle" style="width:15px;height:15px"></i> ${msg}`;
    document.body.appendChild(t);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    requestAnimationFrame(() => { requestAnimationFrame(() => { t.classList.add('show'); }); });
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2200);
  }
};

/* ── Product Card Renderer (used by shop.html) ── */
function renderShopGrid(cat) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  grid.innerHTML = list.length
    ? list.map(p => `
        <article class="product-card" data-cat="${p.cat}">
          <div class="product-card-img pci-${p.cat}${p.img ? ' pci-has-photo' : ''}">
            ${p.img
              ? `<img src="${p.img}" alt="${p.name}" class="pci-photo" loading="lazy">`
              : `<i data-lucide="${p.icon}" class="pci-icon"></i>`}
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          </div>
          <div class="product-card-body">
            <h3 class="product-name">${p.name}</h3>
            <p class="product-sub">${p.sub}</p>
            <div class="product-footer">
              <div class="product-pricing">
                <span class="product-price">R${p.price.toLocaleString()}</span>
                <span class="product-price-stu">R${p.priceS.toLocaleString()} <span class="stu-tag">S</span></span>
              </div>
              <button type="button" class="btn-add-cart" onclick="MobiCart.add('${p.id}')">
                <i data-lucide="plus" style="width:13px;height:13px"></i> Add
              </button>
            </div>
          </div>
        </article>`).join('')
    : `<div class="shop-empty"><i data-lucide="package" style="width:48px;height:48px;opacity:0.25"></i><p>No products in this category yet.</p></div>`;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => MobiCart.init());
