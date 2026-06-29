# MobiDokta — Photo Master List & File Naming Guide

## How to use this guide
1. Take or source the photo
2. Rename it **exactly** as shown (lowercase, hyphens, correct extension)
3. Drop it into the folder shown (`img/` unless stated otherwise)
4. The website displays it automatically — no code changes needed

---

## FOLDER STRUCTURE

```
MOBIDOKTA WEBSITE/
├── assets/           ← logo and favicon only
└── img/              ← ALL photos go here
```

---

## STATUS KEY

| Symbol | Meaning |
|--------|---------|
| ✅ | File exists and is live on site |
| ⚠️ | File exists but nothing links to it — dead weight |
| 🔴 | BROKEN — site references this file but it is missing |
| 📸 | NEW — shoot this, name it exactly, drop it in `img/` |

---

## PRIORITY 1 — BROKEN RIGHT NOW

| File name → drop in `img/` | Why it's broken | What to create |
|---|---|---|
| `og-cover.png` | 🔴 Referenced on **every page** for WhatsApp / Twitter / Facebook link previews | 1200×630px branded graphic — MobiDokta logo centred on dark background with orange tagline. Export from Canva. |

> This single image shows whenever anyone shares a MobiDokta link. Without it every share shows a broken thumbnail.

---

## SECTION A — ASSETS FOLDER (`assets/`)

| File name | Status | Notes |
|---|---|---|
| `mobidokta-logo.png` | ✅ | Transparent background logo — used in all nav bars |

---

## SECTION B — HOMEPAGE (`index.html`) → `img/`

### Hero Slideshow — 5 full-screen backgrounds (min 1920×1080px, under 300KB)

| File name | Status | Subject |
|---|---|---|
| `portfolio-iphone.png` | ✅ | iPhone on bench — Slide 1 |
| `hero-android.png` | ✅ | Android device — Slide 2 |
| `idx-port-macbookuse.jpg` | ✅ | MacBook in use — Slide 3 |
| `idx-svc-water_hero_use.jpg` | ✅ | Water damage repair in progress — Slide 4 |
| `idx-svc-battery_hero_use.jpg` | ✅ | Battery swap in progress — Slide 5 |

### Services Grid — square thumbnails (800×600px, under 120KB)

| File name | Status | Subject |
|---|---|---|
| `idx-svc-screen.jpg` | ✅ | Cracked screen or technician replacing screen |
| `idx-svc-battery.jpg` | ✅ | Battery removed from phone |
| `idx-svc-camera.jpg` | ✅ | Camera module or lens |
| `idx-svc-water.jpg` | ✅ | Water-damaged phone or ultrasonic cleaner |
| `idx-precision-repair.jpg` | ✅ | Close-up of tweezers/precision tools on phone internals |

### Live Portfolio Gallery (scrolling motion cards)

| File name | Status | Subject |
|---|---|---|
| `Before iphone 15 promax damaged.jpg` | ✅ | Cracked iPhone 15 Pro Max — before repair |
| `port-iphone15pm-after.jpg` | 📸 | **Repaired iPhone 15 Pro Max — after** ← rename existing `iphone 15 ProMax After picture.jpg` to this |
| `idx-port-macbook.jpg` | ✅ | MacBook being cleaned/repaired |
| `idx-port-logistics.jpg` | ✅ | Device packaged ready for return |

> **Quick win:** You already have the "after" photo. Rename `iphone 15 ProMax After picture.jpg` → `port-iphone15pm-after.jpg` and drop it back in `img/`.

### Founder / About

| File name | Status | Subject |
|---|---|---|
| `Founder Picture.jpg` | ✅ | Founder headshot |
| 📸 `team-workshop.jpg` | NEW | Shop interior — bench, tools on wall, shelving |
| 📸 `team-front-shop.jpg` | NEW | Exterior / entrance of MobiDokta in Danville |

---

## SECTION C — SERVICE PAGES → `img/`

### Apple Repairs (`apple.html`)

| File name | Status | Subject |
|---|---|---|
| `portfolio-iphone.png` | ✅ | Used as the page hero split image |
| 📸 `svc-apple-screen-replace.jpg` | NEW | iPhone screen being replaced — hands and tools in frame |
| 📸 `svc-apple-battery-replace.jpg` | NEW | iPhone battery swap with adhesive strip visible |
| 📸 `svc-apple-before-after.jpg` | NEW | Cracked vs repaired iPhone side by side |

