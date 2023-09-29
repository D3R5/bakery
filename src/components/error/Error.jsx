import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3">
            Pasterlería Misha
          </span>
          <span className="site-heading-lower">Clio Hummer Misha</span>
        </h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="index.html">Start Bootstrap</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/" title='Inicio'>Inicio</Link></li>
                            <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/nosotros" title='Nosotros'>Nosotros</Link></li>
                            <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/productos" title='Productos'>Productos</Link></li>
                            <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/contacto" title='Contacto'>Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-lower">Página no encontrada</span>
        </h1>
    
    </div>
  );
}

export default Error;
