# Components — Sub Design System

Kitchen sink de componentes globales de 27zero. Complementa el design system global (`/design-system.md`).

---

## Estructura

Cada componente vive aislado en su propia subcarpeta, y su `.html` es una página **standalone** (con doctype, fonts y tokens mínimos inline) para poder verlo funcionando solo, sin depender de `index.html`:

```
components/
  navbar/               navbar.html (standalone) · navbar.css · navbar.js
  footer/               footer.html · footer.css
  work-card/            work-card.html · work-card.css
  edtech-mentor-card/   edtech-mentor-card.html · edtech-mentor-card.css
  featured-card/        featured-card.html · featured-card.css
  cards-slider/         cards-slider.html · cards-slider.css · cards-slider.js
  index.html            menú de navegación entre componentes
  style.css             estilos base + estilos del menú
  script.js             sin lógica (index.html no la necesita)
  design-system-components.md
```

Workflow para traer un componente a otra página: leer `components/[componente]/[componente].html` + `.css` (y `.js` si aplica).

---

## index.html — Menú de navegación

`index.html` ya no incrusta ningún componente real (antes tenía el navbar embebido). Ahora es un menú simple con el branding de 27zero que enlaza a cada `[componente].html` standalone.

### `.section--components-menu`
Modifier de `.section`. Centra el menú verticalmente en el viewport.
- `min-height: 100vh; display: flex; align-items: center`

### `.components-menu-container`
Modifier de `.container`. `gap: var(--space-md)` entre logo, título y lista.

### `.components-menu-logo`
Logo de 27zero sobre el menú. `img { height: 2.5em }`.

### `.components-menu-list` / `.components-menu-item`
Lista de links a cada componente, mismo patrón visual que `.footer-nav-item` del design system global (filas con borde superior/inferior, hover fondo negro texto blanco).

---

## Navbar

Estado: ✅ terminado.

`navbar.html` es standalone: incluye inline los tokens `:root` (colores, spacing) y la clase base `.btn` que necesita `.btn-nav`, más un `.scroll-spacer` (200vh) solo para poder probar el scroll en esta vista aislada. El componente real sigue siendo `navbar.css` + `navbar.js`.

3 variantes de estado:
- `.nav--white` — fondo blanco, texto/logo negro. Botón outline negro, hover filled negro.
- `.nav--black` — fondo negro, texto/logo blanco. Botón outline blanco, hover filled blanco (texto negro).
- `.nav--scrolled` — se activa vía JS a los 50px de scroll (sin importar si el estado inicial era white o black). Fondo indigo, texto blanco, logo invertido, botón outline blanco con hover filled blanco (texto indigo).

`navbar.js` guarda la variante inicial (`nav--white` o `nav--black`) y la restaura al volver al top; baja el nav a `top: 2.2em` mientras está scrolled.

### Mobile (<=767px)
A esa resolución se esconden `.nav-links` y el `.btn-nav` del `.nav-container`, y aparece `.nav-hamburger`.

- **`.nav-hamburger`** — botón que contiene el ícono lottie (`.nav-hamburger-icon`). Oculto en desktop (`display: none`), visible en mobile.
- **Ícono (Lottie)** — `hamburger-menu-animation.json` (asset del componente, en esta misma carpeta). Se anima con `lottie-web` (CDN): click abre → `setDirection(1)` + `play()` (0% a 100%, hamburger a X); segundo click o click afuera → `setDirection(-1)` + `play()` (100% a 0%). El SVG viene en negro fijo por json, así que se invierte con `filter: invert(1)` en `nav--black` y `nav--scrolled`, igual que el logo.
- **`.nav-mobile-menu`** — dropdown absoluto debajo del `.nav`, `max-width: 90%` centrado (`margin: 0 auto`). Estilo **fijo**, no cambia con la variante activa del nav (white/black/scrolled): fondo blanco, border `rgba(16,16,16,.25)`, shadow sutil. Oculto por defecto (`opacity: 0`, `pointer-events: none`), visible con `.is-open`.
- **`.nav-mobile-links`** — misma lista de links que `.nav-links`, en columna. Links: `font-size: 2em`, `font-weight: 400`.
- Dentro del dropdown se repite el `.btn-nav` como CTA, forzado a su estilo outline negro por defecto (no hereda el color de la variante del nav, ya que el fondo del dropdown es siempre blanco).
- En mobile (`<=767px`), `.nav` cambia su padding lateral a `2em` (18px @ base 9px).

Requiere `lottie-web` cargado antes de `navbar.js` (CDN: `https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js`).

---

## Footer, Work Card, EdTech Mentor Card, Featured Card, Cards Slider

Estado: 🔲 pendiente — solo estructura de archivos creada, sin contenido.
