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

## PRIORITY 1 — SHOOT NEXT

| File name → drop in `img/` | Status | Why it matters |
|---|---|---|
| `loc-tri-lounge.jpg` | 📸 **WIRED, waiting** | The gaming lounge and waiting area. Shows as a grey "photo coming" tile on the homepage and on `amenities.html` until it lands. Highest-value shot on the list — those sections argue this is somewhere worth spending an hour in, and the photo has to carry that. Get **seating and consoles in one frame, screens on**. |
| `loc-residence-landmark.jpg` | 📸 **WIRED, waiting** | Madeira Isles Residence, straight on. Beside the map on the homepage and amenities page. |
| `loc-residence-proximity.jpg` | 📸 **WIRED, waiting** | Residence **and** our complex in one frame — the same-management connection. |

> ✅ `og-cover.png` is **done** — 1200×630, valid, in `img/`. Earlier versions of this guide flagged it
> as broken; that was wrong. Link previews work.

---

## SECTION A — ASSETS FOLDER (`assets/`)

| File name | Status | Notes |
|---|---|---|
| `mobidokta-logo.png` | ✅ | Transparent background logo — used in all nav bars |

---

## SECTION B — HOMEPAGE (`index.html`) → `img/`

### Hero — REPLACED 2026-08-21

> ⚠️ The 5-slide hero slideshow is **gone**. The homepage now shows one still image.
> See **Section K** for the single hero slot. The old slide backgrounds
> (`hero-iphone.jpg`, `hero-android.jpg`, `idx-port-macbookuse.jpg`,
> `idx-svc-water_hero_use.jpg`, `idx-svc-battery_hero_use.jpg`) are no longer
> referenced by the homepage. Two of them were AI-generated and should not be reused.

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

## SECTION H — LOCATION, WAYFINDING & COMPLEX AMENITIES → `img/`

> **All 16 slots below are already wired into the new `#amenities` section on `index.html`.**
> Each card currently shows a styled icon tile with a "PHOTO COMING" label. Drop the correctly-named
> file into `img/` and that card switches to the photo automatically — no code change, no redeploy edit.
> **This is the highest-value shoot on the list** — it is the section that converts "a repair shop"
> into "a place I can spend an hour", and it is the only section that answers *is it safe to leave my
> device there.*

### H1 — Amenities in the complex (4:3 landscape, 800×600px, under 120KB)

| File name → `img/` | Status | Subject | Shooting note |
|---|---|---|---|
| `amen-foodzone.jpg` | 📸 | Foodzone supermarket shopfront | Get the **name signage** clearly in frame — that's what makes it credible |
| `amen-water-refill.jpg` | 📸 | Bottled water shop / refill station | Show the refill dispensers or stacked bottles |
| `amen-barber.jpg` | 📸 | Barbershop | Shopfront, or interior with a chair — avoid faces without permission |
| `amen-hair-nails.jpg` | 📸 | Hair & nail salon | Shopfront with signage |
| `amen-doctor.jpg` | 📸 | Doctor / medical rooms | Door plate or signage is enough — **do not photograph patients** |
| `amen-pharmacy.jpg` | 📸 | Pharmacy | Shopfront with signage |
| `amen-atm.jpg` | 📸 | ATM | Wide enough to show it's inside the complex, **no PINs or cards in frame** |
| `amen-cocktail-lounge.jpg` | 📸 | Olive Cocktail Lounge | The most persuasive photo here — shoot it looking inviting, seating visible |
| `amen-liquor.jpg` | 📸 | Liquor shop | Shopfront with signage |
| `amen-printing.jpg` | 📸 | Printing / copy shop | Shopfront with signage |
| `amen-properties.jpg` | 📸 | Real-estate / rentals office | Shopfront with signage |
| `amen-residence.jpg` | 📸 | Madeira Isles Residence | Shoot from the complex so the **relationship between res and shop** is obvious |

### H2 — Safety & security proof (16:10 landscape, 800×500px, under 110KB)

| File name → `img/` | Status | Subject | Shooting note |
|---|---|---|---|
| `loc-security-guard.jpg` | 📸 | Securiguard personnel on duty | **Get the guard's permission first.** Uniform and Securiguard branding visible is the whole point |
| `loc-cctv.jpg` | 📸 | CCTV camera in the complex | Shoot upward against the building so the camera reads clearly as surveillance |
| `loc-access-control.jpg` | 📸 | Controlled entrance / access point | Boom, gate, or managed entry — show it isn't open street frontage |
| `loc-parking.jpg` | 📸 | On-site parking | Daytime, reasonably full — a full lot signals a busy safe centre |

### H3 — Wayfinding & storefront (not yet wired — shoot these next)

These are for the `#location` block and the Google Business Profile. Tell me when they exist and I'll wire them in.

