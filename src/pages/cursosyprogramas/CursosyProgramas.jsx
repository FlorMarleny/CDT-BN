import React from "react";
import { Helmet } from "react-helmet";
import "./CursosyProgramas.css";
import { useDarkMode } from "../../DarkModeContext";
// import { programaTransversal } from "./Datos/programaTransversal";
// import { programaPerfil } from "../Datos/programaPerfil";
// import { programaEducar } from "./Datos/programaEducar";
// import { programaDojo } from "./Datos/programaDojo";
// import { programaOficio } from "./Datos/programaOficio";
import imagenInfo from "../../img/profesores.webp";
import Footer from "../../components/Footer/Footer";

const CursosyProgramas = () => {
  const { isDarkMode } = useDarkMode();

  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaOficio,
    programaDojo,
  ];

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>Programas</title>
      </Helmet>
      <div className="contenedor">
        <div style={{ textAlign: "center", margin: "20px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2>PROG<span className="span">RAMAS</span></h2>
        </div>

        {/* PROGRAMAS */}
        <div className="card-container row justify-content-center">
          <div className="row">
            <a href="/todos-los-programas" style={{ textDecoration: "none", textAlign: "right" }}>Ver todos los programas</a>

            {programas.slice(0, 4).map((programa) => (
              <div
                className="col-md-3 mt-5 position-relative h-100"
                key={programa.id}
              >
                <div className="card p-0 position-relative h-100 d-flex flex-column">
                  {programa.subprogramas.slice(0, 1).map((subprograma) => (
                    <div key={subprograma.id} className="card-subprograma">
                      <img src={subprograma.imagen} alt={subprograma.nombre} className="card-img-top" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                      <p className="card-text mb-0 card-gratis-overlay">GRATIS</p>

                      <div className="card-body d-flex flex-column p-3">
                        <p className={`mb-0`} style={{ color: "plum" }}><strong style={{ color: "#bdc3c7" }}>{subprograma.modalidad}</strong></p>
                        <h5 className="card-title" style={{ color: "#2c3e50" }}><strong>{subprograma.nombre}</strong></h5>
                        <p className="card-text card-text-small flex-grow-1" style={{ color: "#525252" }}>{subprograma.texto}</p>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <button className="btn btn-dark button-ver-mas">Ver más</button>
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
        <div style={{ textAlign: "center", margin: "80px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* <h2>CUR<span>SOS</span></h2> */}
        </div>

        {/* Profesores */}

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img src={imagenInfo} alt="" className="img-fluid" style={{ width: "90%", height: "auto" }} />
          </div>
          <div className="col-md-6 mb-4">
            <div><h2>Los mejores profesores</h2></div>
            <div className="d-flex align-items-start mt-3 mb-1">
              <p className="fs-5">
                Contamos con los mejores profesionales del sector de la formación, encargados de crear el contenido de los cursos de nuestra plataforma junto a nuestros técnicos y desarrolladores.
              </p>
            </div>
            {/* <div className="d-flex align-items-start mb-1">
              <p className="fs-5">
                Los alumnos y los presentadores se pueden mover al frente de la
                clase.
              </p>
            </div>
            <div className="d-flex align-items-start mb-1">
              <p className="fs-5">
                Los profesores pueden ver fácilmente todos los estudiantes y los
                datos de la clase al mismo tiempo.
              </p>
            </div> */}

            <a className="btn btn-red mt-5" href="#" role="button">Empieza ya</a>

          </div>
        </div>


      </div>

      <Footer />

    </div>


  );
};

export default CursosyProgramas;
