// Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Siempre apostando por una educación con calidad</h1>

          <p>
            brindamos oportunidades de capacitación a la poblacion de manera{" "}
            <strong>GRATUITA</strong>{" "}
          </p>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Busque nuestros más de 15 cursos"
              aria-label="Buscar"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Explorar
            </button>
          </div>

          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
          >
            APRENDE MÁS
          </a>
        </div>

        <div className="col-md-6">
          <img
            src=""
            alt="Imagen"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