### Android Repairs (`android.html`)

| File name | Status | Subject |
|---|---|---|
| `hero-android.png` | ✅ | Used as the page hero split image |
| 📸 `svc-android-screen.jpg` | NEW | Samsung/Android screen replacement in progress |
| 📸 `svc-android-battery.jpg` | NEW | Android battery removed from device |

### Computer / MacBook Repairs (`computers.html`)

| File name | Status | Subject |
|---|---|---|
| `portfolio-macbook.png` | ✅ | Used as the page hero split image |
| 📸 `svc-mac-internals.jpg` | NEW | MacBook open with internals visible |
| 📸 `svc-mac-keyboard.jpg` | NEW | MacBook keyboard or trackpad repair |

---

## SECTION D — SHOP PAGE (`shop.html`) → `img/`

The shop currently uses icon + gradient for product cards. Drop in real product photos using these exact names and the cards will switch to displaying them automatically.

### Screen Protection & Cases (cat: screen) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-sc-glass-standard.jpg` | Tempered glass flat on surface or applied to phone |
| 📸 `shop-sc-glass-3d.jpg` | Full-cover 3D glass showing edge-to-edge fit |
| 📸 `shop-sc-glass-privacy.jpg` | Privacy glass — shoot from the side to show the blackout effect |
| 📸 `shop-sc-glass-samsung.jpg` | Tempered glass on a Samsung device |
| 📸 `shop-sc-lens.jpg` | Camera lens protector installed, showing circular ring on iPhone |
| 📸 `shop-sc-case-clear.jpg` | Clear TPU case — phone inside, showing transparency |
| 📸 `shop-sc-case-silicone.jpg` | Silicone case — 2-3 colour options fanned out |
| 📸 `shop-sc-case-rugged.jpg` | Rugged/armor case showing chunky corner protection |
| 📸 `shop-sc-case-wallet.jpg` | Wallet flip case open showing card slots and kickstand |

### Cables (cat: cables) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-cb-lightning-basic.jpg` | Lightning cable coiled or plugged into iPhone |
| 📸 `shop-cb-lightning-braided.jpg` | Braided cable close-up showing weave texture |
| 📸 `shop-cb-lightning-mfi.jpg` | MFi fast-charge Lightning cable |
| 📸 `shop-cb-usbc-1m.jpg` | USB-C 1m cable |
| 📸 `shop-cb-usbc-braided.jpg` | Braided USB-C 2m |
| 📸 `shop-cb-usbc-to-usbc.jpg` | USB-C to USB-C 60W — both connectors visible |
| 📸 `shop-cb-microusb.jpg` | Micro-USB cable |
| 📸 `shop-cb-3in1.jpg` | 3-in-1 cable showing all three connector heads fanned out |

### Chargers (cat: chargers) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-ch-5w.jpg` | Basic 5W USB-A wall plug |
| 📸 `shop-ch-12w-dual.jpg` | Dual-port 12W charger showing both USB ports |
| 📸 `shop-ch-20w-pd.jpg` | 20W USB-C PD charger |
| 📸 `shop-ch-25w-samsung.jpg` | Samsung 25W Super Fast Charge head |
| 📸 `shop-ch-35w-gan.jpg` | 35W GaN dual-port — emphasise compact size vs output |

### Power & Audio (cat: power) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-pw-bank-10k.jpg` | 10,000mAh power bank with cable plugged in |
| 📸 `shop-pw-bank-20k.jpg` | 20,000mAh power bank |
| 📸 `shop-pw-earphones.jpg` | Wired earphones — 3.5mm jack and in-line mic visible |
| 📸 `shop-pw-tws-basic.jpg` | Basic TWS buds + charging case open |
| 📸 `shop-pw-tws-premium.jpg` | Premium TWS buds (ANC model) showing silicon tips |

