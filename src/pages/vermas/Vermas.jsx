import React from "react";
import { useLocation } from "react-router-dom";

const Vermas = () => {
  const location = useLocation();
  const subprograma = location.state?.subprograma || null;

  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>{subprograma.nombre}</h2>
          <p>{subprograma.texto}</p>
          <p>Modalidad: {subprograma.modalidad}</p>
          <p>Horas Académicas: {subprograma.Horas}</p>
          {/* Agregar más detalles del subprograma aquí */}
          <h4>Descripción:</h4>
          <p>{subprograma.descripcion}</p>
          <h4>Contenido del Curso:</h4>
          <ul>
            <li>{subprograma.Contenido1}</li>
            <li>{subprograma.Contenido2}</li>
            <li>{subprograma.Contenido3}</li>
            <li>{subprograma.Contenido4}</li>
            <li>{subprograma.Contenido5}</li>
            <li>{subprograma.Contenido6}</li>
            <li>{subprograma.Contenido7}</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={subprograma.imagen} alt={subprograma.nombre} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Vermas;
