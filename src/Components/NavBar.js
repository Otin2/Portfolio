import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [shake, setShake] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar?.offsetHeight || 0;
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + navbarHeight;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar?.offsetHeight || 0;
            const elementPosition = element.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setOpenMenu(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpenMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    // Mostrar el menú con animación de entrada
    useEffect(() => {
        if (openMenu) {
            setMenuVisible(true);
        } else if (menuVisible) {
            const timeout = setTimeout(() => setMenuVisible(false), 350);
            return () => clearTimeout(timeout);
        }
    }, [openMenu, menuVisible]);

    return (
        <>
        <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''} ${isDark ? 'bg-transparent text-light' : 'bg-transparent text-dark'}`}>
            <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
                <a className="navbar-brand fw-bold me-3 d-none d-lg-block" href="#home">
                    <span className={`fs-5 fw-bold ${isDark ? 'text-light' : 'text-dark'}`}>R</span><span className="fs-5 fw-bold text-primary">Roller</span>
                </a>
                <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
                    <ul className="navbar-nav flex-row gap-3">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                            <li className="nav-item" key={section}>
                                <button
                                    className={`nav-link btn btn-link ${isDark ? 'text-light' : 'text-dark'} ${activeSection === section ? 'active' : ''}`}
                                    onClick={() => scrollToSection(section)}
                                >
                                    {t.nav[section]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-none d-lg-flex align-items-center gap-2 ms-3">
                    <button className="btn btn-outline-primary btn-sm" onClick={toggleLanguage}>
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <button className="btn btn-outline-primary btn-sm" onClick={toggleTheme}>
                        {isDark
                            ? <i className="bi bi-brightness-high-fill"></i>
                            : <i className="bi bi-moon-fill"></i>
                        }
                    </button>
                    <button className="navbar-toggler btn btn-outline-primary btn-sm" type="button" onClick={handleMenuClick} aria-label="Menú">
                        <i className={`fa-solid fa-bars fa-xs${shake ? ' fa-shake' : ''}`}></i>
                    </button>
                </div>
                <div className="d-flex d-lg-none align-items-center gap-2 w-100 justify-content-between">
                    <a className="navbar-brand fw-bold me-2" href="#home">
                        <span className={`fs-5 fw-bold ${isDark ? 'text-light' : 'text-dark'}`}>R</span><span className="fs-5 fw-bold text-primary">Roller</span>
                    </a>
                    <div className="d-flex align-items-center gap-2 ms-auto">
                        <button className="btn btn-outline-primary btn-sm" onClick={toggleLanguage}>
                            {language === 'es' ? 'EN' : 'ES'}
                        </button>
                        <button className="btn btn-outline-primary btn-sm" onClick={toggleTheme}>
                            {isDark
                                ? <i className="bi bi-brightness-high-fill" style={{ fontSize: "1rem" }}></i>
                                : <i className="bi bi-moon-fill"></i>
                            }
                        </button>
                        <button className="navbar-toggler btn btn-outline-primary btn-sm" type="button" onClick={handleMenuClick} aria-label="Menú">
                            <i className={`fa-solid fa-bars fa-xs${shake ? ' fa-shake' : ''}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        {menuVisible && (
            <div className={`collapse navbar-collapse navbar-float-menu${isDark ? ' navbar-float-dark' : ' navbar-float-light'}${openMenu ? ' menu-pop-in' : ' menu-pop-out'}`} id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-center">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                        <li className="nav-item" key={section}>
                            <button
                                className={`nav-link btn btn-link ${isDark ? 'text-light' : 'text-dark'} ${activeSection === section ? 'active' : ''}`}
                                onClick={() => scrollToSection(section)}
                            >
                                {t.nav[section]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </>
    );
};

export default Navbar;