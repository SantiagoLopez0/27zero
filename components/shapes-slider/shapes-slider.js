// ============================
// Shapes Slider — 27zero
// Ya NO es un slider (no hay slides que se muevan). Es un bloque fijo de
// 3 shapes; las flechas solo cambian cuál shape está "activa" (scale 1)
// vs "inactiva" (scale 0.9). Los shapes nunca cambian de posición.
// ============================

const SHAPES = [
  { modifier: 'apart-shape--purple', src: '/assets/research-enhanced.png', alt: 'Research Enhanced' },
  { modifier: 'apart-shape--indigo', src: '/assets/execution.png',         alt: 'Execution' },
  { modifier: 'apart-shape--black',  src: '/assets/creativity.png',        alt: 'Creativity' },
];

function initApartShapes() {
  const wrap = document.getElementById('apartShapes');
  if (!wrap) return;

  wrap.innerHTML = SHAPES.map((s) => `
    <div class="apart-shape ${s.modifier}">
      <img src="${s.src}" alt="${s.alt}">
    </div>
  `).join('');

  const shapeEls = Array.from(wrap.querySelectorAll('.apart-shape'));
  const prevBtn = document.querySelector('.apart-slider-arrow[data-dir="prev"]');
  const nextBtn = document.querySelector('.apart-slider-arrow[data-dir="next"]');

  // Default: la del centro (index 1) activa, las otras dos en 0.9
  let activeIndex = 1;

  function update() {
    shapeEls.forEach((shape, i) => {
      shape.style.transform = `scale(${i === activeIndex ? 1 : 0.9})`;
    });
  }

  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + shapeEls.length) % shapeEls.length;
    update();
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % shapeEls.length;
    update();
  });

  update();
}

initApartShapes();
