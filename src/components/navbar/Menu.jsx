import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CDTLogo from "../../img/CDT.png";
import "./Menu.css"; // Import the CSS file if you have any styles specific to the navbar

const Menu = () => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={CDTLogo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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
            <li className="nav-item dropdown">
              {" "}
              {/* Agregamos la clase "dropdown" aquí */}
              <button className="nav-link" onClick={toggleDropdown}>
                Académico
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu" onClick={closeDropdown}>
                  {/* Aquí puedes agregar los elementos del menú desplegable */}
                  <li className="dropdown-item">Biblioteca virtual</li>
                  <li className="dropdown-item">Sistema de Administración</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
