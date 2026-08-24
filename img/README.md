# Where to drop pictures

Drop a correctly-named file into the right folder and it appears on the site.
No code change, no redeploy edit. Until the file exists, that spot shows a
tidy grey "photo coming" tile — nothing looks broken.

**Filenames are exact.** All lowercase, hyphens instead of spaces, `.jpg` not `.JPG`.
`Amen-Barber.JPG` will not work. `amen-barber.jpg` will.

---

## The folders

| Folder | What goes in it | Naming |
|---|---|---|
| `img/location/` | The shop, the complex, wayfinding, security, the lounge | `loc-*.jpg` |
| `img/amenities/` | The other businesses in Madeira Isles | `amen-*.jpg` |
| `img/hero/` | Big homepage header images | `hero-*.jpg` |
| `img/services/` | Service card photos | `svc-*.jpg`, `lap-*.jpg` |
| `img/insurance/` | Assessment and claims photos | `ins-*.jpg` |
| `img/work/` | Real repairs — before/after, bench shots | `work-*.jpg` |
| `img/` (root) | **Everything already live. Leave it alone.** | mixed |

Folders that already existed and are in use — keep using them as they are:

| Folder | What is in it |
|---|---|
| `img/gallery/` | The showcase gallery, split into `repairs/`, `handovers/`, `road/` |
| `img/iphone-models/` | Per-model iPhone shots for the price tables |
| `img/logos/` | Brand and accreditation marks (Apple, DJI, GSMA, …) |

> The root folder holds 57 images the site is currently using. They were left
> where they are on purpose — moving working files earns nothing and risks
> breaking live pages. New pictures go in the subfolders above.

---

## Slots wired and waiting right now

These are live in the code today. The moment the file lands, the tile becomes the photo.

### `img/location/` — highest priority

| Filename | Where it shows | What to shoot |
|---|---|---|
| `loc-tri-lounge.jpg` | Homepage + Find-us | **The most valuable shot on this list.** Gaming area and seating in one frame, screens on. Those sections claim this is somewhere worth spending an hour — the photo has to prove it. |
| `loc-residence-landmark.jpg` | Homepage + Find-us | Madeira Isles Residence, straight on, recognisable from the street |
| `loc-residence-proximity.jpg` | Homepage + Find-us | Residence **and** our complex in one frame |
| `loc-security-guard.jpg` | Find-us | Securiguard staff on duty — **ask their permission first** |
| `loc-cctv.jpg` | Find-us | A camera, shot upward against the building |
| `loc-access-control.jpg` | Find-us | Boom, gate or managed entry point |
| `loc-parking.jpg` | Find-us | On-site parking, daytime, reasonably full |

Not yet wired, but shoot them in the same walk-around and tell me — I will wire them:
`loc-shop6-signage.jpg` (solves the *IT World* mix-up), `loc-complex-entrance.jpg`,
`loc-walkway.jpg`, `loc-storefront.jpg`, `loc-interior-counter.jpg`, `loc-interior-bench.jpg`

### `img/amenities/`

`amen-foodzone.jpg` · `amen-water-refill.jpg` · `amen-barber.jpg` · `amen-hair-nails.jpg`
`amen-doctor.jpg` · `amen-pharmacy.jpg` · `amen-atm.jpg` · `amen-cocktail-lounge.jpg`
`amen-liquor.jpg` · `amen-printing.jpg` · `amen-properties.jpg` · `amen-residence.jpg`

Shopfront with the **name signage visible** is what makes each one credible.

### `img/hero/`

| Filename | Effect |
|---|---|
| `hero-primary.jpg` | Becomes the main homepage hero image. Until it exists the page falls back to the white iPhone 13 Pro bench shot. |

### `img/services/`

`svc-teletech.jpg` · `svc-simswap.jpg` — both wired on the homepage service cards.
`lap-battery.jpg` · `lap-keyboard.jpg` · `lap-thermal.jpg` · `lap-os.jpg` need a small code
change first; shoot them and tell me.

### `img/insurance/`

`ins-assessment-bench.jpg` · `ins-report-sample.jpg` · `ins-photo-evidence.jpg`
`ins-imei-verify.jpg` · `ins-water-corrosion.jpg` — not yet wired. Tell me when they exist.

---

## Sizes

Compress before dropping in. [squoosh.app](https://squoosh.app) → MozJPEG, quality 78.

| Type | Size | Max weight |
|---|---|---|
| Amenity cards | 800 × 600 (4:3) | 120 KB |
| Safety proof | 800 × 500 (16:10) | 110 KB |
| Location / lounge / wayfinding | 1200 × 800 | 160 KB |
| Hero | 1600 × 2000 (portrait) | 260 KB |
| Service cards | 800 × 1000 | 120 KB |

A 4 MB photo straight off a phone will load slowly on mobile data and cost you
customers on the Google ranking. Compressing takes about twenty seconds per photo.

---

## Rules before you shoot

- **Ask the shop owner** before photographing another business in the complex.
  Nearly all will say yes — you are sending them customers.
- **Ask the guard's permission** and say it is for the website.
- **No customers or patients in frame** without spoken permission. Doctor's rooms: signage only.
- **No children** without a parent's permission.
- **Never publish a real client device** with a visible IMEI, serial, lock screen, name or
  claim reference. Redact it, or stage the shot with your own device.
- **No PINs or card details** in the ATM shot.

---

## Removing or replacing a picture

- **Replace:** drop a new file over the old one, same name. Done.
- **Remove:** delete the file. The tile falls back to the grey placeholder rather than
  breaking. Then tell me so I can remove the slot properly.
- **Add something new:** put it in the right folder, tell me the filename and where it
  should appear, and I will wire it.
