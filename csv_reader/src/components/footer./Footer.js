import React from "react";

const Footer = (props) => {
  return (
    <section className={"section"}>
      <footer className={"footer"}>
        <h1>Precisa de ajuda ?</h1>
        <h1>Entre em contato ! </h1>
        <p className={"footer__paragraph"}>
          {props.FooterText.footer_coopers_year}
        </p>
      </footer>
    </section>
  );
};

export default Footer;
