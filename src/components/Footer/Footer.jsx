import React from 'react'
import logo from '../../img/CDT.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='body'>
        <div className="pt-5 border-bottom">
            <div className="row">
                <div className="col-md-3 col-sm-12 mb-3 text-center">
                    <img className="logo" src={logo} />
                </div>
                <div className="d-flex col-md-9 col-sm-12">
                    <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 footer-column">
                        <h5 className="mb-4 font-weight-bold text-uppercase">Inicio</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../sales/sales-performance-market-pipeline.html">Sales</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="href=">Project Management</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../workforce/workforce-organization-management-hr.html">Workforce</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../e-commerce/e-commerce.html"> E-Commerce</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../finance/finance-accounting-erp.html">Finance</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../business-apps/business-apps.html">Business Apps</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 footer-column">
                        <h5 className="mb-4 font-weight-bold text-uppercase">Nosotros</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://github.com/naologic">Historia</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://stackshare.io/naologic">Misión y Visión</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 footer-column">
                        <h5 className="mb-4 font-weight-bold text-uppercase">Cursos y Programas</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../about-naologic.html">Programas</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://blog.naologic.com">Cursos</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 footer-column">
                        <h5 className="mb-4 font-weight-bold text-uppercase">Contacto</h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                <a className="a" href="https://www.facebook.com/naologic/" target="_blank"><i className="fa fa-facebook mr-1"></i> Facebook</a>
                            </li>
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                <a className="a" href="https://www.youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA" target="_blank"><i className="fa fa-youtube mr-1"></i> YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="py-4 d-flex justify-content-center align-items-center">
                        <a className="a mr-4" href="../privacy.html">Privacidad y términos</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
