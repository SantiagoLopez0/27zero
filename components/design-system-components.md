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
- `.nav--white` — fondo transparente (lo da el hero de cada página), texto/logo negro. Botón outline negro, hover filled negro.
- `.nav--black` — fondo transparente (lo da el hero de cada página), texto/logo blanco. Botón outline blanco, hover filled blanco (texto negro).
- `.nav--scrolled` — se activa vía JS a los 50px de scroll (sin importar si el estado inicial era white o black). Fondo indigo (única variante con bg propio), texto blanco, logo invertido, botón outline blanco con hover filled blanco (texto indigo).

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

## Work Card

Estado: ✅ terminado. Extraído de `/work` (markup de `script.js`, estilos de `style.css`).

`.card` es la base compartida (border-radius, overflow, flex column, cursor pointer). `.card--work` es la única variante activa por ahora — tamaño fijo `25em` integrado directo en `.card--work`, sin modifier `--standard` separado.

Estructura: `.card-work-bg` (fondo absoluto, placeholder gris con label) + `.card-work-body` (contenido, z-index 1) → `.card-work-content` (eyebrow + title + client) y `.card-work-footer` (flecha).

Hover: `.card:hover .card-work-arrow` — flecha pasa de outline negro a fondo negro/ícono blanco.

Sin JS — es una card estática, el hover es puro CSS.

Mobile (`<=768px`, breakpoint global del proyecto): `.card--work` 250×250px, `.card-work-body` `min-height: 250px`, `.card-work-eyebrow` 9px, `.card-work-title` 17px, `.card-work-client-name` 12px, `.card-work-client-logo` 30×30px. Todo en px fijos (regla global: en mobile la tipografía va en px, no em).

---

## Cards Slider

Estado: ✅ terminado. Extraído de `/work` (`.slider-block` + `.slider-header`, markup/lógica de `script.js`, estilos de `style.css`).

Estructura: `.slider-block` (wrapper) → `.slider-header` (título, `.slider-title`), `.slider-track-wrap` → `.slider-track` (scroll horizontal, drag con pointer events), `.slider-footer` con `.slider-nav` (botones `.slider-arrow` prev/next).

El demo trae 8 `.card.card--work` (componente Work Card) como slides — requiere `/components/work-card/work-card.css` además de `cards-slider.css`.

**JS (`cards-slider.js`):**
- Soporta **múltiples `.slider-block` en la misma página** — el init usa `querySelectorAll` + `forEach`, cada uno con su propia instancia de drag/arrows, sin interferir entre sí.
- `enableSliderDrag(track)` — drag con pointer events (`pointerdown/move/up/leave/cancel`), clase `.dragging` mientras arrastra.
- `enableSliderArrows(footer, track)` — scroll por flechas (`scrollBy` con step = 2 cards), disabled automático en los extremos, recalcula en resize/scroll.

**Agnóstico del tipo de slide**: `cards-slider.css` no tiene ninguna regla acoplada a `.card-work-*`; el JS solo busca el primer `.card` dentro del track para medir el step. Se puede usar `work-card`, `edtech-mentor-card`, o cualquier componente que tenga la clase base `.card`, sin tocar el JS — solo cambia el markup dentro de `.slider-track` y se linkea el CSS del componente correspondiente. El título de cada slider (`.slider-title`) es contenido estático en el HTML de cada `.slider-block`, no depende de JS.

No se extrajeron `.section--sliders` ni `.sliders-container` (layout específico de la página `/work`, no del componente). El `.slider-track-wrap` usa `padding-left: max(6.5em, calc((100vw - 1440px)/2 + 6.5em))` para alinearse solo, sin depender de un `.container` externo.

El slider no tiene tamaños de card hardcodeados (flex + gap), así que hereda automáticamente cualquier cambio de tamaño de `.card--work` en `work-card.css` (ej: el ajuste a `25em`).

Mobile (`<=768px`, breakpoint bump de 767→768 al tocar este bloque): `.slider-title` a `20px` (px fijo); `.slider-footer` (flechas prev/next) se oculta por completo (`display: none`) — en mobile no hay navegación por flechas, solo scroll/drag táctil.

---

