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

## Navbar

Variante `nav--white`, igual que el resto de páginas del sitio. Sin overrides — usa `/components/navbar/navbar.css` y `/components/navbar/navbar.js` tal cual.

## Footer

Sin overrides — usa `/components/footer/footer.css` tal cual, mismo markup y mismos links que `/edtech-marketing`.

---

## Notas

- Nombre de carpeta asumido como `edtech-marketing-practice` (slug derivado del título de la sesión "Ed Tech Marketing Practice"); no existía referencia previa a esta página en `/menu` ni en otras páginas del repo. Ajustar si el nombre final debe ser otro.
- Aún no se agregó esta página a `/menu`. Pendiente de confirmar antes de agregarla.
