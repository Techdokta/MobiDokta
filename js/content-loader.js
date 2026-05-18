/* ============================================
   MobiDokta — Dynamic Content Loader
   Reads data/content.json and populates:
   - #laptop-services-content  (laptop repair cards)
   - #faq-content              (FAQ accordion)
   - #education-content        (education hub cards)
   ============================================ */

const ContentLoader = {

  /** Fetch content.json (no-cache for instant updates) */
  async loadData() {
    try {
      const res = await fetch('./data/content.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load content.json');
      return await res.json();
    } catch (err) {
      console.warn('[ContentLoader] Could not load content.json:', err.message);
      return null;
    }
  },

  /* ─── Laptop Services ─── */
  renderLaptopServices(items) {
    const container = document.getElementById('laptop-services-content');
    if (!container || !items || items.length === 0) return;

    container.innerHTML = items.map(item => `
      <div class="card service-card inline-style-678049f7" data-animate>
        <div class="inline-style-17ff31e7">
          <i data-lucide="${item.icon}" style="width:64px;height:64px;color:var(--green);stroke-width:1.5;"></i>
        </div>
        <div class="inline-style-75ab1518">
          <h3 class="inline-style-eb0fc9a0">${item.title}</h3>
          <p class="inline-style-15b11a67">${item.description}</p>
          <span class="service-price inline-style-5ae5deac">${item.price}</span>
        </div>
      </div>
    `).join('');
  },

  /* ─── FAQ Accordion ─── */
  renderFAQ(items) {
    const container = document.getElementById('faq-content');
    if (!container || !items || items.length === 0) return;

    container.innerHTML = items.map((item, i) => `
      <div class="faq-item" data-animate>
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
          <span>${item.question}</span>
          <i data-lucide="plus" class="faq-icon"></i>
        </button>
        <div class="faq-answer" id="faq-answer-${i}">${item.answer}</div>
      </div>
    `).join('');

    // Attach toggle listeners
    container.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const faqItem = btn.closest('.faq-item');
        const isOpen = faqItem.classList.contains('open');

        // Close all others
        container.querySelectorAll('.faq-item.open').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          faqItem.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  },

  /* ─── Education Hub ─── */
  renderEducation(items) {
    const container = document.getElementById('education-content');
    if (!container || !items || items.length === 0) return;

    container.innerHTML = items.map(item => `
      <div class="edu-card" data-animate>
        <img src="${item.image}" alt="${item.title}" class="edu-card-img" loading="lazy" />
        <div class="edu-card-body">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');
  },

  /* ─── Init: load data and render all sections ─── */
  async init() {
    const data = await this.loadData();
    if (!data) return;

    this.renderLaptopServices(data.laptopServices);
    this.renderFAQ(data.faq);
    this.renderEducation(data.education);

    // Re-initialize Lucide icons for dynamically injected elements
    if (window.lucide) {
      lucide.createIcons();
    }

    // Re-observe new [data-animate] elements for scroll animations
    if (window.MobiApp && MobiApp.initScrollAnimations) {
      MobiApp.initScrollAnimations();
    }
  }
};

// Auto-init after DOM is ready
document.addEventListener('DOMContentLoaded', () => ContentLoader.init());
