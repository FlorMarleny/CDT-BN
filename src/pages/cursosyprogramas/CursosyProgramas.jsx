import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from "../../components/Navbar/Menu";

const CursosyProgramasPage = () => {
  return (
    <div  className='container'>
      <Helmet>
        <title>Cursos y Programas</title>
      </Helmet>
      <Menu />
      <h1>Cursos y Programas</h1>  
    </div>
  )
}

export default CursosyProgramasPage
