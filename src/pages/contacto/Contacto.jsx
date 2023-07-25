import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from "../../components/Navbar/Menu";
import SechuraMap from "../../components/Maps/Sechura";



const Contacto= () => {

  return (
    <div  className='container'>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <Menu />
      <div className='d-grid'>
        <div className='' >
          <h3>Sechura</h3>
          <SechuraMap />
        </div>
      </div>
    </div>
  )
}

export default Contacto