# Components Page — Sub Design System

Clases específicas de la página `/components` (kitchen sink de componentes globales). Complementa el design system global (`/design-system.md`).

Esta página reutiliza al máximo las clases globales (`.section`, `.container`, `.nav`, `.btn`, `.lora`, `h1`–`h6`, `p`/`.text-body`). Solo se documentan aquí las clases nuevas, específicas de esta página.

---

## Navbar

Implementado 1:1 según la sección 4.2 del design system global: `.nav`, `.nav-container`, `.nav-logo`, `.nav-links`, `.btn-nav`, variantes `.nav--white`, `.nav--black`, `.nav--scrolled`. Sin modificaciones.

El comportamiento de scroll (`script.js`) reemplaza `nav--white`/`nav--black` por `nav--scrolled` al pasar los 50px de scroll, y baja el nav a `top: 2.2em`. Al volver arriba, restaura la variante inicial y `top: 0`.

---

## Sección demo

### `.section--component-demo`
Modifier de `.section`. Exclusivo de esta página — le da a la página suficiente altura para poder scrollear y así probar visualmente el cambio a `nav--scrolled`.
- `min-height: 250vh`
- `padding-top: 12em` — deja espacio bajo el nav fijo para que el H1 no quede tapado
- `display: flex; align-items: flex-start`

Se usa junto al `.container` estándar, solo con `gap` reducido (`var(--space-xs)`) entre `h5`, `h1` y `p`.

---

## Pendiente

Próximas secciones a agregar en sesiones futuras: Colores, Tipografía, Espaciado, Botones, Footer, Cards.
