import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Contact15 from '../components/contact15'
import ContactForm4 from '../components/contact-form4'
import './contacto.css'

const Contacto = (props) => {
  return (
    <div className="contacto-container">
      <Helmet>
        <title>Contacto - APE Experience</title>
        <meta
          name="description"
          content="Contáctanos para conocer más acerca de APE Experience y sus productos o servicios."
        />
        <meta property="og:title" content="Contacto - APE Experience" />
        <meta
          property="og:description"
          content="Contáctanos para conocer más acerca de APE Experience y sus productos o servicios."
        />
      </Helmet>
      <div className="contacto-header">
        <header data-thq="thq-navbar" className="contacto-navbar">
          <Link to="/" className="contacto-navlink">
            <img
              alt="APE Experience"
              src="/Material web/logo-optimizado-600h.png"
              className="contacto-image"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="contacto-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="contacto-nav"
            >
              <Link to="/" className="contacto-link navLink">
                Inicio
              </Link>
              <Link to="/sobre-mi" className="contacto-link1 navLink">
                Sobre mi
              </Link>
              <Link to="/servicios" className="contacto-link2 navLink">
                Servicios
              </Link>
              <Link to="/proyectos" className="contacto-link3 navLink">
                Proyectos
              </Link>
              <Link to="/blog" className="contacto-link4 navLink">
                Blog
              </Link>
              <Link to="/contacto" className="contacto-link5 navLink">
                Contacto
              </Link>
            </nav>
            <Link to="/solicitar-servicio" className="contacto-register button">
              <span className="contacto-text">
                <span>Solicitar </span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="contacto-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="contacto-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contacto-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="contacto-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="contacto-nav1"
            >
              <div className="contacto-container01">
                <h2 className="contacto-text03">OnConf</h2>
                <div data-thq="thq-close-menu" className="contacto-menu-close">
                  <svg viewBox="0 0 1024 1024" className="contacto-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="contacto-nav2"
              >
                <span className="navLink contacto-text04">About</span>
                <span className="navLink contacto-text05">Features</span>
                <span className="navLink contacto-text06">Pricing</span>
                <span className="navLink contacto-text07">Team</span>
                <span className="navLink contacto-text08">Blog</span>
              </nav>
              <div className="contacto-button-container">
                <button className="contacto-login button">Login</button>
                <button className="button contacto-register1">Register</button>
              </div>
              <div className="contacto-icon-group">
                <div className="contacto-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="contacto-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contacto-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contacto-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="contacto-background"
            />
          </div>
        </header>
      </div>
      <div className="contacto-container02"></div>
      <div className="contacto-container03">
        <Contact15 rootClassName="contact15-root-class-name"></Contact15>
        <ContactForm4
          content2="Contáctame"
          rootClassName="contact-form4-root-class-name"
        ></ContactForm4>
      </div>
      <div className="contacto-container04">
        <div className="contacto-container05">
          <h1 className="contacto-text09">
            Personaliza tu servicio ajustado a lo que necesitas para tu negocio
          </h1>
        </div>
        <button type="button" className="contacto-button button">
          Enviar ahora
        </button>
      </div>
      <div>
        <div className="contacto-container07">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="contacto-container09">
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
      <footer className="contacto-footer">
        <div className="contacto-content">
          <div className="contacto-details">
            <Link to="/" className="contacto-navlink1">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/logo-optimizado-600h.png"
                className="contacto-image1"
              />
            </Link>
            <p className="contacto-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="contacto-content1">
          <div className="contacto-details1">
            <span className="contacto-text10">Navegación</span>
            <Link to="/" className="contacto-navlink2 a.link">
              <span className="contacto-text11">Inicio</span>
              <br></br>
            </Link>
            <Link to="/sobre-mi" className="contacto-navlink3 a.link">
              Sobre mi
            </Link>
            <Link to="/servicios" className="contacto-navlink4 a.link">
              Servicios
            </Link>
            <Link to="/proyectos" className="contacto-navlink5 a.link">
              Proyectos
            </Link>
            <Link to="/blog" className="contacto-navlink6 a.link">
              Blog
            </Link>
            <Link to="/contacto" className="contacto-navlink7 a.link">
              Contacto
            </Link>
          </div>
          <div className="contacto-socials">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="contacto-link6"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="contacto-image2 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="contacto-link7"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contacto-icon12 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="contacto-link8"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-600h.png"
                className="contacto-image3 social"
              />
            </a>
          </div>
          <span className="contacto-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2024
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Contacto
