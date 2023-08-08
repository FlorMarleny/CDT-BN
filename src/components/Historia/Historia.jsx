import React from 'react'
import './Historia.css'
import foto1 from '../../img/cdt-sechura.jpg'

const Historia = () => {
    return (
        <section className='mt-4' style={{ padding: '1rem' }}>
            <h2>Explorando nuestra <span>Historia</span></h2>
            <div className='d-grid bg-gris'>
                <div style={{ marginBottom: '0rem' }}>
                    <p>Desde el año 2003 en Pacasmayo, 2007 en Tembladera y 2015 en Sechura, se han aperturado estos centros de estudio, para brindar oportunidades de capacitación a la población de manera gratuita, contribuyendo de esta forma en acortar las brechas en el uso de las nuevas herramientas de tecnología de la información.
                        <br /> <br />
                        Los CDT brindan capacitación sobre uso y aplicaciones de las herramientas de Microsoft office, mantenimiento y diagnóstico de computadoras, autocad, programas lúdicos para niños, programas de diseño; para ello cuenta con equipos modernos y de últimas generación que permita brindar el mejor servicio a estudiantes, docentes, comuneros y población en general.
                        <br /> <br />
                        Estos servicios son brindados por profesionales especializados de TECSUP.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0rem' }}>
                    <img className='imagenHistoria' src={foto1} alt="Centros de Difusión" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </section>


    )
}

export default Historia
