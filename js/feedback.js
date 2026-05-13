/* ============================================
   MobiDokta — Feedback Logic
   ============================================ */

(function() {
  let selectedRating = 0;
  let selectedNPS = null;
  let selectedTags = [];

  const ratingLabels = ['', 'Terrible 😞', 'Poor 😟', 'Okay 😐', 'Good 😊', 'Excellent 🤩'];

  /* ─── Star Rating ─── */
  const stars = document.querySelectorAll('.star');
  const ratingLabel = document.getElementById('rating-label');

  stars.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.rating);
      stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.rating) <= val));
    });
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.rating);
      ratingLabel.textContent = ratingLabels[selectedRating];
      stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.rating) <= selectedRating));
    });
  });

  document.querySelector('.star-rating').addEventListener('mouseleave', () => {
    stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.rating) <= selectedRating));
  });

  /* ─── NPS Scale ─── */
  document.querySelectorAll('.nps-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nps-btn').forEach(b => {
        b.classList.remove('selected', 'detractor', 'passive', 'promoter');
      });
      selectedNPS = parseInt(btn.dataset.nps);
      btn.classList.add('selected');

      // Color code
      if (selectedNPS <= 6) btn.classList.add('detractor');
      else if (selectedNPS <= 8) btn.classList.add('passive');
      else btn.classList.add('promoter');
    });
  });

  /* ─── Category Tags ─── */
  document.querySelectorAll('.feedback-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('selected');
      const tagVal = tag.dataset.tag;
      if (selectedTags.includes(tagVal)) {
        selectedTags = selectedTags.filter(t => t !== tagVal);
      } else {
        selectedTags.push(tagVal);
      }
    });
  });

  /* ─── Load Stats ─── */
  function loadStats() {
    const avgRating = MobiStore.getAverageRating();
    const nps = MobiStore.getNPS();
    const total = MobiStore.getFeedback().length;

    document.getElementById('avg-rating').textContent = avgRating || '—';
    document.getElementById('nps-score').textContent = nps !== 0 ? nps : '—';
    document.getElementById('total-reviews').textContent = total || '—';

    // Mini stars
    const avgStars = document.getElementById('avg-stars');
    const fullStars = Math.round(parseFloat(avgRating) || 0);
    avgStars.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  }
  loadStats();

  /* ─── Submit ─── */
  document.getElementById('submit-fb-btn').addEventListener('click', () => {
    if (selectedRating === 0) {
      MobiApp.toast('Please select a star rating.', 'warning');
      return;
    }

    const comment = MobiApp.sanitize(document.getElementById('fb-comment').value.trim());
    const name = MobiApp.sanitize(document.getElementById('fb-name').value.trim()) || 'Anonymous';
    const ref = MobiApp.sanitize(document.getElementById('fb-ref').value.trim());

    MobiStore.addFeedback({
      customerName: name,
      bookingId: ref || null,
      rating: selectedRating,
      nps: selectedNPS,
      tags: selectedTags,
      comment: comment
    });

    MobiApp.toast('Thank you for your feedback!', 'success');

    // Show thank you
    document.getElementById('feedback-form').classList.add('hidden');
    document.querySelector('.feedback-stats').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
  });
})();
