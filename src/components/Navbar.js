import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fab fa-react" />
            &nbsp; Opentuinendag Westzaan 2022
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/#top" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#gardens"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tuinen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#map" className="nav-links" onClick={closeMobileMenu}>
                Kaart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
