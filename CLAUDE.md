# CLAUDE.md

> Contexto del proyecto para trabajar con Claude. Este archivo va en la raíz del proyecto y Claude lo lee automáticamente al abrirlo.

---

## 1. Qué es este proyecto

**27zero** es una agencia B2B de EdTech marketing. Este proyecto **no es su sitio web de marketing final** — es la **implementación de las plantillas de Figma** construida en **HTML, CSS y JavaScript vanilla — sin frameworks** (no React, no Vue, no build step), que **emula el sitio web final**. Sirve como puente para facilitar la implementación posterior y la arquitectura que va a construir el equipo de 27zero junto con Sanity (CMS).

Stack: HTML/CSS/JS estático puro. Cada página es autocontenida en su propia carpeta. No hace falta instalar nada ni correr un build para trabajar — es edición directa de archivos.

---

## 2. Estructura del proyecto

```
/index.html              ← Menú del sitio, sirve la ruta "/" (landing de navegación)
/design-system.md        ← Design system GLOBAL — fuente de verdad de tipografía, color, spacing
/menu/                    ← style.css y docs del menú (su HTML vive en la raíz, ver arriba)

/components/              ← Componentes compartidos (navbar, footer, cards, sliders, etc.)
  /components/index.html  ← "Kitchen sink": página que muestra todos los componentes
  /components/navbar/
  /components/footer/
  /components/work-card/
  /components/featured-card/
  /components/edtech-mentor-card/
  /components/cards-slider/
  /components/shapes-slider/
  /components/marquee-logos/
  /components/practices-card/
  /components/service-card/
  /components/dropdown/
  /components/design-system-components.md   ← docs de todos los componentes

/home/                    ← Página principal del sitio (ruta /home)
/work/                    ← Ruta /work
/work-cms/                ← Ruta /work-cms (template CMS)
/edtech-marketing/        ← Ruta /edtech-marketing
/edtech-marketing-practice/
/edtech-marketing-service/
/edtech-mentor/           ← Ruta /edtech-mentor
/edtech-mentor-cms/
/resources/
/resources-cms/
/clientes/
/about/
/contact/
```

**Cada carpeta de página tiene siempre:**
- `index.html`
- `style.css`
- `script.js`
- `design-system-[nombre-pagina].md` — documenta las clases *propias* de esa página (no repite lo global)

**Componentes compartidos** (navbar, footer, cards, sliders): viven en `/components/[nombre]/` con su propio `.css`/`.js`/`.html`. Las páginas los importan con `<link>` y `<script>` usando **rutas absolutas** (ej. `/components/navbar/navbar.css`), nunca relativas.

---

## 3. Design system — convenciones globales

La fuente de verdad completa está en **`/design-system.md`** — este resumen es solo para orientarte rápido, siempre consulta el archivo real antes de asumir un valor.

### Tipografía
- **Inter** — cuerpo de texto, UI, H2–H6
- **Lora** — H1 y acentos destacados, siempre `font-weight: 500; font-style: normal`
- El tamaño de texto **nunca se define sobre tags globales** (`p`, `a`) — siempre por clase (`.text-body`, `.text-link`, `.text-body--sm`, `.text-button`). Excepción: `h1`–`h6` sí llevan tamaño fijo directo por tag.

### Escala y unidades
- **Desktop:** base `body { font-size: 14px }`, todo el sistema en `em` (tipografía y spacing)
- **Mobile** (`max-width: 768px`): base `body { font-size: 9px }`. El `em` queda **reservado solo para espaciados** (padding, margin, gap). Los tamaños de texto en mobile van en **`px` fijos**, nunca en `em`.
- El único breakpoint del proyecto es `max-width: 768px`. Cada página tiene **un único bloque `@media`, al final absoluto de su `style.css`** — nunca intercalado entre reglas de desktop.

### Color
```css
:root {
  --color-indigo: #440E92;
  --color-purple: #B382F9;
  --color-black:  #101010;
  --color-gray:   #F5F5F5;
  --color-white:  #FFFFFF;
}
```

### Spacing
Escala de tokens `--space-xs` a `--space-2xl` — ver valores exactos en `/design-system.md`.

---

## 4. Reglas de CSS específicas (para no romper componentes)

