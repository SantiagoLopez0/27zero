# Home Page — Sub Design System

Clases específicas de la página `/` (Home). Complementan el design system global (`/design-system.md`).

Este documento se va completando sección por sección a medida que se construye la página.

---

## Sección Hero

### `.section--hero-home`
Modifier de `.section`. Fondo `--color-gray`.
- `margin-top: 5.5em` (77px @ 14px) — espacio para el navbar fijo (ahora `nav--white` es transparent, así que este espacio ya no necesita ser "en blanco" estricto)
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

---

## Sección "What sets 27zero apart"

**Nota sobre assets:** el mensaje original listaba `creativity.png` tanto para el shape purple como para el black. Por el nombre de archivo y el contenido visual de cada imagen, se asumió el mapeo correcto: `research-enhanced.png` → shape purple ("Research Enhanced"), `execution.png` → shape indigo ("Execution"), `creativity.png` → shape black ("Creativity"). Ajustar si no era la intención.

**Renombrados:** los logos en `/assets/logos/` tenían espacios en el nombre (`scolarship magic.svg`, `skillwel.svg`, `world learning.svg`), lo cual es inseguro en URLs. Se renombraron a `scholarship-magic.svg`, `skillwell.svg` y `world-learning.svg`.

### `.section--apart-home`
Modifier de `.section`. Fondo blanco, todo el contenido centrado (`text-align: center`).
- `padding-top: 5em` (70px @ 14px)
- `padding-bottom: 8.93em` (125px @ 14px)

### `.apart-home-container`
Modifier de `.container`. `align-items: center; gap: 1.79em` (25px @ 14px).

### `.section--apart-home h2` / `h3`
Override puntual: Lora, weight 500, style normal. El H2 hereda tamaño/line-height del H2 global. El H3 tiene tamaño propio: `1.71em` (24px @ 14px), line-height 125%, letter-spacing `-0.24px` (-1% de 24px), `text-align: center`.

### Slider de shapes (`.apart-slider`)
Carrusel simple de slides completos (no drag, solo flechas), reutiliza `.slider-arrow` del design system global para el estilo de los botones. Las imágenes (`research-enhanced.png`, `execution.png`, `creativity.png`) ya incluyen el texto embebido, por lo que se eliminó el overlay `.apart-shape-label` que se había agregado antes.
- `.apart-slider`: flex row, flechas a los costados, `padding-top: 5.71em` (80px @ 14px)
- `.apart-slider-track-wrap` (flex:1, overflow hidden) en el centro
- `.apart-slider-track`: flex row, `transform: translateX(-N * 100%)` controlado por JS, `transition: transform 0.4s ease`
- `.apart-slide`: `flex: 0 0 100%`, contiene los 3 `.apart-shape` en fila
- `.apart-shape`: `flex: 1`, imagen (`max-width: 22em`)
- JS (`initApartSlider`): genera 2 slides idénticos (duplicado del único slide real) para demostrar la funcionalidad; flechas prev/next avanzan/retroceden el índice y se deshabilitan en los extremos
- Mobile (`≤767px`): `.apart-slide` pasa a `flex-direction: column`

### "Execution that Scales" (`.apart-home-scales`)
Modifier de `.container`. Centrado.
- `gap: 1.79em` (25px @ 14px)
- `padding-top: 3.93em` (55px @ 14px)
- Párrafo con `max-width: 45em`

### Logos — carrusel infinito (`.logos-marquee`)
- `.logos-marquee`: `overflow: hidden`, `margin-top: 6.43em` (90px @ 14px), aplica `mask-image` en los bordes para un fade-out suave
- `.logos-track`: flex row, `width: max-content`, animación `logos-scroll` (translateX 0 → -50%) en loop infinito lineal (25s)
- JS (`initLogosMarquee`): la lista de logos (`CLIENT_LOGOS`) se duplica una vez en el DOM para que el loop del -50% sea continuo y sin salto visible
- Logos usados: Student First, Doctums, Skillwell, World Learning, Scholarship Magic (no se incluyó OES por no tener el asset)

---

## Sección "The EdTech Mentor"

