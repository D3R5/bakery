import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8og69sn",
        "template_hkrv5dl",
        form.current,
        "p7TxsLapQc5uOGrQ1"
      )
      .then(
        (result) => {
          Swal.fire("Se ha enviado tu mensaje", "Gracias!", "success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <Link
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            to="index.html"
          >
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/" title="Inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  to="/nosotros"
                  title="Nosotros"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  to="/productos"
                  title="Productos"
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  to="/contacto"
                  title="Contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Háblanos!</span>
                  <span className="section-heading-lower">
                    Siempre abierto!
                  </span>
                </h2>
                <form ref={form} onSubmit={sendEmail} className="mt-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="7"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar mensaje
                  </button>
                </form>

                <div className="row mt-5">
                  <article className="col-md-4 contact__option">
                    <MdOutlineEmail className="icon" />
                    <h4>Email</h4>
                    <h6 className="email">diegoesteban.ders@gmail.com</h6>
                    <Link to="mailto:diegoesteban.ders@gmail.com" target="blank">
                      Envíanos un mensaje
                    </Link>
                  </article>
                  <article className="col-md-4 contact__option">
                    <FiInstagram className="icon" />
                    <h4>Instagram</h4>
                    <h5>diegooders</h5>
                    <Link to="https://www.instagram.com/diegooders/" target="blank">
                      Envíanos un mensaje
                    </Link>
                  </article>
                  <article className="col-md-4 contact__option">
                    <BsWhatsapp className="icon" />
                    <h4>WhatsApp</h4>
                    <h5>+56972893848</h5>
                    <Link to="https://wa.me/56972893848" target="blank">Envíanos un mensaje</Link>
                  </article>
                </div>

                <p className="address mb-5">
                  <em>
                    <strong>San Fernando - Chile</strong>
                    <br />
                    Hecho con amor
                  </em>
                </p>
                <p className="mb-0">
                  <small>
                    <em>No dudes en llamarnos</em>
                  </small>
                  <br />
                  (317) 585-8468
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section about-heading">
        <div className="container">
          <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src="assets/img/about.jpg"
            alt="..."
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">
                      Strong Coffee, Strong Roots
                    </span>
                    <span className="section-heading-lower">
                      About Our Cafe
                    </span>
                  </h2>
                  <p>
                    Founded in 1987 by the Hernandez brothers, our establishment
                    has been serving up rich coffee sourced from artisan farmers
                    in various regions of South and Central America. We are
                    dedicated to travelling the world, finding the best coffee,
                    and bringing back to you here in our cafe.
                  </p>
                  <p className="mb-0">
                    We guarantee that you will fall in
                    <em>lust</em>
                    with our decadent blends the moment you walk inside until
                    you finish your last sip. Join us for your daily routine, an
                    outing with friends, or simply just to enjoy some alone
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">&copy; DERS <Link to="https://github.com/D3R5" target='blank' title='DERS'>Github</Link></p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
