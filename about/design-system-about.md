# About Page — Sub Design System

Clases específicas de la página `/about`. Complementan el design system global (`/design-system.md`).

---

## Correcciones al base tipográfico

`.text-body` corregido a `font-weight: 400` (desktop y mobile), separado de `.text-link` (`font-weight: 500`), según `/design-system.md`.

`h2` siempre en Lora (`font-family: 'Lora', serif; font-weight: 500; font-style: normal`), no Inter.

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
Columna de texto del hero (H1 + `.text-body`). `gap: 2.25em`. `max-width: 50%` en desktop, `100%` en mobile.

### `.section--hero-marketing h1`
Override tipográfico: Lora, `font-weight: 500`, `font-style: normal`, `3.43em`, mobile fijo en `32px`.

---

## Sección Creativity is our DNA

### `.section--dna`
Modifier de `.section`. Fondo purple.
- `background-color: var(--color-purple)`
- `padding-top: 5.71em` (80px @ 14px base)
- `padding-bottom: 5.71em` (80px @ 14px base)

### `.dna-container`
Modifier de `.container`. Centra el contenido.
- `align-items: center`
- `gap: 2.25em`

### `.dna-container h2`
Título de la sección, centrado (`text-align: center`). Hereda tamaño/peso del `h2` global.

### `.dna-subtitle`
Clase nueva, específica de esta sección.
- Inter, `font-weight: 400`, `font-size: 1.5em` (21px @ 14px base), `line-height: 1.6`, `letter-spacing: 0`
- `text-align: center`
- `max-width: 70%` (desktop), `100%` en mobile
- Mobile: `font-size: 18px` fijo

---

## Mobile

Media query única `@media (max-width: 768px)` al final de `style.css`. Base EM mobile: `9px`. Textos con `px` fijos (`text-body`, `text-body--sm`, `text-caption`, `.btn`, H1 del hero: `32px`). Espaciados y layout siguen en EM.

---

## Pendiente

Próximas secciones de la página `/about` se documentarán aquí a medida que se implementen.
