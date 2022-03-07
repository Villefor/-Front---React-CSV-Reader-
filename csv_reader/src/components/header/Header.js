import React from "react";
import Logo from "../../images/Logo.png";
import "./styles.scss";

const URLS = {
  About: "https://inteligov.com.br/quem-somos/",
  Solution: "https://inteligov.com.br/solucoes/",
  Content: "https://conteudo.inteligov.com.br/pt-br/conteudos",
  Blog: "https://blog.inteligov.com.br/",
  Login: "https://app.inteligov.com.br/",
};

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="Logo da empresa" className="header_img" />
      </div>
      <nav className="header_links">
        <h2>
          <a href={URLS.About} target="_blank" rel="noreferrer">
            Quem Somos
          </a>
        </h2>
        <h2>
          <a href={URLS.Solution} target="_blank" rel="noreferrer">
            Soluções
          </a>
        </h2>
        <h2>
          <a href={URLS.Content} target="_blank" rel="noreferrer">
            Conteúdos
          </a>
        </h2>
        <h2>
          <a href={URLS.Blog} target="_blank" rel="noreferrer">
            Blog
          </a>
        </h2>
        <h2>
          <a href={URLS.Login} target="_blank" rel="noreferrer">
            Login
          </a>
        </h2>
      </nav>
    </header>
  );
};

export default Header;
