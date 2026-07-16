# About Page — Sub Design System

Clases específicas de la página `/about`. Complementan el design system global (`/design-system.md`).

---

## Correcciones al base tipográfico

`.text-body` corregido a `font-weight: 400` (desktop y mobile), separado de `.text-link` (`font-weight: 500`), según `/design-system.md`.

---

## Componentes globales usados

- **Navbar** (`/components/navbar`) — variante `nav--white`.
- **Footer** (`/components/footer`).

---

## Sección Hero

### `.section--hero-marketing`
Basado en la sección hero de `/edtech-marketing`, con overrides propios de `/about`.
- `position: relative`
- `margin-top: 10em`
- `padding-top: 6.43em` (90px @ 14px base)
- `padding-bottom: 6.43em` (90px @ 14px base)
- `overflow: hidden`

**Diferencias respecto al hero de `/edtech-marketing`:**
- No incluye el bloque `.hero-home-cta` (botón "Book a strategy session" + caption).
- `padding-top`/`padding-bottom` propios (90px vs. 60px/120px en edtech-marketing).
- `.hero-marketing-container` gap propio (45px vs. 30px en edtech-marketing).
- Copy propio (título y subtítulo de About).

### `.hero-marketing-bg`
Placeholder de imagen de fondo. `position: absolute; inset: 0`, fondo `--color-gray`, centra un `span` de texto placeholder.

### `.hero-marketing-container`
Modifier de `.container`. `position: relative; z-index: 1; gap: 3.21em` (45px @ 14px base).

### `.hero-marketing-text`
Columna de texto del hero (H1 + `.text-body`). `max-width: 50%` en desktop, `100%` en mobile.

### `.section--hero-marketing h1`
Override tipográfico: Lora, `font-weight: 500`, `font-style: normal`, `3.43em`, mobile fijo en `32px`.

---

## Mobile

Media query única `@media (max-width: 768px)` al final de `style.css`. Base EM mobile: `9px`. Textos con `px` fijos (`text-body`, `text-body--sm`, `text-caption`, `.btn`, H1 del hero: `32px`). Espaciados y layout siguen en EM.

---

## Pendiente

Próximas secciones de la página `/about` se documentarán aquí a medida que se implementen.
