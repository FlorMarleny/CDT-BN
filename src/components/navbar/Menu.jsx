import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CDTLogo from "../../img/CDT.png";
import CDTLogoDark from "../../img/CDT-light.png";
import '../../App.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { FaHome, FaUsers, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import { useDarkMode } from "../../DarkModeContext";
import { CSSTransition } from "react-transition-group"; // Agrega esta importación
import "./Menu.css";


const Menu = () => {
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleLinkClick = () => {
    // Cierra el menú cuando se hace clic en un enlace
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode-body", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className={`navbar navbar-expand-md ${isDarkMode ? "navbar-dark" : "navbar-light"} mb-4 sticky-top`}>
      <div className="contenedor-nav container-fluid">
        <Link className="navbar-brand" to="/">
          <img className={`logo ${isMenuOpen ? "logo-hidden" : ""}`} src={isDarkMode ? CDTLogoDark : CDTLogo} alt="Logo" />
        </Link>
        <button
          className={`navbar-toggler ${isDarkMode ? "text-light" : "text-dark"}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${isDarkMode ? "" : ""}`}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === "/" ? "active-link" : ""}`}>
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/nosotros" ? "active-link" : ""}`}>
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/cursosyprogramas" ? "active-link" : ""}`}>
              <Link className="nav-link" to="/programas">Programas</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/contacto" ? "active-link" : ""}`}>
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${isDarkMode ? "text-light" : "text-dark"}`} onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Transición del menú */}
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu-transition"
        unmountOnExit
      >
        <div className="menu-overlay">
          <div className={`menu-content ${isDarkMode ? "bg-dark" : "bg-light"}`}>
            <button className="menu-close-btn" onClick={toggleMenu}>
              &times;
            </button>
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={handleLinkClick}><FaHome className="menu-icon"/> Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" onClick={handleLinkClick}><FaUsers className="menu-icon"/> Nosotros</Link>
              </li>
              <li>
                <Link to="/programas" onClick={handleLinkClick}><FaClipboardList className="menu-icon"/> Programas</Link>
              </li>
              <li>
                <Link to="/contacto" onClick={handleLinkClick}><FaEnvelope className="menu-icon"/> Contacto</Link>
              </li>
            </ul>
            <hr className="menu-divider" />
            <button className="menu-darkmode-btn" onClick={toggleDarkMode}>
              <a className="darkmode-link">
                {isDarkMode ? (
                  <div className="darkmode-text">
                    <FaSun /> Tema oscuro: Activado
                  </div>
                ) : (
                  <div className="darkmode-text">
                    <FaMoon /> Tema oscuro: Desactivado
                  </div>
                )}
              </a>
            </button>
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Menu;
