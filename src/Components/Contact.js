import React, { useRef, useState } from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';
import '../App.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const form = useRef();
    const [formValues, setFormValues] = useState({});

    // Tus redes sociales
    const redesData = [
        { id: 1, nombre: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rolando-roller-v-4013a225b/' },
        { id: 2, nombre: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/otin_roller/?next=%2F' },
        { id: 3, nombre: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/Otin23' },
        { id: 4, nombre: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Otin2' }
    ];

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_atwxsxc', // tu Service ID
            'template_4yt5xls', // tu Template ID
            form.current,
            'q0gbec6uQuB7jspOd' // tu Public Key
        )
        .then((result) => {
            alert('¡Mensaje enviado correctamente!');
            setFormValues({}); // Limpia el formulario
            form.current.reset(); // Opcional: resetea el formulario visualmente
        }, (error) => {
            alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        });
    };

    return (
        <section id="contact" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h2 className="steel-metal">{t.contact.title}</h2>
                    </div>
                </div>
                
                <div className="contacto-grid">
                    {/* Formulario */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={`contacto-form-container ${isDark ? 'contacto-dark' : 'claro'}`}
                    >
                        <div className="form-group">
                            <label htmlFor="nombre" className="form-label">{t.contact.nameLabel}</label>
                            <input
                                type="text"
                                value={formValues.nombre || ""}
                                onChange={handleInputChange}
                                id="nombre"
                                name="nombre"
                                placeholder={t.contact.namePlaceholder}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">{t.contact.emailLabel}</label>
                            <input
                                type="email"
                                value={formValues.email || ""}
                                onChange={handleInputChange}
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder={t.contact.emailPlaceholder}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje" className="form-label">{t.contact.messageLabel}</label>
                            <textarea
                                id="mensaje"
                                value={formValues.mensaje || ""}
                                onChange={handleInputChange}
                                name="mensaje"
                                rows="4"
                                className="form-textarea"
                                placeholder={t.contact.messagePlaceholder}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            {t.contact.sendMessage} <i className="fas fa-paper-plane submit-icon"></i>
                        </button>
                    </form>

                    <div className="contacto-info">
                        
                        <img
                            src={`${process.env.PUBLIC_URL}/Imgs/Redes.png`}
                            alt="Redes Sociales"
                            className="redes-image"
                        />
                        <div>
                            <h6 className={`titulo-redes-mini text-center ${isDark ? 'text-light' : 'text-dark'}`}>{t.contact.socialTitle}</h6>
                            <ul className="redes-list redes-horizontal">
                                {redesData.map(red => (
                                    <li key={red.id} className='redes-item'>
                                        <a 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            href={red.url}
                                            className={isDark ? 'text-light' : 'text-dark'}
                                        >
                                            <i className={`redes-icon ${red.icon}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;