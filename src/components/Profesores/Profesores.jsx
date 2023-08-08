import React from 'react'
import './Profesores.css'
import imagenInfo from "../../img/profesores.webp";
const Profesores = () => {
    return (
        <div className='contenedor'>
            {/* Profesores */}

            <div className="row align-items-center">
                <div className="col-md-6 mb-4">
                    <img src={imagenInfo} alt="" className="img-fluid" style={{ width: "90%", height: "auto" }} />
                </div>
                <div className="col-md-6 mb-4">
                    <div>
                        <h2>Los mejores profesores</h2>
                    </div>
                    <div className="d-flex align-items-start mt-3 mb-1">
                        {/* <p className="fs-5">
                            Contamos con los mejores profesionales del sector de la formación, encargados de crear el contenido de los cursos de nuestra plataforma junto a nuestros técnicos y desarrolladores.
                        </p> */}
                        <p>
                        Estos servicios son brindados por profesionales especializados de TECSUP.
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
    )
}

export default Profesores
