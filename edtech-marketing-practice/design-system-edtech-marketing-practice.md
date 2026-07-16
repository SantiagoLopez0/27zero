# EdTech Marketing Practice Page — Sub Design System

Clases específicas de la página `/edtech-marketing-practice`. Complementan el design system global (`/design-system.md`).

Componentes implementados en esta página: `navbar` (variante `nav--white`), `footer`.

Estado: en construcción — navbar, hero y footer implementados. Faltan las secciones propias de la práctica (a definir).

---

## Sección Hero

Sección duplicada desde `/edtech-marketing` (`.section--hero-marketing`) — mismo markup y mismos estilos. Copy propio de esta práctica ya aplicado: H1 "Turning communities into growth engines." + texto de `.text-body` sobre storytelling entre pares. Se eliminó el `.text-caption` ("Free. 30 min. No sales pitch.") del `.hero-home-cta` — queda solo el botón.

### `.section--hero-marketing`
Modifier de `.section`. Hero principal de la página.
- `position: relative` — necesario para posicionar el bg absoluto
- `margin-top: 10em`
- `padding-top: 6.86em` (96px @ 14px base)
- `padding-bottom: 8.93em` (125px @ 14px base)
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
- `max-width: 90%`

### `.hero-home-cta`
Wrapper del CTA (solo el botón — sin `.text-caption`).
- `display: flex; flex-direction: column; align-items: center; gap: 0.5em`
- `margin-right: auto`

### `.hero-home-cta .btn-white`
- `border-color: var(--color-white)` (override sobre `.btn-white` base, que usa `border-color: var(--color-black)`)

---

## Sección Credibility

Sección de 3 bloques: título + subtítulo centrados, y una lista de textos en flex-wrap separados por dots.

### `.section--credibility`
Modifier de `.section`.
- `padding-top: 3.21em` (45px @ 14px base)
- `padding-bottom: 6.86em` (96px @ 14px base)

### `.credibility-container`
Modifier de `.container`. `align-items: center` + `gap: 2.5em` (35px @ 14px base) entre `.credibility-intro` y `.credibility-list`.

### `.credibility-intro`
Wrapper de título y subtítulo.
- `display: flex; flex-direction: column; align-items: center; gap: 1.71em` (24px @ 14px base) entre h2 y párrafo
- `text-align: center`

### `.credibility-intro h2`
- Lora, weight 500, `font-style: normal` (mismo patrón que `.section--practices h2` en `/edtech-marketing`)
- `max-width: 55%` (mobile: `100%`)
- Mantiene el tamaño default de `h2` (`2.6em`/36.4px). Mobile: `24px`

### `.credibility-intro p`
- `max-width: 80%` (mobile: `100%`)

### `.credibility-list`
Grid de textos en flex-wrap.
- `display: flex; flex-wrap: wrap; justify-content: center; align-items: center`
- `gap: 1.07em` (15px @ 14px base)
- `max-width: 80%` (mobile: `100%`)

### `.credibility-item`
Cada texto de la lista.
- Lora, weight 500, `font-style: normal`
- `font-size: 1.21em` (17px @ 14px base; mobile fijo `15px`)
- `line-height: 1.25`, `letter-spacing: -0.01em` (-1%), `text-align: center`

### `.credibility-dot`
Separador entre textos.
- `width/height: 0.36em` (5px @ 14px base) — círculo (`border-radius: 50%`)
- `background-color: var(--color-purple)`
- `flex-shrink: 0`
- No se define un tamaño fijo específico para mobile (queda en `em`, escala con el body de 9px base); ajustar si se requiere un tamaño visual distinto.

---

## Sección Brand Logos

Grid de 3 columnas (1 en mobile) con logo + texto por celda, sobre fondo indigo. Usa `/assets/placeholder.png` como logo temporal en todas las celdas.

### `.section--brand-logos`
Modifier de `.section`. Fondo `--color-indigo`.
- `padding-top: 8.57em` (120px @ 14px base)
- `padding-bottom: 8.57em` (120px @ 14px base)

### `.brand-logos-container`
Modifier de `.container`. `gap: 5.71em` (80px @ 14px base) entre el `h2` y `.brand-logos-grid`.

### `.brand-logos-container h2`
- Lora, weight 500, `font-style: normal`, `color: var(--color-white)` (mismo patrón que `.section--practices h2`)
- `max-width: 30%` (mobile: `100%`)
- Mobile: `24px`

### `.brand-logos-grid`
- `display: grid; grid-template-columns: repeat(3, 1fr)`
- `gap: 5.71em` (80px @ 14px base)
- Mobile: `grid-template-columns: 1fr` (1 columna)

### `.brand-logos-item`
Celda individual (logo + texto).
- `display: flex; flex-direction: column; align-items: start; gap: 2.14em` (30px @ 14px base)

### `.brand-logos-logo`
Imagen del logo (placeholder por ahora).
- `height: 4em`, `width: auto`, `object-fit: contain`

### `.brand-logos-item .text-body--sm`
- `color: var(--color-white)` (blanco sólido, sin opacity)

### Nota sobre placeholder
`/assets/placeholder.png` se usa como logo temporal en las 4 celdas. Reemplazar por el logo real de cada marca (Busuu, D2L, Anthology, Instructure) cuando estén disponibles los assets definitivos.

---

## Sección Conversation Engine

Bloque de 2 columnas: título a la izquierda + 3 `dropdown` (componente `/components/dropdown`) a la derecha. El componente se importa tal cual — `dropdown.css` y `dropdown.js` sin overrides — sobre fondo `#101010` (mismo bg que espera el componente por diseño).

