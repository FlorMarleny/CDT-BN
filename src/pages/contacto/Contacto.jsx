import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from "../../components/Navbar/Menu";
import SechuraMap from "../../components/Maps/Sechura";
import PacasmayoMap from "../../components/Maps/Pacasmayo";
import TembladeraMap from "../../components/Maps/Tembladera";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Form from "../../components/Formulario/Form";
import './Contacto.css';



const Contacto = () => {

  return (
    <div className='container'>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <Menu />
      <div className='d-flex'>
        <div className='d-grid-maps'>
          <div className='map-container'>
            <h2 className='mb-4'>Sech<span>ura</span></h2>
            <SechuraMap id="sechura-map" />
            <div className='icon-container mt-5'>
              <div className='icon-with-text'>
                <FontAwesomeIcon icon={faMapPin} className='icon rounded-icon' />
                <span className='icon-text'>Ca. Alcántara Navarro 488, Sechura, Sechura, Piura</span>
              </div>

              <div className='icon-with-text'>
                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                <span className='icon-text'>cjuarezs@tecsup.edu.pe</span>
              </div>
            </div>

          </div>
          <div className='map-container'>
            <h2 className='mb-4'>Pacas<span>mayo</span></h2>
            <PacasmayoMap id="pacasmayo-map" />
          </div>
          <div className='map-container'>
            <h2 className='mb-4'>Tembl<span>adera</span></h2>
            <TembladeraMap id="tembladera-map" />
          </div>
        </div>
        <div className='formulario'>
          <Form />
        </div>
      </div>


    </div>
  )
}

export default Contacto