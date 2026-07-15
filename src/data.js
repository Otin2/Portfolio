// ============================================================
// DATA — todo el contenido del portfolio en un solo lugar.
// Edita aquí textos, skills, experiencia, proyectos y contacto.
// ============================================================

export const DATA = {
  name: 'Otin',
  logo: { user: 'otin', tld: 'dev' },

  contact: {
    email: 'tu-correo@ejemplo.com',
    github: '#',
    linkedin: '#',
  },

  nav: [
    { num: '01', label: 'Sobre mí', href: '#sobre-mi' },
    { num: '02', label: 'Skills', href: '#skills' },
    { num: '03', label: 'Experiencia', href: '#experiencia' },
    { num: '04', label: 'Proyectos', href: '#proyectos' },
  ],

  hero: {
    badge: 'Disponible para nuevos proyectos',
    titleStart: 'Construyo y protejo ',
    titleGradient: 'sistemas inteligentes',
    subtitle:
      'Soy Otin. Me muevo entre la ciberseguridad, el desarrollo de tecnología y la inteligencia artificial — creando sistemas seguros y aplicando datos para que tomen mejores decisiones.',
    tags: ['Ciberseguridad', 'Desarrollo', 'IA & Datos'],
    ctaPrimary: { label: 'Ver proyectos →', href: '#proyectos' },
    ctaGhost: { label: 'Contáctame', href: '#contacto' },
  },

  about: {
    // Los <strong> y <span class="hl"> se marcan en el componente About.astro
    profile: {
      location: 'Lima, PE',
      edu: 'USIL',
      focus: 'sec / dev / ai',
      lang: 'es / en',
      status: 'open_to_work',
    },
  },

  skills: [
    {
      rank: 'TOP 1',
      idx: '/security',
      title: 'Ciberseguridad',
      chips: ['Linux', 'Redes', 'Nmap', 'Wireshark', 'Burp Suite', 'OWASP', 'Hardening'],
    },
    {
      rank: 'TOP 2',
      idx: '/dev',
      title: 'Desarrollo',
      chips: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'APIs'],
    },
    {
      rank: 'TOP 3',
      idx: '/ai-data',
      title: 'IA & Análisis de Datos',
      chips: ['Pandas', 'scikit-learn', 'XGBoost', 'NumPy', 'Jupyter'],
    },
    {
      rank: null,
      idx: '/tools',
      title: 'Herramientas',
      chips: ['Kali', 'Docker', 'VS Code', 'GitHub', 'VirtualBox'],
    },
  ],

  experience: [
    {
      date: '2025 — Presente',
      role: 'Tesis · Machine Learning & Datos',
      org: 'USIL',
      desc: 'Modelo de clasificación de jugadores de tenis amateur en Lima Metropolitana con algoritmos supervisados y análisis de variables de rendimiento.',
    },
    {
      date: '2024 — 2025',
      role: 'Autoaprendizaje · Ciberseguridad',
      org: 'Labs personales · TryHackMe / HackTheBox',
      desc: 'Práctica continua en pentesting, seguridad de redes y web: reconocimiento, análisis de vulnerabilidades y hardening en entornos controlados.',
    },
    {
      date: '2023 — 2024',
      role: 'Proyectos de Desarrollo de Software',
      org: 'USIL',
      desc: 'Diseño y construcción de aplicaciones aplicando Scrum, UML, patrones de diseño y arquitectura de software.',
    },
  ],

  projects: [
    {
      tag: 'IA',
      cmd: 'cat clasificador-tenis.md',
      title: 'Clasificador de Tenistas ML',
      desc: 'Modelo de machine learning que clasifica el nivel de jugadores de tenis amateur en Lima usando variables de rendimiento. Base de mi tesis.',
      stack: ['Python', 'scikit-learn', 'Pandas'],
      link: { label: 'ver_repo →', href: '#' },
    },
    {
      tag: 'Seguridad',
      cmd: 'cat red-segura.md',
      title: 'Segmentación de Red Doméstica',
      desc: 'Diseño de red con separación de dispositivos de hogar e invitados: repetidor vía Ethernet, aislamiento de tráfico y control de acceso.',
      stack: ['Networking', 'VLAN', 'Hardening'],
      link: { label: 'ver_detalle →', href: '#' },
    },
    {
      tag: 'Dev',
      cmd: 'cat tarjeta-nfc.md',
      title: 'Tarjeta NFC Digital',
      desc: 'Tarjeta de presentación con archivo .vcf alojado en GitHub Pages, compatible con iOS vía NFC para compartir contacto al instante.',
      stack: ['GitHub Pages', 'vCard', 'NFC'],
      link: { label: 'ver_repo →', href: '#' },
    },
  ],
};