### DIY Parts (cat: diy) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-diy-screen-iphone8.jpg` | iPhone 8 replacement screen (in packaging or laid flat) |
| 📸 `shop-diy-screen-iphonex.jpg` | iPhone X/XS OLED screen |
| 📸 `shop-diy-screen-iphone11.jpg` | iPhone 11 LCD screen |
| 📸 `shop-diy-screen-iphone12.jpg` | iPhone 12 OLED screen |
| 📸 `shop-diy-screen-iphone13.jpg` | iPhone 13 series screen |
| 📸 `shop-diy-screen-iphone14.jpg` | iPhone 14 series screen |
| 📸 `shop-diy-screen-iphone15.jpg` | iPhone 15 series screen |
| 📸 `shop-diy-screen-iphone16.jpg` | iPhone 16 series screen |
| 📸 `shop-diy-battery-iphone.jpg` | iPhone replacement battery with adhesive strip |
| 📸 `shop-diy-battery-samsung.jpg` | Samsung replacement battery |
| 📸 `shop-diy-backglass.jpg` | iPhone back glass panel |
| 📸 `shop-diy-port-charging.jpg` | Charging port flex cable |

### Tools (cat: tools) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-tl-opening-kit.jpg` | Pry tools, spudgers, picks laid out flat |
| 📸 `shop-tl-pro-toolkit.jpg` | Full pro toolkit — precision screwdrivers and bits spread out |
| 📸 `shop-tl-bundle-basic.jpg` | Basic bundle contents arranged |
| 📸 `shop-tl-bundle-pro.jpg` | Pro bundle (toolkit + extras) all pieces visible |

### Extras (cat: extras) — square 800×800px

| File name | Subject |
|---|---|
| 📸 `shop-ex-popgrip.jpg` | Pop socket on back of phone — shown extended |
| 📸 `shop-ex-usb-drive.jpg` | USB flash drive |
| 📸 `shop-ex-otg.jpg` | OTG adapter showing USB-C and USB-A ends |
| 📸 `shop-ex-sim-tool.jpg` | SIM ejector tool next to a SIM tray |

---

## SECTION E — APPL3CITY PAGE (`applecity.html`) → `img/`

One showcase photo per device category — shown as the category header banner (1200×600px, under 150KB).

| File name | Subject |
|---|---|
| 📸 `ac-hero-iphone.jpg` | Multiple iPhones arranged on a clean surface or display stand |
| 📸 `ac-hero-macbook.jpg` | MacBook open on a desk, clean presentation |
| 📸 `ac-hero-samsung.jpg` | Samsung Galaxy phones in a row or fan arrangement |
| 📸 `ac-hero-watch.jpg` | Apple Watches displayed on bands or wrist |
| 📸 `ac-hero-tablet.jpg` | Galaxy Tab or iPad on a surface |

### Individual top-seller device photos (optional — high trust impact)

| File name | Device |
|---|---|
| 📸 `ac-iphone-15-promax.jpg` | iPhone 15 Pro Max |
| 📸 `ac-iphone-14-pro.jpg` | iPhone 14 Pro |
| 📸 `ac-iphone-13.jpg` | iPhone 13 |
| 📸 `ac-macbook-air-m1.jpg` | MacBook Air M1 |
| 📸 `ac-samsung-s24.jpg` | Galaxy S24 |
| 📸 `ac-watch-series9.jpg` | Apple Watch Series 9 |

---

## SECTION F — COMMUNITY / BLOG (`community.html`) → `img/`

### Existing blog images — wired in ✅

| File name | Status | Blog article |
|---|---|---|
| `comm-iphone16.jpg` | ✅ | iPhone repairability article |
| `comm-battery.jpg` | ✅ | Battery performance article |
| `comm-security.jpg` | ✅ | Data security article |

### Exist but not yet linked to any card — ⚠️

| File name | Status | Suggested blog title |
|---|---|---|
| `edu-bad-habits.jpg` | ⚠️ UNUSED | "5 habits destroying your phone battery" |
| `edu-best-devices.jpg` | ⚠️ UNUSED | "Best phones under R5,000 in 2026" |
| `edu-buying-guide.jpg` | ⚠️ UNUSED | "Pre-owned iPhone buying guide: what to check" |
| `edu-repair-report.jpg` | ⚠️ UNUSED | "Most common repairs we see at MobiDokta" |

### New articles — shoot or source these

