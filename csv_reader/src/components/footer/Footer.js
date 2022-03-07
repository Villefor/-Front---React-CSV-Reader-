import React from "react";
import Logo from "../../images/Logo.png";
import "./styles.scss";

const Footer = () => {
  const URL = "https://inteligov.com.br/politica-de-privacidade/";
  return (
    <section className="section">
      <footer className="footer">
        <div className="footer_div_logo">
          <img src={Logo} alt="Logo da empresa" className="header_img" />
          <p>Inteligência em dados governamentais 💙🚀</p>
          <h6>
            Avenida Paulista, 1439, conjunto 12 <br />
            CNPJ: 20.280.412/0001-30 <br />
            Política de Privacidade
          </h6>
          <p className="footer_paragraph">
            <a href={URL}>Política de Privacidade</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
