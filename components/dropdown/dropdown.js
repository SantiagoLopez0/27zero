// ============================
// Dropdown (FAQ) — 27zero
// Múltiples dropdowns por página, cada uno independiente — abrir uno
// NO cierra los demás. Toggle simple de clase .is-open.
// ============================

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
