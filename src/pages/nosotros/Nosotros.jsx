import React from 'react'
import './Nosotros.css'
import { Helmet } from 'react-helmet';
import Slider from '../../components/Slider/Slider';

const Nosotros = () => {
  return (
    <div>
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      <Slider />
    </div>
  )
}

export default Nosotros
