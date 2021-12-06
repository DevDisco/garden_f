import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fab fa-react" />
            &nbsp; Opentuinendag
            <br />
            &nbsp; Westzaan 2022
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              <Link
                to="/#top"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/#gardens"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Tuinen
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/#info"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Informatie
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/#map"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Kaart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
