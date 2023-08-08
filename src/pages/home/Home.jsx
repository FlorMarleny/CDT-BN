import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from "../../DarkModeContext";
import portada from "../../img/portrait-young-man.png";
import portadaConFrases from "../../img/portada-con-frases.png";
import meta from '../../img/metas.png';
import FloatingDiv from '../../components/FloatingDiv/FloatingDiv';
import programasTransversales from "../../img/programas-transversales.png";
import programaPerfil from "../../img/programas-por-perfil.png";
import programaEducar from "../../img/programa-educar-f.png";
import programasOficio from "../../img/programas-de-oficio.png";
import proyectoDojo from "../../img/proyecto-dojo.png";
import empresa from "../../img/Pacasmayo3.png";
import pacasmayo from "../../img/banner-pacasmayo.jpg";
import fotoPacasmayo from "../../img/foto-pacasmayo.jpg";
import collage1 from "../../img/collage1.jpg";
import collage2 from "../../img/collage2.jpg";
import collage3 from "../../img/collage3.jpg";
import collage4 from "../../img/collage4.jpg";
import imagenT1 from "../../img/imagenT1.jpeg"
import imagenT2 from "../../img/imagenT2.jpeg"
import imagenT3 from "../../img/imagenT3.jpeg"
import imagenT4 from "../../img/imagenT4.jpeg"

import Footer from "../../components/Footer/Footer";

const opiniones = [
  {
    id: 1,
    name: "JOSÉ CARLOS ECHE LORO",
    image: imagenT1,
    rating: 5,
    opinion:
      "“Conocí el CDT en el 2019 cuando no me encontraba laborando y partir de ahí he llevado los cursos: Excel para Profesionales, Marketing Digital con Redes Sociales, Word Empresarial, Herramientas Colaborativas para la Educación, Excel Avanzado con Macros, Mi Primera Página con Google Sites, Introducción a la Informática y Ofimática Profesional. Actualmente laboro en el área de planillas de la Municipalidad Provincial de Sechura, utilizando todos los conocimientos adquiridos en el CDT”",
  },
  {
    id: 2,
    name: "ALEJANDRA CANCICO RUIZ",
    image: imagenT2,
    rating: 4,
    opinion: "“Llevé los cursos: Excel para Profesionales y Ofimática Profesional, los cuales me han ayudado para mejorar mi empleabilidad, aplicando lo aprendido en la actividad de automatización de inventario en la empresa donde laboraba. Actualmente me encuentro llevando el Programa de Seguridad y Salud en el Trabajo, el cual suma a las actividades realizadas en el área de seguridad industrial dentro de una empresa industrial donde laboro actualmente”",
  },
  {
    id: 3,
    name: "LUIS NAMOC INFANTE",
    image: imagenT3,
    rating: 3,
    opinion: "“En el año 2020, realicé los cursos Excel Básico, Excel para Profesionales y Word Empresarial, cuando aún era estudiante de la carrera técnica agropecuaria en el I.E.S.T.P. Carlos Malpica Rivarola. Los conocimientos adquiridos me permitieron fortalecer mis competencias técnicas digitales. Actualmente trabajo en una empresa industrial, como Técnico Agropecuario”",
  },
  {
    id: 4,
    name: "Henry Barboza",
    image: imagenT4,
    rating: 4,
    opinion: "“Soy Henry Barboza, docente de la I.E. Abilia Ocampo de Rioja. En este año cursé el Programa Educar. Los conocimientos adquiridos, sobre el uso de herramientas y técnicas digitales, me permitieron fortalecer mi perfil profesional, los cuales aplico con mis estudiantes de educación secundaria, dando un uso más efectivo al aula de innovación. Actualmente tengo el puesto de coordinador pedagógico en la Institución donde laboro”",
  },
];