## EdTech Mentor Card

Estado: ✅ terminado. Replicado a partir de mockups (default + hover) + specs exactas de Figma.

Extiende `.card` base (de `work-card.css`). `.card--edtech-mentor` es el wrapper: `width: 25em`, `gap: 2em` (28px), `background: transparent` — header y body van en columna, separados por el gap.

- **`.card-edtech-mentor-header`** — transparente, sin padding (no es parte de la card visual). Flex row: `.card-edtech-mentor-avatar` (`3em × 3em`, span interno `0.93em` proporcional) + `.card-edtech-mentor-meta` (`.card-edtech-mentor-role` `0.85em`, `.card-edtech-mentor-name` `1.15em`).
- **`.card-edtech-mentor-body`** — la card real: `25em × 25em`, `padding: 1.5em`, `border-radius: 0.5em`, todos los bordes redondeados. Bg gray por default; `::after` con gradiente (gray → black) en `opacity: 0` que pasa a `1` en `:hover` del card (el gradiente no es animable directo con `transition`, por eso el overlay).
- **`.card-edtech-mentor-tag`** — `0.85em`.
- **`.card-edtech-mentor-title`** — `1em`. Oculto por default, aparece con el hover del card (junto al gradiente).
- **`.card-edtech-mentor-arrow`** — bg siempre transparent salvo hover directo. Default: border/ícono `#000`. Hover de toda la card: border/ícono pasan a `#fff` (bg sigue transparent). Hover directo sobre el arrow (prioridad sobre el de la card, `color` con `!important`): bg `#fff`, ícono `#000`, border `#fff`.

Sin JS — todo el efecto hover es CSS puro.

Mobile (`<=768px`): `.card--edtech-mentor` a `250px` de ancho, `.card-edtech-mentor-body` `250×250px`, `.card-edtech-mentor-avatar` `50×50px`. Tipografía en px fijos: role `10px`, name `18px`, tag `13px`, title `13px`. Como en mobile no hay hover, `.card-edtech-mentor-title` se fuerza `opacity: 1; transform: translateY(0)` por default (siempre visible) — y también se fuerza visible el overlay `::after` (gradiente), porque si no el título blanco quedaría sin contraste sobre el gray claro del fondo por default. `.card-edtech-mentor-arrow` también queda blanco (`border-color`/`color: #fff`) por default — el mismo estado que en desktop se ve al hacer hover sobre toda la card.

---

## Footer

Estado: ✅ v1 — pendiente de ajustes con Figma.

Estructura: `.footer` (bg `#101010`) → `.footer-container` (max-width 1440, padding `5em 6.5em 6.86em` — 70px/—/96px) → `.footer-top` (logo + `.footer-links` en 3 columnas) → `.footer-divider` → `.footer-bottom` (copyright + legal link).

- **`.footer-logo`** — usa el logo del navbar (mismo SVG) con `filter: invert(1)`, `width: 11.07em` (155px), `height: auto`.
- **`.footer-links-col`** — `gap: 1.71em` (24px). Links: 15px/400, line-height 160%, sin margin-bottom.
- **`.footer-divider`** — línea `rgba(255,255,255,.15)`, `margin-bottom: 2.14em` (30px).
- **`.footer-copy`** y **`.footer-legal`** — mismos estilos: 15px/400, line-height 160%, color atenuado `rgba(255,255,255,.6)`.
- Mobile (`<=768px`): `.footer-links` con `flex-wrap: wrap`. Tipografía en px fijo: `.footer-links-col a`, `.footer-copy` y `.footer-legal` — todos a `13px` (regla global del design system: mobile va en px fijos, no em).

---

## Featured Card

Estado: ✅ terminado. Reusa `.card` base (`work-card.css`) + estilos de texto tomados de `edtech-mentor-card.css`.

`.card--featured`: `width: 100%; height: 100%` — el tamaño real lo define el wrapper de cada página donde se use (mismo patrón que `cards-slider` con `.card--work`). Bg gray, `padding: 1.7em`, flex column `justify-content: space-between` (tag arriba, contenido abajo).

