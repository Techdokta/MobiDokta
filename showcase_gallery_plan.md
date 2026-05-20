# Implementation Plan: MobiDokta in Action Showcase Gallery

To establish visual authority and build trust, we will implement a dedicated interactive gallery section. This shows potential clients real-world evidence of MobiDokta's active presence and technical expertise across Gauteng.

---

## 1. Gallery Structure & Categories

We will organize the photos into three thematic categories:

* **🔬 Repairs in ICU**
  * *Purpose:* Show close-up, high-precision engineering (e.g., micro-soldering, battery transplants, board diagnostics).
  * *Filenames:* `img/gallery/repair-1.jpg`, `img/gallery/repair-2.jpg`, `img/gallery/repair-3.jpg`
* **🚗 On the Road**
  * *Purpose:* Show geographic reach and brand presence (e.g., MobiDokta-branded courier vehicles, team visiting clients, corporate locations).
  * *Filenames:* `img/gallery/road-1.jpg`, `img/gallery/road-2.jpg`, `img/gallery/road-3.jpg`
* **🤝 Happy Handovers**
  * *Purpose:* Show customer relationships, reviews, text message appreciation screenshots, giveaways, and testimonials.
  * *Filenames:* `img/gallery/client-1.jpg`, `img/gallery/client-2.jpg`, `img/gallery/client-3.jpg`

---

## 2. Interactive Features

* **Category Filters (Tabs):** Users can click tabs ("All", "Repairs", "On the Road", "Handovers") to instantly filter the visible cards with smooth fade animations.
* **Premium Lightbox Modal:** Clicking a photo opens it in a full-screen blurred-backdrop overlay with descriptive captions and zoom controls.
* **Micro-Animations:** Hovering over cards triggers a slight tilt and zoom effect to make the photos feel alive and engaging.

---

## 3. Placement & Integration

We will insert this new section into **`index.html`** right between the **Client Reviews** section and the **FAQ/Contact** section. This positions the social proof immediately after the client reviews, maximizing conversion potential.

### Proposed Folder:
Create a new subfolder in the workspace: `./img/gallery/` where you can place these photos.
