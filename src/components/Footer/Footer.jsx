import React from 'react'
// import logoTextBl from "../../img/CDT.png";
// import logoTextBn from '../../img/CDT-light.png'
import pacasmayoBL from "../../img/Pacasmayo Color.png";
import pacasmayoBN from "../../img/Pacasmayo2.png";
import { useDarkMode } from "../../DarkModeContext";

import './Footer.css'

const Footer = () => {

    const { isDarkMode } = useDarkMode();

    return (
        <footer className={`mt-5 color-fondo ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
            <div className="contenedor pt-5 border-bottom">
                <div className="row">
                    <div className="col-md-3 col-12 mb-3 text-center logo-contenedor">
                        <img src={isDarkMode ? pacasmayoBN : pacasmayoBL} alt="" width='180px' id="logoPacasmayo" />
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-6 p-0 mb-3">
                                <h5 className="mb-4">Inicio</h5>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="../sales/sales-performance-market-pipeline.html">Nuestras experiencias</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="href=">Testimomios</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 p-0 mb-3">
                                <h5 className="mb-4">Nosotros</h5>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://github.com/naologic">Historia</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://stackshare.io/naologic">Misión y Visión</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-3 p-0">
                                <h5 className="mb-4">Programas</h5>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="../about-naologic.html">Transversales</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://blog.naologic.com">Por perfil</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://blog.naologic.com">Educar</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://blog.naologic.com">Dojo</a></li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="al" href="https://blog.naologic.com">De oficio</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-3 p-0">
                                <h5 className="mb-4">Contacto</h5>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                        <a className="al" href="https://www.facebook.com/naologic/" target="_blank"><i className="fa fa-facebook mr-1"></i> Facebook</a>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                        <a className="al" href="https://www.youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA" target="_blank"><i className="fa fa-youtube mr-1"></i> YouTube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="py-4 d-flex justify-content-center align-items-center">
                            <p className="copy-right mr-4">&copy; 2023 Tecsup. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
