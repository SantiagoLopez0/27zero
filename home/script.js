// ============================
// 27zero — Home page
// ============================

// La lógica de interacción de cada sección se agrega aquí paso a paso.

// ===== Slider de "The EdTech Mentor" (generado por JS, usa las clases de los componentes work-card / cards-slider) =====

const MENTOR_SLIDER_CARDS = [
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

// Nota: enableSliderDrag() y enableSliderArrows() ya las provee /components/cards-slider/cards-slider.js
// (cargado antes que este script), así que no se duplican aquí.

function renderMentorSlider(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const block = document.createElement('div');
  block.className = 'slider-block';

  const trackWrap = document.createElement('div');
  trackWrap.className = 'slider-track-wrap';

  const track = document.createElement('div');
  track.className = 'slider-track';

  MENTOR_SLIDER_CARDS.forEach(card => track.appendChild(createFeaturedCard(card)));

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
  block.appendChild(footer);
  container.appendChild(block);

  enableSliderDrag(track);
  enableSliderArrows(footer, track);
}

renderMentorSlider('mentorSliderContainer');

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

// ===== Testimonials =====

const QUOTE_ICON_SVG = `
  <svg class="testimonial-quote-icon" viewBox="0 0 376 296" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.1627 124.2H0V0H170.91V29.0037C170.91 163.619 152.334 256.584 135.985 295.997H52.759C60.9337 243.937 63.9066 174.773 63.1627 124.2ZM268.253 124.2H205.09V0H376V29.0037C376 163.619 357.422 256.584 341.075 295.997H257.849C266.021 243.937 268.994 174.773 268.253 124.2Z" fill="#C286FF"/>
  </svg>
`;

const TESTIMONIALS = [
  { quote: `The quality of the design was impressive. We're looking forward to continue our collaboration with 27zero.`, name: 'Erin Grant', role: 'Vice President of Marketing', initials: 'EG' },
  { quote: `Lorem ipsum is simply dummy text of the printing and typesetting industry standard.`, name: 'Lorem Ipsum', role: 'Director of Growth', initials: 'LI' },
  { quote: `Lorem ipsum is simply dummy text of the printing and typesetting industry standard.`, name: 'Lorem Ipsum', role: 'Head of Admissions', initials: 'LI' },
  { quote: `Lorem ipsum is simply dummy text of the printing and typesetting industry standard.`, name: 'Lorem Ipsum', role: 'Chief Marketing Officer', initials: 'LI' },
];

function createTestimonialSlide(t) {
  const slide = document.createElement('div');
  slide.className = 'testimonial-slide';
  slide.innerHTML = `
    ${QUOTE_ICON_SVG}
    <div class="testimonial-content">
      <p class="testimonial-text">${t.quote}</p>
      <div class="testimonial-divider"></div>
      <div class="testimonial-author">
        <div class="testimonial-avatar"><span>${t.initials}</span></div>
        <div class="testimonial-author-info">
          <span class="testimonial-name">${t.name}</span>
          <span class="testimonial-role">${t.role}</span>
        </div>
      </div>
    </div>
  `;
  return slide;
}

function initTestimonialsSlider() {
  const track = document.getElementById('testimonialsTrack');
  const dotsWrap = document.getElementById('testimonialsDots');
  if (!track || !dotsWrap) return;

  TESTIMONIALS.forEach(t => track.appendChild(createTestimonialSlide(t)));

  dotsWrap.innerHTML = TESTIMONIALS
    .map((_, i) => `<button class="testimonial-dot${i === 0 ? ' testimonial-dot--active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`)
    .join('');

  const prevBtn = document.querySelector('.testimonials-arrow[data-dir="prev"]');
  const nextBtn = document.querySelector('.testimonials-arrow[data-dir="next"]');
  const dots = dotsWrap.querySelectorAll('.testimonial-dot');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === TESTIMONIALS.length - 1;
    dots.forEach((dot, i) => dot.classList.toggle('testimonial-dot--active', i === index));
  }

  prevBtn.addEventListener('click', () => {
    if (index > 0) { index--; update(); }
  });

  nextBtn.addEventListener('click', () => {
    if (index < TESTIMONIALS.length - 1) { index++; update(); }
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      index = parseInt(dot.dataset.index, 10);
      update();
    });
  });

  update();
}

initTestimonialsSlider();
