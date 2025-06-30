import React from 'react';

import { useLanguage } from '../Context/Language';
import { useTheme } from '../Context/Theme';

const About = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    return (
        <section id="about" className="py-5" style={{ background: 'transparent' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h2 className="steel-metal display-5 fw-bold">{t.about.title}</h2>
                    </div>
                </div>
                
                <div className="row align-items-center">
                    <div className={`col-lg-6 ${isDark ? 'text-light' : 'text-dark'}`}> 
                        <p className="lead">{t.about.description}</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image text-center mt-4 mt-lg-0">
                            <img
                                src={`${process.env.PUBLIC_URL}/Imgs/Foto.png`}
                                alt="Foto de perfil"
                                style={{
                                    width: '100%',
                                    maxWidth: 300,
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;