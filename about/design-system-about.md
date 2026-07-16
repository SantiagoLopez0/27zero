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

## Sección Team (The people behind the work)

### `.section--team`
Modifier de `.section`. Fondo indigo.
- `background-color: var(--color-indigo)`
- `padding-top: 8.21em` (115px @ 14px base)
- `padding-bottom: 8.21em` (115px @ 14px base)

### `.team-container`
Modifier de `.container`. `gap: 4em` entre el bloque de título y el grid.

### `.team-intro`
Bloque de título, centrado.
- `display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5em`
- `h2` en color blanco (`var(--color-white)`) — override scoped a `.team-intro`.

### `.team-intro .text-body`
- Color blanco.
- `max-width: 70%` (desktop), `100%` en mobile.
- `margin: 0 auto`.

### `.team-grid`
Grid 3x3 (1 columna en mobile).
- `display: grid; grid-template-columns: 1fr 1fr 1fr`
- `justify-content: center; gap: 0` — las cards quedan pegadas entre sí.
- Mobile: `grid-template-columns: 1fr`.

### `.team-card`
Card individual del team. Usa `/assets/team.png` como placeholder de fondo (imagen de referencia — se reemplazará por foto real de cada miembro).
- `position: relative; width: 100%; height: 100%`; `aspect-ratio: 1/1`
- `background-image: url('/assets/team.png'); background-size: cover; background-position: center`

### `.team-card-info`
Wrapper de texto, posicionado arriba a la derecha sobre la imagen.
- `position: absolute; top: 0; right: 0`
- `padding: 4.43em 1.5em 1.5em` (62px top @ 14px base / 1.5em resto)
- `max-width: 15em` (desktop), `75%` en mobile
- `display: flex; flex-direction: column; align-items: flex-end; gap: 0.36em` (5px @ 14px base)

### `.team-card-name`
Nombre del miembro del equipo.
- Lora, `font-weight: 500`, `font-style: normal`, `font-size: 2.25em` (31.5px @ 14px base), `line-height: 1.05`, `letter-spacing: 0`, `text-align: right`, color blanco.
- Mobile: `font-size: 28px` fijo.

### `.team-card-position`
Cargo del miembro del equipo.
- Inter, `font-weight: 500`, `font-size: 1em` (14px @ 14px base), `line-height: 1.4`, `letter-spacing: 0`, `text-align: right`, color blanco.
- Mobile: `font-size: 14px` fijo (igual que desktop).

---

## Mobile

Media query única `@media (max-width: 768px)` al final de `style.css`. Base EM mobile: `9px`. Textos con `px` fijos (`text-body`, `text-body--sm`, `text-caption`, `.btn`, H1 del hero: `32px`). Espaciados y layout siguen en EM.

---

## Pendiente

Próximas secciones de la página `/about` se documentarán aquí a medida que se implementen.
