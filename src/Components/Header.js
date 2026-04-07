import React from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';
import AnimatedSphere from './AnimatedSphere';

const Header = () => {
    const { isDark } = useTheme();
    const { t, language } = useLanguage();

    const cvFileName = language === 'es' ? 'CV-Rolando-Roller-ES.pdf' : 'CV-Rolando-Roller-EN.pdf';
    const cvUrl = `${process.env.PUBLIC_URL}/${cvFileName}`;

    return (
        <section id="home" className={`min-vh-100 d-flex align-items-center ${isDark ? 'text-light' : 'text-dark'} header-section`} style={{ background: 'transparent' }}>        <div className="container-fluid">
            <div className="row align-items-center">
            <div className="col-12 col-lg-6">
                <div className="hero-content">
                <h1 className="display-4 fw-bold mb-3">
                    {t.header.greeting}{' '}
                    <span className="text-primary">Rolando Roller</span>
                </h1>
                <h2 className="h4 text-muted mb-4">
                    <span className="gradient-wave">{t.header.profession}</span>
                </h2>
                <p className="lead mb-4">{t.header.subtitle}</p>
                
                <div className="d-flex gap-3 flex-wrap">
                    <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                    >
                    {t.header.cta}
                    </button>
                    <a
                    className="btn btn-outline-primary btn-lg"
                        href={cvUrl}
                        download={cvFileName}
                    >
                    {t.header.contact}
                    </a>
                </div>
                </div>
            </div>
            
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
                <div className="hero-image text-center">
                    <div
                        className="d-inline-block w-100"
                        style={{
                            width: '100%',
                            maxWidth: '100vw',
                            height: 400,
                            minHeight: 200,
                        }}
                    >
                        <AnimatedSphere />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Header;