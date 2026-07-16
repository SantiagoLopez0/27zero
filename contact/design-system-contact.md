# Let's Talk (Contact) Page — Sub Design System

Clases específicas de la página `/contact` ("Let's Talk"). Complementan el design system global (`/design-system.md`).

> Nota: la carpeta se llama `contact` para mantener consistencia con el link `/contact` que ya usan el navbar y el footer en todo el sitio ("Let's Talk!").

---

## Sección principal (`.section--main-contact`)

Sección construida por partes — esta primera entrega solo incluye el bloque de título. Nuevas partes se agregan dentro de `.main-contact-container`, respetando el `gap` de 70px entre bloques.

### `.section--main-contact`
Modifier de `.section`. Fondo indigo, es la única sección de contenido de la página (fuera de navbar y footer).
- `background-color: var(--color-indigo)`
- `margin-top: 10em`
- `padding-top: 6.43em` (90px @ 14px base) — mobile: `16.67em` (150px @ 9px base)
- `padding-bottom: 10em` (140px @ 14px base) — mobile: `5.56em` (50px @ 9px base)

### `.main-contact-container`
Modifier de `.container`. Contenedor flex-column que agrupa todas las partes de la sección.
- `gap: 5em` (70px @ 14px base) — espacio entre cada bloque de la sección

### `.main-contact-title-block`
Primer bloque de la sección: H1 + subtítulo + botón, centrado.
- `display: flex; flex-direction: column; align-items: center; text-align: center`
- `gap: 2.86em` (40px @ 14px base)

**H1** (selector `.main-contact-title-block h1`)
- Lora, weight 500, style normal
- `font-size: 3.43em` (48px @ 14px base) — mobile: `36px` fijo
- `line-height: 1.25` (125%)
- `letter-spacing: -0.48px` (-1% de 48px) — mobile: `-0.36px` (-1% de 36px)
- Color blanco, `max-width: 50%` — mobile: `max-width: 100%`

**Subtítulo** (selector `.main-contact-title-block .text-body`)
- Usa `.text-body` global (Inter, weight 400, 1.29em / 18px)
- Color blanco, sin `max-width`

**Botón** (`.btn.btn-white` dentro de `.section--main-contact`)
- Override scoped sobre fondo indigo: `background-color` y `border-color` blancos, `color: var(--color-indigo)`
- Hover: `background-color: transparent`, `border-color: var(--color-white)`, `color: var(--color-white)`
- Mismo patrón ya usado en `/edtech-mentor` (`.section--essential-mentor .btn-white`)

---

## Bloque de formulario (`.main-contact-form-block`)

Card blanca con el formulario de contacto. Va justo debajo de `.main-contact-title-block`, dentro de `.main-contact-container`.

### `.main-contact-form-block`
- `width: 100%`
- `background-color: var(--color-white)`
- `border-radius: 0.71em` (10px @ 14px base) — mobile: `10px` fijo
- `padding: 5em 5.71em` (70px / 80px @ 14px base) — mobile: `4.44em 2.67em` (40px / 24px @ 9px base, valor no especificado por Santiago, ajustado a proporción del padding desktop)

### `.contact-form-header`
Wrapper del H2 + subtítulo, centrado.
- `gap: 0.5em`, `margin-bottom: 3em`

**H2** (`.contact-form-header h2`)
- Lora, weight 500, style normal (replica el estilo del H1 de arriba, a diferencia del H2 global de Inter)
- `font-size: 2.29em` (32px @ 14px base) — mobile: `24px` fijo
- Color: `var(--color-indigo)`

**Subtítulo** (`.contact-form-header .text-body`)
- Usa `.text-body` (Inter, weight 400, 1.29em / 18px), color `var(--color-black)` sólido, sin opacidad

### `.contact-form`
Grid de 2 columnas armado con `grid-template-areas` (`fname/lname`, `email/company`, `looking/challenge`, `button/footer`). En mobile las áreas se reordenan a una sola columna en orden de lectura, sin tocar el HTML — el orden de los campos en el DOM no importa porque cada `.contact-form-field` tiene su `grid-area` inline.
- Desktop: `column-gap: 6em` (84px), `row-gap: 2.5em` (35px)
- Mobile: 1 columna, `row-gap: 2.67em` (24px @ 9px base)

### `.contact-form-field`
Wrapper de label + input/select/textarea.
- Label: Lora, weight 400, style normal, `font-size: 1.5em` (21px @ 14px base) — mobile: `18px` fijo, `line-height: 1.6` (160%), `letter-spacing: 0`
- Input/select/textarea: fondo transparente, sin borde propio, solo `border-bottom: 0.07em solid rgba(16,16,16,.15)`; en focus el borde pasa a `var(--color-indigo)`

### `.contact-form-field--select`
Variante para el campo "What are you looking for?". El `<select>` nativo se resetea con `appearance: none` y se le agrega un chevron SVG (`.contact-form-chevron`) posicionado en absoluto, `stroke="currentColor"`.

### `.contact-form-submit`
Agrupa el botón de envío y el caption.
- Botón: `.btn.btn-purple` (variante global ya definida: bg purple, texto negro; hover bg transparente, borde y texto negro)
- `.contact-form-caption`: Inter 400, 14px, color `var(--color-black)` sólido

### `.contact-form-footer`
Agrupa el logo de 27zero (sin invertir, ya que la card tiene fondo blanco) y `.contact-form-locations`.
- `.contact-form-logo`: `width: 12em`
- `.contact-form-locations`: flex row, `gap: 2.86em` (40px); cada `.contact-form-location` tiene nombre del país (`.contact-form-location-name`: Inter 700, 14px — mobile 13px fijo, `line-height: 1.6`) + dirección + teléfono (`.contact-form-location-address` / `.contact-form-location-phone`: Inter 400, 14px — mobile 13px fijo), todos en color `var(--color-black)` sólido

### JS (`/contact/script.js`)
El submit del form (`#contactForm`) hace `preventDefault()` y loguea un placeholder — pendiente conectar a un endpoint real cuando exista.

---

## Pendiente / próximas partes
Nuevas partes de `.section--main-contact` se agregarán en próximas iteraciones dentro de `.main-contact-container`, manteniendo el `gap: 5em` entre bloques.
