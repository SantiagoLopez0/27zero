# 27zero Design System
> Archivo de contexto para replicar visualmente el sitio de 27zero en HTML, CSS y JavaScript vanilla.
> Con este archivo debes ser capaz de generar un kitchen sink fiel al sistema visual de la marca.

---

## 1. Branding

### Logo
```
URL SVG: https://cdn.prod.website-files.com/65144cb53e0e9c74de079e3b/65144ded0328ecd5efb8b691_Logo.svg
```
Usar siempre con `<img>` o inline SVG. No aplicar filtros de color sobre el logo.

### Paleta de colores
```css
:root {
  --color-indigo: #440E92;  /* Acento de marca y fondos oscuros en secciones específicas */
  --color-purple: #B382F9;  /* Variante de fondo en botones (no uso general) */
  --color-black:  #101010;  /* Textos principales, variante de fondo en botones */
  --color-gray:   #F5F5F5;  /* Fondos de secciones alternadas, superficies */
  --color-white:  #FFFFFF;  /* Fondos base, texto sobre fondos oscuros */
}
```

### Tipografías
```html
<!-- Importar desde Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;600&display=swap" rel="stylesheet">
```

| Fuente | Uso |
|--------|-----|
| Inter  | H1–H6, párrafos, links, UI general |
| Lora   | Palabras de acento dentro del H1 (en itálica), texto de botones |

---

## 2. Sistema tipográfico

### Base de escala EM
```css
body {
  font-size: 14px; /* Desktop: 1em = 14px */
}

@media (max-width: 768px) {
  body {
    font-size: 9px; /* Mobile: 1em = 9px */
  }
}
```
El breakpoint mobile del proyecto es siempre `max-width: 768px`.

**Regla:** el tamaño de texto (`font-size`) nunca se define sobre tags globales como `p` o `a` — siempre se asigna mediante clases (`.text-body`, `.text-link`, `.text-body--sm`, `.text-button`, etc.), tanto en desktop como en mobile. Excepción: `h1`–`h6` sí mantienen tamaño fijo directo por tag.

En **desktop** todo el sistema tipográfico usa `em`, escalando con la base del `body`.
En **mobile**, el `em` queda reservado únicamente para espaciados (paddings, margins, gaps) — los tamaños de texto se definen en `px` fijos (ver escala mobile más abajo).
El `letter-spacing` se define en `px` para evitar distorsiones a escalas pequeñas.

---

### Escala tipográfica — Desktop (base 14px)

```css
h1 {
  font-family: 'Inter', sans-serif; /* El acento va en <span class="lora"> */
  font-size: 3.45em;       /* ~48px */
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.42px;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: 2.6em;        /* ~36px */
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.42px;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.75em;       /* ~24px */
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: -0.42px;
}

h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;        /* 21px */
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: -0.42px;
}

h5 {
  font-family: 'Inter', sans-serif;
  font-size: 0.86em;       /* 12px */
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: 0.7px;
}

h6 {
  font-family: 'Inter', sans-serif;
  font-size: 1.29em;       /* 18px */
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0;
}

.text-body, .text-link {
  font-family: 'Inter', sans-serif;
  font-size: 1.29em;       /* 18px */
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0;
}

.text-button {
  font-family: 'Lora', serif;
  font-size: 1.15em;       /* ~16px */
  font-style: normal;
  line-height: 1.0;
  font-weight: 400;
  letter-spacing: 0;
}

/* Variante pequeña de .text-body — 15px, centrada */
.text-body--sm {
  font-family: 'Inter', sans-serif;
  font-size: 1.07em;       /* 15px */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}
```

### Escala tipográfica — Mobile (`max-width: 768px`)

> **Regla:** en mobile los tamaños de texto se manejan en `px` fijos, no en `em`. El `em` en mobile queda reservado para espaciados (paddings, margins, gaps), no para tipografía. Por eso estos valores no escalan con el `body font-size: 9px` — son valores absolutos.

