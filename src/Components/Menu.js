import OficinaBandeira from './OficinaBandeira';
import OficinaComponente from './OficinaComponent';
import OficinaForm from './OficinaForm';
import './Menu.css';
import React, { useState } from 'react';
const Menu = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (<div>
            {/* Menu superior com logo e links */}
            <div className="menu">
            <a href="#" className="logo">
                    <img 
                        src="https://cdn.portal.estacio.br/logotipo_marca_estacio_preto_HOME_d4bc9da518_ed6850a937.svg" 
                        alt="Logo Estácio" 
                        className="logo-image"
                    />
                </a>
                <div className="nav-links">
                    <a href="#bandeira" onClick={() => handleMenuClick('bandeira')}>
                        Oficina Bandeira
                    </a>
                    <a href="#componente" onClick={() => handleMenuClick('componente')}>
                        Oficina Componente
                    </a>
                    <a href="#form" onClick={() => handleMenuClick('form')}>
                        Oficina Form
                    </a>
                </div>
            </div>

            {/* Conteúdo dinâmico */}
            <div className="content">
                {activeSection === 'bandeira' && (
                    <section id="bandeira">
                        <OficinaBandeira />
                    </section>
                )}
                {activeSection === 'componente' && (
                    <section id="componente">
                        <OficinaComponente />
                    </section>
                )}
                {activeSection === 'form' && (
                    <section id="form">
                        <OficinaForm />
                    </section>
                )}
            </div>
        </div>
    );
};

export default Menu;