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
          <p>{subprograma.texto}</p>
          <p>Modalidad: {subprograma.modalidad}</p>
          <p>Horas Académicas: {subprograma.horasAcademicas}</p>
          <h4>Descripción:</h4>
          <p>{subprograma.descripcion}</p>
          <h4>Contenidos:</h4>
          
          <ul>
            {subprograma.contenido1 && (
              <li>
                <button onClick={() => handleTabClick(1)}>
                  {subprograma.contenido1[0]}
                </button>
                {activeTab === 1 && (
                  <ul>
                    {subprograma.contenido1[1].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            {subprograma.contenido2 && (
              <li>
                <button onClick={() => handleTabClick(2)}>
                  {subprograma.contenido2[0]}
                </button>
                {activeTab === 2 && (
                  <ul>
                    {subprograma.contenido2[1].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            {/* Repite el patrón para los demás contenidos */}
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
