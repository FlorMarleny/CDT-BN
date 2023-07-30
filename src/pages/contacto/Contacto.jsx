import React from 'react'
import { Helmet } from 'react-helmet';
import SechuraMap from "../../components/Maps/Sechura";
import PacasmayoMap from "../../components/Maps/Pacasmayo";
import TembladeraMap from "../../components/Maps/Tembladera";
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Form from "../../components/Formulario/Formulario";
import { useDarkMode } from "../../DarkModeContext";
import './Contacto.css';
import Footer from '../../components/Footer/Footer';

const Contacto = () => {
  const { isDarkMode } = useDarkMode();
  const phoneNumber = '953154791';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className='container'>
      <Helmet>
        <title>Contacto</title>
      </Helmet>

      <div className={`d-flex ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
        <div className='d-grid-maps'>
          <div className='map-container'>
            <h2 className='mb-4 title-dark '>Sech<span>ura</span></h2>
            <SechuraMap id="sechura-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker">
                  <FaMapMarkerAlt size={15} color='#fff' />
                </div>
                <span className="icon-text">Ca. Alcántara Navarro 488, Sechura, Sechura, Piura</span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail">
                  <FaEnvelope size={15} color='#fff' />
                </div>
                <span className="icon-text">cjuarezs@tecsup.edu.pe</span>
              </div>
            </div>
            <div className="mt-4 line-container">
              <div className="line"></div>
              <div className="star-container">
                <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#e8e8e8" d="M12 2l2.6 7.5h6.9l-5.5 4.2 2.6 7.5-6.6-5-6.6 5 2.6-7.5-5.5-4.2h6.9z" />
                </svg>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className='map-container'>
            <h2 className='mb-4 title-dark'>Pacas<span>mayo</span></h2>
            <PacasmayoMap id="pacasmayo-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker">
                  <FaMapMarkerAlt size={15} color='#fff' />
                </div>
                <span className="icon-text">Calle 02 de Mayo 88, Pacasmayo, La Libertad</span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail">
                  <FaEnvelope size={15} color='#fff' />
                </div>
                <span className="icon-text">cdt.tecsup.pacasmayo@gmail.com</span>
              </div>
            </div>
            <div className="mt-4 line-container">
              <div className="line"></div>
              <div className="star-container">
                <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#e8e8e8" d="M12 2l2.6 7.5h6.9l-5.5 4.2 2.6 7.5-6.6-5-6.6 5 2.6-7.5-5.5-4.2h6.9z" />
                </svg>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className='map-container'>
            <h2 className='mb-4 title-dark'>Tembl<span>adera</span></h2>
            <TembladeraMap id="tembladera-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker">
                  <FaMapMarkerAlt size={15} color='#fff' />
                </div>
                <span className="icon-text">Av. Miraflores 557, Tembladera, Cajamarca.</span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail">
                  <FaEnvelope size={15} color='#fff' />
                </div>
                <span className="icon-text">cdttembladera@hotmail.com</span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail">
                  <FaEnvelope size={15} color='#fff' />
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href={whatsappLink}>
                    Contactar por WhatsApp
                  </a>
                </span>
              </div>
            </div>





            <div className="mt-4 line-container">
              <div className="line"></div>
              <div className="star-container">
                <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#e8e8e8" d="M12 2l2.6 7.5h6.9l-5.5 4.2 2.6 7.5-6.6-5-6.6 5 2.6-7.5-5.5-4.2h6.9z" />
                </svg>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className='formulario'>
          <Form />
        </div>
      </div>

      {/* <Footer />  */}

    </div>



  )
}

export default Contacto