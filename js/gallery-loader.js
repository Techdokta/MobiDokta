/* ============================================
   MobiDokta — Dynamic Gallery Loader
   Fetches data/gallery.json and renders the Proof of Precision gallery.
   ============================================ */

const GalleryLoader = {
  /** Load gallery JSON (no cache) */
  async loadData() {
    try {
      const res = await fetch('./data/gallery.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load gallery.json');
      return await res.json();
    } catch (err) {
      console.warn('[GalleryLoader] Could not load gallery.json:', err.message);
      return null;
    }
  },

  /** Render the grid based on items */
  render(items) {
    const grid = document.getElementById('gallery-grid');
    if (!grid || !items) return;
    grid.innerHTML = items.map(item => `
      <div class="gallery-item" data-category="${item.category}" onclick="openLightbox(this)">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${item.tag}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
          <p class="gallery-item-desc">${item.description || ''}</p>
        </div>
      </div>
    `).join('');
  },

  /** Initialise filter tabs */
  initFilters() {
    const tabs = document.querySelectorAll('.gallery-tab');
    if (!tabs) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active class
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
          const cat = item.dataset.category;
          const show = filter === 'all' || cat === filter;
          item.style.display = show ? 'block' : 'none';
        });
      });
    });
  },

  /** Entry point */
  async init() {
    const data = await this.loadData();
    if (!data || !data.gallery) return;
    this.render(data.gallery);
    this.initFilters();
    // Re‑initialise icons & scroll animations if present
    if (window.lucide) lucide.createIcons();
    if (window.MobiApp && MobiApp.initScrollAnimations) MobiApp.initScrollAnimations();
  }
};

// Auto‑init after DOM ready
document.addEventListener('DOMContentLoaded', () => GalleryLoader.init());