| File name | Blog article |
|---|---|
| 📸 `edu-screen-cost.jpg` | "iPhone 15 screen repair cost Pretoria 2026" |
| 📸 `edu-water-damage.jpg` | "Water damage: the first 5 things to do" |
| 📸 `edu-battery-health.jpg` | "How to check your iPhone battery health" |
| 📸 `edu-preowned-checklist.jpg` | "Pre-owned phone checklist before you buy" |

---

## SECTION G — PORTFOLIO BEFORE / AFTER GALLERY → `img/`

More repair proof shots for the homepage gallery carousel.

| File name | Subject |
|---|---|
| 📸 `port-samsung-before.jpg` | Cracked Samsung screen |
| 📸 `port-samsung-after.jpg` | Repaired Samsung — same model and angle |
| 📸 `port-water-before.jpg` | Water-damaged logic board with corrosion |
| 📸 `port-water-after.jpg` | Cleaned and repaired board |
| 📸 `port-battery-swollen.jpg` | Swollen battery removed from device |
| 📸 `port-macbook-before.jpg` | MacBook with visible damage |
| 📸 `port-macbook-after.jpg` | MacBook repaired and functioning |

---

## ORPHANED FILES — safe to delete from `img/`

These exist in `img/` but nothing on the site links to them.

| File name | Action |
|---|---|
| `099c6e1f-...jpeg` | Delete — UUID-named, no HTML reference |
| `20e15cce-...jpeg` | Delete |
| `28f2db1e-...jpeg` | Delete |
| `73602ea5-...jpeg` | Delete |
| `84ddcda1-...jpeg` | Delete |
| `b9202678-...jpeg` | Delete |
| `da4b78d9-...jpeg` | Delete |
| `bg-process.png` | Delete |
| `icon-apple-brand.png` | Delete |
| `icon-cart-selection.png` | Delete |
| `icon-free-solutions.png` | Delete |
| `icon-service-selection.png` | Delete |
| `icon-services-selected.png` | Delete |
| `icon-verification.png` | Delete |
| `portfolio-misc-1.png` | Delete — replace with a real repair photo |
| `portfolio-misc-2.png` | Delete |
| `service-battery.png` | Delete — `idx-svc-battery.jpg` is used instead |
| `service-camera.png` | Delete |
| `service-screen.png` | Delete |
| `service-water.png` | Delete |
| `comm-iphone16.jpeg` | Delete — `.jpg` version is active |
| `idx-port-macbook` (no extension) | Delete — `.jpg` version exists |
| `idx-svc-battery_use_hero_.jpg` | Keep — useful variant of the hero shot |
| `iphone 15 ProMax After picture.jpg` | **RENAME** → `port-iphone15pm-after.jpg` then drop back in `img/` |

---

## PHOTO SPECS — QUICK REFERENCE

| Use | Dimensions | Max size | Format |
|---|---|---|---|
| OG / Social share cover | 1200×630px | 200KB | `.png` or `.jpg` |
| Hero / slideshow background | 1920×1080px min | 300KB | `.jpg` |
| Service card thumbnails | 800×600px | 120KB | `.jpg` |
| Shop product cards (square) | 800×800px | 100KB | `.jpg` |
| Appl3City category banners | 1200×600px | 150KB | `.jpg` |
| Blog / community thumbnails | 800×533px | 100KB | `.jpg` |
| Portfolio before/after | 800×600px | 120KB | `.jpg` |
| Logo | any | — | `.png` (transparent background) |
| QR codes / icons | 256×256px | — | `.png` |

**Optimise before dropping in.** Free tool: [squoosh.app](https://squoosh.app) — drag in, choose MozJPEG, quality 75-80, download.

---

## RECOMMENDED SHOOT ORDER

1. `og-cover.png` — broken on every page right now, highest priority
2. Rename `iphone 15 ProMax After picture.jpg` → `port-iphone15pm-after.jpg` — already have this photo
3. Appl3City category heroes (`ac-hero-*.jpg`) — biggest trust impact for the new page
4. Shop product photos (`shop-*.jpg`) — conversion impact on the shop
5. Before/after portfolio gallery — social proof for the homepage
6. Service page photos (`svc-*.jpg`) — credibility on repair pages
7. Team and workshop (`team-*.jpg`) — trust and personality
