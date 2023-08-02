import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Vermas.css";

const Vermas = () => {
  const location = useLocation();
  const subprograma = location.state?.subprograma || null;

  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  }

  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>{subprograma.nombre}</h2>
          <p>Modalidad: {subprograma.modalidad}</p>
          <p>Horas Académicas: {subprograma.horasAcademicas}</p>
          <h4>Descripción:</h4>
          <p>{subprograma.descripcion}</p>
          <h4>Contenidos:</h4>

          <ul>
            {subprograma.contenido1 && (
              <li>
                <button
                  className={`tab-button ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                >
                  {subprograma.contenido1[0]}
                </button>
                {activeTab === 1 && (
                  <ul className="tab-content">
                    {subprograma.contenido1[1].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            {subprograma.contenido2 && (
              <li>
                <button
                  className={`tab-button ${activeTab === 2 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 3 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 4 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 5 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 6 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 7 ? "active" : ""}`}
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
              <li>
                <button
                  className={`tab-button ${activeTab === 8 ? "active" : ""}`}
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

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={subprograma.imagen}
            alt={subprograma.nombre}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Vermas;
