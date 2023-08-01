import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Vermas = () => {
  const location = useLocation();
  const subprograma = location.state?.subprograma || null;

  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <Helmet>
        <title>{subprograma.nombre}</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6">
          <h2>{subprograma.nombre}</h2>
          <p>{subprograma.texto}</p>
          <p>Modalidad: {subprograma.modalidad}</p>
          <p>Horas Académicas: {subprograma.horasAcademicas}</p>
          <h4>Descripción:</h4>
          <p>{subprograma.descripcion}</p>
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