### `.section--conversation-engine`
Modifier de `.section`. Fondo `--color-black` (#101010).
- `padding-top: 8.21em` (115px @ 14px base)
- `padding-bottom: 5.71em` (80px @ 14px base)

### `.conversation-engine-container`
Modifier de `.container`.
- `display: grid; grid-template-columns: 0.45fr 1fr`
- `gap: 8.21em`
- `align-items: start`
- Mobile: `grid-template-columns: 1fr`, `gap: 4.29em`

### `.conversation-engine-container h2`
- Lora, weight 500, `font-style: normal`, `color: var(--color-white)` (mismo patrón que el resto de h2 sobre fondo oscuro)

### `.conversation-engine-dropdowns`
Wrapper de los 3 dropdowns.
- `display: flex; flex-direction: column; gap: 0` — el propio componente ya trae `border-top` y padding vertical en `.dropdown-toggle`, así que el gap entre items es 0

### `.dropdown-cta`
Clase auxiliar (encima de `.btn.btn-purple`) usada solo en el primer dropdown ("The EdTech Mentor") para separar el botón del párrafo.
- `margin-top: 0.5em`
- `margin-right: auto` — evita que el botón se estire a todo el ancho del `.dropdown-content-inner`
- `:hover` override: `background-color` e `border-color` en `--color-indigo`, `color` blanco — el hover default de `.btn-purple` (bg transparent, texto/borde negro) es invisible sobre el fondo `#101010` de esta sección

### Primer dropdown abierto por defecto
El dropdown "The EdTech Mentor" arranca con la clase `.is-open` en el HTML y `style="height: auto;"` inline en `.dropdown-content`, para que se muestre expandido al cargar la página (el componente en sí solo anima la altura vía JS al hacer click, no soporta un estado inicial abierto out-of-the-box).

### Contenido placeholder
Los textos de "Customer Spotlights" y "Community-Driven Content" son placeholder (no estaban visibles en el diseño de referencia, que los mostraba cerrados) — ajustar cuando el copy definitivo esté listo.

---

## Sección Menu

Duplicada 1:1 desde `/edtech-marketing` (`.section--menu`) — mismo markup, mismos estilos (desktop y mobile), mismo copy de `.menu-intro`. Único cambio: **solo se incluyó el primer `.menu-block`** ("UX/UI & Web Design", 3 `service-card`) de los 8 que tiene la página original — el resto se omitió a propósito. También **`padding-top: 0`** en `.section--menu` (en `/edtech-marketing` es `7.14em`/100px).

Usa el componente `service-card` (`/components/service-card`) tal cual, sin overrides — solo el wrapper `.menu-block-grid .service-card` fuerza `width: 100%; aspect-ratio: 1/1` para que la card ocupe la celda del grid en vez de su tamaño fijo default (19em × 19em).

### `.section--menu`
Modifier de `.section`. Fondo `--color-black`.
- `padding-top: 0`
- `padding-bottom: 10.71em` (150px @ 14px base)

### `.menu-container`
Modifier de `.container`. Mismo grid 2 columnas que `.conversation-engine-container` (`0.45fr 1fr`, `gap: 8.21em`, `align-items: start`). Mobile: `grid-template-columns: 1fr`, `gap: 4.29em`.

### `.menu-intro`
Wrapper de título y subtítulo, a la izquierda.
- `display: flex; flex-direction: column; gap: 2.5em` (35px @ 14px base)

### `.menu-intro h2`
- Lora, weight 500, `font-style: normal`, `font-size: 2.57em` (36px), `letter-spacing: -0.36px`, `color: var(--color-white)`. Mobile: `28px`

### `.menu-intro .text-body`
- `color: rgba(255, 255, 255, 0.85)`

### `.menu-blocks`
Wrapper de los `.menu-block` (en esta página, solo 1).
- `display: flex; flex-direction: column; gap: 3.93em` (55px @ 14px base)

### `.menu-block`
- `display: flex; flex-direction: column; gap: 3em` (42px @ 14px base) entre el título del bloque y el grid de cards

### `.menu-block-title`
- Lora, weight 500, `font-style: normal`, `font-size: 1.71em` (24px), `color: var(--color-white)`. Mobile: `21px`

### `.menu-block-grid`
- Desktop: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.07em` (15px)
- Mobile: se convierte en carrusel horizontal (`display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory`, scrollbar oculta)

### `.menu-block-grid .service-card`
- Desktop: `width: 100%; height: auto; aspect-ratio: 1/1` (la card se estira a la celda del grid en vez de su 19em × 19em fijo)
- Mobile: `flex: 0 0 60%; width: 60%; scroll-snap-align: start` (cada card ocupa 60% del viewport en el carrusel)

---

## Navbar

Variante `nav--white`, igual que el resto de páginas del sitio. Sin overrides — usa `/components/navbar/navbar.css` y `/components/navbar/navbar.js` tal cual.

## Footer

Sin overrides — usa `/components/footer/footer.css` tal cual, mismo markup y mismos links que `/edtech-marketing`.

---

## Notas

- Nombre de carpeta asumido como `edtech-marketing-practice` (slug derivado del título de la sesión "Ed Tech Marketing Practice"); no existía referencia previa a esta página en `/menu` ni en otras páginas del repo. Ajustar si el nombre final debe ser otro.
- Aún no se agregó esta página a `/menu`. Pendiente de confirmar antes de agregarla.
