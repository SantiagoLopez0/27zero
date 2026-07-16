# EdTech Marketing Service Page — Sub Design System

Clases específicas de la página `/edtech-marketing-service`. Complementan el design system global (`/design-system.md`).

Componentes implementados en esta página: `navbar` (variante `nav--white`), `footer`.

Estado: en construcción — navbar, hero y footer implementados. Faltan las secciones propias de la práctica (a definir).

---

## Sección Hero

Sección duplicada desde `/edtech-marketing` (`.section--hero-marketing`) — mismo markup y mismos estilos. Copy propio de esta página: H1 "Website Adjustments or Updates" + texto de `.text-body` sobre ghostwriting/thought leadership. Se eliminó el `.text-caption` ("Free. 30 min. No sales pitch.") del `.hero-home-cta` — queda solo el botón. Se agregó un ícono SVG (`.hero-marketing-icon`) arriba del H1.

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

### `.hero-marketing-icon`
Ícono SVG propio de esta página, ubicado arriba del H1 dentro de `.hero-marketing-text`.
- `width/height: 5.71em` (80px @ 14px base)
- `color: var(--color-black)` — el SVG usa `fill="currentColor"` para heredar el color
- `margin-bottom: 0.5em`
- El `svg` interno se estira a `width/height: 100%` del wrapper
- No tiene override específico para mobile — escala junto con el body de 9px base (≈ 51px); ajustar si se requiere un tamaño fijo distinto en mobile

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

Sección de 2 bloques: título + subtítulo centrados. Se eliminó la lista de textos separados por dots (`.credibility-list`) que traía la página original — solo queda `.credibility-intro`.

### `.section--credibility`
Modifier de `.section`.
- `padding-top: 3.21em` (45px @ 14px base)
- `padding-bottom: 6.86em` (96px @ 14px base)

### `.credibility-container`
Modifier de `.container`. `align-items: center` + `gap: 2.5em` (35px @ 14px base).

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

### Eliminado: `.credibility-list`, `.credibility-item`, `.credibility-dot`
Se removieron del HTML y del CSS (desktop y mobile) por instrucción explícita — ya no forman parte de esta página.

---

## Sección Brand Logos — Eliminada

Se removió por completo esta sección (HTML, CSS desktop y mobile). Incluía el grid de 3 columnas con logo + texto sobre fondo indigo (`.section--brand-logos`, `.brand-logos-container`, `.brand-logos-grid`, `.brand-logos-item`, `.brand-logos-logo`). Ya no existe en esta página.

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

## Sección Menu — Eliminada

Se removió por completo esta sección (HTML, CSS desktop y mobile) junto con el import de `/components/service-card/service-card.css` en el `<head>`, que solo se usaba acá. Incluía `.section--menu`, `.menu-container`, `.menu-intro`, `.menu-blocks`, `.menu-block`, `.menu-block-title`, `.menu-block-grid`. Ya no existe en esta página.

---

## Sección Closing CTA

Duplicada 1:1 desde `/edtech-marketing` (`.section--closing-cta`) — mismo markup, mismos estilos (desktop y mobile). Único cambio: el copy del `h2`.

### `.section--closing-cta`
Modifier de `.section`. Fondo `--color-white`.
- `padding-top: 5.71em` (80px @ 14px base)
- `padding-bottom: 5.71em` (80px @ 14px base)
- `text-align: center`
- Mobile: `padding-top/bottom: 6.67em` (60px @ 9px base)

### `.closing-cta-container`
Modifier de `.container`. `align-items: center`, `gap: 2.14em` (30px @ 14px base).

### `.section--closing-cta h2`
- Lora, weight 500, `font-style: normal`, `color: var(--color-black)`
- `max-width: 50%` (mobile: `100%`)
- Copy: "Turn your customers into your growth engine." (en `/edtech-marketing` es "Let's partner to articulate and unpack meaningful results.")
- Mobile: `24px`

### `.closing-cta-container .btn-dark`
- `color: var(--color-white)` (override sobre `.btn-dark` base, que usa `color: var(--color-purple)`)
- `:hover`: `color: var(--color-black)` (override sobre el hover base de `.btn-dark`, que usa `color: var(--color-black)` — mismo valor, redundante pero documentado por fidelidad a la sección original)

---

## Navbar

Variante `nav--white`, igual que el resto de páginas del sitio. Sin overrides — usa `/components/navbar/navbar.css` y `/components/navbar/navbar.js` tal cual.

## Footer

Sin overrides — usa `/components/footer/footer.css` tal cual, mismo markup y mismos links que `/edtech-marketing`.

---

## Notas

- Nombre de carpeta asumido como `edtech-marketing-service` (slug derivado del título de la sesión "Ed Tech Marketing Service"); no existía referencia previa a esta página en `/menu` ni en otras páginas del repo. Ajustar si el nombre final debe ser otro.
- Por instrucción explícita, esta página **no** se agrega a `/menu`.
- Cambios aplicados sobre la duplicación inicial: nuevo copy e ícono en el Hero; simplificación de Credibility (se quitó `.credibility-list`); eliminación completa de las secciones Brand Logos y Menu (HTML + CSS + import de `service-card.css`).
