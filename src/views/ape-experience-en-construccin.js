import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ape-experience-en-construccin.css'

const APEExperienceEnConstruccin = (props) => {
  return (
    <div className="ape-experience-en-construccin-container">
      <Helmet>
        <title>APE-Experience-en-Construccin - APE Experience</title>
        <meta
          property="og:title"
          content="APE-Experience-en-Construccin - APE Experience"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <video
        src="https://ape-experience.com/Material web/Imagen%20Heroe%20APE%20Experience.mp4"
        loop
        muted
        preload="metadata"
        autoPlay
        className="ape-experience-en-construccin-video"
      ></video>
      <section className="ape-experience-en-construccin-hero">
        <div className="ape-experience-en-construccin-background">
          <div className="ape-experience-en-construccin-container1">
            <img
              alt="fondo-degradado-APE"
              src="/Material web/fondo-degradado-ape%20(1)-1500h.png"
              className="ape-experience-en-construccin-image"
            />
          </div>
        </div>
        <div className="ape-experience-en-construccin-container2">
          <header
            data-thq="thq-navbar"
            className="ape-experience-en-construccin-navbar"
          >
            <Link to="/" className="ape-experience-en-construccin-navlink">
              <img
                alt="APE Experience"
                src="/Material web/logo-optimizado-200h.png"
                className="ape-experience-en-construccin-image1"
              />
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="ape-experience-en-construccin-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="ape-experience-en-construccin-nav"
              >
                <Link
                  to="/"
                  className="ape-experience-en-construccin-link navLink"
                >
                  Inicio
                </Link>
                <Link
                  to="/sobre-mi"
                  className="ape-experience-en-construccin-link1 navLink"
                >
                  Sobre mi
                </Link>
                <Link
                  to="/servicios"
                  className="ape-experience-en-construccin-link2 navLink"
                >
                  Servicios
                </Link>
                <span className="ape-experience-en-construccin-link3 navLink">
                  Proyectos
                </span>
                <span className="ape-experience-en-construccin-link4 navLink">
                  Blog
                </span>
                <span className="ape-experience-en-construccin-link5 navLink">
                  Contacto
                </span>
              </nav>
              <button className="ape-experience-en-construccin-register button">
                <span className="ape-experience-en-construccin-text">
                  <span>Solicitar </span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="ape-experience-en-construccin-icon"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="ape-experience-en-construccin-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="ape-experience-en-construccin-icon02"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="ape-experience-en-construccin-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="ape-experience-en-construccin-nav1"
              >
                <div className="ape-experience-en-construccin-container3">
                  <h2 className="ape-experience-en-construccin-text03">
                    OnConf
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="ape-experience-en-construccin-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="ape-experience-en-construccin-icon04"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="ape-experience-en-construccin-nav2"
                >
                  <span className="navLink ape-experience-en-construccin-text04">
                    About
                  </span>
                  <span className="navLink ape-experience-en-construccin-text05">
                    Features
                  </span>
                  <span className="navLink ape-experience-en-construccin-text06">
                    Pricing
                  </span>
                  <span className="navLink ape-experience-en-construccin-text07">
                    Team
                  </span>
                  <span className="navLink ape-experience-en-construccin-text08">
                    Blog
                  </span>
                </nav>
                <div className="ape-experience-en-construccin-button-container">
                  <button className="ape-experience-en-construccin-login button">
                    Login
                  </button>
                  <button className="button ape-experience-en-construccin-register1">
                    Register
                  </button>
                </div>
                <div className="ape-experience-en-construccin-icon-group">
                  <div className="ape-experience-en-construccin-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="ape-experience-en-construccin-icon06"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="ape-experience-en-construccin-icon08"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="ape-experience-en-construccin-icon10"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="ape-experience-en-construccin-background1"
              />
            </div>
          </header>
        </div>
        <div className="ape-experience-en-construccin-hero-content">
          <h1 className="ape-experience-en-construccin-text09">
            <span>Estamos en  </span>
            <span className="ape-experience-en-construccin-text11">
              Construcción
            </span>
            <span> para ofrecerte un mejor servicio de Diseño Web.</span>
          </h1>
          <div className="ape-experience-en-construccin-caption">
            <a
              href="https://www.instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="ape-experience-en-construccin-instagram button-style-1 button"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="ape-experience-en-construccin-icon12"
              >
                <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
            </a>
            <p className="ape-experience-en-construccin-caption1">
              <span className="ape-experience-en-construccin-text13">
                Síguenos en Instagram
              </span>
              <span className="ape-experience-en-construccin-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ape-experience-en-construccin-text15">
                para mantenerte informado.
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default APEExperienceEnConstruccin
