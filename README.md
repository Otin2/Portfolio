# otin.dev — Portfolio

Portfolio personal de Otin — estudiante de doble grado en Ingeniería de Sistemas y Negocios Internacionales (USIL, Lima, Perú). Enfoque: ciberseguridad, desarrollo de tecnología e IA / análisis de datos.

Single-page construida con **Astro**, tema oscuro "cyber + IA futurista" y desplegada en **GitHub Pages**.

## Estructura

```
src/
├── data.js              # ← TODO el contenido en un solo lugar (textos, skills, proyectos…)
├── styles/global.css    # estilos globales (variables CSS, sin frameworks)
├── layouts/Layout.astro # head, fuentes, animaciones de aparición
├── pages/index.astro    # compone las secciones
└── components/          # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
```

Para editar el contenido solo necesitas tocar `src/data.js` (y los párrafos de bio en `src/components/About.astro`).

## Desarrollo

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo → http://localhost:4321
npm run build   # build de producción en dist/
npm run preview # previsualizar el build
```

## Despliegue en GitHub Pages

1. En `astro.config.mjs`, cambia los placeholders:
   - `site`: `https://TU-USUARIO.github.io`
   - `base`: `/NOMBRE-DEL-REPO` (elimínalo si el repo se llama `TU-USUARIO.github.io`)
2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Haz push a `main` — el workflow `.github/workflows/deploy.yml` construye y publica el sitio automáticamente.
