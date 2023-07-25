import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Menu from "../../components/Navbar/Menu";
import "./CursosyProgramas.css";
import { programaTransversal } from "./Datos/programaTransversal";
import { programaPerfil } from "./Datos/programaPerfil";
import { programaEducar } from "./Datos/programaEducar";
import { programaDojo } from "./Datos/programaDojo";
import { programaOficio } from "./Datos/programaOficio";

const CursosyProgramas = () => {
  const [programaActivo, setProgramaActivo] = useState(null);
  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaDojo,
    programaOficio,
  ];
  const [mouseOverCard, setMouseOverCard] = useState(null);

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
  };

  return (
    <div>
      <Menu />

      <Helmet>
        <title>Cursos y Programas</title>
      </Helmet>

      <div className="container">
        <div className="button-container d-flex flex-wrap justify-content-center">
          {programas.map((programa) => (
            <button
              key={programa.id}
              className={`program-button btn btn-primary m-2 ${
                programaActivo === programa.id ? "active" : ""
              }`}
              onClick={() => handleProgramaClick(programa.id)}
            >
              {programa.nombre}
            </button>
          ))}
        </div>

        <div className="card-container row justify-content-center ">
          {programas.map(
            (programa) =>
              programaActivo === programa.id && (
                <div className="row" key={programa.id}>
                  {programa.subprogramas.map((subprograma, subIndex) => (
                    <div
                      key={subprograma.id}
                      className="col-md-3 mt-5 position-relative"
                      onMouseEnter={() => handleMouseEnter(subIndex)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="card p-0 position-relative h-100 d-flex flex-column ">
                        <img
                          src={subprograma.imagen}
                          alt={subprograma.nombre}
                          className={`card-img-top  ${
                            mouseOverCard === subIndex ? "img-darken" : ""
                          }`}
                        />
                        {mouseOverCard === subIndex && (
                          <p className="card-text mb-0 card-gratis-overlay">
                            GRATIS
                          </p>
                        )}
                        {/* <div className="programa-overlay">
                         <center><p>{programa.nombre}</p></center> 
                        </div> */}
                        <div className="card-body d-flex flex-column p-3">
                          <p className={`mb-0`} style={{ color: "plum" }}>
                            <strong style={{ color: "#bdc3c7" }}>
                              {subprograma.modalidad}
                            </strong>
                          </p>
                          <h5
                            className="card-title"
                            style={{ color: "#2c3e50" }}
                          >
                            <strong>{subprograma.nombre}</strong>
                          </h5>
                          <p
                            className="card-text card-text-small flex-grow-1"
                            style={{ color: "#525252" }}
                          >
                            {subprograma.texto}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                            <button className="btn btn-dark button-ver-mas">
                              VER MÁS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CursosyProgramas;
