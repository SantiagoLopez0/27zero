# Home Page — Sub Design System

Clases específicas de la página `/` (Home). Complementan el design system global (`/design-system.md`).

Este documento se va completando sección por sección a medida que se construye la página.

---

## Sección Hero

### `.section--hero-home`
Modifier de `.section`. Fondo `--color-gray` desde el borde superior de la página (por detrás del navbar fijo, que aún no se ha construido).
- `padding-top: 8.57em` (120px @ 14px) — espacio para despejar el navbar fijo, según lo indicado por el cliente
- `padding-bottom: 6em` (84px @ 14px) — valor estimado a falta de spec exacta en px del Figma, ajustar si se provee medida real

### `.hero-home-container`
Modifier de `.container`. Reduce el `gap` entre H1, botón y caption.
- `gap: var(--space-xs)`

### `.text-caption`
Texto pequeño auxiliar (ej. "Free. 30 min. No sales pitch.").
- Inter, 500, `0.86em` (12px @ 14px), line-height 150%

---

## Sección Intro + Los mejores

### `.section--intro-home`
Modifier de `.section`. Fondo `--color-purple`. Contiene el bloque intro (texto + media) y el slider "Los mejores" apilados verticalmente.
- `padding-top: 6.5em`
- `padding-bottom: 0` (el padding inferior lo aporta `.sliders-container`)

### `.intro-home-row`
Fila flex de dos columnas: texto a la izquierda, media a la derecha.
- `display: flex; justify-content: space-between; gap: 3em`
- Mobile (`≤767px`): `flex-direction: column`

### `.intro-home-text`
Columna de texto: H2 + párrafo + botón.
- `flex: 0 0 34%`
- `gap: var(--space-xs)`

### `.intro-home-media`
Placeholder de imagen/video (equivalente a `.card-work-bg` pero como bloque suelto, no absoluto). Fondo `--color-gray`, texto centrado tipo wireframe con opacity 0.4.
- `flex: 1`
- `min-height: 22em`
- `border-radius: 0.5em`

### Slider "Los mejores"
Reutiliza **1:1** las clases y la lógica JS (drag + flechas) del slider de `/work`: `.sliders-container`, `.slider-block`, `.slider-header`, `.slider-title`, `.slider-footer`, `.slider-nav`, `.slider-arrow`, `.slider-track-wrap`, `.slider-track`, `.card`, `.card--work`, `.card--featured`, `.card-work-*`. Sin cambios de valores respecto al design-system de Work. Solo se agregó `padding-top`/`padding-bottom: var(--space-lg)` al `.sliders-container` de Home para separarlo del bloque intro (en Work ese padding lo controlaba `.section--sliders`, aquí no existe una sección propia porque el slider vive dentro de `.section--intro-home`).
- No se implementaron pills de filtro en esta sección (solo se muestra la categoría "Los mejores").

