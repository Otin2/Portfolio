import React from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';
import Navbar from '../Components/NavBar';

const CV = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    return (
        <div className={isDark ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className="container pt-5 mt-5">
            <div className="row">
            <div className="col-12 text-center">
                <h1>Curriculum Vitae</h1>
                <p className="lead">Rolando Roller - {t.header.profession}</p>
                <p className="text-muted">Esta página estará disponible próximamente...</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CV;