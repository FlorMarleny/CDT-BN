import React from "react";
import { Helmet } from "react-helmet";
import "./CursosyProgramas.css";
import { programaTransversal } from "./Datos/programaTransversal";
import { programaPerfil } from "./Datos/programaPerfil";
import { programaEducar } from "./Datos/programaEducar";
import { programaDojo } from "./Datos/programaDojo";
import { programaOficio } from "./Datos/programaOficio";
import linea from '../../img/Vector 3.png'
import imagenInfo from "../../img/imagenInfo.png";
import { FaChalkboardTeacher, FaUserFriends, FaTable } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const CursosyProgramas = () => {
  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaOficio,
    programaDojo,
  ];

  return (
    <div>
      <Helmet>
        <title>Cursos y Programas</title>
      </Helmet>
      <div>
        <div
          style={{
            textAlign: "center",
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>PROG<span className="span">RAMAS</span></h2>
          <img class="curved-line" src={linea} alt="Línea curvada"/>
          {/* <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>PROGRAMAS</h3> */}
          {/* <hr style={{ width: "20%", border: "1px solid black", marginLeft: "10px" }} /> */}
        </div>

        {/* PROGRAMAS */}
        <div className="card-container row justify-content-center">
          <div className="row">
            <a
              href="/todos-los-programas"
              style={{ textDecoration: "none", textAlign: "right" }}
            >
              Ver todos los programas
            </a>

            {programas.slice(0, 4).map((programa) => (
              <div
                className="col-md-3 mt-5 position-relative h-100"
                key={programa.id}
              >
                <div className="card p-0 position-relative h-100 d-flex flex-column">
                  {programa.subprogramas.slice(0, 1).map((subprograma) => (
                    <div key={subprograma.id} className="card-subprograma">
                      <img
                        src={subprograma.imagen}
                        alt={subprograma.nombre}
                        className="card-img-top"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />

                      <p className="card-text mb-0 card-gratis-overlay">
                        GRATIS
                      </p>

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
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <button className="btn btn-dark button-ver-mas">
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CURSOSSS */}
        <div
          style={{
            textAlign: "center",
            margin: "150px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>CUR<span>SOS</span></h2>
        </div>

        {/* INFORMACIÓN */}

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={imagenInfo}
              alt="Imagen"
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <div>
              <h2>Tecnología Educativa para una Experiencia Interactiva</h2>
            </div>
            <div className="d-flex align-items-start mb-3">
              <FaChalkboardTeacher size={48} className="me-3" />
              <p className="fs-5">
                Los profesores no se pierden en la vista de cuadrícula y tienen
                un espacio Podium dedicado.
              </p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <FaUserFriends size={48} className="me-3" />
              <p className="fs-5">
                Los alumnos y los presentadores se pueden mover al frente de la
                clase.
              </p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <FaTable size={48} className="me-3" />
              <p className="fs-5">
                Los profesores pueden ver fácilmente todos los estudiantes y los
                datos de la clase al mismo tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>

    
  );
};

export default CursosyProgramas;
