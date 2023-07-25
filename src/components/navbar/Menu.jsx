import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CDTLogo from "../../img/CDTLogo.png";
import './Menu.css'; // Import the CSS file if you have any styles specific to the navbar

const Menu = () => {

  const location = useLocation();
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-4">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img
          className="logo"
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
          <li className={`nav-item ${location.pathname === '/' ? 'active-link' : ''}`}>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/nosotros' ? 'active-link' : ''}`}>
            <Link className="nav-link" to="/nosotros">
              Nosotros
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/cursosyprogramas' ? 'active-link' : ''}`}>
            <Link className="nav-link" to="/cursosyprogramas">
              Cursos y Programas
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contacto' ? 'active-link' : ''}`}>
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/academico' ? 'active-link' : ''}`}>
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
