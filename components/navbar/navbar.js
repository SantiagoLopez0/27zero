// ============================
// Navbar — 27zero
// Cambia a nav--scrolled al pasar 50px de scroll.
// Guarda la variante inicial (nav--white o nav--black) para restaurarla al volver arriba.
// ============================

const nav = document.querySelector('.nav');
const initialVariant = nav.classList.contains('nav--black') ? 'nav--black' : 'nav--white';

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
    nav.classList.remove('nav--white', 'nav--black');
    nav.style.top = '2.2em';
  } else {
    nav.classList.remove('nav--scrolled');
    nav.classList.add(initialVariant);
    nav.style.top = '0';
  }
});
