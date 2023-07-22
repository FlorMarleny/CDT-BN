// Slider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from '../../img/cdt-sechura.jpg';
import foto2 from '../../img/cdt-pacasmayo.jpg';
import foto3 from '../../img/cdt-tembladera.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Carousel infiniteLoop autoPlay interval={3000} showArrows={true}>
        <div>
          <img src={foto1 } alt="Imagen 1" />
          {/* <p className="legend">Imagen 1</p> */}
        </div>
        <div>
          <img src={foto2 } alt="Imagen 2" />
          {/* <p className="legend">Imagen 2</p> */}
        </div>
        <div>
          <img src={foto3 } alt="Imagen 3" />
          {/* <p className="legend">Imagen 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
