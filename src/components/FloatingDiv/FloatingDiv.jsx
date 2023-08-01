import React from 'react'
import './FloatingDiv.css'
import thumbup from '../../img/courses.png';

const FloatingDiv = () => {
  return (
    <div className="floatingdiv">
      <div className="icon-with-text">
        <div className="icon">
          <img src={thumbup} />
        </div>
        <div className="text">
          <span> Cursos <br/> <strong> 100+ </strong> </span>
        </div>
      </div>
      <div className="centered-text">
        Con certificado
      </div>
    </div>
  )
}

export default FloatingDiv