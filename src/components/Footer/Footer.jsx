import React from 'react'
import logo from '../../img/CDT.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='body'>
      <div class="pt-5 border-bottom">
        <div class="row">
          <div class="col-md-3 col-sm-12 mb-3 text-center">
            <img className="logo" src={logo} />
          </div>
          <div class="d-flex col-md-9 col-sm-12">
            <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
              <h5 class="mb-4 font-weight-bold text-uppercase">Solutions</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../sales/sales-performance-market-pipeline.html">Sales</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="href=">Project Management</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../workforce/workforce-organization-management-hr.html">Workforce</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../e-commerce/e-commerce.html"> E-Commerce</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../finance/finance-accounting-erp.html">Finance</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../business-apps/business-apps.html">Business Apps</a></li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Developers</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://github.com/naologic">Open Source</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://stackshare.io/naologic">Technology</a></li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Company</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="../about-naologic.html">About</a></li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a" href="https://blog.naologic.com">Blog</a></li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Contacto</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a className="a" href="https://www.facebook.com/naologic/" target="_blank"><i class="fa fa-facebook mr-1"></i> Facebook</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a className="a" href="https://www.youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA" target="_blank"><i class="fa fa-youtube mr-1"></i> YouTube</a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-md-12">
            <div class="py-4 d-flex justify-content-center align-items-center">
              <a class="a mr-4" href="../privacy.html">Privacidad y términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
