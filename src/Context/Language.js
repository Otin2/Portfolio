import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    
    const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
    
    const translations = {
        es: {
        nav: {
            home: 'Inicio',
            about: 'Acerca',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
        },
        header: {
            greeting: 'Hola, soy',
            profession: 'Ingeniero de Sistemas de Información',
            subtitle: 'Motivado por el código y guiado por la curiosidad, siempre en busca de mejorar a través de la reconstrucción.',
            cta: 'Ver mis habilidades',
            contact: 'Descargar CV'
        },
        about: {
            title: 'Acerca de mí',
            description: 'Actualmente estudio Ingeniería de Sistemas de Información e International Business. Estoy en búsqueda de oportunidades laborales donde pueda aplicar mis conocimientos, seguir aprendiendo y crecer profesionalmente',
        },
        skills: {
            title: 'Mis Habilidades',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de Datos',
            tools: 'Herramientas'
        },
        projects: {
            title: 'Mis Proyectos',
            viewProject: 'Ver Proyecto',
            viewCode: 'Ver Código'
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Listo para trabajar juntos?',
            description: 'Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!',
            phone: 'Teléfono',
            email: 'Email',
            location: 'Ubicación',
            sendMessage: 'Enviar Mensaje',
            nameLabel: 'Tu Nombre',
            namePlaceholder: 'Escribe tu nombre',
            emailLabel: 'Tu Correo',
            emailPlaceholder: 'Escribe tu correo electronico',
            messageLabel: 'Tu Mensaje',
            messagePlaceholder: 'Escribe tu Mensaje aqui',
            socialTitle: 'Redes Sociales',
            formError: 'Por favor, completa todos los campos del formulario.'
        },
        footer: {
            rights: 'Casi todos los derechos reservados.',
            madeWith: 'Hecho con',
            by: 'por'
        }
        },
        en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        header: {
            greeting: 'Hi, I\'m',
            profession: 'Information Systems Engineer',
            subtitle: 'I’m fueled by curiosity and driven by code — always breaking and rebuilding for better.',
            cta: 'View my tech',
            contact: 'Download CV'
        },
        about: {
            title: 'About me',
            description: 'I am currently studying Information Systems Engineering and International Business. I’m looking for job opportunities where I can apply my knowledge, keep learning, and grow professionally.',
        },
        skills: {
            title: 'My Skills',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Databases',
            tools: 'Tools'
        },
        projects: {
            title: 'My Projects',
            viewProject: 'View Project',
            viewCode: 'View Code'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Ready to work together?',
            description: 'I\'m available for new projects and opportunities. Let\'s talk!',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            sendMessage: 'Send Message',
            nameLabel: 'Your Name',
            namePlaceholder: 'Enter your name',
            emailLabel: 'Your Email',
            emailPlaceholder: 'Enter your email',
            messageLabel: 'Your Message',
            messagePlaceholder: 'Enter your message here',
            socialTitle: 'Social Networks',
            formError: 'Please fill out all fields.'
        },
        footer: {
            rights: 'Almost all rights reserved.',
            madeWith: 'Made with',
            by: 'by'
        }
        }
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};