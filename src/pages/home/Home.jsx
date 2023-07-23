import React from 'react'
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import "./Home.css"
import imagenPO from "../../img/img1.jpeg";
import imagenP from "../../img/img2.jpeg";
import portada from "../../img/img3.jpeg";
import imagenCursos from "../../img/img4.jpeg";


const Home = () => {

  const testimonials = [
    {
      id: 1,
      name: "Juan Perez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "¡Excelente servicio! Los cursos me han sido de gran ayuda.",
    },
    {
      id: 2,
      name: "María Gómez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "Recomiendo completamente esta plataforma de educación.",
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "Las oportunidades de aprendizaje son inigualables.",
    },
    {
      id: 4,
      name: "Juan Perez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "¡Excelente servicio! Los cursos me han sido de gran ayuda.",
    },
    {
      id: 5,
      name: "María Gómez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "Recomiendo completamente esta plataforma de educación.",
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      imagen: imagenP,
      calificacion: 5,
      testimonial: "Las oportunidades de aprendizaje son inigualables.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar tres opiniones por columna
    slidesToScroll: 1,
    autoplay: true, // Habilitar el autoplay para que el carrusel se mueva automáticamente
    autoplaySpeed: 3000, // Establecer el intervalo de tiempo entre transiciones (3 segundos en este caso)
  };


  return (
    <div className="container">
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <div className="row mb-5 mt-5 ">
        <div className="col-md-6">
          <h1 className="display-1 fw-bold title">
            Siempre apostando por una <span className='resaltar'>educación</span>  con <span className='resaltar'>calidad</span>
          </h1>

          <p>
            Brindamos oportunidades de capacitación a la población de manera{" "}
            <strong className="text-danger">GRATUITA</strong>{" "}
          </p>

          <div className="input-group mb-3" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Busque nuestros más de 15 cursos"
              aria-label="Buscar"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-danger"
              type="button"
              id="button-addon2"
            >
              Explorar
            </button>
          </div>

          {/* Enlace "APRENDE MÁS" */}
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
            src={portada}
            alt="Imagen 1"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Nueva fila para las imágenes */}
      <div className="row mb-5">
        <div className="col-md-4">

          <div className="header-container h-100 ">
            <img
              src={imagenP}
              alt="ImagenP"
              className="header-image img-fluid"
            />
            <div className="header-text">PROGRAMAS DE PERFIL</div>
          </div>

        </div>

        <div className="col-md-4">
          <div className="header-container h-100">
            <img
              src={imagenCursos}
              alt="ImagenCursos"
              className="header-image img-fluid"
            />
            <div className="header-text">CURSOS</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="header-container h-100">
            <img
              src={imagenPO}
              alt="ImagenPO"
              className="header-image img-fluid"
            />
            <div className="header-text">PROGRAMAS DE OFICIO</div>
          </div>
        </div>
      </div>

      {/* Nueva fila para el carrusel de opiniones */}
      <div className="row">
        <div className="col">
          <h2>Testimonios</h2>
          <Slider {...settings}>
            {testimonials.map((testimonio) => (
              <div key={testimonio.id} className="testimonial card border-secondary">
                <div className="testimonial-img card-img-top d-flex justify-content-center align-items-center">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="testimonial-rating card-body text-center">
                  {Array.from({ length: testimonio.calificacion }).map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>
                <div className="testimonial-text card-footer">
                  <p className="testimonial-quote">-{testimonio.testimonial}"</p>
                  <p className="fw-bold">- {testimonio.nombre}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Home
