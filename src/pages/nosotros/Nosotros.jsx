import React, {useContext} from 'react'
import './Nosotros.css'
import { Helmet } from 'react-helmet';
import Slider from '../../components/Slider/Slider';
import Menu from "../../components/Navbar/Menu";
import Historia from "../../components/Historia/Historia";
import Mision from "../../components/Mision-Vision/Mision";
import Footer from '../../components/Footer/Footer';

const Nosotros = () => {



  return (
    <div className='' >
      
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      <Slider />
      <Historia />
      <Mision />

      <Footer />
      
    </div>
  )
}

export default Nosotros