```css
@media (max-width: 768px) {
  h1 {
    font-size: 32px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.09px;
  }

  h2 {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: 0;
  }

  h3 {
    font-size: 21px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: 0;
  }

  h4 {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 0;
  }

  h5 {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 0;
  }

  h6 {
    font-size: 17px;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0;
  }

  .text-body, .text-link, .text-body--sm, .text-button {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0;
  }

  .btn, .nav-links a {
    font-size: 13px;
  }
}
```

### Uso de Lora en H1
El H1 mezcla Inter y Lora. Las palabras de acento van dentro de un `<span class="lora">`:
```html
<h1>Soluciones de <span class="lora">marketing</span> para EdTech</h1>
```
```css
.lora {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
}
```

---

## 3. Espaciado

### Tokens de espacio

```css
:root {
  --space-xs:  0.5em;   /* ~7px   */
  --space-sm:  1.5em;   /* ~21px  */
  --space-md:  3em;     /* ~42px  */
  --space-lg:  6em;     /* ~84px  */
  --space-xl:  9em;     /* ~126px */
  --space-2xl: 14em;    /* ~196px */
}
```

---

### Estructura base de página

Toda sección sigue esta jerarquía:

```html
<section class="section">
  <div class="container">
    <!-- contenido -->
  </div>
</section>
```

```css
.section {
  padding-top: 6.5em;
  padding-bottom: 6.5em;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 6.5em;
  padding-right: 6.5em;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
```

### Container — Mobile

A partir de ahora, el breakpoint mobile del proyecto es `max-width: 768px` (antes se usaba 767px en páginas ya construidas; nuevas reglas usan 768px). `.container` en mobile siempre tiene `padding-left`/`padding-right: 2em`, sin importar la página:

```css
@media (max-width: 768px) {
  .container {
    padding-left: 2em;
    padding-right: 2em;
  }
}
```

### Variantes de section

Cuando una sección requiere más o menos espacio vertical, se agrega una clase modificadora:

```css
.section--sm  { padding-top: 3em;  padding-bottom: 3em;  }
.section--lg  { padding-top: 9em;  padding-bottom: 9em;  }
.section--xl  { padding-top: 14em; padding-bottom: 14em; }
```

Uso:
```html
<section class="section section--lg">
  <div class="container">
    ...
  </div>
</section>
```

---

## 4. Componentes

### 4.1 Botones

3 variantes. La clase base `.btn` define todos los estilos compartidos, la variante define colores.

```html
<a href="#" class="btn btn-purple">Button</a>
<a href="#" class="btn btn-dark">Button</a>
<a href="#" class="btn btn-white">Button</a>
```

```css
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.85em 1.7em;
  border-radius: 5.2em;
  border: 0.05em solid transparent;
  font-family: 'Lora', serif;
  font-size: 1.15em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

/* Purple: fondo purple, texto negro */
.btn-purple {
  background-color: var(--color-purple);
  border-color: var(--color-purple);
  color: var(--color-black);
}
.btn-purple:hover {
  background-color: transparent;
  color: var(--color-black);
  border-color: var(--color-black);
}

/* Dark: fondo negro, texto purple */
.btn-dark {
  background-color: var(--color-black);
  border-color: var(--color-black);
  color: var(--color-purple);
}
.btn-dark:hover {
  background-color: transparent;
  color: var(--color-black);
  border-color: var(--color-black);
}

/* White: outline negro, texto negro, hover fondo negro texto blanco */
.btn-white {
  background-color: var(--color-white);
  border-color: var(--color-black);
  color: var(--color-black);
}
.btn-white:hover {
  background-color: var(--color-black);
  color: var(--color-white);
  border-color: var(--color-black);
}
```

---

### 4.2 Navbar

El navbar tiene dos capas: `.nav` es el wrapper fijo sin fondo, `.nav-container` es el elemento visual con fondo y border-radius.

