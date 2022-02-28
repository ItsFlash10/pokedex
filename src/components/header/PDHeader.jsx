import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/pokedexLogo.svg";
import button from "../../assets/icons/burgenBtn.svg";

import "./PDHeader.scss";

function PDHeader() {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenuOptions = () => {
    setMenuActive(!isMenuActive);
  };
  const handleOverlayClick = () => {
    setMenuActive(false);
  };
  return (
    <>
      <div className="header">
        <div className="title-image">
          <a href="/">
            <img className="pokedex-logo" src={logo} alt="logo" />
          </a>
        </div>
        <div onClick={toggleMenuOptions} className="mobile-menu-icon">
          <img src={button} />
        </div>
        <div className={isMenuActive ? "options-mobile" : "options"}>
          <div className={isMenuActive ? "mobile-logo" : "hidden"}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/pokedex">Pokédex</NavLink>
          </div>
          <div>
            <NavLink to="/legendaries">Legendaries</NavLink>
          </div>
          <div>
            <NavLink to="/documentation">Documentation</NavLink>
          </div>
        </div>
      </div>
      <div
        onClick={handleOverlayClick}
        className={`overlay ${isMenuActive ? "active" : ""}`}
      />
    </>
  );
}

export default PDHeader;
