import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
<<<<<<< HEAD
import "./Desplazamiento.css";
// import "../Clickear/Desplazamiento.css"
=======

import "./Desplazamiento.css";

>>>>>>> c643812267fb0612635d92124c42c30d8449544c
const Desplazamiento = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsScrollVisible(true);
    } else {
      setIsScrollVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Contenido de tu componente aquí */}

      {isScrollVisible && (
        <div className="scroll-button" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default Desplazamiento;