**Estados:**
- `top` — dos variantes: `.nav--white` (logo/links negros) o `.nav--black` (logo/links blancos)
- `scrolled` — siempre fondo indigo, logo/links/botón en blanco. Se aplica con `.nav--scrolled` vía JS

**Botón del navbar:** variante exclusiva `.btn-nav` que cambia según el estado del nav.

**IMPORTANTE — hover states:** Al generar el kitchen sink o cualquier página, implementar TODOS los hover states definidos aquí. No omitir hovers por brevedad.

```html
<header class="nav nav--white">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <img src="https://cdn.prod.website-files.com/65144cb53e0e9c74de079e3b/65144ded0328ecd5efb8b691_Logo.svg" alt="27zero">
    </a>
    <nav class="nav-links">
      <a href="/work">Work</a>
      <a href="/edtech-marketing">Edtech Marketing</a>
      <a href="/the-edtech-mentor">The EdTech Mentor</a>
      <a href="/resources">Resources</a>
      <a href="/about">About</a>
    </nav>
    <a href="/contact" class="btn btn-nav">Let's Talk!</a>
  </div>
</header>
```

```css
/* Wrapper fijo — sin fondo */
.nav {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-left: 3.25em;
  padding-right: 3.25em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* Contenedor visual con fondo y border-radius */
/* Logo, links y botón distribuidos con space-between — equidistantes entre sí */
.nav-container {
  border-radius: 1.25em;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.15em 3.25em;
  gap: 2em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Links centrados entre logo y botón */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2em;
}

.nav-links a {
  font-size: 1.15em;
  font-weight: 500;
  line-height: 1.25em;
  padding: 0;
  text-decoration: none;
  transition: font-weight 0.2s ease;
}

/* Hover: links se ponen bold */
.nav-links a:hover {
  font-weight: 700;
}

/* ─── Variante TOP WHITE ─── */
.nav--white .nav-container {
  background-color: var(--color-white);
  color: var(--color-black);
}
.nav--white .nav-links a {
  color: var(--color-black);
}
.nav--white .nav-links a:hover {
  color: var(--color-black);
  font-weight: 700;
}

/* ─── Variante TOP BLACK ─── */
.nav--black .nav-container {
  background-color: var(--color-black);
  color: var(--color-white);
}
.nav--black .nav-links a {
  color: var(--color-white);
}
.nav--black .nav-links a:hover {
  color: var(--color-white);
  font-weight: 700;
}

/* ─── Variante SCROLLED (indigo) — fondo indigo, todo blanco ─── */
.nav--scrolled .nav-container {
  background-color: var(--color-indigo);
  color: var(--color-white);
}
.nav--scrolled .nav-links a {
  color: var(--color-white);
}
.nav--scrolled .nav-links a:hover {
  color: var(--color-white);
  font-weight: 700;
}

/* ─── Estilo de logo solo para scrolled state ─── */
.nav--scrolled .nav-logo{
  filter: invert(1);
}

/* ─── Botón exclusivo del navbar ─── */
/* nav--white: outline negro, texto negro, hover filled negro */
.btn-nav {
  background-color: transparent;
  border: 0.05em solid var(--color-black);
  color: var(--color-black);
}
.btn-nav:hover {
  background-color: var(--color-black);
  color: var(--color-white);
  border-color: var(--color-black);
}

/* nav--black: outline blanco, texto blanco, hover filled blanco */
.nav--black .btn-nav {
  background-color: transparent;
  border-color: var(--color-white);
  color: var(--color-white);
}
.nav--black .btn-nav:hover {
  background-color: var(--color-white);
  color: var(--color-black);
  border-color: var(--color-white);
}

/* nav--scrolled: outline blanco, texto blanco, hover filled blanco texto indigo */
.nav--scrolled .btn-nav {
  background-color: transparent;
  border-color: var(--color-white);
  color: var(--color-white);
}
.nav--scrolled .btn-nav:hover {
  background-color: var(--color-white);
  color: var(--color-indigo);
  border-color: var(--color-white);
}
```

