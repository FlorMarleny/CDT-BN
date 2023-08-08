import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from '../../components/Slider/Slider';
import { useDarkMode } from "../../DarkModeContext";
import Historia from "../../components/Historia/Historia";
import Mision from "../../components/Mision-Vision/Mision";
import Profesores from "../../components/Profesores/Profesores";
import Estudiantes from '../../components/Estudiantes/Estudiantes';
import Footer from '../../components/Footer/Footer';

const Nosotros = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`} >
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      <Slider />
      <Historia />
      <Mision />
      <Estudiantes />
      <Profesores />
      <Footer />
    </div>
  )
}

export default Nosotros
