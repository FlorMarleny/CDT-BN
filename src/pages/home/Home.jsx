import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../App.css";
import "./Home.css";
import Menu from "../../components/Navbar/Menu";
import imagenPO from "../../img/img1.jpeg";
import imagenP from "../../img/img2.jpeg";
import portada from "../../img/img3.jpeg";
import imagenCursos from "../../img/img4.jpeg";

import collage1 from "../../img/collage1.jpg";
import collage2 from "../../img/collage2.jpg";
import collage3 from "../../img/collage3.jpg";
import collage4 from "../../img/collage4.jpg";
import userImage1 from "../../img/imagenCursos.jpg";
const opiniones = [
  {
    id: 1,
    name: "Juan Perez",
    image: userImage1,
    rating: 5,
    opinion: "¡Excelente servicio! Los cursos me han sido de gran ayuda.",
  },
  {
    id: 2,
    name: "María Gómez",
    image: userImage1,
    rating: 4,
    opinion: "Recomiendo completamente esta plataforma de educación.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: userImage1,
    rating: 3,
    opinion: "Las oportunidades de aprendizaje son inigualables",
  },
  {
    id: 4,
    name: "Juan Perez",
    image: userImage1,
    rating: 4,
    opinion: "¡Excelente servicio! Los cursos me han sido de gran ayuda.",
  },

  {
    id: 5,
    name: "María Gómez",
    image: userImage1,
    rating: 4,
    opinion: "Recomiendo completamente esta plataforma de educación.",
  },

  {
    id: 6,
    name: "Carlos Rodriguez",
    image: userImage1,
    rating: 4,
    opinion: "Las oportunidades de aprendizaje son inigualables.",
  },
];

const Testimonial = ({ name, image, rating, opinion }) => {
  return (
    <div className="testimonial-container">
      <img src={image} alt={name} className="user-image img-fluid" />

      <div className="user-rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      <p className="user-opinion">{opinion}</p>
      <p className="user-name">{name}</p>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span>&#8592;</span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span>&#8594;</span>
    </div>
  );
};

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Menu />

      <Helmet>
        <title>Inicio</title>
      </Helmet>

      <div className="row mb-5">
        <div className="col-md-6">
          <h1 className="display-1 fw-bold title">
            Siempre apostando por una{" "}
            <span className="resaltar">educación</span> con{" "}
            <span className="resaltar">calidad</span>
          </h1>

          <p>
            Brindamos oportunidades de capacitación a la población de manera{" "}
            <strong className="text-danger">GRATUITA</strong>{" "}
          </p>

          <div className="input-group mb-3" style={{ maxWidth: "360px" }}>
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

      {/* imágenes */}
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

      {/* Carrusel de opiniones */}
      <Container>
        <h2 className="text-center">Testimonios</h2>
        <Row className="my-4">
          <Col sm={12} className="mx-auto">
            <div style={{ maxWidth: "auto", margin: "0 auto" }}>
              <Slider {...settings} className="testimonial-slider">
                {opiniones.map((testimonial) => (
                  <div key={testimonial.id}>
                    <Testimonial {...testimonial} />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      {/* COLLAGE */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={collage1}
            alt="Imagen 1"
            className="img-fluid h-100 w-100 "
          />
        </div>

        <div className="col-md-6">
          <div className="row  ">
            <div className="col-md-12">
              <img
                src={collage2}
                alt="Imagen 2"
                className="img-fluid w-100 mb-3"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={collage3} alt="Imagen 3" className="img-fluid w-100" />
            </div>
            <div className="col-md-6">
              <img src={collage4} alt="Imagen 4" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
