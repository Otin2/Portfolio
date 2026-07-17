// Datos que no cambian de idioma y los que si

export const defaultLang = 'en'

export const site = {
  name: 'Rolando Roller',
  logo: { accent: 'R', rest: 'Roller' },

  photo: true,

  email: 'rolanroller@hotmail.com',
  phone: '+51 939 322 937',

  // Credenciales de EmailJS
  emailjs: {
    serviceId: 'service_atwxsxc',
    templateId: 'template_4yt5xls',
    publicKey: 'q0gbec6uQuB7jspOd',
  },
  socials: {
    github: 'https://github.com/Otin2',
    linkedin: 'https://www.linkedin.com/in/rolando-roller/',
  },

  profile: {
    location: 'Lima, PE',
    focus: 'Sec / Dev / Data',
  },
}

export const translations = {
  en: {
    nav: [
      { id: 'sobre-mi', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experiencia', label: 'Experience' },
      { id: 'proyectos', label: 'Projects' },
    ],
    navCta: { label: 'Contact', href: '#contacto' },

    hero: {
      titleStart: "Hi, I'm",
      titleGradient: 'Rolando Roller',
      role: 'Information Systems Engineer & International Business',
      subtitle:
        'From idea to launch. Clean, scalable products built to connect and perform in real-world use, driven by clarity, solid architecture, and intentional design.',
      tags: ['Cybersecurity', 'Development', 'Data Management'],
      ctaPrimary: { label: 'Projects', href: '#proyectos' },
      ctaSecondary: { label: 'Download CV', href: '/cv.pdf' },
    },

    about: {
      heading: 'About me',
      paragraphs: [
        "I'm a top-third student pursuing a double degree in Systems Engineering and International Business at USIL, a combination that lets me understand business development from both sides.",
        "I'm passionate about cybersecurity and development: I like building useful systems that connect with the user while understanding how they're attacked in order to defend them.",
        "I'm currently a student working on my thesis, which applies machine learning to classify the level of tennis players, and seeking job opportunities where I can apply my knowledge, continue learning, and grow professionally.",
      ],
      card: {
        photoAlt: 'Rolando Roller',
        role: 'Cybersecurity / Development / Data',
        status: 'Available',
      },
    },

    skills: {
      heading: 'Technical skills',
      hint: '// Hover (or tap) a skill to see how I use it',
      filters: {
        all: 'All',
        cyber: 'Cybersecurity',
        dev: 'Development',
        aidata: 'Data',
        tools: 'Tools',
      },
      items: {
        linux: { name: 'Linux', blurb: 'Open-source OS' },
        networks: { name: 'Networks', blurb: 'Design and architecture of home networks' },
        kali: { name: 'Kali', blurb: 'Distro for labs' },
        wireshark: { name: 'Wireshark', blurb: 'Traffic analysis and network troubleshooting' },
        maltego: { name: 'Maltego', blurb: 'OSINT techniques' },
        trellix: { name: 'Trellix', blurb: 'Endpoint security (EDR) monitoring and management at the SOC' },
        crowdstrike: { name: 'CrowdStrike', blurb: 'Threat detection and response (EDR) at the SOC' },
        automox: { name: 'Automox', blurb: 'Automated patch management across endpoints' },
        forcepoint: { name: 'Forcepoint', blurb: 'Web security and DLP policy administration' },

        react: { name: 'React', blurb: 'Component-based interfaces for web apps' },
        reactnative: { name: 'React Native', blurb: 'Mobile apps with the React component model' },
        astro: { name: 'Astro', blurb: 'Framework for static sites' },
        supabase: { name: 'Supabase', blurb: 'Auth, database and APIs for my personal projects' },
        firebase: { name: 'Firebase', blurb: 'For prototype launches' },
        wordpress: { name: 'WordPress', blurb: 'Building and managing simple websites' },
        languages: { name: 'Programming Languages', blurb: 'Click to expand the languages I code in' },
        javascript: { name: 'JavaScript', blurb: 'Interactivity on the web' },
        typescript: { name: 'TypeScript', blurb: 'Typed JavaScript' },
        python: { name: 'Python', blurb: 'Scripts, automation and data analysis' },
        java: { name: 'Java', blurb: 'OOP foundations and academic projects' },
        cpp: { name: 'C++', blurb: 'Algorithms and performance fundamentals' },
        swift: { name: 'Swift', blurb: 'iOS app development' },
        html: { name: 'HTML', blurb: 'Semantic structure' },
        css: { name: 'CSS', blurb: 'Layout and design' },

        postgresql: { name: 'PostgreSQL', blurb: 'Relational database for personal projects' },
        mysql: { name: 'MySQL', blurb: 'Modeling and querying relational databases' },
        oracle: { name: 'Oracle', blurb: 'Relational databases in enterprise environments' },
        mongodb: { name: 'MongoDB', blurb: 'NoSQL document store for flexible models' },
        powerbi: { name: 'Power BI', blurb: 'Dashboards and business reporting' },

        git: { name: 'Git', blurb: 'Version control across all my projects' },
        github: { name: 'GitHub', blurb: 'Code portfolio and collaborations' },
        docker: { name: 'Docker', blurb: 'Service containers' },
        pnpm: { name: 'pnpm', blurb: 'Package management in projects' },
        jenkins: { name: 'Jenkins', blurb: 'Automations to find errors' },
        figma: { name: 'Figma', blurb: 'Interface design and prototyping' },
        virtualbox: { name: 'VirtualBox', blurb: 'Virtual machines for security labs' },
        vmware: { name: 'VMware', blurb: 'Virtualization for labs and testing' },
        vscode: { name: 'VS Code', blurb: 'Main editor' },
        claude: { name: 'Claude Code', blurb: 'AI-assisted development' },
        chatgpt: { name: 'ChatGPT', blurb: 'Fast prototyping of ideas and accelerated learning' },
        copilot: { name: 'Copilot', blurb: 'Smart autocompletion inside the editor' },
      },
    },

    experience: {
      heading: 'Experience',
      items: [
        {
          period: '2026 — Present',
          title: 'CyberSOC Analyst (Intern)',
          org: 'Bantek',
          description:
            'Monitoring, analysis and incident response using SIEM, XDR, EDR, WAF and firewalls. Administration of security platforms such as CrowdStrike, Automox, Trellix and Forcepoint, and technical reporting for incident management.',
        },
        {
          period: '2025 — 2026',
          title: 'Work & Travel Program (Walt Disney World)',
          org: 'United States',
          description:
            'Cultural exchange program: guest service in a high-demand international environment, strengthening my English, communication and teamwork.',
        },
        {
          period: '2022',
          title: 'University Student',
          org: 'USIL — Lima, Peru',
          description:
            'Top-third student pursuing a double degree in Information Systems Engineering and International Business.',
        },
        // Entradas de ejemplo listas para cuando haya mas experiencia
        /*
        {
          period: '2022 — 2023',
          title: 'Role · Field',
          org: 'Organization',
          description:
            'Short description of responsibilities and achievements (2–3 lines max to keep the columns balanced).',
        },
        {
          period: '2021 — 2022',
          title: 'Role · Field',
          org: 'Organization',
          description:
            'Short description of responsibilities and achievements (2–3 lines max to keep the columns balanced).',
        },
        {
          period: '2020 — 2021',
          title: 'Role · Field',
          org: 'Organization',
          description:
            'Short description of responsibilities and achievements (2–3 lines max to keep the columns balanced).',
        },
        */
      ],
    },

    projects: {
      heading: 'Personal projects',
      items: [
        {
          type: 'ia',
          label: 'AI',
          file: 'tennis-classifier.md',
          image: 'tennis-classifier.svg',
          title: 'Tennis Player ML Classifier',
          description:
            'Machine learning model that classifies the level of amateur tennis players in Lima based on their game statistics.',
          stack: ['Python', 'scikit-learn', 'Pandas'],
          link: { label: 'view-repo', href: 'https://github.com/Otin2' },
        },
        {
          type: 'seguridad',
          label: 'Security',
          file: 'home-network.md',
          image: 'home-network.svg',
          title: 'Home Network Segmentation',
          description:
            'Home network redesign separating household and guest devices, a repeater connected over Ethernet, and traffic isolation between segments.',
          stack: ['Networking', 'VLAN', 'Hardening'],
          link: { label: 'view-details', href: 'https://github.com/Otin2' },
        },
        {
          type: 'dev',
          label: 'Dev',
          file: 'nfc-card.md',
          image: 'nfc-card.svg',
          title: 'Digital NFC Card',
          description:
            'Digital contact card with a .vcf file hosted on GitHub Pages, compatible with iOS via an NFC tag.',
          stack: ['GitHub Pages', 'vCard', 'NFC'],
          link: { label: 'view-repo', href: 'https://github.com/Otin2' },
        },
        {
          type: 'seguridad',
          label: 'Security',
          file: 'port-scanner.md',
          image: 'port-scanner.svg',
          title: 'Python Port Scanner',
          description:
            'Multithreaded TCP port scanner with service banner grabbing and result export, built as a hands-on networking lab.',
          stack: ['Python', 'Sockets', 'Threading'],
          link: { label: 'view-repo', href: 'https://github.com/Otin2' },
        },
        {
          type: 'dev',
          label: 'Dev',
          file: 'portfolio.md',
          image: 'portfolio.svg',
          title: 'Terminal-Style Portfolio',
          description:
            'This very site: a bilingual (ES/EN) portfolio with terminal aesthetics, an interactive 3D neural sphere, light/dark themes and a draggable infinite project carousel. Static, dependency-light and built with Astro plus vanilla JS and CSS.',
          stack: ['Astro', 'Three.js', 'JavaScript', 'CSS'],
          link: { label: 'view-repo', href: 'https://github.com/Otin2' },
        },
      ],
    },

    contact: {
      heading: 'Get in touch',
      text: "Want to work together? I'm open to work, projects, and collaborations.",
      infoTitle: 'Contact information',
      infoText: "Fill up the form and I'll get back to you as soon as possible.",
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      connectTitle: 'Connect with me',
      form: {
        name: 'Your name',
        namePh: 'John Doe',
        email: 'Your email',
        emailPh: 'john@example.com',
        subject: 'Subject',
        subjectPh: 'How can I help you?',
        message: 'Message',
        messagePh: 'Your message here...',
        send: 'Send message',
        sending: 'Sending…',
        success: 'Message sent! I will get back to you soon.',
        error: 'Something went wrong. Please try again or email me directly.',
        missing: 'Please fill in all the fields.',
        errName: 'Please enter your name.',
        errEmail: 'Please enter your email.',
        errEmailInvalid: 'Please enter a valid email address.',
        errSubject: 'Please enter a subject.',
        errMessage: 'Please write a message.',
      },
    },

    ui: {
      skip: 'Skip to content',
      builtWith: 'Almost all rights reserved.',
      themeLabel: 'Toggle theme',
      langLabel: 'Change language',
    },
  },

  es: {
    nav: [
      { id: 'sobre-mi', label: 'Sobre mí' },
      { id: 'skills', label: 'Skills' },
      { id: 'experiencia', label: 'Experiencia' },
      { id: 'proyectos', label: 'Proyectos' },
    ],
    navCta: { label: 'Contactar', href: '#contacto' },

    hero: {
      titleStart: 'Hola, soy',
      titleGradient: 'Rolando Roller',
      role: 'Ingeniero de Sistemas de Información & Negocios Internacionales',
      subtitle:
        'Desde la idea al lanzamiento. Productos limpios y escalables, construidos para conectar y rendir en el mundo real, guiados por una arquitectura sólida y diseño intencional.',
      tags: ['Ciberseguridad', 'Desarrollo', 'Gestión de Datos'],
      ctaPrimary: { label: 'Proyectos', href: '#proyectos' },
      ctaSecondary: { label: 'Descargar CV', href: '/cv.pdf' },
    },

    about: {
      heading: 'Sobre mí',
      paragraphs: [
        'Soy estudiante de tercio superior con doble grado en Ingeniería de Sistemas y Negocios Internacionales en la USIL, una combinación que me permite entender el negocio desde ambos lados.',
        'Me apasionan las áreas de ciberseguridad y desarrollo: me interesa construir sistemas útiles que conecten con el usuario y, al mismo tiempo, entender cómo se atacan para poder defenderlos.',
        'Actualmente estudio y desarrollo mi tesis, que aplica machine learning para clasificar el nivel de jugadores de tenis, en busca de oportunidades laborales donde pueda aplicar mis conocimientos, seguir aprendiendo y crecer profesionalmente.',
      ],
      card: {
        photoAlt: 'Rolando Roller',
        role: 'Ciberseguridad / Desarrollo / Datos',
        status: 'Disponible',
      },
    },

    skills: {
      heading: 'Skills tecnológicas',
      hint: '// Pasa el cursor (o toca) una skill para ver cómo la uso',
      filters: {
        all: 'Todo',
        cyber: 'Ciberseguridad',
        dev: 'Desarrollo',
        aidata: 'Datos',
        tools: 'Herramientas',
      },
      items: {
        linux: { name: 'Linux', blurb: 'OS de código abierto' },
        networks: { name: 'Redes', blurb: 'Diseño y arquitectura de redes domésticas' },
        kali: { name: 'Kali', blurb: 'Distro para labs' },
        wireshark: { name: 'Wireshark', blurb: 'Análisis de tráfico y troubleshooting de red' },
        maltego: { name: 'Maltego', blurb: 'Técnicas OSINT' },
        trellix: { name: 'Trellix', blurb: 'Monitoreo y gestión de seguridad endpoint (EDR) en el SOC' },
        crowdstrike: { name: 'CrowdStrike', blurb: 'Detección y respuesta ante amenazas (EDR) en el SOC' },
        automox: { name: 'Automox', blurb: 'Gestión automatizada de parches en los endpoints' },
        forcepoint: { name: 'Forcepoint', blurb: 'Administración de seguridad web y políticas DLP' },

        react: { name: 'React', blurb: 'Interfaces por componentes para apps web' },
        reactnative: { name: 'React Native', blurb: 'Apps móviles con el modelo de componentes de React' },
        astro: { name: 'Astro', blurb: 'Framework para sitios estáticos' },
        supabase: { name: 'Supabase', blurb: 'Auth, base de datos y APIs para mis proyectos personales' },
        firebase: { name: 'Firebase', blurb: 'Para lanzamiento de prototipados' },
        wordpress: { name: 'WordPress', blurb: 'Creación y administración de sitios web sencillos' },
        languages: { name: 'Lenguajes de Programación', blurb: 'Haz clic para ver los lenguajes en los que programo' },
        javascript: { name: 'JavaScript', blurb: 'Interactividad en la web' },
        typescript: { name: 'TypeScript', blurb: 'JavaScript tipado' },
        python: { name: 'Python', blurb: 'Scripts, automatización y análisis de datos' },
        java: { name: 'Java', blurb: 'Bases de POO y proyectos académicos' },
        cpp: { name: 'C++', blurb: 'Algoritmos y fundamentos de rendimiento' },
        swift: { name: 'Swift', blurb: 'Desarrollo de apps iOS' },
        html: { name: 'HTML', blurb: 'Estructura semántica' },
        css: { name: 'CSS', blurb: 'Layout y diseño' },

        postgresql: { name: 'PostgreSQL', blurb: 'Base de datos relacional para proyectos personales' },
        mysql: { name: 'MySQL', blurb: 'Modelado y consultas sobre bases de datos relacionales' },
        oracle: { name: 'Oracle', blurb: 'Bases de datos relacionales en entornos empresariales' },
        mongodb: { name: 'MongoDB', blurb: 'Base documental NoSQL para modelos flexibles' },
        powerbi: { name: 'Power BI', blurb: 'Dashboards y reportes de negocio' },

        git: { name: 'Git', blurb: 'Control de versiones en todos mis proyectos' },
        github: { name: 'GitHub', blurb: 'Portfolio de código y colaboraciones' },
        docker: { name: 'Docker', blurb: 'Contenedor de servicios' },
        pnpm: { name: 'pnpm', blurb: 'Gestión de paquetes en proyectos' },
        jenkins: { name: 'Jenkins', blurb: 'Automatizaciones para encontrar errores' },
        figma: { name: 'Figma', blurb: 'Diseño de interfaces y prototipado' },
        virtualbox: { name: 'VirtualBox', blurb: 'Máquinas virtuales para laboratorios de seguridad' },
        vmware: { name: 'VMware', blurb: 'Virtualización para laboratorios y pruebas' },
        vscode: { name: 'VS Code', blurb: 'Editor principal' },
        claude: { name: 'Claude Code', blurb: 'Desarrollo asistido por IA' },
        chatgpt: { name: 'ChatGPT', blurb: 'Prototipado rápido de ideas y aprendizaje acelerado' },
        copilot: { name: 'Copilot', blurb: 'Autocompletado inteligente dentro del editor' },
      },
    },

    experience: {
      heading: 'Experiencia',
      items: [
        {
          period: '2026 — Presente',
          title: 'Analista CyberSOC (Practicante)',
          org: 'Bantek',
          description:
            'Monitoreo, análisis y respuesta a incidentes utilizando SIEM, XDR, EDR, WAF y firewalls. Administración de plataformas de seguridad como CrowdStrike, Automox, Trellix y Forcepoint, y elaboración de informes técnicos para la gestión de incidentes.',
        },
        {
          period: '2025 — 2026',
          title: 'Programa Work & Travel (Walt Disney World)',
          org: 'Estados Unidos',
          description:
            'Programa de intercambio cultural: atención al huésped en un entorno internacional de alta demanda, fortaleciendo el inglés, la comunicación y el trabajo en equipo.',
        },
        {
          period: '2022',
          title: 'Estudiante Universitario',
          org: 'USIL — Lima, Perú',
          description:
            'Estudiante de tercio superior con doble grado en Ingeniería de Sistemas de Información y Negocios Internacionales.',
        },
        // Entradas de ejemplo listas para cuando haya mas experiencia
        /*
        {
          period: '2022 — 2023',
          title: 'Puesto · Área',
          org: 'Organización',
          description:
            'Descripción breve de responsabilidades y logros (2–3 líneas máximo para mantener las columnas parejas).',
        },
        {
          period: '2021 — 2022',
          title: 'Puesto · Área',
          org: 'Organización',
          description:
            'Descripción breve de responsabilidades y logros (2–3 líneas máximo para mantener las columnas parejas).',
        },
        {
          period: '2020 — 2021',
          title: 'Puesto · Área',
          org: 'Organización',
          description:
            'Descripción breve de responsabilidades y logros (2–3 líneas máximo para mantener las columnas parejas).',
        },
        */
      ],
    },

    projects: {
      heading: 'Proyectos personales',
      items: [
        {
          type: 'ia',
          label: 'IA',
          file: 'tennis-classifier.md',
          image: 'tennis-classifier.svg',
          title: 'Clasificador de Tenistas ML',
          description:
            'Modelo de machine learning que clasifica el nivel de jugadores de tenis amateur en Lima a partir de sus estadísticas de juego.',
          stack: ['Python', 'scikit-learn', 'Pandas'],
          link: { label: 'ver-repositorio', href: 'https://github.com/Otin2' },
        },
        {
          type: 'seguridad',
          label: 'Seguridad',
          file: 'home-network.md',
          image: 'home-network.svg',
          title: 'Segmentación de Red Doméstica',
          description:
            'Rediseño de una red doméstica con separación de dispositivos del hogar e invitados, repetidor conectado por Ethernet y aislamiento de tráfico entre segmentos.',
          stack: ['Networking', 'VLAN', 'Hardening'],
          link: { label: 'ver-detalles', href: 'https://github.com/Otin2' },
        },
        {
          type: 'dev',
          label: 'Dev',
          file: 'nfc-card.md',
          image: 'nfc-card.svg',
          title: 'Tarjeta NFC Digital',
          description:
            'Tarjeta de contacto digital con archivo .vcf alojado en GitHub Pages, compatible con iOS mediante una etiqueta NFC.',
          stack: ['GitHub Pages', 'vCard', 'NFC'],
          link: { label: 'ver-repositorio', href: 'https://github.com/Otin2' },
        },
        {
          type: 'seguridad',
          label: 'Seguridad',
          file: 'port-scanner.md',
          image: 'port-scanner.svg',
          title: 'Escáner de Puertos en Python',
          description:
            'Escáner de puertos TCP multihilo con captura de banners de servicios y exportación de resultados, construido como laboratorio práctico de redes.',
          stack: ['Python', 'Sockets', 'Threading'],
          link: { label: 'ver-repositorio', href: 'https://github.com/Otin2' },
        },
        {
          type: 'dev',
          label: 'Dev',
          file: 'portfolio.md',
          image: 'portfolio.svg',
          title: 'Portafolio Estilo Terminal',
          description:
            'Este mismo sitio: un portafolio bilingüe (ES/EN) con estética de terminal, una esfera neuronal 3D interactiva, tema claro/oscuro y un carrusel infinito de proyectos arrastrable. Estático, ligero en dependencias y construido con Astro más JS y CSS puros.',
          stack: ['Astro', 'Three.js', 'JavaScript', 'CSS'],
          link: { label: 'ver-repositorio', href: 'https://github.com/Otin2' },
        },
      ],
    },

    contact: {
      heading: 'Contacto',
      text: '¿Quieres que trabajemos juntos? Estoy abierto a trabajo, proyectos y colaboraciones.',
      infoTitle: 'Información de contacto',
      infoText: 'Completa el formulario y te respondo lo antes posible.',
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
      },
      connectTitle: 'Conecta conmigo',
      form: {
        name: 'Tu nombre',
        namePh: 'Juan Pérez',
        email: 'Tu correo',
        emailPh: 'juan@ejemplo.com',
        subject: 'Asunto',
        subjectPh: '¿En qué te puedo ayudar?',
        message: 'Mensaje',
        messagePh: 'Tu mensaje aquí...',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        success: '¡Mensaje enviado! Te responderé pronto.',
        error: 'Algo salió mal. Inténtalo de nuevo o escríbeme directamente.',
        missing: 'Por favor completa todos los campos.',
        errName: 'Escribe tu nombre.',
        errEmail: 'Escribe tu correo.',
        errEmailInvalid: 'Introduce un email válido.',
        errSubject: 'Escribe un asunto.',
        errMessage: 'Escribe un mensaje.',
      },
    },

    ui: {
      skip: 'Saltar al contenido',
      builtWith: 'Casi todos los derechos reservados.',
      themeLabel: 'Cambiar tema',
      langLabel: 'Cambiar idioma',
    },
  },
}
