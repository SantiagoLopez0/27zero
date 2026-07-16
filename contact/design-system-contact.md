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
- Color blanco, `max-width: 20em` para controlar el wrap

**Subtítulo** (selector `.main-contact-title-block .text-body`)
- Usa `.text-body` global (Inter, weight 400, 1.29em / 18px)
- Color blanco, `max-width: 34em`

**Botón** (`.btn.btn-white` dentro de `.section--main-contact`)
- Override scoped sobre fondo indigo: `background-color` y `border-color` blancos, `color: var(--color-indigo)`
- Hover: `background-color: transparent`, `border-color: var(--color-white)`, `color: var(--color-white)`
- Mismo patrón ya usado en `/edtech-mentor` (`.section--essential-mentor .btn-white`)

---

## Pendiente / próximas partes
Las siguientes partes de `.section--main-contact` (formulario de contacto, info de agendamiento, etc.) se agregarán en próximas iteraciones dentro de `.main-contact-container`, manteniendo el `gap: 5em` entre bloques.
