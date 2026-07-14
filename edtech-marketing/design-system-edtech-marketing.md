# EdTech Marketing Page — Sub Design System

Clases específicas de la página `/edtech-marketing`. Complementan el design system global (`/design-system.md`).

Componentes implementados en esta página: `navbar` (variante `nav--white`), `shapes-slider`, `practices-card`, `service-card`, `footer`.

---

## Sección Hero

### `.section--hero-marketing`
Modifier de `.section`. Hero principal de la página.
- `position: relative` — necesario para posicionar el bg absoluto
- `margin-top: 10em`
- `padding-top: 4.29em` (60px @ 14px base)
- `padding-bottom: 8.57em` (120px @ 14px base)
- `overflow: hidden`
- Mobile: `margin-top: 10.67em` (96px @ 9px base), `padding-top: 13.89em` (125px @ 9px base), `padding-bottom: 19.44em` (175px @ 9px base)

### `.hero-marketing-bg`
Placeholder del fondo de imagen de la sección (a reemplazar por imagen real). Cubre toda la sección detrás del contenido.
- `position: absolute; inset: 0; z-index: 0`
- Fondo `--color-gray` + texto centrado en mayúsculas al 40% de opacidad, mismo patrón que `.card-work-bg`

### `.hero-marketing-container`
Modifier de `.container`. Contiene las dos partes del hero (texto + CTA).
- `position: relative; z-index: 1` — queda por encima del bg
- `gap: 2.14em` (30px @ 14px base) entre el bloque de texto y el bloque de CTA

### `.hero-marketing-text`
Wrapper del título y subtítulo.
- `display: flex; flex-direction: column; gap: 0.5em`
- `max-width: 50%` (mobile: `100%`)

### `.section--hero-marketing h1`
- Lora, weight 500, `font-style: normal`
- `font-size: 3.43em`, `line-height: 1.25`, `letter-spacing: -0.48px`
- Mobile: `32px` (mismo tamaño que el resto de heros del sitio)

### `.hero-marketing-text .text-body`
- `max-width: 90%` — limita el ancho del subtítulo dentro del bloque de texto

### `.hero-home-cta`
Elemento reutilizado tal cual de `/home` (mismas clases y estilos, desktop y mobile), con un ajuste propio de esta página:
- `display: flex; flex-direction: column; align-items: center; gap: 0.5em`
- `margin-right: auto` — alinea el bloque de CTA a la izquierda dentro del container
- `.hero-home-cta .btn-white` fuerza `border-color: var(--color-white)`

---

---

## Sección Practices

### `.section--practices`
Modifier de `.section`.
- `background-color: var(--color-indigo)`
- `padding-top: 8.93em` (125px @ 14px base)
- `padding-bottom: 10.71em` (150px @ 14px base)
- Mobile: hereda el padding de desktop (no especificado distinto)

### `.practices-container`
Modifier de `.container`.
- `gap: 7.14em` (100px @ 14px base) entre el bloque de intro y el grid

### `.practices-intro`
Wrapper del título y subtítulo de la sección.
- `display: flex; flex-direction: column; gap: 0.71em`

### `.section--practices h2`
- Lora, weight 500, `font-style: normal`, color `--color-white`
- Hereda `font-size` global de `h2` (2.6em desktop / 24px mobile vía `.section--practices h2` scoped)

### `.practices-intro .text-body--sm`
- `color: rgba(255,255,255,0.85)` — texto blanco atenuado sobre fondo indigo
- `max-width: 34em` (mobile: `100%`)

### `.practices-grid`
- `display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.14em` (30px @ 14px base)
- Mobile: `grid-template-columns: 1fr`

### Practices Card (componente)
3 instancias de `/components/practices-card/` implementadas **sin modificar el componente**. Cada una usa el ícono intercambiable documentado en `/components/design-system-components.md` (wrapper fijo, SVG interno reemplazable):
1. **Customer Marketing** — ícono default de 3 rombos
2. **Granular Marketing Programs** — ícono circular tipo swirl (SVG provisto por Santiago)
3. **Agile Brand Development** — ícono cuadrado con espiral circular interior (SVG provisto por Santiago)

## Notas
- El único bloque `@media (max-width: 768px)` vive al final del archivo `style.css`, sin `!important`, usando selectores scoped (`.section--hero-marketing h1`) en vez de tags globales, siguiendo el patrón del design system.
- **Shapes Slider**: componente importado tal cual desde `/components/shapes-slider/` (HTML, CSS y JS sin modificar), colocado justo debajo del hero. Usa clases globales compartidas ya definidas en este `style.css` (`h2`, `h3`, `.text-body--sm`, `.btn`, `.btn-dark`), que coinciden con los valores del design system global. No se documentan sus clases aquí — ver `/components/design-system-components.md`.

---

## Sección Menu ("What's on the menu?")

Sección larga con varios bloques de servicios — **por ahora se implementa solo el primer bloque** ("UX/UI & Web Design"). El resto se agrega en próximos pasos.

### `.section--menu`
- `background-color: var(--color-black)` (#101010)
- `padding-top: 7.14em` (100px @ 14px base)
- `padding-bottom: 10.71em` (150px @ 14px base)

### `.menu-container`
Modifier de `.container`, pisa el `display:flex` base con grid propio.
- `display: grid; grid-template-columns: 0.45fr 1fr` (columna izquierda más angosta)
- `gap: 8.21em` (115px @ 14px base)
- `align-items: start`
- Mobile: `grid-template-columns: 1fr; gap: 4.29em`

### `.menu-intro` (columna izquierda)
- `display: flex; flex-direction: column; gap: 2.5em` (35px)
- `h2`: Lora 500, `font-size: 2.57em` (36px, mobile `28px` fijos), `line-height: 1.25`, `letter-spacing: -0.36px` (-1%), color blanco
- `.text-body`: color `rgba(255,255,255,0.85)`

### `.menu-blocks` (columna derecha, wrapper de todos los bloques)
- `display: flex; flex-direction: column; align-items: stretch; gap: 3.93em` (55px)

### `.menu-block` (cada bloque individual)
- `display: flex; flex-direction: column; gap: 3em` (42px, entre título y grid)

### `.menu-block-title`
- Lora 500, `font-size: 1.71em` (24px), `line-height: 1.4`, `letter-spacing: 0`, color blanco
- Clase dedicada (no tag `h3` global) para no colisionar con el `h3` interno de `service-card`

### `.menu-block-grid`
- `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.07em` (15px)
- Mobile: `grid-template-columns: 1fr`
- Contiene 3 instancias de `service-card` (componente sin modificar) con override propio en `.menu-block-grid .service-card`: `width: 100%; height: auto; aspect-ratio: 1/1` — la card se vuelve cuadrada y llena la celda del grid
- Mobile: `.menu-block-grid` pasa de grid a `display: flex` con `overflow-x: auto` + `scroll-snap-type: x mandatory` (scroll horizontal, sin scrollbar visible); cada `.service-card` mantiene `aspect-ratio: 1/1` con `flex: 0 0 60%`
- Contenido de las 3 cards: placeholder por defecto del componente ("Website Design") — pendiente el contenido real de cada una.