- **`.card-featured-tag`** — `font-size: 0.85em`.
- **`.card-featured-meta`** — avatar `3em × 3em` (span interno `0.93em`, proporcional) + `.card-featured-role` (`0.85em`) y `.card-featured-name` (`1.15em`).
- **`.card-featured-footer`** — título (`.card-featured-title`, `1em`) + `.card-featured-arrow`.
- **`.card-featured-arrow`** — outline negro, bg transparent por default; se rellena (bg negro, ícono blanco) con el hover de **toda la card** (`.card--featured:hover .card-featured-arrow`), no solo al pasar sobre el botón.

Mobile (`<=768px`): `.card--featured` pasa a `width: 100%; height: 100%; gap: 6.5em !important` (ya no es 250×250px fijo). El resto: mismos valores que EdTech Mentor Card, aplicados a las clases equivalentes (dado que no hay split header/body, `.card--featured` juega ambos roles): `.card-featured-avatar` `50×50px`, role `10px`, name `18px`, tag `13px`, title `13px`. Footer pasa a columna (título arriba, arrow abajo).

Sin JS — hover puro CSS.

---

## Shapes Slider

Estado: ✅ terminado. Originalmente duplicado de `.section--apart-home` de `/home`, pero **ya no es un slider** — se reemplazó la funcionalidad completa por pedido explícito.

**Funcionamiento actual**: bloque fijo de 3 `.apart-shape` (purple/indigo/black — Research Enhanced, Execution, Creativity) que **nunca cambian de posición**. Por default, la shape del centro (index 1, "Execution") tiene `scale(1)` y las otras dos `scale(0.9)`. Las flechas (`.apart-slider-arrow`) no mueven nada — solo cambian cuál shape está "activa": la flecha `next` avanza el índice activo (cíclico, `(i+1) % 3`), `prev` lo retrocede (`(i-1+3) % 3`). Nunca se deshabilitan (loop infinito entre las 3).

Estructura: `.container.apart-home-container` (h2 + text-body--sm + `.btn-dark`) → `.apart-slider` (flecha prev + `.apart-shapes` con las 3 `.apart-shape` + flecha next) → `.container.apart-home-scales` (h3 "Execution that Scales" + texto).

**Scoping**: todo el CSS específico del componente está scopeado bajo `.shapes-slider` (clase raíz agregada al `<section>`, junto a `.section--apart-home`). Ninguna clase `.apart-*` queda como selector global suelto — así no colisiona con `/home/style.css` (de donde se duplicó originalmente y define exactamente los mismos nombres de clase) ni con nada más en otras páginas. Las únicas excepciones sin scope son las clases base compartidas del design system global (`.section`, `.container`, `h2`/`h3` como tag, `.text-body--sm`, `.btn`, `.btn-dark`), que son intencionalmente globales por diseño.

JS (`shapes-slider.js`): `initApartShapes()` renderiza las 3 shapes una sola vez (ya no hay slides duplicados), guarda `activeIndex` y en cada click de flecha actualiza `transform: scale(...)` en cada shape vía `element.style.transform`, con `transition: transform 0.3s ease` en CSS para la animación suave. **Cada shape tiene su propio título + párrafo** (array `SHAPES`, con `title`/`text` por shape); al cambiar `activeIndex`, el mismo `update()` también reescribe el `textContent` de `#apartScalesTitle`/`#apartScalesText` (dentro de `.apart-home-scales`) con el texto de la shape activa. Solo la de "Execution" (centro) tiene copy real — las otras dos (Research Enhanced, Creativity) llevan texto placeholder hasta que Santiago dé el copy final.

