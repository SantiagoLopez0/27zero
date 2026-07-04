# Components — Sub Design System

Kitchen sink de componentes globales de 27zero. Complementa el design system global (`/design-system.md`).

---

## Estructura

Cada componente vive aislado en su propia subcarpeta, para poder traerlo a cualquier página sin tener que filtrar un archivo único gigante:

```
components/
  navbar/               navbar.html · navbar.css · navbar.js
  footer/               footer.html · footer.css
  work-card/            work-card.html · work-card.css
  edtech-mentor-card/   edtech-mentor-card.html · edtech-mentor-card.css
  featured-card/        featured-card.html · featured-card.css
  cards-slider/         cards-slider.html · cards-slider.css · cards-slider.js
  index.html            preview visual del kitchen sink completo
  style.css             estilos base + @import de cada [componente].css
  script.js             carga general (cada componente añade su <script> propio en index.html)
  design-system-components.md
```

`index.html` es solo el preview — cada componente es la fuente real. Workflow para traer un componente a otra página: leer `components/[componente]/[componente].html` + `.css` (y `.js` si aplica).

---

## Navbar

Estado: ✅ terminado.

3 variantes de estado:
- `.nav--white` — fondo blanco, texto/logo negro. Botón outline negro, hover filled negro.
- `.nav--black` — fondo negro, texto/logo blanco. Botón outline blanco, hover filled blanco (texto negro).
- `.nav--scrolled` — se activa vía JS a los 50px de scroll (sin importar si el estado inicial era white o black). Fondo indigo, texto blanco, logo invertido, botón outline blanco con hover filled blanco (texto indigo).

`navbar.js` guarda la variante inicial (`nav--white` o `nav--black`) y la restaura al volver al top; baja el nav a `top: 2.2em` mientras está scrolled.

Requiere las variables `:root` del design system global (colores, spacing) y la clase `.btn` como base de `.btn-nav`.

---

## Footer, Work Card, EdTech Mentor Card, Featured Card, Cards Slider

Estado: 🔲 pendiente — solo estructura de archivos creada, sin contenido.

---

## Sección demo (kitchen sink)

### `.section--component-demo`
Modifier de `.section`, exclusivo de `index.html`. Le da a la página suficiente altura para poder scrollear y probar visualmente el `nav--scrolled`.
- `min-height: 250vh`
- `padding-top: 12em`
- `display: flex; align-items: flex-start`