- **Nunca modifiques el CSS de un componente compartido** (`/components/*/*.css`) desde el trabajo de una página específica. Si necesitas un override, usa un selector *scoped* a esa página (ej. `.menu-block-grid .service-card`), nunca edites el archivo del componente.
- **Nunca uses `h1`–`h4` como selector de tag global dentro de un `@media`** si la página importa componentes que usan headings internos (`work-card`, `featured-card`, `edtech-mentor-card`, `cards-slider` usan `h2`/`h3` para `.slider-title`, `.card-work-title`, etc.). Usa el selector scoped equivalente (ej. `.section--hero h1`), nunca el tag suelto.
- `fill="currentColor"` / `stroke="currentColor"` en todos los íconos SVG (para que hereden color en hover).
- `body` siempre debe declarar `font-family: 'Inter', sans-serif` o el CSS de los componentes se rompe.
- El CSS de los componentes se carga **después** del CSS de la página, así que en un empate de especificidad el componente gana — ojo con esto al hacer overrides.
- El design system global (`/design-system.md`) define las clases y tamaños de texto/espaciado de uso común. Pero como las plantillas de Figma manejan tamaños que no siempre están ahí, **cada página tiene libertad de crear sus propias clases scoped** para manejar tamaños de texto y espaciados según lo que pida esa plantilla específica — siempre y cuando queden documentadas en su respectivo sub design system (ver sección 5).

---

## 5. Documentación por página

Cada página tiene su propio archivo de design system con las clases específicas que usa. **No está pegado aquí a propósito** — consúltalo directo antes de tocar esa página, para no duplicar contexto desactualizado:

| Página | Doc |
|---|---|
| Home | `/home/design-system-home.md` |
| Work | `/work/design-system-work.md` |
| Clientes | `/clientes/design-system-clientes.md` |
| EdTech Marketing | `/edtech-marketing/design-system-edtech-marketing.md` |
| EdTech Marketing Practice | `/edtech-marketing-practice/design-system-edtech-marketing-practice.md` |
| EdTech Marketing Service | `/edtech-marketing-service/design-system-edtech-marketing-service.md` |
| The EdTech Mentor | `/edtech-mentor/design-system-edtech-mentor.md` |
| EdTech Mentor CMS | `/edtech-mentor-cms/design-system-edtech-mentor-cms.md` |
| Resources | `/resources/design-system-resources.md` |
| About | `/about/design-system-about.md` |
| Contact | `/contact/design-system-contact.md` |
| Menú del sitio | `/menu/design-system-menu.md` |
| Componentes compartidos | `/components/design-system-components.md` |

> Cuando crees clases nuevas en una página, documéntalas en el archivo correspondiente de esa lista — no en `/design-system.md` (ese es solo para lo global: color, tipografía, spacing, reglas que aplican a *todo* el sitio).

---

## 6. Reglas de workflow

- **Nunca crear contenido, copy, secciones o componentes nuevos sin instrucción explícita o una imagen/referencia de diseño.** Si no está claro qué debe decir un texto o cómo debe verse una sección, pregunta antes de inventar — no rellenes con contenido genérico o placeholder por iniciativa propia.
- **Cambios de a poco, no todo de golpe.** Cuando el enfoque no sea obvio, discútelo antes de escribir código.
- Componentes: cada uno es una página HTML standalone (con sus propios tokens `:root` inline) para poder abrirse directo y verse bien sin depender de otra página.
- `components/index.html` es un **menú de navegación** que enlaza a cada componente standalone — no es una página que los embeba todos juntos.

---

## 7. Cosas que Claude no debe asumir

- No asumas que `/` sirve `home/index.html` — **`/` sirve el menú del sitio** (`/index.html` en la raíz). Home vive en `/home`.
- No dupliques estilos de un componente dentro del CSS de una página "por si acaso" — si necesitas ese componente, impórtalo (`<link>`/`<script>` con ruta absoluta), no copies sus clases.
- Antes de insertar `featured-card`, pregunta el `width`/`height` del wrapper (a menos que ya te lo hayan dado).
- Antes de insertar `cards-slider`, pregunta el título del slider y qué tipo de card va dentro (a menos que ya te lo hayan dado).
