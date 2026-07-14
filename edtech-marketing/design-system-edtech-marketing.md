# EdTech Marketing Page — Sub Design System

Clases específicas de la página `/edtech-marketing`. Complementan el design system global (`/design-system.md`).

Componentes implementados en esta página: `navbar` (variante `nav--white`), `shapes-slider`, `footer`.

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

## Notas
- El único bloque `@media (max-width: 768px)` vive al final del archivo `style.css`, sin `!important`, usando selectores scoped (`.section--hero-marketing h1`) en vez de tags globales, siguiendo el patrón del design system.
- **Shapes Slider**: componente importado tal cual desde `/components/shapes-slider/` (HTML, CSS y JS sin modificar), colocado justo debajo del hero. Usa clases globales compartidas ya definidas en este `style.css` (`h2`, `h3`, `.text-body--sm`, `.btn`, `.btn-dark`), que coinciden con los valores del design system global. No se documentan sus clases aquí — ver `/components/design-system-components.md`.
