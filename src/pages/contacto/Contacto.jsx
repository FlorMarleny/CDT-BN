import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from "../../components/Navbar/Menu";
const Contacto= () => {
  return (
    <div  className='container'>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <Menu />
      <h1>Contacto</h1>  
    </div>
  )
}

export default Contacto