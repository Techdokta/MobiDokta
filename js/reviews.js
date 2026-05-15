/* New file: js/reviews.js */
(() => {
  const API_ENDPOINT = '/api/get-reviews'; // Supabase edge function
  const container = document.getElementById('reviews');
  if (!container) return;

  // Show loader
  const loader = document.createElement('div');
  loader.className = 'loader';
  container.appendChild(loader);

  fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      container.removeChild(loader);
      const reviews = (data.reviews || []).filter(r => r.author_name && r.text && r.rating > 0);
      if (reviews.length === 0) {
        container.innerHTML = '<p class="text-tertiary">No reviews available.</p>';
        return;
      }
      const grid = document.createElement('div');
      grid.className = 'reviews-grid';
      reviews.slice(0, 10).forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card glass-panel';
        card.innerHTML = `
          <div class="review-header">
            <img src="${review.profile_photo_url}" alt="${review.author_name}" class="review-avatar" />
            <div class="review-author">${review.author_name}</div>
            <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
          </div>
          <p class="review-text">${review.text}</p>
        `;
        grid.appendChild(card);
      });
      container.appendChild(grid);
    })
    .catch(err => {
      container.removeChild(loader);
      container.innerHTML = '<p class="text-tertiary">Failed to load reviews.</p>';
      console.error('Reviews load error', err);
    });
})();