| File name → `img/` | Status | Subject | Why it matters |
|---|---|---|---|
| `loc-shop6-signage.jpg` | 📸 | **MobiDokta Shop 6 signage, number visible** | Highest priority of the three — solves the *IT World* mix-up |
| `loc-complex-entrance.jpg` | 📸 | Complex entrance from 262 Klitsgras Street | The view a first-time customer actually sees when arriving |
| `loc-walkway.jpg` | 📸 | Internal walkway leading to Shop 6 | Turns the map into step-by-step directions |
| `loc-storefront.jpg` | 📸 | MobiDokta storefront, straight on | Also the Google Business Profile cover photo |
| `loc-interior-counter.jpg` | 📸 | Front counter / reception | First impression of the inside |
| `loc-interior-bench.jpg` | 📸 | Repair bench with tools and microscope | Proof of a real workshop, not a table |
| `loc-tri-lounge.jpg` | 📸 | TRi-MobiDokta gaming lounge, consoles on | The differentiator nobody else in Pretoria West has |

> **Shoot all of H1–H3 in one walk-around.** It's roughly 23 photos, one afternoon, one phone.
> Golden-hour or bright overcast light. Shoot landscape, hold steady, wipe the lens first.
> **Every one of these should also go straight onto the Google Business Profile** — location and
> amenity photos are the single strongest ranking and conversion signal for local search.

---

### K2 — Lounge, landmark & mobile hero backdrop (all WIRED, all fall back gracefully)

| File name → `img/` | Where it shows | Subject |
|---|---|---|
| `loc-tri-lounge.jpg` | Homepage "Play a game. On us." | The gaming area and waiting sofas — **get the seating and the consoles in one frame.** This is a conversion asset: it has to look like somewhere you'd happily spend an hour. Shoot with the screens on. |
| `loc-residence-landmark.jpg` | Homepage Find-us + amenities | Madeira Isles Residence itself, straight on, so it is recognisable from the street |
| `loc-residence-proximity.jpg` | Homepage Find-us + amenities | Residence **and** the shopping complex in one frame, showing how close they are — the same-management connection |

**Mobile hero backdrop** reuses three photos you already have — the liquid-corrosion macro, the MacBook
thermal shot and the recovered board — behind the headline on phones. No new photo needed, but if you
shoot a strong wide bench shot, drop it in as `hero-primary.jpg` and it becomes the main hero everywhere.

> The two AI images (`hero-iphone.jpg`, `hero-android.jpg`) are now fully out of use across the whole site.
> The Android and Apple page heroes use the real Huawei-with-Borneo-schematics shot and the white
> iPhone 13 Pro bench shot instead.

---

## SECTION I — SERVICE CARDS STILL SHOWING ICONS → `img/`

These cards on `index.html` display a generic icon instead of a photo. Both slots are now wired with an
automatic icon fallback, so dropping the file in is all that's needed.

| File name → `img/` | Status | Subject | Spec |
|---|---|---|---|
| `svc-teletech.jpg` | 📸 **WIRED** | Technician on a video call diagnosing a device — laptop or phone screen showing the call, device in hand | Portrait-ish 298×372px display, shoot 800×1000px, under 120KB |
| `svc-simswap.jpg` | 📸 **WIRED** | SIM tray open with SIM and ejector tool, or a phone showing carrier/eSIM settings | Same spec as above |

### Laptop service cards — needs a small code change first

`renderLaptopServices` in `js/content-loader.js` has no image support yet. Shoot these and I'll wire it.

| File name → `img/` | Subject |
|---|---|
| 📸 `lap-battery.jpg` | Laptop battery removed from chassis |
| 📸 `lap-keyboard.jpg` | Laptop keyboard being replaced, keycaps or ribbon visible |
| 📸 `lap-thermal.jpg` | Heatsink / fan cleaning, thermal paste application |
| 📸 `lap-os.jpg` | Laptop mid OS install or recovery screen |

---

## SECTION J — INSURANCE ASSESSMENTS (`insurance-assessments.html`) → `img/`

The new assessment page runs on layout and type only — no photos wired yet. These would strengthen it,
in priority order. Say the word and I'll wire them in.

| File name → `img/` | Subject | Why |
|---|---|---|
| 📸 `ins-assessment-bench.jpg` | Device on the bench under magnification with a documentation clipboard or laptop beside it | Hero image — shows an *assessment*, not a repair |
| 📸 `ins-report-sample.jpg` | A printed assessment report fanned out, **all client details redacted or fictional** | The single most persuasive image for brokers |
| 📸 `ins-photo-evidence.jpg` | Damaged device being photographed on a plain background with a scale reference | Shows the evidence process is methodical |
| 📸 `ins-imei-verify.jpg` | IMEI being read off a device screen or label | Proves identity verification actually happens |
| 📸 `ins-water-corrosion.jpg` | Corroded logic board under magnification | Cause-consistency evidence, and genuinely striking |

