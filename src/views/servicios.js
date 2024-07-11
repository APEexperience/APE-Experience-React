import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Pricing14 from '../components/pricing14'
import Pricing13 from '../components/pricing13'
import './servicios.css'

const Servicios = (props) => {
  return (
    <div className="servicios-container">
      <Helmet>
        <title>Servicios - APE Experience</title>
        <meta property="og:title" content="Servicios - APE Experience" />
      </Helmet>
      <div className="servicios-header">
        <header data-thq="thq-navbar" className="servicios-navbar">
          <Link to="/" className="servicios-navlink">
            <img
              alt="APE Experience"
              src="/Material web/logo-optimizado-600h.png"
              className="servicios-image"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="servicios-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="servicios-nav"
            >
              <Link to="/" className="servicios-link navLink">
                Inicio
              </Link>
              <Link to="/sobre-mi" className="servicios-link1 navLink">
                Sobre mi
              </Link>
              <Link to="/servicios" className="servicios-link2 navLink">
                Servicios
              </Link>
              <Link to="/proyectos" className="servicios-link3 navLink">
                Proyectos
              </Link>
              <Link to="/blog" className="servicios-link4 navLink">
                Blog
              </Link>
              <Link to="/contacto" className="servicios-link5 navLink">
                Contacto
              </Link>
            </nav>
            <Link
              to="/solicitar-servicio"
              className="servicios-register button"
            >
              <span className="servicios-text">
                <span>Solicitar </span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="servicios-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="servicios-burger-menu">
            <svg viewBox="0 0 1024 1024" className="servicios-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="servicios-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="servicios-nav1"
            >
              <div className="servicios-container1">
                <h2 className="servicios-text03">OnConf</h2>
                <div data-thq="thq-close-menu" className="servicios-menu-close">
                  <svg viewBox="0 0 1024 1024" className="servicios-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="servicios-nav2"
              >
                <span className="navLink servicios-text04">About</span>
                <span className="navLink servicios-text05">Features</span>
                <span className="navLink servicios-text06">Pricing</span>
                <span className="navLink servicios-text07">Team</span>
                <span className="navLink servicios-text08">Blog</span>
              </nav>
              <div className="servicios-button-container">
                <button className="servicios-login button">Login</button>
                <button className="button servicios-register1">Register</button>
              </div>
              <div className="servicios-icon-group">
                <div className="servicios-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="servicios-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="servicios-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="servicios-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="servicios-background"
            />
          </div>
        </header>
      </div>
      <div className="servicios-hero parallax-container">
        <span className="servicios-text09 parallax-image">¿Qué necesitas?</span>
        <h1 className="servicios-text10 parallax-image">
          <span className="servicios-text11">Servicios</span>
          <span className="servicios-text12"> </span>
          <span className="servicios-text13">Esenciales</span>
          <span className="servicios-text14">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="servicios-text15">de APE Experience</span>
        </h1>
        <div className="servicios-container2 parallax-image">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="servicios-icon12"
          >
            <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
          </svg>
          <input
            type="text"
            placeholder="Solicita rápidamente"
            className="servicios-textinput input"
          />
          <button type="button" className="servicios-button button">
            Buscar
          </button>
        </div>
      </div>
      <Pricing14
        plan1="Plan Informativo"
        plan2="Plan Tienda Virtual"
        plan3="Plan Plataforma Avanzada"
        plan11="Plan Informativo"
        plan21="Plan Tienda Virtual"
        plan31="Plan Plataforma Avanzada"
        content1="Selecciona el plan perfecto para ti"
        content2="Consigue los resultados ideales para tu negocio con nuestros planes de páginas web"
        heading1="Planes para Páginas Web"
        plan1Price="250$"
        plan2Price="300$"
        plan3Price="400$"
        plan1Action="Solicitar ahora"
        plan1Price1="250$"
        plan1Yearly="Incluye pago anual de mantenimiento de servidor"
        plan2Action="Solicitar ahora"
        plan2Price1="300$"
        plan2Yearly="Incluye pago anual de mantenimiento de servidor"
        plan3Action="Solicitar ahora"
        plan3Price1="400$"
        plan3Yearly="Incluye pago anual de mantenimiento de servidor"
        plan1Action1="Solicitar ahora"
        plan1Yearly1="Incluye pago anual de mantenimiento de servidor"
        plan2Action1="Solicitar ahora"
        plan2Yearly1="Incluye pago anual de mantenimiento de servidor"
        plan3Action1="Solicitar ahora"
        plan3Yearly1="Incluye pago anual de mantenimiento de servidor"
        plan1Feature21="250$"
        plan1Feature31="250$"
        plan2Feature31="300$"
        plan2Feature41="300$"
      ></Pricing14>
      <Pricing13
        plan1="Plan para Emprendimiento"
        plan2="Plan para Empresas"
        plan11="Plan para Emprendimiento"
        plan21="Plan para Empresas"
        content1="Selecciona el plan perfecto para ti"
        content2="Mejora el alcance de tu marca en redes sociales según tu selección"
        heading1="Planes para Redes Sociales"
        plan1Price="15$/ por semana"
        plan2Price="100$/ por mes"
        plan1Action="Solicitar ahora"
        plan1Price1="15$/ por semana"
        plan1Yearly="o 60$ al mes"
        plan2Action="Solicitar ahora"
        plan2Price1="100$/ por mes"
        plan2Yearly="25$/ por semana"
        plan1Action1="Solicitar ahora"
        plan1Yearly1="o 60$ al mes"
        plan2Action1="Solicitar ahora"
        plan2Yearly1="25$/ por semana"
        rootClassName="pricing13-root-class-name"
      ></Pricing13>
      <div className="servicios-container3">
        <div className="servicios-container4">
          <h1 className="servicios-text16">
            Personaliza tu servicio ajustado a lo que necesitas para tu negocio
          </h1>
        </div>
        <button type="button" className="servicios-button1 button">
          Enviar ahora
        </button>
      </div>
      <footer className="servicios-footer">
        <div className="servicios-content">
          <div className="servicios-details">
            <Link to="/" className="servicios-navlink1">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/logo-optimizado-600h.png"
                className="servicios-image1"
              />
            </Link>
            <p className="servicios-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="servicios-content1">
          <div className="servicios-details1">
            <span className="servicios-text17">Navegación</span>
            <Link to="/" className="servicios-navlink2 a.link">
              <span className="servicios-text18">Inicio</span>
              <br></br>
            </Link>
            <Link to="/sobre-mi" className="servicios-navlink3 a.link">
              Sobre mi
            </Link>
            <Link to="/servicios" className="servicios-navlink4 a.link">
              Servicios
            </Link>
            <Link to="/proyectos" className="servicios-navlink5 a.link">
              Proyectos
            </Link>
            <Link to="/blog" className="servicios-navlink6 a.link">
              Blog
            </Link>
            <Link to="/contacto" className="servicios-navlink7 a.link">
              Contacto
            </Link>
          </div>
          <div className="servicios-socials">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="servicios-link6"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="servicios-image2 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="servicios-link7"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="servicios-icon14 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="servicios-link8"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-600h.png"
                className="servicios-image3 social"
              />
            </a>
          </div>
          <span className="servicios-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2024
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Servicios
