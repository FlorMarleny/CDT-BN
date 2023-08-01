import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { programaTransversal } from "./Datos/programaTransversal";
import { programaPerfil } from "./Datos/programaPerfil";
import { programaEducar } from "./Datos/programaEducar";
import { programaDojo } from "./Datos/programaDojo";
import { programaOficio } from "./Datos/programaOficio";
import Footer from "../../components/Footer/Footer";

import "./Programas.css";

const Programas = () => {
  const [programaActivo, setProgramaActivo] = useState(1); // Establecemos el programa activo inicialmente como "Transversal"
  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaDojo,
    programaOficio,
  ];

  const subprogramas = programas.flatMap((programa) => programa.subprogramas);

  const [mouseOverCard, setMouseOverCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMouseEnter = (index) => {
    setMouseOverCard(index);
  };

  const handleMouseLeave = () => {
    setMouseOverCard(null);
  };

  const handleProgramaClick = (programaId) => {
    if (programaActivo === programaId) {
      setProgramaActivo(null);
    } else {
      setProgramaActivo(programaId);
    }
    setCurrentPage(1); // Reiniciamos la página actual al cambiar de programa
  };

  useEffect(() => {
    setProgramaActivo(1);
  }, []);

  const columnsPerPage = 3;
  const rowsPerPage = 3;
  const startIndex = (currentPage - 1) * columnsPerPage * rowsPerPage;
  const endIndex = startIndex + columnsPerPage * rowsPerPage;

  // Filtramos los subprogramas según el programa activo
  const subprogramasToShow = programas[programaActivo - 1]?.subprogramas.slice(
    startIndex,
    endIndex
  );
  const totalPages = Math.ceil(
    programas[programaActivo - 1]?.subprogramas.length /
      (columnsPerPage * rowsPerPage)
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Programas</title>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="btn-group-vertical">
              {programas.map((programa) => (
                <button
                  key={programa.id}
                  className={`program-button btn btn-primary ${
                    programaActivo === programa.id ? "active" : ""
                  }`}
                  onClick={() => handleProgramaClick(programa.id)}
                >
                  {programa.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <div className="card-container row justify-content-center">
              {subprogramasToShow.map((subprograma, subIndex) => (
                <div
                  key={subprograma.id}
                  className="col-md-4 mt-5 position-relative"
                  onMouseEnter={() => handleMouseEnter(subIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="card p-0 position-relative h-100 d-flex flex-column">
                    <img
                      src={subprograma.imagen}
                      alt={subprograma.nombre}
                      className={`card-img-top ${
                        mouseOverCard === subIndex ? "img-darken" : ""
                      }`}
                    />
                    {mouseOverCard === subIndex && (
                      <p className="card-text mb-0 card-gratis-overlay">
                        GRATIS
                      </p>
                    )}

                    <div className="card-body d-flex flex-column p-3">
                      <p className={`mb-0`} style={{ color: "plum" }}>
                        <strong style={{ color: "#bdc3c7" }}>
                          {subprograma.modalidad}
                        </strong>
                      </p>
                      <h5 className="card-title" style={{ color: "#2c3e50" }}>
                        <strong>{subprograma.nombre}</strong>
                      </h5>
                      <p
                        className="card-text card-text-small flex-grow-1"
                        style={{ color: "#525252" }}
                      >
                        {subprograma.texto}
                      </p>
                      <div className="d-flex justify-content-between align-items-center  mb-3">
                        <Link
                          to={`/vermas/${subprograma.id}`}
                          state={{ subprograma }}
                        >
                          <button className="btn btn-dark button-ver-mas">
                            VER MÁS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Paginación">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={prevPage}>
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index + 1}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button className="page-link" onClick={nextPage}>
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Programas;
