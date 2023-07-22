import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CDTLogo from "../../img/CDTLogo.png";
import './Menu.css'; // Import the CSS file if you have any styles specific to the navbar

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
          className='logo'
            src={CDTLogo}
            alt="Logo"
            style={{ maxWidth: "100px", maxHeight: "50px" }}
          />
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursosyprogramas">
                Cursos y Programas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academico">
                Académico
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Menu;
