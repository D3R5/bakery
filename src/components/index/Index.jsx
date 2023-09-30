import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css'; 
import logo from '../../assets/intro.jpg';


const App = () => {
    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Pasterlería Misha</span>
                    <span className="site-heading-lower">Clio Hummer Misha</span>
                </h1>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
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
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={logo} alt="..." />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Fresh Coffee</span>
                                <span className="section-heading-lower">Worth Drinking</span>
                            </h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique quod saepe ullam, at fugiat, tenetur ipsum, voluptatem quos modi sunt esse officia harum quam. Nemo voluptatem repudiandae dolorum nostrum!</p>
                            <div className="intro-button mx-auto"><Link className="btn btn-primary btn-xl" to="/contacto">Háblanos!</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Our Promise</span>
                                    <span className="section-heading-lower">To You</span>
                                </h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis, temporibus libero, iste molestias nisi asperiores esse in, est magnam maxime? Beatae enim libero itaque, nemo neque reprehenderit iusto iure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-faded text-center py-5">
                <div className="container"><p className="m-0 small">&copy; DERS <Link to="https://github.com/D3R5" target='blank' title='DERS'>Github</Link></p></div>
            </footer>
        </div>
    );
};

export default App;
