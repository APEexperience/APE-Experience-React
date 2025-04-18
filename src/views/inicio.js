import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionNumeral from '../components/section-numeral'
import BlogPostCard2 from '../components/blog-post-card2'
import Newsletters from './Newsletters'

import './inicio.css'

const Inicio = (props) => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')

  useEffect(() => {
    fetchNewsletters();
  }, [])

  const fetchNewsletters = () => {
    axios
    .get('https://ape-experience.net/Newsletters')
    .then((res) => {
      console.log(res.data)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post('https://ape-experience.net/Newsletters', { name, email })
    .then(() => {
      setName('')
      setEmail('')
      fetchNewsletters('');
    })
    .catch((error) => {
      console.log('No ha podido enviarse sus suscripción')
    })
  }

  return (
    <div className="inicio-container">
      <Helmet>
        <title>APE Experience</title>
        <meta property="og:title" content="APE Experience" />
      </Helmet>
      <video
        src="/Material web/Imagen%20Heroe%20APE%20Experience.mp4"
        loop
        muted
        preload="metadata"
        autoPlay
        className="inicio-video"
      ></video>
      <section className="inicio-hero">
        <div className="inicio-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="inicio-image"
          />
          <div className="inicio-container01">
            <img
              alt="fondo-degradado-APE"
              src="/Material web/fondo-degradado-ape%20(1)-1500h.png"
              className="inicio-image01"
            />
          </div>
        </div>
        <div className="inicio-container02">
          <header data-thq="thq-navbar" className="inicio-navbar">
            <Link to="/" className="inicio-navlink">
              <img
                alt="APE Experience"
                src="/Material web/logo-optimizado-200h.png"
                className="inicio-image02"
              />
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="inicio-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="inicio-nav"
              >
                <Link to="/" className="inicio-link navLink">
                  Inicio
                </Link>
                <Link to="/sobre-mi" className="inicio-link01 navLink">
                  Sobre mi
                </Link>
                <Link to="/servicios" className="inicio-link02 navLink">
                  Servicios
                </Link>
                <Link to="/proyectos" className="inicio-link03 navLink">
                  Proyectos
                </Link>
                <Link to="/blog" className="inicio-link04 navLink">
                  Blog
                </Link>
                <Link to="/contacto" className="inicio-link05 navLink">
                  Contacto
                </Link>
              </nav>
              <Link to="/solicitar-servicio" className="inicio-register button">
                <span className="inicio-text">
                  <span>Solicitar </span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="inicio-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="inicio-burger-menu">
              <svg viewBox="0 0 1024 1024" className="inicio-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="inicio-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="inicio-nav1"
              >
                <div className="inicio-container03">
                  <h2 className="inicio-text03">OnConf</h2>
                  <div data-thq="thq-close-menu" className="inicio-menu-close">
                    <svg viewBox="0 0 1024 1024" className="inicio-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="inicio-nav2"
                >
                  <span className="navLink inicio-text04">About</span>
                  <span className="navLink inicio-text05">Features</span>
                  <span className="navLink inicio-text06">Pricing</span>
                  <span className="navLink inicio-text07">Team</span>
                  <span className="navLink inicio-text08">Blog</span>
                </nav>
                <div className="inicio-button-container">
                  <button className="inicio-login button">Login</button>
                  <button className="button inicio-register1">Register</button>
                </div>
                <div className="inicio-icon-group">
                  <div className="inicio-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="inicio-icon06"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="inicio-icon08"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="inicio-icon10"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="inicio-background1"
              />
            </div>
          </header>
        </div>
        <div className="inicio-hero-content">
          <h1 className="inicio-text09">
            <span>
              Impulsa Tu Empresa al Éxito Digital con un
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="inicio-text11">Diseño Web</span>
            <span> Optimizado</span>
          </h1>
          <div className="inicio-caption">
            <a
              href="https://#newsletter"
              target="_blank"
              rel="noreferrer noopener"
              className="inicio-register2 button-style-1 button"
            >
              <span className="inicio-text13">¡Suscríbete ahora!</span>
            </a>
            <p className="inicio-caption1">
              <span className="inicio-text14">
                Suscríbete para recibir nuestras próximas promociones.
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </section>
      <section className="inicio-notes">
        <div className="inicio-first">
          <div data-aos="fade-up-right" className="inicio-content">
            <h2 className="inicio-header">
              <span>
                APE Experience: Diseño Web UX/UI adaptativo para pequeñas
                empresas
              </span>
              <br></br>
            </h2>
            <div className="inicio-list">
              <div className="inicio-note">
                <div className="inicio-point"></div>
                <p className="inicio-text18">
                  En APE Experience, obtienes soluciones a medida para crear tu
                  sitio web profesional, atractivo y funcional. Estamos
                  enfocados en negocios que no tienen página web o que quieren
                  mejorar la que tienen, con el objetivo de optimizar su
                  presencia online utilizando el Diseño Web UX/UI y poder
                  aumentar sus ventas.
                </p>
              </div>
              <div className="inicio-note1">
                <button type="button" className="inicio-button button">
                  <svg viewBox="0 0 1024 1024" className="inicio-icon12">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                  transforma tu idea en realidad
                </button>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/Material web/ape-experience-paginas-web-1400w.png"
            className="inicio-image03 image-notes"
          />
        </div>
        <div className="inicio-second">
          <div data-aos="fade-up-left" className="inicio-content1">
            <h3 className="inicio-header1">
              Impresionantes diseños que cautivan y potencian la experiencia del
              usuario
            </h3>
            <button className="inicio-register3 button button-style-2">
              <span className="inicio-text19">
                Deslúmbrate con experiencias visuales de vanguardia
              </span>
              <svg viewBox="0 0 1024 1024" className="inicio-icon14">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img
            alt="image"
            src="/Material web/ape-experience-disen%C3%AC%C2%83o-web-1400w.png"
            className="inicio-image04 image-notes"
          />
        </div>
      </section>
      <section className="inicio-quote">
        <div className="inicio-content2">
          <div className="inicio-container04">
            <h5 className="inicio-header2">Aportes en Proyectos</h5>
            <div className="inicio-gallery">
              <div className="inicio-container05">
                <a
                  href="https://cuidartesamarte.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inicio-link06"
                >
                  <div className="inicio-container06">
                    <h6 className="inicio-text20">
                      Proyecto: Cuidarte Es Amarte
                    </h6>
                    <span className="inicio-text21">
                      Renovación de Diseño Web
                    </span>
                    <img
                      alt="image"
                      src="/Material web/bgcreativos-logo-400h.png"
                      className="inicio-image05"
                    />
                  </div>
                </a>
              </div>
              <div className="inicio-container07">
                <a
                  href="https://imejobsolutions.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inicio-link07"
                >
                  <div className="inicio-container08">
                    <h6 className="inicio-text22">
                      Proyecto: IME Job Solutions
                    </h6>
                    <span className="inicio-text23">
                      Desarrollo de Página Web
                    </span>
                    <img
                      alt="image"
                      src="/Material web/bgcreativos-logo-400h.png"
                      className="inicio-image06"
                    />
                  </div>
                </a>
              </div>
              <div className="inicio-container09">
                <a
                  href="https://mueblesnew.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inicio-link08"
                >
                  <div className="inicio-container10">
                    <h6 className="inicio-text24">Proyecto: Muebles New</h6>
                    <span className="inicio-text25">
                      <span>Renovación de Diseño Web</span>
                      <br></br>
                    </span>
                    <img
                      alt="image"
                      src="/Material web/bgcreativos-logo-400h.png"
                      className="inicio-image07"
                    />
                  </div>
                </a>
              </div>
              <div className="inicio-container11">
                <a
                  href="https://agroabeca.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inicio-link09"
                >
                  <div className="inicio-container12">
                    <h6 className="inicio-text28">Proyecto: Agroabeca</h6>
                    <span className="inicio-text29">
                      Desarrollo de Página Web
                    </span>
                    <img
                      alt="image"
                      src="/Material web/bgcreativos-logo-400h.png"
                      className="inicio-image08"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/quote-background.svg"
          className="inicio-background2"
        />
        <img
          alt="image"
          src="/quote-background.svg"
          className="inicio-background3"
        />
      </section>
      <section className="inicio-sobre-mi">
        <div className="inicio-header3">
          <div className="inicio-container13">
            <div className="inicio-container14">
              <div className="inicio-container15">
                <SectionNumeral></SectionNumeral>
              </div>
              <h4 className="inicio-title">Sobre Adrian Ojeda</h4>
              <p className="inicio-caption2">
                <span className="inicio-text30">
                  Soy Adrian Ojeda, un apasionado diseñador web con más de 6
                  años de experiencia en optimización SEO, desarrollo web y
                  diseño de redes sociales. Dominio de lenguajes de programación
                  como
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="inicio-text31">
                  HTML, CSS, PHP y JavaScript
                </span>
                <span className="inicio-text32">
                  , así como del uso de programas como
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="inicio-text33">
                  Adobe Photoshop, Illustrator, After Effects y Premiere.
                </span>
                <br className="inicio-text34"></br>
                <br className="inicio-text35"></br>
                <span className="inicio-text36">APE Experience</span>
                <span className="inicio-text37">
                  {' '}
                  es mi marca personal, donde ofrezco soluciones en diseño web
                  que ayudan a las empresas a destacarse en el mercado y
                  establecer conexiones sólidas con los clientes. Confía en mi
                  experiencia y conocimiento para llevar tu página web al
                  siguiente nivel.
                </span>
                <br className="inicio-text38"></br>
                <br className="inicio-text39"></br>
                <span className="inicio-text40">
                  Adrian Ojeda - Diseñador Web
                </span>
              </p>
            </div>
            <button className="inicio-register4 button button-style-2">
              <span className="inicio-text41">Conoce más sobre mi</span>
              <svg viewBox="0 0 1024 1024" className="inicio-icon16">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="inicio-container16">
            <img
              alt="image"
              src="https://ape-cloud.s3.us-east-2.amazonaws.com/photo_5010571185125173703_y+(1).jpg"
              className="inicio-image09"
            />
          </div>
          <div data-aos="fade-right" className="inicio-heading"></div>
        </div>
      </section>
      <section className="inicio-watch">
        <div className="inicio-content3">
          <p className="inicio-header4">
            Descubre más sobre mis objetivos para tu negocio
          </p>
          <div className="inicio-video1">
            <video
              src
              poster="https://ape-cloud.s3.us-east-2.amazonaws.com/FONDO-VIDEO-APE-EXPERIENCE.jpg"
              className="inicio-video2"
            ></video>
            <img alt="image" src="/play.svg" className="inicio-image10" />
          </div>
        </div>
        <img
          alt="image"
          src="/Material web/ape-experience-fondo-turquesa-1500w.png"
          className="inicio-image11"
        />
      </section>
      <section className="inicio-schedule">
        <div className="inicio-content4">
          <div className="inicio-header5">
            <div className="inicio-section-numeral">
              <div className="inicio-divide"></div>
              <p className="inicio-text42">02</p>
            </div>
            <div data-aos="fade-right" className="inicio-heading1">
              <h6 className="inicio-title1">Blog</h6>
              <p className="inicio-caption3">
                <span>
                  Explora los aspectos más relevantes del Diseño de Experiencia
                  de Usuario (UX) y la Interfaz de Usuario (UI) y recibe
                  información valiosa con las últimas tendencias, mejores
                  prácticas y consejos para mejorar la usabilidad, satisfacción
                  y eficiencia de tus productos y servicios digitales.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="inicio-blog">
          <div className="inicio-container17">
            <BlogPostCard2
              profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></BlogPostCard2>
          </div>
          <div className="inicio-container18">
            <BlogPostCard2
              imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard2>
          </div>
          <div className="inicio-container19">
            <BlogPostCard2
              imageSrc="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
              profileSrc="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></BlogPostCard2>
          </div>
        </div>
      </section>
      <section className="inicio-black">
        <img
          alt="image"
          src="/Material web/ape-experience-fondo-ux-ui%20(1)-1500w.png"
          className="inicio-image12"
        />
        <section className="inicio-testimonials">
          <div className="inicio-header6">
            <div className="inicio-section-numeral1">
              <div className="inicio-divide1"></div>
              <p className="inicio-text45">03</p>
            </div>
            <div data-aos="fade-right" className="inicio-heading2">
              <p className="inicio-title2">
                Testimonios de Clientes Satisfechos:
              </p>
            </div>
          </div>
          <div id="scrollbar" className="inicio-quotes">
            <div className="inicio-quote01">
              <div className="inicio-author">
                <img
                  alt="image"
                  src="/Material web/ime-job-solutions-favicon-200h.jpg"
                  className="inicio-image13"
                />
                <div className="inicio-details">
                  <span className="inicio-name">IME Job Solutions</span>
                  <span className="inicio-handle">
                    <span>@imejobsolutions</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <p className="inicio-quote02">
                “Estoy fascinado con su trabajo muy limpio y muy profesional.”
              </p>
            </div>
            <div className="inicio-quote03">
              <div className="inicio-author1">
                <img
                  alt="image"
                  src="/Material web/agroabeca-favicon-200h.jpg"
                  className="inicio-image14"
                />
                <div className="inicio-details1">
                  <span className="inicio-name1">Agroabeca</span>
                  <span className="inicio-handle1">@agroabeca</span>
                </div>
              </div>
              <p className="inicio-quote04">
                “Increíble página, entrega rápida, excelente servicio. ”
              </p>
            </div>
            <div className="inicio-quote05">
              <div className="inicio-author2">
                <img
                  alt="image"
                  src="/Material web/andria-viloria-favicon-200h.jpg"
                  className="inicio-image15"
                />
                <div className="inicio-details2">
                  <span className="inicio-name2">Andria Viloria Lubo</span>
                  <span className="inicio-handle2">@cuidartesamarte</span>
                </div>
              </div>
              <p className="inicio-quote06">
                “Cumple con mis expectativas, es lo que estaba buscando.”
              </p>
            </div>
            <div className="inicio-quote07">
              <div className="inicio-author3">
                <img
                  alt="image"
                  src="/Material web/muebles-new-favicon-200h.jpg"
                  className="inicio-image16"
                />
                <div className="inicio-details3">
                  <span className="inicio-name3">
                    New | Muebles Proyectados Importados
                  </span>
                  <span className="inicio-handle3">@mueblesnew</span>
                </div>
              </div>
              <p className="inicio-quote08">
                “Muy linda página, bien optimizada y moderna.”
              </p>
            </div>
            <div className="inicio-quote09">
              <div className="inicio-author4">
                <img
                  alt="image"
                  src="/Material web/atte-pasteleria-favicon-200h.jpg"
                  className="inicio-image17"
                />
                <div className="inicio-details4">
                  <span className="inicio-name4">By Juselyn Molina</span>
                  <span className="inicio-handle4">@attepasteleria</span>
                </div>
              </div>
              <p className="inicio-quote10">“Un excelente trabajo ”</p>
            </div>
          </div>
        </section>
        <section className="inicio-join">
          <div className="inicio-container20">
            <p className="inicio-title3">
              Estás a un clic de distancia de alcanzar las estrellas 🌟👆
            </p>
            <Link to="/solicitar-servicio" className="inicio-navlink1 button">
              <span className="inicio-text48">
                <span>¡Solicita tu servicio ahora!</span>
                <br></br>
              </span>
            </Link>
          </div>
        </section>
      </section>
      <section className="newsletter inicio-subscribe">
      <div className="inicio-main">
        <p className="inicio-header7">
          Suscr�bete a mi newsletter para poder recibir promociones y descuentos
        </p>
        <div className="inicio-content5">
          <form onSubmit={handleSubmit}>
            <div className="inicio-inputs">
              <input
                type="text"
                required
                placeholder="Nombre *"
                autoComplete="name"
                className="inicio-textinput input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Correo *"
                autoComplete="email"
                className="inicio-textinput1 input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="inicio-text51">
              Al enviar, acepta recibir comunicaciones por correo electr�nico de APE Experience, incluidas pr�ximas promociones y boletos con descuento, informaci�n y acceso a eventos exclusivos solo por invitaci�n.
            </span>
            <button type="submit" className="inicio-button1 button">
              <span className="inicio-text52">
                <span>Suscribirme al newsletter</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
	<footer className="inicio-footer">
        <div className="inicio-content6">
          <div className="inicio-details5">
            <Link to="/" className="inicio-navlink2">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/ape-experience-logo-negro%20(1)-600h.png"
                className="inicio-image18"
              />
            </Link>
            <p className="inicio-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="inicio-content7">
          <div className="inicio-details6">
            <span className="inicio-text55">Navegación</span>
            <Link to="/" className="inicio-navlink3 a.link">
              <span className="inicio-text56">Inicio</span>
              <br></br>
            </Link>
            <Link to="/sobre-mi" className="inicio-navlink4 a.link">
              Sobre mi
            </Link>
            <Link to="/servicios" className="inicio-navlink5 a.link">
              Servicios
            </Link>
            <Link to="/proyectos" className="inicio-navlink6 a.link">
              Proyectos
            </Link>
            <Link to="/blog" className="inicio-navlink7 a.link">
              Blog
            </Link>
            <Link to="/contacto" className="inicio-navlink8 a.link">
              Contacto
            </Link>
          </div>
          <div className="inicio-socials">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="inicio-link10"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="inicio-image19 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="inicio-link11"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="inicio-icon18 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="inicio-link12"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-600h.png"
                className="inicio-image20 social"
              />
            </a>
          </div>
          <span className="inicio-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2024
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
      <div>
        <div className="inicio-container22">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="inicio-container24">
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
    </div>
  )
}

export default Inicio