Mobile (`<=768px`): comportamiento distinto al desktop — ya no es "fijo con scale", ahora es un scroll-snap horizontal real (las shapes sí se desplazan). `.apart-shapes` pasa a `overflow-x: auto; scroll-snap-type: x mandatory`; cada `.apart-shape` es `flex: 0 0 70%; scroll-snap-align: center`. El "peek" de las shapes vecinas se logra con dos **spacers reales** (`.apart-shapes-spacer`, `flex: 0 0 15%`) como primer/último hijo del track — no con `padding` en el contenedor. Se probó `padding: 0 15%` primero, pero el padding encoge el content-box del propio contenedor *antes* de que se calcule el `70%` de cada shape, dejándolas más angostas de lo esperado y sin scroll suficiente para centrar la última (quedaba desplazada a la derecha). Se probó luego con `vw` en vez de `%`, pero eso hizo que el contenido total (3 shapes × 70vw + spacers) superara ampliamente el ancho del contenedor, y como `.apart-shapes` no tenía `min-width: 0`, el comportamiento default de flexbox (`min-width: auto`) impidió que se encogiera — expandió toda la fila y scrolleaba la página entera en vez de solo el carrusel. Fix final: spacers reales en vez de padding (elimina el problema de cálculo circular) + `min-width: 0` en `.apart-shapes-wrap`/`.apart-shapes` (fix defensivo para que nunca más se desborde). Sin flechas (`.apart-slider-arrow { display:none }`). Se agregaron `.apart-shapes-nav-zone--prev/--next`: botones invisibles (`background: transparent`) posicionados absolutos sobre el 20% izquierdo/derecho del bloque, ocupando todo su alto — al tocarlos, navegan igual que las flechas de desktop. También funciona el swipe nativo: un listener de `scroll` (debounced) detecta cuál shape quedó más cerca del centro del contenedor al terminar el swipe, y actualiza `activeIndex` (scale + texto) igual que con las flechas. Al cargar en mobile, centra automáticamente la shape default (Execution) sin animación. Un listener de `resize` vuelve a centrar si el viewport cruza el breakpoint de desktop a mobile. `h2`/`h3` en px fijos (24px/21px).

Depende de clases base compartidas del design system global (`.section`, `.container`, `h2`, `h3`, `.text-body--sm`, `.btn`, `.btn-dark`) — incluidas inline en el `<style>` del HTML standalone, igual que en los demás componentes.

---

## Practices Card

Estado: ✅ terminado. Todo scoped bajo `.practices-card` (clase raíz única) — cero clases sueltas globales.

`.practices-card`: es un `<a>` (no `<div>`), `text-decoration: none`. `width: 100%`. Bg gray, `border-radius: 0.5em`, `padding: 2.86em 1.86em` (40px/26px), flex column con `justify-content: space-between` y `gap: 10em` (140px) entre los 2 bloques. El fondo es un **placeholder de imagen** (`.practices-card-bg`, absoluto, `z-index:0`, mismo patrón que `.card-work-bg` de `work-card`: texto `[image]` centrado) — los dos bloques de contenido van con `z-index:1` encima.

- **`.practices-card-block--intro`** (bloque 1): `gap: 4.29em` (60px) entre ícono y texto.
  - **`.practices-card-icon`** — wrapper del ícono; **intercambiable**, solo hay que reemplazar el `<svg>` interno (el wrapper controla tamaño vía `.practices-card-icon svg { width/height }`). Default: el ícono de 3 rombos (59×39px).
  - **`.practices-card-text`** — `gap: 0.71em` (10px) entre título y párrafo. `.practices-card-title` (Lora, 500, `1.71em`/24px, line-height 140%) + `.practices-card-body` (reusa `.text-body--sm` global).
- **`.practices-card-block--cta`** (bloque 2): fila `justify-content: space-between`. `.practices-card-cta-text` — texto fijo "Explore the practice" (Lora, 500, `1.21em`/17px, line-height 140%) + `.practices-card-arrow`.
- **`.practices-card-arrow`** — outline negro, bg transparent por default; se rellena (bg negro, ícono blanco) con el hover de **toda la card** (`.practices-card:hover .practices-card-arrow`), mismo patrón que `featured-card`.

Sin JS — hover puro CSS.

---

## Marquee Logos

Estado: ✅ terminado. Documentación propia en `marquee-logos/marquee-logos.md` (a diferencia de los demás, este trae su propio MD además de esta entrada, por pedido explícito).

Carrusel infinito: dos `.marquee-list` idénticas animadas `0% → -100%` en simultáneo — loop perfecto sin salto. `.marquee-logo` con `max-height: 3.57em` (50px), gap `3.21em` (45px). JS ajusta `animation-duration` según el ancho real del contenido para mantener velocidad constante (px/s), soporta múltiples `.marquee` por página. Pausa en hover, respeta `prefers-reduced-motion`.

