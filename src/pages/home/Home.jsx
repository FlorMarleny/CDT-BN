import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { useDarkMode } from "../../DarkModeContext";
import imagenPO from "../../img/img1.jpeg";
import imagenP from "../../img/img2.jpeg";
// import portada from "../../img/img3.jpeg";
import portada from "../../img/portrait-young-man.png";
import empresa from "../../img/Pacasmayo3.png";
import pacasmayo from "../../img/banner-pacasmayo.jpg";
import imagenCursos from "../../img/img4.jpeg";

import collage1 from "../../img/collage1.jpg";
import collage2 from "../../img/collage2.jpg";
import collage3 from "../../img/collage3.jpg";
import collage4 from "../../img/collage4.jpg";
import userImage1 from "../../img/imagenCursos.jpg";
import meta from '../../img/metas.png';
import ahorro from '../../img/ahorro.png';
import web from '../../img/web.png';
import FloatingDiv from '../../components/FloatingDiv/FloatingDiv';

import Footer from "../../components/Footer/Footer";



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
      <span className="arrow">&#8592;</span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow">&#8594;</span>
    </div>
  );
};

const Home = () => {
  const { isDarkMode } = useDarkMode();

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
    <div className={`home-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <div className={`row mb-5 ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
        <div className="col-md-6">
          <h1 className="display-1 fw-bold title">
            Siempre apostando por una{" "}
            <span className="resaltar">educación</span> con{" "}
            <span className="resaltar">calidad</span>
          </h1>

          <p>
            Brindamos oportunidades de capacitación a la población de manera{" "}
            <strong className="text-gratuito">GRATUITA</strong>{" "}
          </p>

          <div className="input-group mb-3" style={{ maxWidth: "385px" }}>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Busque nuestros más de 15 cursos"
              aria-label="Buscar"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Explorar
            </button>
          </div>

          {/* Enlace "APRENDE MÁS" */}
          <u><a className="learnmore"
            href="#"
          >
            Aprende más
          </a></u>
        </div>

        <div className="col-md-6 mt-5">
          <div className="fondo">
            <div className="i-right col-md-6">
              <img className="portada"
                src={portada}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "29.5%",
                  
                  objectFit: "contain", // Establece la propiedad object-fit para asegurarte de que la imagen se ajuste correctamente dentro del contenedor
                }}
              />

              <div style={{ marginTop: '14.75%', left: '162.25%' }}>
                <img style={{ maxWidth: '120px', height: "auto" }} src={meta} />
              </div>
              <div style={{ top: '13rem', left: '17.7%' }}>
                <FloatingDiv />
              </div>
              <div className="blur" style={{ background: "#ffffff" }}></div>
              <div
                className="blur"
                style={{
                  background: '#ffffff',
                  top: '17rem',
                  width: '21rem',
                  height: '11rem',
                  left: '-9rem',
                }}
              ></div>
            </div>
            {/* Agregar fondo debajo de la imagen */}
            <div
              className="background-div"
              style={{
                position: 'absolute',
                top: '18rem',
                left: '7rem',
                width: '80%',
                height: '168px', // Ajusta esta altura según tus necesidades
                background: '#bbdefb', // Gradiente de color de fondo
              }}
            ></div>
            <div
              className="background-div"
              style={{
                position: 'absolute',
                top: '17rem',
                left: '1.75rem',
                width: '48.01px',
                height: '47.88px', // Ajusta esta altura según tus necesidades
                background: '#2196f3', // Gradiente de color de fondo
                borderRadius: '50%', // Hace que el fondo sea circular
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* imágenes */}
      <div className={`row mb-5 ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
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

      {/* COLLAGE */}
      <h2 className="mb-4">Nuestras<span> experiencias</span></h2>
      <div className={`row ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
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

      <aside className="responsive-banner first">
        <div className="container-envelope">
          <svg className="cirle-a img" height="160" width="160">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg className="cirle-b img" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <svg className="cirle-c img" height="600" width="600">
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg className="cirle-d img" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <img className="imagen" src={pacasmayo} />
          <div className="col-xs-12">
            <img src={empresa} alt="Logo de la Empresa" id="logo" />
            <p className="" >Gracias a <strong>Cementos Pacasmayo</strong> S.A.A.</p>
            <a className="more-link" target="_blank" href="https://www.cementospacasmayo.com.pe/">Ven a visitarnos</a>
          </div>
        </div>
      </aside>

      {/* Carrusel de opiniones */}
      <Container>
        <h2 className="text-center mt-5 mb-4">Testi<span>monios</span></h2>
        <Row className="my-4">
          <Col sm={12} className="mx-auto">
            <div style={{ maxWidth: "auto", margin: "0 auto" }} className={`${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
              <Slider {...settings} className="testimonial-slider ">
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

      <Footer />



    </div>




  );
};

export default Home;