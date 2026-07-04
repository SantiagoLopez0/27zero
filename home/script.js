// ============================
// 27zero — Home page
// ============================

// La lógica de interacción de cada sección se agrega aquí paso a paso.

// ===== Slider "Los mejores" (copiado 1:1 del patrón de /work) =====

const LOS_MEJORES_CARDS = [
  { client: 'Student flirts' },
  { client: 'Doctums' },
  { client: 'OES' },
  { client: 'Lorem ipsum' },
];

function createFeaturedCard(card) {
  const a = document.createElement('a');
  a.href = '#';
  a.className = 'card card--work card--featured';

  a.innerHTML = `
    <div class="card-work-bg">
      <span>[PROJECT THUMBNAIL]</span>
    </div>
    <div class="card-work-body">
      <div class="card-work-content">
        <span class="card-work-eyebrow">Lorem ipsum</span>
        <h3 class="card-work-title">Lorem Ipsum is simply dummy text of the printing.</h3>
        <div class="card-work-client">
          <div class="card-work-client-logo"><span>CL</span></div>
          <span class="card-work-client-name">${card.client}</span>
        </div>
      </div>
      <div class="card-work-footer">
        <div class="card-work-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </div>
  `;

  return a;
}

function enableSliderDrag(track) {
  let isDown  = false;
  let startX  = 0;
  let startSL = 0;

  track.addEventListener('pointerdown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX  = e.pageX;
    startSL = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    track.scrollLeft = startSL - (e.pageX - startX);
  });

  const stopDrag = () => {
    isDown = false;
    track.classList.remove('dragging');
  };

  track.addEventListener('pointerup',     stopDrag);
  track.addEventListener('pointerleave',  stopDrag);
  track.addEventListener('pointercancel', stopDrag);
}

function enableSliderArrows(footer, track) {
  const prevBtn = footer.querySelector('[data-dir="prev"]');
  const nextBtn = footer.querySelector('[data-dir="next"]');

  function getScrollStep() {
    const card = track.querySelector('.card');
    if (!card) return 320;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return (card.getBoundingClientRect().width + gap) * 2;
  }

  function updateArrows() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 2;
    nextBtn.disabled = maxScroll <= 2 || track.scrollLeft >= maxScroll - 2;
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);

  requestAnimationFrame(() => {
    requestAnimationFrame(updateArrows);
  });

  window.addEventListener('resize', updateArrows);
}

function renderLosMejoresSlider(containerId, showTitle = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const block = document.createElement('div');
  block.className = 'slider-block';

  const header = document.createElement('div');
  header.className = 'slider-header';
  header.innerHTML = showTitle ? `<h2 class="slider-title">Los mejores</h2>` : '';

  const trackWrap = document.createElement('div');
  trackWrap.className = 'slider-track-wrap';

  const track = document.createElement('div');
  track.className = 'slider-track';

  LOS_MEJORES_CARDS.forEach(card => track.appendChild(createFeaturedCard(card)));

  trackWrap.appendChild(track);

  const footer = document.createElement('div');
  footer.className = 'slider-footer';
  footer.innerHTML = `
    <div class="slider-nav">
      <button class="slider-arrow" data-dir="prev" aria-label="Previous" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <button class="slider-arrow" data-dir="next" aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  `;

  block.appendChild(trackWrap);
  if (showTitle) block.insertBefore(header, trackWrap);
  block.appendChild(footer);
  container.appendChild(block);

  enableSliderDrag(track);
  enableSliderArrows(footer, track);
}

renderLosMejoresSlider('losMejoresContainer');
renderLosMejoresSlider('mentorSliderContainer', false);

// ===== "What sets 27zero apart" — slider de shapes =====

function createApartSlide() {
  const slide = document.createElement('div');
  slide.className = 'apart-slide';
  slide.innerHTML = `
    <div class="apart-shape apart-shape--purple">
      <img src="/assets/research-enhanced.png" alt="Research Enhanced">
    </div>
    <div class="apart-shape apart-shape--indigo">
      <img src="/assets/execution.png" alt="Execution">
    </div>
    <div class="apart-shape apart-shape--black">
      <img src="/assets/creativity.png" alt="Creativity">
    </div>
  `;
  return slide;
}

function initApartSlider() {
  const track = document.getElementById('apartSliderTrack');
  if (!track) return;

  const SLIDE_COUNT = 2; // mismo slide duplicado para mostrar la funcionalidad
  for (let i = 0; i < SLIDE_COUNT; i++) {
    track.appendChild(createApartSlide());
  }

  const prevBtn = document.querySelector('.apart-slider-arrow[data-dir="prev"]');
  const nextBtn = document.querySelector('.apart-slider-arrow[data-dir="next"]');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === SLIDE_COUNT - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (index > 0) { index--; update(); }
  });

  nextBtn.addEventListener('click', () => {
    if (index < SLIDE_COUNT - 1) { index++; update(); }
  });

  update();
}

initApartSlider();

// ===== Logos — infinite horizontal carousel =====

const CLIENT_LOGOS = [
  { name: 'Student First',   src: '/assets/logos/student-first.svg' },
  { name: 'Doctums',         src: '/assets/logos/doctums.svg' },
  { name: 'Skillwell',       src: '/assets/logos/skillwell.svg' },
  { name: 'World Learning',  src: '/assets/logos/world-learning.svg' },
  { name: 'Scholarship Magic', src: '/assets/logos/scholarship-magic.svg' },
];

function initLogosMarquee() {
  const track = document.getElementById('logosTrack');
  if (!track) return;

  // Se duplica la lista una vez para que la animación (translateX -50%) sea continua y sin corte
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  track.innerHTML = logos
    .map(logo => `<img src="${logo.src}" alt="${logo.name}" loading="lazy">`)
    .join('');
}

initLogosMarquee();
