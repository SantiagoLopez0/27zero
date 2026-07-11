// ============================
// Shapes Slider — 27zero
// Duplicado de la lógica de /home/script.js (sección "What sets 27zero apart").
// ============================

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
