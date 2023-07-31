// Menu.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CDTLogo from "../../img/CDT.png";
import CDTLogoDark from "../../img/CDT-light.png";
import '../../App.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../DarkModeContext"; 
import "./Menu.css";

const Menu = () => {
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Add a class to the body element when isDarkMode changes
    document.body.classList.toggle("dark-mode-body", isDarkMode);
  }, [isDarkMode]);


  return (

    <nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark" : "navbar-light"} mb-4 sticky-top`}>
      <div className="container container-fluid">
      <Link className="navbar-brand" to="/">
          <img className="logo" src={isDarkMode ? CDTLogoDark : CDTLogo} alt="Logo" />
        </Link>

        <button
          className={`navbar-toggler ${isDarkMode ? "text-light" : "text-dark"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isDarkMode ? "bg-light" : ""}`}></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/nosotros" ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/cursosyprogramas" ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/cursosyprogramas">
                Cursos y Programas
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contacto" ? "active-link" : ""
              }`}
            >
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <button className={`nav-link ${isDarkMode ? "text-light" : "text-dark"}`} onClick={toggleDropdown}>
                Académico
              </button>
              {isDropdownOpen && (
                <ul className={`dropdown-menu ${isDarkMode ? "dropdown-menu-dark" : ""}`} onClick={closeDropdown}>
                  
                  <li className="dropdown-item">Biblioteca virtual</li>
                  <li className="dropdown-item">Sistema de Administración</li>
                </ul>
              )}
            </li> */}
            <li className="nav-item">
              {/* Dark mode toggle button with icons */}
              <button className={`nav-link ${isDarkMode ? "text-light" : "text-dark"}`} onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   

  );
};

export default Menu;
