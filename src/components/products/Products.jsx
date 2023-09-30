import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'; 
import producto1 from '../../assets/products-01.jpg'
import producto2 from '../../assets/products-02.jpg'
import producto3 from '../../assets/products-03.jpg'


function Products() {
  return (
    <div>
      <header>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
                <span className="site-heading-upper text-primary mb-3">Pasterlería Misha</span>
                <span className="site-heading-lower">Clio Hummer Misha</span>
            </h1>
        </header>
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/" title='Inicio'>Inicio</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/nosotros" title='Nosotros'>Nosotros</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/productos" title='Productos'>Productos</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/contacto" title='Cotancto'>Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Blended to Perfection</span>
                                <span className="section-heading-lower">Coffees & Teas</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={producto1} alt="..." />
                    <div className="product-item-description d-flex me-auto">
                        <div className="bg-faded p-5 rounded"><p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolores quam quisquam, atque modi quae accusamus fuga eveniet doloremque, maxime officia est itaque exercitationem ea pariatur? Quam quia commodi necessitatibus!</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex me-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Delicious Treats, Good Eats</span>
                                <span className="section-heading-lower">Bakery & Kitchen</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={producto2} alt="..." />
                    <div className="product-item-description d-flex ms-auto">
                        <div className="bg-faded p-5 rounded"><p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem, libero ullam repellendus, vero neque impedit molestiae soluta hic quod quae. Recusandae reprehenderit amet, repudiandae explicabo dolorem aut impedit quia!</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">From Around the World</span>
                                <span className="section-heading-lower">Bulk Speciality Blends</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={producto3} alt="..." />
                    <div className="product-item-description d-flex me-auto">
                        <div className="bg-faded p-5 rounded"><p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed beatae, aspernatur dolores vel optio nobis consectetur recusandae non corrupti fuga. Error, repellat excepturi culpa accusantium molestiae voluptatum quae earum?</p></div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer text-faded text-center py-5">
            <div className="container"><p className="m-0 small">&copy; DERS <Link to="https://github.com/D3R5" target='blank' title='DERS'>Github</Link></p></div>
        </footer>
    </div>
  )
}

export default Products