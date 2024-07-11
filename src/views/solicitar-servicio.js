import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './solicitar-servicio.css'

const SolicitarServicio = (props) => {
  return (
    <div className="solicitar-servicio-container">
      <Helmet>
        <title>Solicitar-servicio - APE Experience</title>
        <meta
          name="description"
          content="Diseño de redes, programación, diseño web, tendencias, informática, servicio técnico y mucho más en APE Experience."
        />
        <meta
          property="og:title"
          content="Solicitar-servicio - APE Experience"
        />
        <meta
          property="og:description"
          content="Diseño de redes, programación, diseño web, tendencias, informática, servicio técnico y mucho más en APE Experience."
        />
      </Helmet>
      <div className="solicitar-servicio-header">
        <header data-thq="thq-navbar" className="solicitar-servicio-navbar">
          <Link to="/" className="solicitar-servicio-navlink">
            <img
              alt="APE Experience"
              src="/Material web/logo-optimizado-600h.png"
              className="solicitar-servicio-image"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="solicitar-servicio-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="solicitar-servicio-nav"
            >
              <Link to="/" className="solicitar-servicio-link navLink">
                Inicio
              </Link>
              <Link
                to="/sobre-mi"
                className="solicitar-servicio-link01 navLink"
              >
                Sobre mi
              </Link>
              <Link
                to="/servicios"
                className="solicitar-servicio-link02 navLink"
              >
                Servicios
              </Link>
              <Link
                to="/proyectos"
                className="solicitar-servicio-link03 navLink"
              >
                Proyectos
              </Link>
              <Link to="/blog" className="solicitar-servicio-link04 navLink">
                Blog
              </Link>
              <Link
                to="/contacto"
                className="solicitar-servicio-link05 navLink"
              >
                Contacto
              </Link>
            </nav>
            <Link
              to="/solicitar-servicio"
              className="solicitar-servicio-register button"
            >
              <span className="solicitar-servicio-text">
                <span>Solicitar </span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="solicitar-servicio-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </Link>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="solicitar-servicio-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="solicitar-servicio-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="solicitar-servicio-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="solicitar-servicio-nav1"
            >
              <div className="solicitar-servicio-container1">
                <h2 className="solicitar-servicio-text03">APE Experience</h2>
                <div
                  data-thq="thq-close-menu"
                  className="solicitar-servicio-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="solicitar-servicio-icon04"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="solicitar-servicio-nav2"
              >
                <span className="navLink solicitar-servicio-text04">
                  Inicio
                </span>
                <span className="navLink solicitar-servicio-text05">
                  Sobre mi
                </span>
                <span className="navLink solicitar-servicio-text06">
                  Servicios
                </span>
                <span className="navLink solicitar-servicio-text07">
                  Proyectos
                </span>
                <span className="navLink solicitar-servicio-text08">Blog</span>
                <span className="navLink solicitar-servicio-text09">
                  Contacto
                </span>
                <span className="navLink solicitar-servicio-text10">
                  Solicitar servicio
                </span>
              </nav>
              <div className="solicitar-servicio-button-container">
                <button className="solicitar-servicio-login button">
                  Iniciar sesión
                </button>
                <button className="button solicitar-servicio-register1">
                  Registrarme
                </button>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="solicitar-servicio-background"
            />
            <div className="solicitar-servicio-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link06"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="solicitar-servicio-image1 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link07"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="solicitar-servicio-icon06 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link08"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="solicitar-servicio-image2 social"
                />
              </a>
            </div>
          </div>
        </header>
      </div>
      <div className="solicitar-servicio-container2"></div>
      <div className="solicitar-servicio-container3">
        <div className="solicitar-servicio-container4">
          <h1>Solicitar servicio</h1>
        </div>
      </div>
      <div>
        <div className="solicitar-servicio-container6">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="solicitar-servicio-container8">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer className="solicitar-servicio-footer">
        <div className="solicitar-servicio-content">
          <div className="solicitar-servicio-details">
            <Link to="/" className="solicitar-servicio-navlink1">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/logo-optimizado-600h.png"
                className="solicitar-servicio-image3"
              />
            </Link>
            <p className="solicitar-servicio-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="solicitar-servicio-content1">
          <div className="solicitar-servicio-details1">
            <span className="solicitar-servicio-text12">Navegación</span>
            <Link to="/" className="solicitar-servicio-navlink2 a.link">
              <span className="solicitar-servicio-text13">Inicio</span>
              <br></br>
            </Link>
            <Link to="/sobre-mi" className="solicitar-servicio-navlink3 a.link">
              Sobre mi
            </Link>
            <Link
              to="/servicios"
              className="solicitar-servicio-navlink4 a.link"
            >
              Servicios
            </Link>
            <Link
              to="/proyectos"
              className="solicitar-servicio-navlink5 a.link"
            >
              Proyectos
            </Link>
            <Link to="/blog" className="solicitar-servicio-navlink6 a.link">
              Blog
            </Link>
            <Link to="/contacto" className="solicitar-servicio-navlink7 a.link">
              Contacto
            </Link>
          </div>
          <div className="solicitar-servicio-socials1">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="solicitar-servicio-link09"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="solicitar-servicio-image4 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="solicitar-servicio-link10"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="solicitar-servicio-icon08 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="solicitar-servicio-link11"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-600h.png"
                className="solicitar-servicio-image5 social"
              />
            </a>
          </div>
          <span className="solicitar-servicio-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2024
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default SolicitarServicio
