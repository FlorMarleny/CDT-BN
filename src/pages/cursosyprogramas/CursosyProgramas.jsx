import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Menu from "../../components/Navbar/Menu";
import "./CursosyProgramas.css";
// import { programas } from "./data";
import { programaTransversal } from "./Datos/programaTransversal";
import { programaPerfil } from "./Datos/programaPerfil";
import { programaEducar } from "./Datos/programaEducar";
import { programaDojo } from "./Datos/programaDojo";
import { programaOficio } from "./Datos/programaOficio";

const CursosyProgramas = () => {
  const [programaActivo, setProgramaActivo] = useState(null);
  const [mouseOverImage, setMouseOverImage] = useState(false);
  const programas = [
    programaTransversal,
    programaPerfil,
    programaEducar,
    programaDojo,
    programaOficio,
  ];

  const handleMouseEnter = () => {
    setShowGratis(true);
    setMouseOverImage(true);
  };

  const handleMouseLeave = () => {
    setShowGratis(false);
    setMouseOverImage(false);
  };

  const handleProgramaClick = (programaId) => {
    if (programaActivo === programaId) {
      setProgramaActivo(null);
    } else {
      setProgramaActivo(programaId);
    }
  };

  const [showGratis, setShowGratis] = useState(false);

  return (
    <div>
      <Menu />

      <Helmet>
        <title>Cursos y Programas</title>
      </Helmet>

      <div className="container">
        <h1 className="text-center">Cursos y Programas</h1>
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

        <div className="card-container row justify-content-center">
          {programas.map(
            (programa) =>
              programaActivo === programa.id && (
                <div className="row" key={programa.id}>
                  {programa.subprogramas.map((subprograma) => (
                    <div
                      key={subprograma.id}
                      className="col-md-3 mt-5 position-relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="card p-0 position-relative h-100 d-flex flex-column">
                        <img
                          src={subprograma.imagen}
                          alt={subprograma.nombre}
                          className={`card-img-top ${
                            mouseOverImage ? "img-darken" : ""
                          }`}
                        />
                        {showGratis && mouseOverImage && (
                          <p className={`card-text mb-0 card-gratis-overlay`}>
                            GRATIS
                          </p>
                        )}
                        <div className="card-body d-flex flex-column">
                          <p className={`mb-0`}>{subprograma.modalidad}</p>
                          <h5 className="card-title">{subprograma.nombre}</h5>
                          <p className="card-text card-text-small flex-grow-1">
                            {subprograma.texto}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-primary button-ver-mas">
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