```js
// Cambiar a estado scrolled al hacer scroll
// Reemplaza nav--white o nav--black con nav--scrolled al pasar 50px
// Al hacer scroll baja 2.2em, al volver al top sube de nuevo
const nav = document.querySelector('.nav');
const initialVariant = nav.classList.contains('nav--black') ? 'nav--black' : 'nav--white';

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
    nav.classList.remove('nav--white', 'nav--black');
    nav.style.top = '2.2em';
  } else {
    nav.classList.remove('nav--scrolled');
    nav.classList.add(initialVariant);
    nav.style.top = '0';
  }
});
```

Agregar también esta transición al CSS de `.nav` para que el movimiento sea suave:

```css
.nav {
  transition: top 0.3s ease;
}
```

---

### 4.3 Footer

Fondo blanco. Lista de links de navegación separados por línea divisoria, cada fila con hover black. Bottom bar con logo, copyright y links legales.

```html
<footer class="footer">

  <nav class="footer-nav">
    <a href="/" class="footer-nav-item">Home</a>
    <a href="/work" class="footer-nav-item">Work</a>
    <a href="/services" class="footer-nav-item">Services</a>
    <a href="/the-edtech-mentor" class="footer-nav-item">The EdTech Mentor</a>
    <a href="/about" class="footer-nav-item">About</a>
    <a href="/contact" class="footer-nav-item">Let's Talk!</a>
    <a href="/careers" class="footer-nav-item">Careers</a>
    <div class="footer-nav-item footer-nav-social">
      <span>Social media</span>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
    </div>
  </nav>

  <div class="footer-bottom">
    <a href="/" class="footer-bottom-logo">
      <img src="https://cdn.prod.website-files.com/65144cb53e0e9c74de079e3b/65144ded0328ecd5efb8b691_Logo.svg" alt="27zero">
    </a>
    <p>2025 27zero. All rights reserved.</p>
    <div class="footer-bottom-legal">
      <a href="/privacy">Privacy</a>
      <a href="/security">Security Policy</a>
    </div>
  </div>

</footer>
```

```css
.footer {
  background-color: var(--color-white);
  width: 100%;
}

/* Nav rows */
.footer-nav {
  display: flex;
  flex-direction: column;
}

.footer-nav-item {
  display: flex;
  align-items: center;
  padding: 0.75em 6.5em;
  font-size: 1.75em;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.42px;
  color: var(--color-black);
  text-decoration: none;
  border-top: 1px solid var(--color-black);
  transition: all 0.2s ease;
}

.footer-nav-item:last-child {
  border-bottom: 1px solid var(--color-black);
}

.footer-nav-item:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}

/* Fila especial Social media */
.footer-nav-social {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
}

.footer-nav-social span {
  font-size: 1em;
  font-weight: 600;
}

.footer-nav-social a {
  font-size: 0.6em;
  font-weight: 500;
  color: var(--color-indigo);
  text-decoration: underline;
}

.footer-nav-social:hover a {
  color: var(--color-purple);
}

/* Bottom bar */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 6.5em;
}

.footer-bottom img {
  height: 2em;
}

.footer-bottom p {
  font-size: 1em;
  font-weight: 500;
  color: var(--color-black);
  margin: 0;
}

.footer-bottom-legal {
  display: flex;
  gap: 1.5em;
}

.footer-bottom-legal a {
  font-size: 1em;
  font-weight: 500;
  color: var(--color-black);
  text-decoration: none;
}

.footer-bottom-legal a:hover {
  text-decoration: underline;
}
```

---

### 4.4 Cards

Todas las cards parten de la clase base `.card`. Las variantes se agregan con modificadores.

**IMPORTANTE — hover states:** Siempre implementar todos los hover states definidos aquí. No omitirlos al generar páginas.

