import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="logoNav"
          src="https://www.dlf.pt/png/big/35/352312_medical-png.png"
        ></img>
      </Link>
      <ul className="links">
        <Link style={navStyle} to="/survey">
          <li>Survey</li>
        </Link>
        <Link style={navStyle} to="/content">
          <li>Patient info</li>
        </Link>
        <Link style={navStyle} to="/Media">
          <li>Media</li>
        </Link>
        <Link style={navStyle} to="/Api">
          <li>Api</li>
        </Link>
        <Link style={navStyle} to="/Grid">
          <li>Grid</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
