// ============================
// 27zero — Work page
// ============================

// ----- Placeholder data -----
// Cada categoría tiene su propio set de cards.
// "los-mejores" usa cards tipo --featured (más largas).
// Las demás categorías usan cards tipo --standard (casi 1x1).

const CATEGORIES = [
  { id: 'los-mejores', label: 'Los mejores', cardType: 'featured' },
  { id: 'ux-ui-web-design', label: 'Ux/Ui & Web Design', cardType: 'standard' },
  { id: 'brand-messaging-strategy', label: 'Brand & Messaging Strategy', cardType: 'standard' },
  { id: 'events', label: 'Events', cardType: 'standard' },
  { id: 'content-marketing', label: 'Content Marketing', cardType: 'standard' },
  { id: 'marketing-programs', label: 'Marketing Programs', cardType: 'standard' },
  { id: 'thought-leadership-programs', label: 'Thought Leadership Programs', cardType: 'standard' },
  { id: 'strategic-services', label: 'Strategic Services', cardType: 'standard' },
];

const CARDS_PER_CATEGORY = 6;

function buildCardsForCategory(category) {
  const cards = [];
  for (let i = 1; i <= CARDS_PER_CATEGORY; i++) {
    cards.push({
      category: category.label,
      title: '[PROJECT HEADLINE]',
      client: '[CLIENT NAME]',
      type: category.cardType,
    });
  }
  return cards;
}

// ----- Card markup -----

function createCardElement(card) {
  const a = document.createElement('a');
  a.href = '#';
  a.className = `card card--work card--${card.type}`;

  a.innerHTML = `
    <div class="card-work-bg">
      <span>[PROJECT THUMBNAIL]</span>
    </div>
    <div class="card-work-body">
      <div class="card-work-content">
        <span class="card-work-eyebrow">[${card.category.toUpperCase()}]</span>
        <h3 class="card-work-title">${card.title}</h3>
      </div>
      <div class="card-work-footer">
        <div class="card-work-client">
          <div class="card-work-client-logo"><span>?</span></div>
          <span class="card-work-client-name">${card.client}</span>
        </div>
        <div class="card-work-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </div>
  `;

  return a;
}

// ----- Slider block markup -----

function createSliderBlock(category) {
  const block = document.createElement('div');
  block.className = 'slider-block';
  block.dataset.category = category.id;

  const header = document.createElement('div');
  header.className = 'slider-header';
  header.innerHTML = `
    <h2 class="slider-title">${category.label}</h2>
    <div class="slider-nav">
      <button class="slider-arrow" data-dir="prev" aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </button>
      <button class="slider-arrow" data-dir="next" aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>
  `;

  const trackWrap = document.createElement('div');
  trackWrap.className = 'slider-track-wrap';

  const track = document.createElement('div');
  track.className = 'slider-track';

  const cards = buildCardsForCategory(category);
  cards.forEach(card => track.appendChild(createCardElement(card)));

  trackWrap.appendChild(track);
  block.appendChild(header);
  block.appendChild(trackWrap);

  enableSliderDrag(track);
  enableSliderArrows(header, track);

  return block;
}

// ----- Slider drag (mouse + touch via pointer events) -----

function enableSliderDrag(track) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('pointerdown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX;
    scrollLeft = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = e.pageX - startX;
    track.scrollLeft = scrollLeft - dx;
  });

  function stopDrag(e) {
    isDown = false;
    track.classList.remove('dragging');
  }

  track.addEventListener('pointerup', stopDrag);
  track.addEventListener('pointerleave', stopDrag);
  track.addEventListener('pointercancel', stopDrag);
}

// ----- Slider arrow navigation -----

function enableSliderArrows(header, track) {
  const prevBtn = header.querySelector('[data-dir="prev"]');
  const nextBtn = header.querySelector('[data-dir="next"]');

  function getScrollAmount() {
    const firstCard = track.querySelector('.card');
    if (!firstCard) return 300;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  function updateArrowState() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 2;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 2;
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount() * 2, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount() * 2, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrowState);
  window.addEventListener('resize', updateArrowState);
  updateArrowState();
}

// ----- Render all sliders -----

const slidersContainer = document.getElementById('slidersContainer');

function renderAllSliders() {
  slidersContainer.innerHTML = '';
  CATEGORIES.forEach(category => {
    slidersContainer.appendChild(createSliderBlock(category));
  });
}

renderAllSliders();

// ----- Pills filtering -----

const pillsWrap = document.getElementById('pillsWrap');
const pills = pillsWrap.querySelectorAll('.pill');

function setActivePill(targetPill) {
  pills.forEach(p => p.classList.remove('pill--active'));
  targetPill.classList.add('pill--active');
}

function filterSliders(filterId) {
  const blocks = slidersContainer.querySelectorAll('.slider-block');

  if (filterId === 'all') {
    blocks.forEach(block => { block.style.display = ''; });
    return;
  }

  blocks.forEach(block => {
    block.style.display = block.dataset.category === filterId ? '' : 'none';
  });
}

pillsWrap.addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if (!pill) return;

  setActivePill(pill);
  filterSliders(pill.dataset.filter);
});
