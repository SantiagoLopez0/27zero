# Home Page — Sub Design System

Clases específicas de la página `/` (Home). Complementan el design system global (`/design-system.md`).

Este documento se va completando sección por sección a medida que se construye la página.

---

## Sección Hero

### `.section--hero-home`
Modifier de `.section`. Fondo `--color-gray`.
- `margin-top: 8.57em` (120px @ 14px) — espacio en blanco (fondo body, blanco) donde se posicionará el navbar fijo
- `padding-top: 12.14em` (170px @ 14px)
- `padding-bottom: 12.14em` (170px @ 14px)

### `.hero-home-container`
Modifier de `.container`.
- `align-items: flex-start`
- `gap: 1em`

### `.section--hero-home h1`
Override del H1 global, específico del hero de Home.
- Lora, weight 500, style normal, `3.43em` (48px @ 14px), line-height 125%, letter-spacing `-0.48px` (-1% de 48px)

### `.inter-accent` (dentro de `.section--hero-home h1`)
Span para la palabra de acento ("Brand power."), en Inter en vez de Lora, mismo tamaño/line-height/letter-spacing que el H1.
- Inter, weight 500, style normal, `1em` (hereda 48px del H1), line-height 125%, letter-spacing `-0.48px`

### `.hero-home-cta`
Wrapper del botón + caption. Los centra entre sí, independientemente del alineado del container.
- `display: flex; flex-direction: column; align-items: center; gap: 0.5em`
- `.hero-home-cta .btn-white` → `border-color: var(--color-white)` (override puntual solo en el hero)

### `.text-caption`
- Inter, weight 400, `1.07em` (15px @ 14px), line-height 160%, letter-spacing 0

---

## Sección Intro + Los mejores

### `.section--intro-home`
Modifier de `.section`. Fondo `--color-purple`.
- `padding-top: 4.29em` (60px @ 14px)
- `padding-bottom: 4.29em` (60px @ 14px)

### `.intro-home-row`
Fila flex de dos columnas: texto a la izquierda, media a la derecha.
- `display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5em`
- Mobile (`≤767px`): `flex-direction: column`

### `.intro-home-text`
Columna de texto: H2 + párrafo + botón.
- `align-items: flex-start; gap: 1.5em` (21px @ 14px)
- `flex: 0 0 34%`

### `.section--intro-home h2`
Override del H2 global, específico del intro de Home.
- Lora, weight 500, style normal, `2.57em` (36px @ 14px), line-height 125%, letter-spacing `-0.36px` (-1% de 36px)

### `.inter-accent` (dentro de `.section--intro-home h2`)
Span para la frase de acento ("for growth and impact."), en Inter en vez de Lora, mismo tamaño/line-height/letter-spacing que el H2.

### `.intro-home-text p`
Reduce el párrafo del bloque intro a `1.07em` (15px @ 14px).

### `.intro-home-media`
Placeholder de imagen/video (equivalente a `.card-work-bg` pero como bloque suelto, no absoluto). Fondo `--color-gray`, texto centrado tipo wireframe con opacity 0.4.
- `flex: 1`
- `min-height: 34em`
- `border-radius: 0.5em`

### Slider "Los mejores"
Reutiliza **1:1** las clases y la lógica JS (drag + flechas) del slider de `/work`: `.sliders-container`, `.slider-block`, `.slider-header`, `.slider-title`, `.slider-footer`, `.slider-nav`, `.slider-arrow`, `.slider-track-wrap`, `.slider-track`, `.card`, `.card--work`, `.card--featured`, `.card-work-*`. Sin cambios de valores respecto al design-system de Work. Solo se agregó `padding-top`/`padding-bottom: var(--space-lg)` al `.sliders-container` de Home para separarlo del bloque intro (en Work ese padding lo controlaba `.section--sliders`, aquí no existe una sección propia porque el slider vive dentro de `.section--intro-home`).
- No se implementaron pills de filtro en esta sección (solo se muestra la categoría "Los mejores").

