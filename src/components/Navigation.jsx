import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/navigation.css"

const Navigation = () => {




  
  return (
    <div className="Banner_nav">
      <div>
        <Logo />
      </div>

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
