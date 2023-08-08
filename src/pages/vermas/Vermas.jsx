// Importación de ganchos y estilos
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";
import "./Vermas.css"; // Importación de estilos CSS

const Vermas = () => {
  // Obtiene la ubicación actual
  const location = useLocation();

  // Obtiene el subprograma de la ubicación, o null si no hay
  const subprograma = location.state?.subprograma || null;

  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState(null);

  // Obtiene el estado del modo oscuro
  const { isDarkMode } = useDarkMode();

  // Si no hay subprograma, muestra un mensaje
  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  }

  // Maneja el clic en una pestaña
  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  return (
    <div className="container mt-4">
      <div className="row">

        {/* Detalles del subprograma */}
        <div className="col-md-8">
          <div
            className={`col-md-auto bg-light p-3 ${isDarkMode ? "dark-informacion" : "light-mode"
              }`}
          >

            {/* Muestra más información del subprograma */}
            <h2>{subprograma.nombre}</h2>
            <p>{subprograma.descripcion}</p>
            <div className="row">
              <div className="col-md-4">
                <p>
                  <span
                    style={{ color: "green", marginRight: "5px" }}
                    role="img"
                    aria-label="Modalidad"
                  >
                    👨‍🏫
                  </span>
                  {subprograma.modalidad}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span
                    style={{ color: "green", marginRight: "5px" }}
                    role="img"
                    aria-label="Horas Académicas"
                  >
                    ⏰
                  </span>
                  {subprograma.horasAcademicas}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span
                    style={{ color: "green", marginRight: "5px" }}
                    role="img"
                    aria-label="Dirigido"
                  >
                    💸
                  </span>
                  Curso Gratuito
                </p>
              </div>
            </div>
          </div>

          <div
            className={`card mt-5 ${isDarkMode ? "dark-card" : "light-mode"}`}
          >
            <div className="card-body ">
              <h4>
                <strong>Lo que aprenderás</strong>
              </h4>
              <div className="row mt-4">

                {/* Contenido del curso */}
                <div
                  className={`col-md-6  ${isDarkMode ? "dark-card-text" : "light-mode"
                    }`}
                >
                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Checkmark"
                    >
                      &#10004;
                    </span>
                    {subprograma.capacitado1}
                  </p>

                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Checkmark"
                    >
                      &#10004;
                    </span>
                    {subprograma.capacitado2}
                  </p>
                </div>

                <div
                  className={`col-md-6  ${isDarkMode ? "dark-card-text" : "light-mode"
                    }`}
                >
                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Checkmark"
                    >
                      &#10004;
                    </span>
                    {subprograma.capacitado3}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Más contenido del curso */}
          <div
            className={`mt-5 ${isDarkMode ? "dark-contenido-curso" : "light-mode"
              }`}
          >
            <h4>
              <strong>Contenido del curso</strong>
            </h4>

            {/* Muestra el contenido del subprograma con pestañas */}
            <ul className="p-0">
              {subprograma.contenido1 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => handleTabClick(1)}
                  >
                    {subprograma.contenido1[0]}
                  </button>
                  {activeTab === 1 && (
                    <ul
                      className={`tab-content ${isDarkMode ? "dark-tab-content" : "light-mode"
                        }`}
                    >
                      {subprograma.contenido1[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido2 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => handleTabClick(2)}
                  >
                    {subprograma.contenido2[0]}
                  </button>
                  {activeTab === 2 && (
                    <ul className="tab-content">
                      {subprograma.contenido2[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido3 && (
                <li className="list-unstyled">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 3 ? "active" : ""}`}
                    onClick={() => handleTabClick(3)}
                  >
                    {subprograma.contenido3[0]}
                  </button>
                  {activeTab === 3 && (
                    <ul className="tab-content">
                      {subprograma.contenido3[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}

              {subprograma.contenido4 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 4 ? "active" : ""}`}
                    onClick={() => handleTabClick(4)}
                  >
                    {subprograma.contenido4[0]}
                  </button>
                  {activeTab === 4 && (
                    <ul className="tab-content">
                      {subprograma.contenido4[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido5 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 5 ? "active" : ""}`}
                    onClick={() => handleTabClick(5)}
                  >
                    {subprograma.contenido5[0]}
                  </button>
                  {activeTab === 5 && (
                    <ul className="tab-content">
                      {subprograma.contenido5[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido6 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 6 ? "active" : ""}`}
                    onClick={() => handleTabClick(6)}
                  >
                    {subprograma.contenido6[0]}
                  </button>
                  {activeTab === 6 && (
                    <ul className="tab-content">
                      {subprograma.contenido6[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido7 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 7 ? "active" : ""}`}
                    onClick={() => handleTabClick(7)}
                  >
                    {subprograma.contenido7[0]}
                  </button>
                  {activeTab === 7 && (
                    <ul className="tab-content">
                      {subprograma.contenido7[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
              {subprograma.contenido8 && (
                <li className="list-unstyled ">
                  <button
                    className={`tab-button ${isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 8 ? "active" : ""}`}
                    onClick={() => handleTabClick(8)}
                  >
                    {subprograma.contenido8[0]}
                  </button>
                  {activeTab === 8 && (
                    <ul className="tab-content">
                      {subprograma.contenido8[1].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Barra lateral con detalles adicionales */}
        <div className="col-md-4 ">
          <div
            className={`card custom-card-height card-hover-effect ${isDarkMode ? "dark-custom-card-height" : "light-mode"
              }`}
          >

            {/* Muestra la imagen del subprograma */}
            <img
              src={subprograma.imagen}
              alt={subprograma.nombre}
              className="card-img-top img-fluid custom-img-height"
            />

            <div className="card-body">

              {/* Muestra botón de inscripción */}
              <div>
                <div
                  className={`text-center ${isDarkMode ? "dark-inscribirse" : "light-mode"
                    }`}
                >
                  <a
                    href="https://forms.gle/yLueEHaMSxgwsZir6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="custom-button "
                      style={{ width: "100%" }}
                    >
                      INSCRIBIRSE
                    </button>
                  </a>
                </div>
              </div>

              {/* Muestra requisitos y detalles */}
              <div
                className={` ${isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
              >
                <h5>Requisitos:</h5>

                <h6>
                  <span
                    style={{ color: "red", marginRight: "5px" }}
                    role="img"
                    aria-label="Checkmark"
                  >
                    &#10004;
                  </span>
                  {subprograma.requisitos}
                </h6>
              </div>
              <div
                className={` mt-4 ${isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
              >
                <h5>Dirigido a:</h5>
                <h6>
                  <span style={{ color: "green", marginRight: "5px" }}>👥</span>
                  {subprograma.dirigido}
                </h6>
              </div>

              <div
                className={` row  ${isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
              >

                {/* Muestra nivel, metodología, etc. */}
                <div className="col-md-8 mt-4">
                  <h5>Metodología del Curso:</h5>
                  <h6>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Dirigido"
                    >
                      👨‍🏫
                    </span>
                    {subprograma.metodologia}
                  </h6>
                </div>

                <div
                  className={` col-md-4 mt-4 ${isDarkMode ? "dark-informacion-card" : "light-mode"
                    }`}
                >
                  <h5>Nivel:</h5>
                  <h6>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Dirigido"
                    >
                      ⬆️
                    </span>
                    {subprograma.nivel}
                  </h6>
                </div>
              </div>

              <div
                className={`mt-4 ${isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
              >
                <h5>Especialidad:</h5>
                <h6>
                  <span style={{ color: "green", marginRight: "5px" }}>✏️</span>
                  {subprograma.especialidad}
                </h6>
              </div>
              <div
                className={` mt-4 ${isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
              >
                <h5>Área de capacitación:</h5>
                <h6>
                  {" "}
                  <span style={{ color: "green", marginRight: "5px" }}>
                    👩‍💻
                  </span>{" "}
                  {subprograma.area}
                </h6>
              </div>

              {/* Muestra tabla de evaluación */}
              <div className="mt-4">
                <table className="table custom-table-style ">
                  <thead>
                    <tr>
                      <th
                        colSpan={3}
                        className={` text-center custom-th ${isDarkMode ? "dark-sistema" : "light-mode"
                          }`}
                      >
                        Sistema de Evaluación
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        K1
                      </td>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        Evaluación de conocimientos (aula)
                      </td>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        30%
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        2
                      </td>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        Evaluación de desempeño (Proyecto)
                      </td>
                      <td
                        className={`${isDarkMode ? "dark-sistema-contenido" : "light-mode"
                          }`}
                      >
                        70%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vermas;