```css
/* Base compartida */
.card {
  border-radius: 0.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-black);
}
```

---

#### card--work

Card de caso de estudio. Imagen de fondo provista por el cliente, contenido de texto arriba, flecha de navegación abajo a la derecha.

```html
<a href="/work/proyecto" class="card card--work">
  <div class="card-work-bg" style="background-image: url('[url-imagen-cliente]')"></div>
  <div class="card-work-body">
    <div class="card-work-content">
      <span class="card-work-eyebrow">Lorem ipsum</span>
      <h3 class="card-work-title">Lorem Ipsum is simply dummy text of the printing.</h3>
    </div>
    <div class="card-work-arrow">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>
  </div>
</a>
```

```css
.card--work {
  position: relative;
  min-height: 380px;
}

/* Imagen de fondo provista por el cliente */
.card-work-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.card-work-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 380px;
  padding: 2.28em 1.71em; /* 32px top/bottom, 24px lados en base 14px */
}

.card-work-content {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

/* Eyebrow: 15px → 1.07em */
.card-work-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 1.07em;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-black);
}

/* Título: 24px → 1.71em */
.card-work-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.71em;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.42px;
  color: var(--color-black);
  margin: 0;
}

/* Flecha — outline negro, ícono negro. Hover: filled negro, ícono blanco */
.card-work-arrow {
  align-self: flex-end;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  border: 0.1em solid var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  transition: all 0.2s ease;
}

.card--work:hover .card-work-arrow {
  background-color: var(--color-black);
  color: var(--color-white);
}
```

---

## 5. Instrucciones para generar el kitchen sink

Cuando se te pida crear el kitchen sink de 27zero, genera un único archivo `index.html` autónomo que cumpla estas reglas:

### Reglas generales
- Un solo archivo HTML con todo el CSS en `<style>` y todo el JS en `<script>` al final del `<body>`
- Importar Inter y Lora desde Google Fonts
- Incluir todas las variables CSS (colores, espaciado) en `:root`
- Incluir el reset base: `box-sizing: border-box`, `margin: 0`, `padding: 0`, `scroll-behavior: smooth`, `-webkit-font-smoothing: antialiased`
- Responsivo: `body font-size: 14px` desktop, `9px` mobile (`max-width: 768px`); tamaños de texto en mobile van en `px` fijos, no en `em`
- **Implementar TODOS los hover states definidos en este documento. No omitir ninguno.**

### Estructura del archivo

Generar las siguientes secciones en este orden, cada una con un título visible que la identifique:

1. **Colores** — swatches con nombre y valor hex de cada color
2. **Tipografía** — muestra de H1 (con span.lora en itálica), H2, H3, H4, H5, H6, párrafo, link, button text. Mostrar el texto de ejemplo con sus métricas reales aplicadas
3. **Espaciado** — bloques visuales que representen cada token (`--space-xs` hasta `--space-2xl`) con su valor en em y px
4. **Botones** — las 3 variantes (`btn-purple`, `btn-dark`, `btn-white`) en estado default. Los hover states deben estar en el CSS y ser funcionales al pasar el cursor
5. **Navbar** — navbar funcional fija con la variante `nav--white`. Debe cambiar a `nav--scrolled` (fondo indigo) al hacer scroll. Incluir hover de links (bold) y hover del botón
6. **Footer** — footer completo con todas las filas de navegación, hover black por fila, y bottom bar
7. **Cards** — una `card--work` con imagen de placeholder (usar `background-color: #ccc` si no hay imagen), eyebrow, título y flecha funcional con hover

### Uso de clases
- Usar siempre `.section` y `.container` como estructura base de cada sección del kitchen sink
- Reusar clases existentes al máximo — no crear clases nuevas si una existente aplica
- Los modificadores (`.section--lg`, `.nav--scrolled`, etc.) se agregan sobre la clase base, nunca reemplazan

