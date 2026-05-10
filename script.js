(function () {
  'use strict';

  const track  = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const items = Array.from(track.querySelectorAll('.carousel__item'));
  let current = 0;

  /* Build dots */
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' carousel__dot--active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `第 ${i + 1} 張截圖`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    dotsContainer.querySelectorAll('.carousel__dot').forEach((d, i) => {
      d.classList.toggle('carousel__dot--active', i === current);
    });
  }

  function goTo(index) {
    current = (index + items.length) % items.length;
    const target = items[current];
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft - (track.clientWidth / 2) + (target.clientWidth / 2),
      behavior: 'smooth',
    });
    updateDots();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  /* Sync dots on manual swipe */
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      items.forEach((item, i) => {
        const itemCenter = item.offsetLeft - track.offsetLeft + item.clientWidth / 2;
        const dist = Math.abs(center - itemCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      if (closest !== current) { current = closest; updateDots(); }
    }, 80);
  });

  /* Download button click tracking (console only, no 3rd-party tracker) */
  document.querySelectorAll('#hero-cta, #cta-download').forEach(el => {
    el.addEventListener('click', () => {
      console.info('[Deam2Easy] Play Store CTA clicked');
    });
  });
})();
