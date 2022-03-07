import React from "react";
import Logo from "../../images/Logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="Logo da empresa" className="header_img" />
      </div>
      <nav className="header_links">
        <h2>Contato</h2>
        <h2>Quem Somos</h2>
        <h2>Soluções</h2>
        <h2>Conteúdos</h2>
        <h2>Blog</h2>
        <h2>Login</h2>
      </nav>
    </header>
  );
};

export default Header;
