# otin.dev_ — Portafolio personal

Portafolio de **Otin** — Ciberseguridad · Desarrollo · IA & Análisis de Datos.
Sitio estático construido con **Astro 5** (cero JavaScript de framework en el navegador;
solo unos pocos scripts vanilla para las animaciones), listo para desplegarse en **GitHub Pages**.

Incluye **tema claro/oscuro** e **idioma inglés/español**, ambos con toggle en el navbar,
cambio instantáneo (sin recargar) y preferencia recordada en `localStorage`.
Por defecto arranca en **inglés** y **tema oscuro**.

## 🚀 Empezar

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:4321)
npm run dev

# 3. Build de producción (genera dist/)
npm run build

# 4. Previsualizar el build localmente
npm run preview
```

## ✏️ Editar el contenido

Todo está centralizado en [`src/data.js`](src/data.js):

- `site`: datos que NO cambian con el idioma (nombre, logo, contacto, redes y el
  perfil de la terminal `whoami`).
- `translations.en` / `translations.es`: los textos en cada idioma. Como el sitio
  es bilingüe, al editar un texto **actualiza los dos idiomas**.
- `defaultLang`: idioma con el que se renderiza el sitio (por defecto `'en'`).

No olvides reemplazar los placeholders en `site`:

- `tu-correo@ejemplo.com` → tu email real
- `https://github.com/tu-usuario` → tu GitHub
- `https://www.linkedin.com/in/tu-usuario` → tu LinkedIn

Los colores y tipografías se controlan con variables CSS al inicio de
[`src/styles/global.css`](src/styles/global.css). El **tema claro** se define en el
bloque `:root[data-theme='light']`, justo debajo del tema oscuro (`:root`).

> **Tema por defecto:** arranca en oscuro. Para cambiarlo, edita el script inline del
> `<head>` en [`src/layouts/Layout.astro`](src/layouts/Layout.astro)
> (`localStorage.getItem('theme') || 'dark'`).

## 🌐 Desplegar en GitHub Pages

1. **Configura Astro.** En [`astro.config.mjs`](astro.config.mjs):

   ```js
   site: 'https://<usuario>.github.io',
   base: '/portfolio/', // si tu repo es github.com/<usuario>/portfolio
   ```

   > Si tu repo se llama `<usuario>.github.io` o usas dominio propio, elimina la línea `base`.

2. **Crea el repositorio y sube el código:**

   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```

3. **Activa GitHub Pages con Actions.** En GitHub:
   `Settings → Pages → Build and deployment → Source: GitHub Actions`.

4. **Listo.** El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   compila y despliega automáticamente en cada push a `main`.
   Tu sitio quedará en `https://<usuario>.github.io/<repo>/`.

## 📁 Estructura

```
├── .github/workflows/deploy.yml   # Deploy automático a GitHub Pages
├── astro.config.mjs               # Config de Astro (⚠️ ajustar "site" y "base")
└── src/
    ├── data.js                    # ✏️ site + translations (en/es) + defaultLang
    ├── styles/global.css          # Temas (variables CSS), tema claro y estilos
    ├── layouts/Layout.astro       # <head>, fuentes, scripts de reveal/tema/idioma
    ├── pages/index.astro          # Página única que compone las secciones
    └── components/
        ├── Navbar.astro           # Píldora flotante + controles de tema e idioma
        ├── Hero.astro             # Introducción con cuadrícula y orbes
        ├── About.astro            # Bio + terminal whoami --json
        ├── Skills.astro           # Tarjetas por categoría
        ├── Experience.astro       # Timeline vertical
        ├── Projects.astro         # Tarjetas mini-terminal con tecleo animado
        ├── Contact.astro          # Contacto centrado
        └── Footer.astro           # Footer con año (calculado en el build)
```

## ♿ Accesibilidad

- Respeta `prefers-reduced-motion` (sin animaciones si el sistema lo pide).
- Foco visible por teclado en todos los elementos interactivos.
- Enlace "Saltar al contenido" y HTML semántico.
- Responsive hasta móvil.
