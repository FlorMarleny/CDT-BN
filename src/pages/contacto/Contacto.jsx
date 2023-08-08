import React from 'react'
import { Helmet } from 'react-helmet';
import SechuraMap from "../../components/Maps/Sechura";
import PacasmayoMap from "../../components/Maps/Pacasmayo";
import TembladeraMap from "../../components/Maps/Tembladera";
import Form from "../../components/Formulario/Formulario";
import { useDarkMode } from "../../DarkModeContext";
import './Contacto.css';
import Footer from '../../components/Footer/Footer';

const Contacto = () => {
  const { isDarkMode } = useDarkMode();
  const phoneNumberSechura = '978857009';
  const phoneNumberPacasmayo = '978852534';
  const phoneNumberTembladera = '942022688';
  const whatsappLinkSechura = `https://wa.me/${phoneNumberSechura}`;
  const whatsappLinkPacasmayo = `https://wa.me/${phoneNumberPacasmayo}`;
  const whatsappLink = `https://wa.me/${phoneNumberTembladera}`;

  return (
    <div className={`${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      {/* Banner para incentivar contacto */}
      <div className="w-100 banner-contacto">
        <div className="contenedor .banner-contenido">
          <div className="texto">
            <h2 className='text-light text-center'>¡Hey! Si tienes dudas, comentarios, envíanos un mensaje <strong>ahora mismo</strong></h2>
          </div>
        </div>
      </div>
      <div className={`mt-5 contenedor d-flex ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
        <div className='d-grid-maps'>
          <div className='map-container'>
            <h3 className='mb-4 title-dark '>Sech<span>ura</span></h3>
            <SechuraMap id="sechura-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker bg-marker">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-share" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg>
                </div>

                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/place/Centro+de+Difusi%C3%B3n+de+Tecnolog%C3%ADa+(CDT)+-+Sechura/@-5.556486,-80.8260451,17z/data=!3m1!4b1!4m6!3m5!1s0x9049879e7c835f27:0xeea45944a02d8f0d!8m2!3d-5.5564913!4d-80.8234702!16s%2Fg%2F11hdkz24_k?entry=ttu'>Ca. Alcántara Navarro 488, Sechura, Sechura, Piura</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail bg-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-meta" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
                    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://web.facebook.com/CDTSechura'>Centro de Difusión de Tecnología - Sechura</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-number bg-number">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href={whatsappLinkSechura}>+51 978 857 009</a>
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
          <div className='map-container'>
            <h3 className='mb-4 title-dark'>Pacas<span>mayo</span></h3>
            <PacasmayoMap id="pacasmayo-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker bg-marker">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-share" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/search/Calle+02+de+Mayo+88,+Pacasmayo,+La+Libertad/@-7.4057488,-79.5862488,14z/data=!3m1!4b1?entry=ttu'>Calle 02 de Mayo 88, Pacasmayo, La Libertad</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail bg-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-meta" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
                    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://web.facebook.com/CdtTecsup'>Centro de Difusión de Tecnología - Pacasmayo</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-number bg-number">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href={whatsappLinkPacasmayo}>+51 978 852 534</a>
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
          <div className='map-container'>
            <h3 className='mb-4 title-dark'>Tembl<span>adera</span></h3>
            <TembladeraMap id="tembladera-map" />
            <div className="icon-container mt-5">
              <div className="icon-with-text">
                <div className="icon-marker bg-marker">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-share" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg>
                </div>
                <span className="icon-text ">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/place/CDT+Tembladera/@-7.2550658,-79.1349029,17z/data=!3m1!4b1!4m6!3m5!1s0x91b2c6e787e30caf:0xdf63223d9d0a6b4f!8m2!3d-7.2550711!4d-79.132328!16s%2Fg%2F11gcz3798c?entry=ttu'>Av. Miraflores 557, Tembladera, Cajamarca</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-mail bg-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-meta" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
                    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href='https://web.facebook.com/CDTTembladera'>Centro de Difusión de Tecnología - Tembladera</a>
                </span>
              </div>
              <div className="icon-with-text">
                <div className="icon-number bg-number">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </div>
                <span className="icon-text">
                  <a className="whatsapp-button" target="_blank" rel="noopener noreferrer" href={whatsappLink}>+51 942 022 688</a>
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

      <Footer />

    </div>



  )
}

export default Contacto