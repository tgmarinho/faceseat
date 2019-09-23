import React from "react";
import "./style.css";
import logo from "../../assets/facebook-logo.png";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} />
      <h3 className="header-text">Meu perfil</h3>
    </div>
  );
}

export default Header;