---

## Service Card

Estado: ✅ terminado. Nombre asumido por Santiago aún no confirmado (por el contenido — "Website Design", "Website Adjustments or Updates" — parece una card de servicios). Todo scoped bajo `.service-card`, cero clases sueltas globales.

`.service-card` es un `<a>`: `padding: 1.79em` (25px), `border: 0.07em solid #fff` (1px), `border-radius: 0.71em` (10px), `width`/`height: 19em` fijos. Bg **transparente** por default (el body de la página que lo use debe ser oscuro, `#101010`), texto blanco.

- **`.service-card-title`** — Lora, 500, `1.5em` (21px), line-height 123%.
- **`.service-card-footer`** — fila `justify-content: space-between; align-items: end`: `.service-card-icon` (5em × 5em, **intercambiable** — el `<svg>` interno usa `fill="currentColor"` o `stroke="currentColor"` para heredar color automáticamente) + `.service-card-arrow`.
- **Sistema de color con `currentColor`**: en vez de repetir reglas de color para texto/ícono/arrow, todo usa `currentColor` y hereda del `color` de `.service-card`. Así el hover de toda la card (`.service-card:hover { color: #000; ... }`) recolorea título, ícono y arrow en una sola regla.
- **Hover de la card**: bg pasa de transparent a `var(--color-purple)`, border igual, `color` pasa a `#000` (recolorea todo lo de adentro vía `currentColor`).
- **Hover directo del arrow** (prioridad sobre el de la card, mismo patrón que `edtech-mentor-card`/`practices-card`): `background-color: #000`, `color: #fff` (ícono blanco), `border-color: #000`.

Sin JS — hover puro CSS.

---

## Dropdown (FAQ)

Estado: ✅ terminado. Todo scoped bajo `.dropdown` (clase raíz única), sin bg propio (vive siempre sobre `#101010` del body de la página). `width: 100%` — el ancho real lo define el wrapper de cada página.

**Múltiples instancias independientes**: se puede tener varios `.dropdown` en la misma página y abrir cualquier combinación a la vez — abrir uno no cierra los demás (decisión explícita de Santiago, no es acordeón).

- **`.dropdown-toggle`** — botón full-width, `padding: 2.14em 0` (30px top/bottom), siempre con `border-top: 0.07em solid #FFFFFF1A`. Contiene `.dropdown-title` (Lora, 500, `1.71em`/24px, line-height 125%, letter-spacing `-0.24px`, color purple) y `.dropdown-arrow` (chevron, color purple, rota `180deg` cuando el dropdown está `.is-open`).
- **`.dropdown-content`** — animación de altura vía JS: `height: 0 → scrollHeight px → auto`. Se probó primero la técnica CSS `grid-template-rows: 0fr → 1fr`, pero no colapsaba limpio con contenido real (dejaba un "sliver" de texto visible incluso con `overflow: hidden`) — se reemplazó por la técnica clásica: JS mide `content.scrollHeight` y anima `height` a ese valor en px; al terminar la transición (`transitionend`), pasa a `height: auto` para adaptarse solo si el contenido cambia después. Al cerrar, primero fija la altura actual en px (no se puede transicionar desde `auto`), fuerza un reflow, y recién ahí anima a `0px`.
- **`.dropdown-content-inner`** — `width: 90%` del padre (según pedido), `padding-bottom: 1.79em` (asunción, no especificado — ajustar si hace falta). Puede contener **cualquier cosa** (párrafos, botones, listas, etc.).
- **`.dropdown-content-inner p`** — único elemento con estilo fijo garantizado: Inter, 400, `1.15em`/16px, line-height 160%, color blanco. Cualquier otro elemento (botones, etc.) no tiene estilos propios del componente — se estiliza aparte según la página.

JS (`dropdown.js`): cada `.dropdown` maneja su propio toggle. Al abrir, mide `scrollHeight` y anima; al cerrar, fija la altura actual antes de animar a 0 (necesario porque no se puede transicionar `height` desde `auto`). Independiente entre instancias — no es acordeón.