> ⚠️ **Never publish a real client's device with identifiable data, IMEI, or claim reference.**
> Redact or use a fictional reference on any report photo. This matters more here than anywhere else on
> the site — the whole service rests on POPIA discipline and client confidence.

---


## SECTION K — HOMEPAGE HERO (highest visual priority) → `img/`

The homepage was rebuilt white and minimal on 2026-08-21. The two AI-generated
latex-glove images (`hero-iphone.jpg`, `hero-android.jpg`) were removed — the garbled
"TEKNIKSE" logo and the impossible hand anatomy made them read as stock AI, which
undermines every honesty claim on the site.

The hero now shows **one** image. It currently falls back to a real bench photo
(`iphone 13 Pro white backglass replacement.jpg`). Drop in the file below and it takes over.

| File name → `img/` | Status | Subject | Spec |
|---|---|---|---|
| `hero-primary.jpg` | 📸 **WIRED** | One clean, bright, real photo. Best options, in order: (1) a repaired device in-hand against a plain light background, (2) the bench shot from directly above with tools laid out neatly, (3) the storefront with good daylight. | Portrait 4:5, 1000×1250px, under 220KB |

**What makes this photo work:** bright and airy, not dark and moody. Plain uncluttered
background. Real device, real hands or real bench — nothing staged to look "techy".
Shoot near a window in daylight. No black latex gloves — they photograph as sinister
and they are the single clearest AI-stock tell.

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

## PHOTO SPECS — AMENITIES & LOCATION

| Use | Dimensions | Max size | Format |
|---|---|---|---|
| Amenity cards (`amen-*`) | 800×600px (4:3) | 120KB | `.jpg` |
| Safety proof (`loc-security-*`, `loc-cctv`, `loc-access-*`, `loc-parking`) | 800×500px (16:10) | 110KB | `.jpg` |
| Wayfinding & storefront (`loc-*`) | 1200×800px | 160KB | `.jpg` |
| Service cards (`svc-*`, `lap-*`) | 800×1000px | 120KB | `.jpg` |
| Insurance assessment (`ins-*`) | 1200×800px | 160KB | `.jpg` |

---

## RECOMMENDED SHOOT ORDER

**Do the complex walk-around first.** It's one afternoon, ~23 photos, and it is already wired and waiting —
every other item on this list needs staging, sourcing or product handling.

1. **SECTION H — complex walk-around (H1 + H2 + H3)** — amenities, security, wayfinding, storefront,
   interior, TRi lounge. All of H1 and H2 are wired and will go live the moment the files land. Push the
   same set to the Google Business Profile the same day.
2. `loc-shop6-signage.jpg` specifically — if you shoot only one photo, shoot this one. It solves the
   *IT World* mix-up that is actively costing walk-ins.
3. `og-cover.png` — still broken on every page. Every shared link shows a dead thumbnail until it exists.
4. Rename `iphone 15 ProMax After picture.jpg` → `port-iphone15pm-after.jpg` — you already have this photo.
5. **SECTION I** — `svc-teletech.jpg` and `svc-simswap.jpg`. Both wired; two cards on the homepage are
   showing bare icons next to cards that have photos, which reads as unfinished.
6. **SECTION J** — insurance assessment photos, especially `ins-report-sample.jpg` (redacted). Needed
   before approaching brokers.
7. Appl3City category heroes (`ac-hero-*.jpg`) — biggest trust impact for the sales page.
8. Shop product photos (`shop-*.jpg`) — direct conversion impact, but ~40 photos, so batch it.
9. Before/after portfolio gallery — social proof for the homepage.
10. Service page photos (`svc-apple-*`, `svc-android-*`, `svc-mac-*`) — credibility on repair pages.
11. Laptop service cards (`lap-*.jpg`) — needs a code change first, so shoot last.
12. Team and workshop (`team-*.jpg`) — trust and personality.

---

## CONSENT & PRIVACY RULES — read before shooting

These apply to the complex and service photos and are not optional.

- **Ask the shop owner or manager before photographing another business** in the complex. Nearly all will
  say yes — you are sending them customers. A photo taken without asking becomes a problem later.
- **Ask the security guard's permission** before photographing them, and explain it's for your website.
- **No customers or patients in frame** without explicit spoken permission. Doctor's rooms: signage only.
- **No children in frame** without a parent's permission, full stop.
- **Never publish a real client device** with a visible IMEI, serial, lock screen, phone number, name or
  claim reference. Redact, or stage with your own device.
- **No PINs, cards or screens showing account details** at the ATM.
