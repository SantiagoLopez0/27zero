# The EdTech Mentor Page — Sub Design System

Clases específicas de la página `/edtech-mentor`. Complementan el design system global (`/design-system.md`).

---

## Componentes globales usados

- **Navbar** — `/components/navbar/` (`navbar.css` + `navbar.js`). Variante inicial: `nav--white`.
- **Footer** — `/components/footer/` (`footer.css`).

Ver `/components/design-system-components.md` para el detalle de clases de ambos componentes (`.nav`, `.btn-nav`, `.footer`, etc.).

---

## Sección Hero / Intro

### `.section--hero`
Modifier de `.section`. Padding reducido respecto al default (no es un hero full-height, es un intro corto de página interna).
- `padding-top: 9em` — `padding-bottom: 2.5em`

### `.hero-container`
Modifier de `.container`. Gap reducido entre breadcrumb, H1 y subtítulo.
- `gap: var(--space-xs)`

### `.section--hero h1`
Override tipográfico del H1 global para esta sección (headline en Lora, no Inter).
- Lora, `font-weight: 500`, `font-style: normal`, `2.9em`, line-height 1.25, letter-spacing `-0.34px`

### `.breadcrumb`
Contenedor flex del breadcrumb superior (`Home > EdTech Mentor Interviews.`).
- Inter, 400, `1em`, `opacity: 0.55` para look muted
- `margin-bottom: var(--space-xs)` para separarlo del H1

### `.breadcrumb-link`
El link "Home" dentro del breadcrumb. Subrayado, hereda color del padre.
- Hover: `--color-indigo`

### `.breadcrumb-current`
Texto plano del breadcrumb (página actual), sin link.

---

## Sección Pills (filtros)

### `.section--pills`
Modifier de `.section`. Pegado al hero, sin padding-top.
- `padding-top: 0` — `padding-bottom: var(--space-lg)`

### `.pills-wrap`
Contenedor flex con wrap para las 4 pills.

### `.pill`
Pill base outline (mismo patrón visual que `/work`). Usado para los 3 filtros: `Essencial`, `Investor`, `Founders`.
- `data-filter` = ID de la sección ancla correspondiente (`essencial`, `investor`, `founders`)
- Al hacer click: scroll suave hacia la sección con ese ID (ver `script.js`)

### `.pill--subscribe`
Modifier de `.pill`. Pill fija (no es un filtro) para el link "Subscribe on LinkedIn".
- Fondo y borde: `--color-purple` — Texto: `--color-black`
- Es un `<a target="_blank">` real hacia LinkedIn, sin `data-filter` — el JS del filtro la ignora

---

## Featured Card

Componente reutilizado tal cual desde `/components/featured-card` (requiere también `/components/work-card/work-card.css` por la clase base `.card`). Markup y contenido placeholder (Julie Kelleher / Kelleher Consulting Group) idénticos a los usados en `/home`.

**Importado en `<head>`:**
- `/components/work-card/work-card.css`
- `/components/featured-card/featured-card.css`

### `.section--featured-mentor`
Modifier de `.section`. Sin padding-top para quedar pegada a la sección de pills.

### `.featured-mentor-wrap`
Wrapper que define el tamaño real de `.card--featured` (que es `width/height: 100%`).
- Desktop: `height: 43.93em` (615px @ 14px base)
- Mobile (`≤768px`): `height: 35.56em` (320px @ 9px base)
- `overflow: hidden` para garantizar que el wrapper nunca exceda esa altura, incluso considerando que el componente `featured-card` trae su propio override `height: auto !important` en su media query mobile (pensado para el caso de `/home`, donde la card crece libremente). En esta página el wrapper fuerza el alto fijo en ambos breakpoints y recorta cualquier contenido que se pase.

---

## Anchors de categoría

Tres secciones vacías (`#essencial`, `#investor`, `#founders`) como destino del scroll de cada pill. El contenido (cards `edtech-mentor-card`) se añadirá sección por sección más adelante.

### `.section` (sin modifier)
Las secciones ancla usan el `.section`/`.container` base del design system global, sin overrides todavía.
