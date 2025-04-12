import React from "react";
import "./RodaPeComponent.css";

const RodaPeComponent = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Minha Aplicação. Todos os direitos
        reservados.
      </p>

      <p>Contato: contato@meusite.com | Telefone: (11) 1234-5678</p>
      <div className="social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default RodaPeComponent;
