import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CDTLogo from "../assets/CDTLogo.png";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={CDTLogo}
            alt="Logo"
            style={{ maxWidth: "100px", maxHeight: "50px" }}
          />
        </a>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/empresas">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cursos">
                Cursos y Programas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/academico">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/preguntas">
                Académico
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
