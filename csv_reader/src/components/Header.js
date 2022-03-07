import React from "react";
import Logo from "../../public/Logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo da empresa" />
      </div>
    </header>
  );
};

export default Header;
