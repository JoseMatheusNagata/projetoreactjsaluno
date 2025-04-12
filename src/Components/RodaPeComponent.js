import React from 'react';
import './RodaPeComponent.css'; // Opcional: para estilização

const RodaPeComponent = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Minha Aplicação. Todos os direitos reservados.</p>
        </footer>
    );
};



export default RodaPeComponent;