Duplicado estructural de la sección Intro (`.section--intro-home`), mismo layout (`row` texto+media + slider debajo).

### `.section--mentor-home`
Fondo `--color-indigo`, `color: var(--color-white)` (cascada a H2, párrafo, etc.).
- `padding-top: 10.36em` (145px @ 14px)
- `padding-bottom: 5.71em` (80px @ 14px)

### `.mentor-home-row` / `.mentor-home-text` / `.mentor-home-media`
Mismos estilos que `.intro-home-row` / `.intro-home-text` / `.intro-home-media` (duplicados 1:1, sin cambios de spacing).

### `.section--mentor-home h2`
Mismo override que `.section--intro-home h2` (Lora 500, 2.57em, letter-spacing -0.36px).

### `.section--mentor-home .btn-white`
Botón usa la variante `.btn-white` (en vez de `.btn-dark` como en Intro), con `border-color: var(--color-white)` — mismo tratamiento que el botón del Hero, para que quede "full blanco" sobre el fondo indigo.

### Slider dentro de esta sección
Reutiliza el mismo slider "Los mejores" (misma función JS `renderLosMejoresSlider(containerId, showTitle)`, llamada como `renderLosMejoresSlider('losMejoresContainer')` en Intro y `renderLosMejoresSlider('mentorSliderContainer', false)` aquí, sin `.slider-title`/`.slider-header`). Único cambio visual además: `.section--mentor-home .slider-arrow` → fondo transparente, borde y color blanco; hover invierte a fondo blanco/texto indigo.

---

## Sección Testimonials

### `.section--testimonials-home`
Fondo `--color-black`, `color: var(--color-white)`.
- `padding-top: 7.86em` (110px @ 14px)
- `padding-bottom: 4.64em` (65px @ 14px)

### `.testimonials-slider`
Carrusel de 1 slide por view (igual mecánica que `.apart-slider`: flechas a los costados, track con `transform: translateX`, deshabilitado en los extremos — sin loop).
- `.testimonials-arrow`: reutiliza `.slider-arrow`, fondo transparente + borde/texto blanco, hover invierte a blanco/negro
- `.testimonial-slide`: `justify-content: center` (slide centrado), quote SVG + `.testimonial-content` en fila
- `.testimonial-quote-icon`: el SVG del quote grande (path `#C286FF`), `width: 30em`
- `.testimonial-content`: `max-width: 30em`, `gap: 2.86em` (40px @ 14px)
- `.testimonial-text`: Inter 500, `1.5em` (21px @ 14px), line-height 150%, letter-spacing 0
- `.testimonial-divider`: línea blanca de 1px bajo el texto (ancho 100% del `.testimonial-content`, sin max-width propio)
- `.testimonial-author`: avatar circular placeholder (`.testimonial-avatar`, iniciales) + nombre/rol (`.testimonial-author-info`)
- `.testimonial-name`: Inter 400, `1.5em` (21px @ 14px)
- Mobile (`≤767px`): `.testimonial-slide` pasa a columna

### `.testimonials-dots`
Paginación por dots debajo del slider, sincronizada con el índice del carrusel (click en un dot navega directo a ese slide).
- `.testimonial-dot`: círculo outline blanco; `.testimonial-dot--active` → fondo/borde `--color-purple`

### Contenido
4 testimonios placeholder (`TESTIMONIALS` en `script.js`), el primero con el copy real dado ("Erin Grant"), el resto con Lorem ipsum — reemplazar cuando se tenga el contenido definitivo.

---

## Navbar y Footer

Integrados desde `/components/navbar/` y `/components/footer/`, tal como están definidos ahí (sin modificaciones):
- CSS: `<link>` a `/components/navbar/navbar.css` y `/components/footer/footer.css` en el `<head>`
- HTML: markup del `<header class="nav nav--white">` y del `<footer class="footer">` copiado tal cual del componente
- JS: `/components/navbar/navbar.js` (requiere `lottie-web` por CDN antes) para el estado `nav--scrolled` y el menú mobile animado
- El navbar es `position: fixed` (definido en su propio CSS). Variante usada: `nav--white`, consistente con el fondo claro del Hero
- El footer no requiere JS propio

