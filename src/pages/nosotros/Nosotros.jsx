import React from 'react'
import './Nosotros.css'
import { Helmet } from 'react-helmet';
import Slider from '../../components/Slider/Slider';
import Menu from "../../components/Navbar/Menu";
import Historia from "../../components/Historia/Historia";
import Mision from "../../components/Mision-Vision/Mision";

const Nosotros = () => {
  return (
    <div className='container' >
      <Menu />
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      <Slider />
      <Historia />
      <Mision />
      
    </div>
  )
}

export default Nosotros
