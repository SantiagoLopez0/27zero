// ============================
// Marquee Logos — 27zero
// La animación CSS mueve cada .marquee-list de 0% a -100%. Con un
// animation-duration fijo, la velocidad visual cambiaría según cuántos
// logos haya. Este script calcula la duración según el ancho real del
// contenido, para mantener una velocidad constante (px/s) sin importar
// cuántos logos se agreguen o quiten.
// ============================

function setMarqueeSpeed(marquee, pxPerSecond = 60) {
  const lists = marquee.querySelectorAll('.marquee-list');
  if (!lists.length) return;

  const width = lists[0].scrollWidth;
  const duration = width / pxPerSecond;

  lists.forEach((list) => {
    list.style.animationDuration = `${duration}s`;
  });
}

document.querySelectorAll('.marquee').forEach((marquee) => {
  setMarqueeSpeed(marquee);
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.marquee').forEach((marquee) => {
    setMarqueeSpeed(marquee);
  });
});
