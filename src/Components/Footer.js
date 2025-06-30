import React from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';

const Footer = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    return (
        <footer className={`py-4 ${isDark ? 'bg-transparent' : 'light-card-bg'}`}>
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6">
                <p className="mb-0">
                © 2025 Rolando Roller. {t.footer.rights}
                </p>
            </div>
            <div className="col-md-6 text-md-end">
                <p className="mb-0">
                {t.footer.madeWith} ❤️ {t.footer.by} Rolando
                </p>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;