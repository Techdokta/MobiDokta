# Next phase — the photo list

Audited from the code on 25 Aug 2026, not from memory. Every filename below is
either already wired (the site is showing a placeholder for it right now) or
needed to close a gap the audit found.

**101 shop products have no photo, but that is not 101 photos.** Products share
shots by type — four DIY screen photos cover 46 DIY listings. The real count is
about **50 photos to finish the whole site.**

---

## PHASE 1 — Wired and waiting (18 files)

The site renders a grey "photo coming" tile for each of these today. Drop the file
in with the exact name and it appears. No code change.

### `img/location/` — 6 files
| File | Where | Priority |
|---|---|---|
| `loc-tri-lounge.jpg` | Homepage + Find-us | **Highest on the whole list.** Gaming area and seating in one frame, screens on |
| `loc-security-guard.jpg` | Find-us | Securiguard staff on duty — ask permission first |
| `loc-cctv.jpg` | Find-us | A camera, shot upward against the building |
| `loc-access-control.jpg` | Find-us | Boom, gate or managed entry |
| `loc-parking.jpg` | Find-us | Daytime, reasonably full |
| `hero-primary.jpg` → `img/hero/` | Homepage hero | Optional. Without it the hero falls back to the white iPhone 13 Pro bench shot, which works |

### `img/amenities/` — 12 files
`amen-foodzone` · `amen-water-refill` · `amen-barber` · `amen-hair-nails` ·
`amen-doctor` · `amen-pharmacy` · `amen-atm` · `amen-cocktail-lounge` ·
`amen-liquor` · `amen-printing` · `amen-properties` · `amen-residence`

All `.jpg`. Shopfront with the **name signage visible** — that is what makes each
one credible. One walk-around covers all twelve.

---

## PHASE 2 — The blog gallery is broken (8 files)

`community.html` loads `data/gallery.json`, which points at eight files. **`img/gallery/`
is completely empty** — every tile on that gallery is broken right now. This was not
on any previous list.

| Folder | Files |
|---|---|
| `img/gallery/repairs/` | `repair-1.jpg` (logic board micro-soldering) · `repair-2.jpg` (iPhone screen transplant) · `repair-3.jpg` (PS5 thermal) |
| `img/gallery/road/` | `road-1.jpg` (courier fleet) · `road-2.jpg` (corporate collection) |
| `img/gallery/handovers/` | `client-1.jpg` · `client-2.jpg` · `client-3.jpg` (handovers — **need customer permission**) |

Quickest fix: you already own bench photos that suit `repair-1..3`. Those three
could be filled today from existing files if you would rather not reshoot.

---

## PHASE 3 — Shop catalogue (~15 photos covers 101 products)

101 listings in `js/shop.js` have no image. They group by type, so one good shot
serves a whole family.

| Category | Listings | Photos needed | What to shoot |
|---|---|---|---|
| DIY parts | 46 | **4** | One each: screen kit, battery kit, back glass, charging port |
| Gaming | 14 | **3** | Console, controller, headset |
| Tools | 13 | **2** | Basic opening kit, pro toolkit laid out |
| Cables | 7 | **2** | Cable fan-out, right-angle pair |
| Chargers | 7 | **2** | Laptop bricks grouped, MacBook charger |
| Extras | 7 | **2** | Grips/holders, flash drives |
| Screen protection | 4 | **1** | Tempered glass boxes |
| Power banks | 3 | **1** | Both capacities together |
| | **101** | **~17** | |

Shoot these as a batch on one clean surface — a white sheet of paper on the counter
is enough. Consistency matters more than styling.

---

## PHASE 4 — Appl3City non-Apple devices (~6 photos)

iPhones are **fully covered** — 37 model photos mapped, none broken. Only the
non-iPhone categories fall back to an icon.

| Category | Listings | Photos needed |
|---|---|---|
| Gaming (PS5/PS4/Xbox) | 13 | **3** |
| MacBook | 2 | **1** |
| Watch · Laptop · Camera | 3 | **1 each** |
| | **18** | **~6** |

---

## PHASE 5 — Not yet wired. Shoot, then tell me and I will wire them.

**Wayfinding** — `loc-shop6-signage.jpg` (solves the *IT World* mix-up — arguably
worth doing in Phase 1), `loc-complex-entrance.jpg`, `loc-walkway.jpg`,
`loc-storefront.jpg`, `loc-interior-counter.jpg`, `loc-interior-bench.jpg`

**Service cards** — `svc-teletech.jpg`, `svc-simswap.jpg` (both wired already),
`lap-battery.jpg`, `lap-keyboard.jpg`, `lap-thermal.jpg`, `lap-os.jpg` (need a code
change in `renderLaptopServices` first)

**Insurance** — `ins-assessment-bench.jpg`, `ins-report-sample.jpg` (redacted),
`ins-photo-evidence.jpg`, `ins-imei-verify.jpg`, `ins-water-corrosion.jpg`.
Needed before approaching brokers.

---

## Order I would do it in

1. **The complex walk-around** — Phase 1's 17 location + amenity files. One
   afternoon, and 17 placeholders disappear at once.
2. **`repair-1..3`** from existing photos — fixes the broken blog gallery in minutes.
3. **`loc-shop6-signage.jpg`** — cheapest fix for a problem costing you walk-ins.
4. **Shop batch** (~17) — direct conversion impact, one sitting.
5. **Appl3City non-iPhone** (~6).
6. **Insurance set** — before the broker approach, not after.

---

## Two rules

**Do not compress or crop these yourself.** Drop the raw phone photos in at full
size and tell me. I will rotate, crop and compress them — the two residence photos
arrived at 5.2MB and 1.7MB against a 160KB budget, and one was rotated 90°. I can
also judge each crop against how the section actually renders.

**Consent:** ask each shop owner before photographing their business, ask the
guard before photographing them, no customers or children in frame without
permission, and never publish a device showing a real IMEI, lock screen or name.
