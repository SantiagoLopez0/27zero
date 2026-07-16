# Site Menu Page — Sub Design System

Página de navegación simple que lista todas las páginas construidas del repo, incluida `/components` (kitchen sink de componentes). Reutiliza el mismo patrón visual que `/components` (lista vertical con bordes y hover invertido).

**Ubicación especial:** esta es la única página cuyo `index.html` vive en la **raíz del proyecto** (`/index.html`), para que responda en la ruta `/` del sitio. Su `style.css` y esta documentación se quedan dentro de la carpeta `menu/` como cualquier otra página — solo el `index.html` se movió, para no generar confusión de que todo el "sistema" de la página está en la raíz.

```
/index.html              ← sirve la ruta "/"
/menu/style.css
/menu/design-system-menu.md
```

El `<link rel="stylesheet" href="/menu/style.css">` en el `index.html` de la raíz usa ruta absoluta, así que no depende de dónde viva el HTML.

---

## Sección Site Menu

### `.section--site-menu`
Modifier de `.section`. Full-height (`min-height: 100vh`), centrado verticalmente.

### `.site-menu-container`
Modifier de `.container`. Gap de `--space-md` entre logo, eyebrow, título y lista.

### `.site-menu-logo`
Wrapper del logo (link a `/`). `img` a `2.5em` de alto.

### `.site-menu-list`
`nav` en columna, contiene los `.site-menu-item`.

### `.site-menu-item`
Cada link de la lista:
- `font-size: 1.75em` (desktop) / `21px` (mobile)
- `border-top: 1px solid var(--color-black)`; el último item también tiene `border-bottom`
- Hover: fondo negro, texto blanco, `padding-left` +0.5em

---

## Páginas listadas

| Página | Ruta |
|---|---|
| Home | `/home` |
| Work | `/work` |
| Work CMS | `/work-cms` |
| EdTech Marketing | `/edtech-marketing` |
| EdTech Marketing Practice | `/edtech-marketing-practice` |
| EdTech Marketing Service | `/edtech-marketing-service` |
| The EdTech Mentor | `/edtech-mentor` |
| EdTech Mentor CMS | `/edtech-mentor-cms` |
| Resources | `/resources` |
| Resources CMS | `/resources-cms` |
| Clientes | `/clientes` |
| About | `/about` |
| Contact | `/contact` |
| Components (Kitchen Sink) | `/components` |

> Cuando se cree una página nueva en el repo, agregar su link aquí y en `/index.html` (raíz).
