import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";
import { programaTransversal } from "./Datos/programaTransversal";
import { programaPerfil } from "./Datos/programaPerfil";
import { programaEducar } from "./Datos/programaEducar";
import { programaDojo } from "./Datos/programaDojo";
import { programaOficio } from "./Datos/programaOficio";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Programas.css";

const Programas = () => {
  // Obtiene el estado del modo oscuro
  const { isDarkMode } = useDarkMode();
  const [programaActivo, setProgramaActivo] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaDojo,
    programaOficio,
  ];
  const [mouseOverCard, setMouseOverCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const handleMouseEnter = (index) => {
    setMouseOverCard(index);
  };
  const handleMouseLeave = () => {
    setMouseOverCard(null);
  };
  const handleProgramaClick = (programaId) => {
    setProgramaActivo(programaId);
    setSearchQuery("");
    setCurrentPage(1);
  };
  const columnsPerPage = 3;
  const rowsPerPage = 3;
  const startIndex = (currentPage - 1) * columnsPerPage * rowsPerPage;
  const endIndex = startIndex + columnsPerPage * rowsPerPage;
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
  const filteredSubprogramas = subprogramasToShow.filter((subprograma) =>
    subprograma.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    setProgramaActivo(1);
  }, []);

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>Programas</title>
      </Helmet>
      <div
        style={{
          textAlign: "center",
          margin: "0px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>

      <div className="contenedor">
        <div className="row">
          <div className="col-md-3">
            <div className="btn-group-vertical">
              {programas.map((programa) => (
                <button
                  key={programa.id}
                  className={`program-button btn btn-primary ${
                    programa.id === programaActivo ? "active" : ""
                  }`}
                  onClick={() => handleProgramaClick(programa.id)}
                >
                  {programa.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <center>
              <h2 className="mt-4">
                PROG<span className="span">RAMAS</span>
              </h2>
            </center>
            {/* Campo de búsqueda */}
            <div className="search-container">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Buscar curso"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-danger p-3">
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                  </span>
                </div>
              </div>
            </div>

            <div className="card-container row justify-content-center">
              {/* Usar filteredSubprogramas en lugar de subprogramasToShow */}
              {filteredSubprogramas.map((subprograma, subIndex) => (
                <div
                  key={subprograma.id}
                  className="col-md-4 mt-5 position-relative"
                  onMouseEnter={() => handleMouseEnter(subIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`card p-0 position-relative h-100 d-flex flex-column ${
                      isDarkMode ? "dark-card-container" : "light-mode"
                    }`}
                  >
                    <img
                      src={subprograma.imagen}
                      alt={subprograma.nombre}
                      className={`card-img-top ${
                        mouseOverCard === subIndex ? "img-darken" : ""
                      }`}
                    />
                    {mouseOverCard === subIndex && (
                      <p
                        className={`card-text mb-0 card-gratis-overlay ${
                          isDarkMode ? "dark-card-text" : "light-mode"
                        }`}
                      >
                        GRATIS
                      </p>
                    )}

                    <div className="card-body d-flex flex-column p-3">
                      <p className={`mb-0`} style={{ color: "plum" }}>
                        <strong style={{ color: "#bdc3c7" }}>
                          {subprograma.modalidad}
                        </strong>
                      </p>
                      <h5
                        className={`card-title ${
                          isDarkMode ? "dark-card-title" : "light-mode"
                        }`}
                        style={{ color: "#2c3e50" }}
                      >
                        <strong>{subprograma.nombre}</strong>
                      </h5>
                      <p
                        className={`card-text card-text-small flex-grow-1  ${
                          isDarkMode ? "dark-p" : "light-mode"
                        }`}
                        style={{ color: "#525252" }}
                      >
                        {subprograma.texto}
                      </p>
                      <div className="d-flex justify-content-between align-items-center  mb-3">
                        <Link to={`/${subprograma.id}`} state={{ subprograma }}>
                          <button
                            className={`btn btn-dark button-ver-mas   ${
                              isDarkMode ? "dark-button-ver-mas" : "light-mode"
                            }`}
                          >
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

      {/* Paginación */}

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