const Testimonial = ({ name, image, rating, opinion }) => {
  return (
    <div className="testimonial-container">
      <img src={image} alt={name} className="user-image img-fluid" />
      <div className="user-rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>&#9733;</span>))}
      </div>
      <div className="user-content">
        <p className="user-name">{name}</p>
        <p className="user-opinion">{opinion}</p>
      </div>
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
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
{/* 
      <div className="contenedor row mb-5 p-2">
        <div className="col-md-6">
          <h1 className="display-1 fw-bold title">
            ¡No esperes más! Aprende <span className="text-gratuito ">gratis </span>y sé el mejor en tu campo
          </h1>

          <p>Actualiza tus habilidades y destaca en tu carrera.</p>

        </div>

        <div className="ocultar col-md-6">
          <img className="portada" src={portadaConFrases} alt="" style={{ width: "100%", height: "80vh", objectFit: "contain", margin: "0 auto" }} />
        </div>
      </div> */}

      <div className="contenedor row mb-5 p-2">
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
          <u>
            <a className="learnmore" href="#">
              Aprende más
            </a>
          </u>
        </div>

        <div className="ocultar col-md-6 mt-5">
          <div className="fondo" style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className="i-right col-md-6">
              <img
                className="portada"
                src={portada}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "29.5%",
                  objectFit: "contain",
                }}
              />

              <div style={{ marginTop: '14.75%', left: '162.25%' }}>
                <img style={{ maxWidth: '120px', height: "auto" }} src={meta} />
              </div>
              <div style={{ top: '13rem', left: '17.7%' }}>
                <FloatingDiv />
              </div>
            </div>
            {/* Agregar fondo debajo de la imagen */}
            <div
              className="background-div"
              style={{
                position: 'absolute',
                top: '18rem',
                left: '6.5rem',
                width: '80%',
                height: '36%', // Ajusta esta altura según tus necesidades
                background: '#bbdefb',
              }}
            ></div>
            <div
              className="background-div"
              style={{
                position: 'absolute',
                top: '17.25rem',
                left: '1.8rem',
                width: '7.5%', // Ajusta el ancho según tus necesidades
                paddingBottom: '7.5%', // Crea un círculo estableciendo el mismo valor de ancho y alto
                background: '#2196f3',
                borderRadius: '50%',
              }}
            ></div>
          </div>
        </div>
      </div>


      {/* Categorías principales */}
      <div className="color-fondo">
        <div className="mt-5 contenedor">
          <h2 className={` mb-4`}>Nuestros <span> programas</span></h2>
          <div className="d-programas">
            <div className="header-container h-50">
              <img src={programasTransversales} alt="" className="header-image" />
              <div className="header-text">Programas transversales</div>
            </div>

            <div className="header-container h-50">
              <img src={programaPerfil} alt="" className="header-image" />
              <div className="header-text">Programas por perfil</div>
            </div>

            <div className="header-container h-50">
              <img src={programaEducar} alt="" className="header-image" />
              <div className="header-text">Programa educar</div>
            </div>

            <div className="header-container h-50">
              <img src={programasOficio} alt="" className="header-image" />
              <div className="header-text">Programas de oficio</div>
            </div>

            <div className="header-container h-50">
              <img src={proyectoDojo} alt="" className="header-image img-fluid" />
              <div className="header-text">Proyecto Dojo</div>
            </div>
          </div>
        </div>
      </div>

      {/* COLLAGE DE EXPERIENCIAS */}

      <div className="contenedor mt-4">
        <h2 className="mb-4">Una experiencia, <span> un recuerdo</span></h2>
        <div className="row">
          <div className="col-md-6">
            <img src={collage1} alt="" className="efecto-hover img-fluid h-100 w-100" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <img src={collage2} alt="" className="efecto-hover img-fluid w-100 mb-3" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={collage3} alt="" className="efecto-hover img-fluid w-100" />
              </div>
              <div className="col-md-6">
                <img src={collage4} alt="" className="efecto-hover img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner de gracias */}

      <aside className="responsive-banner first">
        <div className="contenedor container-envelope">
          <svg className="svg cirle-a img" height="160" width="160">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg className="svg cirle-b img" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <svg className="svg cirle-c img" height="600" width="600">
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg className="svg cirle-d img" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <img className="w-25 img-with-overlay" src={pacasmayo} />
          <img className="w-25 img-with-overlay" src={fotoPacasmayo} />
          <div className="col-xs-12">
            <img src={empresa} alt="Logo de la Empresa" id="logo" />
            <p className="mt-3 gracias" >Un agradecimiento especial a <strong>Cementos Pacasmayo S.A.A.</strong> <br />  por su compromiso con la educación y el desarrollo personal.</p>
            <a className="more-link" target="_blank" href="https://www.cementospacasmayo.com.pe/">Conocenos aún más</a>
          </div>
        </div>
      </aside>

      {/* Carrusel de opiniones */}
      <Container>
        <h2 className="text-center mb-4">El poder de la educación gratuita<span></span></h2>
        <div style={{ maxWidth: "auto", margin: "0 auto" }} className="w-75 ">
          <p className="text-center"> En este espacio, compartimos testimonios inspiradores de estudiantes que han transformado sus vidas gracias a cursos y capacitaciones sin costo. A través del acceso igualitario a la educación, han superado barreras y alcanzado sus metas.</p>
        </div>
        <Row className="mt-5 my-4">
          <Col sm={12} className="mx-auto">
            <div style={{ maxWidth: "auto", margin: "0 auto" }}>
              <Slider {...settings} className="testimonial-slider ">
                {opiniones.map((testimonial) => (
                  <div key={testimonial.id}>
                    <Testimonial {...testimonial} />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
          <a className="w-25 m-auto btn bg-btn mt-4" href="/programas" role="button">Empieza ya</a>
        </Row>



      </Container>
      <Footer />
    </div>
  );
};

export default Home;