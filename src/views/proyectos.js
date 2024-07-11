import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './proyectos.css'

const Proyectos = (props) => {
  return (
    <div className="proyectos-container">
      <Helmet>
        <title>Proyectos - APE Experience</title>
        <meta
          name="description"
          content="Proyectos desarrollados por APE Experience"
        />
        <meta property="og:title" content="Proyectos - APE Experience" />
        <meta
          property="og:description"
          content="Proyectos desarrollados por APE Experience"
        />
      </Helmet>
      <div className="proyectos-header">
        <header data-thq="thq-navbar" className="proyectos-navbar">
          <Link to="/" className="proyectos-navlink">
            <img
              alt="APE Experience"
              src="/Material web/logo-optimizado-600h.png"
              className="proyectos-image"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="proyectos-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="proyectos-nav"
            >
              <Link to="/" className="proyectos-link navLink">
                Inicio
              </Link>
              <Link to="/sobre-mi" className="proyectos-link1 navLink">
                Sobre mi
              </Link>
              <Link to="/servicios" className="proyectos-link2 navLink">
                Servicios
              </Link>
              <Link to="/proyectos" className="proyectos-link3 navLink">
                Proyectos
              </Link>
              <Link to="/blog" className="proyectos-link4 navLink">
                Blog
              </Link>
              <Link to="/contacto" className="proyectos-link5 navLink">
                Contacto
              </Link>
            </nav>
            <Link
              to="/solicitar-servicio"
              className="proyectos-register button"
            >
              <span className="proyectos-text">
                <span>Solicitar </span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="proyectos-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="proyectos-burger-menu">
            <svg viewBox="0 0 1024 1024" className="proyectos-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="proyectos-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="proyectos-nav1"
            >
              <div className="proyectos-container01">
                <h2 className="proyectos-text03">OnConf</h2>
                <div data-thq="thq-close-menu" className="proyectos-menu-close">
                  <svg viewBox="0 0 1024 1024" className="proyectos-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="proyectos-nav2"
              >
                <span className="navLink proyectos-text04">About</span>
                <span className="navLink proyectos-text05">Features</span>
                <span className="navLink proyectos-text06">Pricing</span>
                <span className="navLink proyectos-text07">Team</span>
                <span className="navLink proyectos-text08">Blog</span>
              </nav>
              <div className="proyectos-button-container">
                <button className="proyectos-login button">Login</button>
                <button className="button proyectos-register1">Register</button>
              </div>
              <div className="proyectos-icon-group">
                <div className="proyectos-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="proyectos-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="proyectos-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="proyectos-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="proyectos-background"
            />
          </div>
        </header>
      </div>
      <div className="proyectos-container02"></div>
      <div className="proyectos-container03">
        <div className="proyectos-container04">
          <h1>Proyectos Destacados</h1>
          <span className="proyectos-text10">
            Estos son algunos de los proyectos en los que he trabajado dividido
            entre Videos, Feeds y Páginas Web
          </span>
          <h2 className="proyectos-text11">Videos</h2>
          <div className="proyectos-container05">
            <div className="proyectos-container06">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO+COMERCIAL+REEL+2+CEPILLADO+LA+ZULIANITA.mp4"
                muted="true"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_320.png"
                preload="auto"
                autoPlay="true"
                controls="true"
                className="proyectos-video"
              ></video>
            </div>
            <div className="proyectos-container07">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/120225254_333002717924053_400383488379596625_n.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1814.png"
                preload="auto"
                controls="true"
                className="proyectos-video01"
              ></video>
            </div>
            <div className="proyectos-container08">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/119082634_2649603908702189_5797386646451250041_n.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1208.png"
                preload="auto"
                controls="true"
                className="proyectos-video02"
              ></video>
            </div>
            <div className="proyectos-container09">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/Hola%2C+soy+Karla+Pinto+Karla+Pinto+y+como+ya+lo+he+dicho+en+el+vi%CC%81deo%2C+gracias+a+ustedes+es+posible+el+comienzo+de+este+gran+suen%CC%83o.Muy+pronto+estare%CC%81+subiendo+contenido+a+mis+redes+sociales%2C+para+que+se+informen+respecto+a+mis+propuestas+y+.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3123.png"
                preload="auto"
                controls="true"
                className="proyectos-video03"
              ></video>
            </div>
            <div className="proyectos-container10">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/POST7.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_29244.png"
                preload="auto"
                controls="true"
                className="proyectos-video04"
              ></video>
            </div>
            <div className="proyectos-container11">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/GIF93.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_11684.png"
                preload="auto"
                controls="true"
                className="proyectos-video05"
              ></video>
            </div>
            <div className="proyectos-container12">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/muestra+reaccion+gif1.mp4"
                muted="true"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3882.png"
                preload="auto"
                autoPlay="true"
                controls="true"
                className="proyectos-video06"
              ></video>
            </div>
            <div className="proyectos-container13">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEITO4.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3347.png"
                preload="auto"
                controls="true"
                className="proyectos-video07"
              ></video>
            </div>
            <div className="proyectos-container14">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/document_5159423077427184828+(1).mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3510.png"
                preload="auto"
                controls="true"
                className="proyectos-video08"
              ></video>
            </div>
            <div className="proyectos-container15">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO+ROB+AND+RIS.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_20000.png"
                preload="auto"
                controls="true"
                className="proyectos-video09"
              ></video>
            </div>
            <div className="proyectos-container16">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO2+(2).mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_20255.png"
                preload="auto"
                controls="true"
                className="proyectos-video10"
              ></video>
            </div>
            <div className="proyectos-container17">
              <video
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/gifhogar4.mp4"
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1970.png"
                preload="auto"
                controls="true"
                className="proyectos-video11"
              ></video>
            </div>
          </div>
        </div>
        <div className="proyectos-container18">
          <h2 className="proyectos-text12">
            <span>Feed&apos;s de Instagram</span>
            <br></br>
          </h2>
          <div className="proyectos-container19">
            <div className="proyectos-container20">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-DULCES.jpg"
                loading="lazy"
                className="proyectos-image01"
              />
            </div>
            <div className="proyectos-container21">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-AIRTEK.jpg"
                loading="lazy"
                className="proyectos-image02"
              />
            </div>
            <div className="proyectos-container22">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-ROB-Y-RIS.jpg"
                loading="lazy"
                className="proyectos-image03"
              />
            </div>
            <div className="proyectos-container23">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-PIPO.jpg"
                loading="lazy"
                className="proyectos-image04"
              />
            </div>
            <div className="proyectos-container24">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-ETIPLAS.jpg"
                loading="lazy"
                className="proyectos-image05"
              />
            </div>
            <div className="proyectos-container25">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/feed-quesabio.jpg"
                loading="lazy"
                className="proyectos-image06"
              />
            </div>
          </div>
        </div>
        <h1 className="proyectos-text15">
          <span>Páginas web</span>
          <br></br>
        </h1>
        <button type="button" className="proyectos-button button">
          Contáctame para ver más
        </button>
        <Player
          src="https://lottie.host/45dd0d05-d843-4244-bf4d-358da7f04713/z8I1SKW3aK.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="proyectos-lottie-node"
        ></Player>
      </div>
      <div className="proyectos-container26">
        <div className="proyectos-container27">
          <Player
            src="https://lottie.host/155c8faf-8b48-4ef6-9d07-69f51e13aac5/cCehkQsT2x.json"
            loop
            speed="2"
            autoplay
            background="transparent"
            className="proyectos-lottie-node1"
          ></Player>
        </div>
        <div className="proyectos-container28">
          <h1 className="proyectos-text18">
            <span>¿Qué ofrece APE?</span>
            <br></br>
          </h1>
          <span className="proyectos-text21">
            <span>
              Siempre me mantengo actualizado con las últimas tendencias en
              Diseño Web y, gracias a mi experiencia adquirida, decidí mostrar
              mis habilidades a través de una marca personal que no solo ofrece
              servicios para empresas, sino que también brinda oportunidades a
              emprendedores para impulsarse en el mundo digital. Así nació APE
              Experience, una hermosa experiencia que reúne mis iniciales
              (Adrian Pineda Enrique) y representa mi experiencia en el campo
              del diseño web.
            </span>
            <br></br>
            <br></br>
            <span>
              Actualmente, muchas empresas buscan desarrollar páginas web para
              aumentar la credibilidad 
            </span>
            <span>
              de su marca. Sin embargo, no aprovechan al máximo los beneficios
              que una página web puede 
            </span>
            <span>
              ofrecer. La clave está en lograr un posicionamiento sólido en el
              mercado y establecer 
            </span>
            <span>
              conexiones sólidas de empresa a cliente. Esto es exactamente lo
              que APE Experience ofrece: 
            </span>
            <span>
              una página web ideal para llevar tu marca a las estrellas.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="proyectos-container29">
        <div className="proyectos-container30">
          <h1 className="proyectos-text31">
            Personaliza tu servicio ajustado a lo que necesitas para tu negocio
          </h1>
        </div>
        <button type="button" className="proyectos-button1 button">
          Enviar ahora
        </button>
      </div>
      <div>
        <div className="proyectos-container32">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="proyectos-container34">
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
      <footer className="proyectos-footer">
        <div className="proyectos-content">
          <div className="proyectos-details">
            <Link to="/" className="proyectos-navlink1">
              <img
                alt="APE Experience Pié de Página Logo Negro"
                src="/Material web/logo-optimizado-600h.png"
                className="proyectos-image07"
              />
            </Link>
            <p className="proyectos-description">
              Soluciones a medida para crear tu sitio web profesional, atractivo
              y funcional con la tecnología más actualizada totalmente a tu
              alcance.
            </p>
          </div>
        </div>
        <div className="proyectos-content1">
          <div className="proyectos-details1">
            <span className="proyectos-text32">Navegación</span>
            <Link to="/" className="proyectos-navlink2 a.link">
              <span className="proyectos-text33">Inicio</span>
              <br></br>
            </Link>
            <Link to="/sobre-mi" className="proyectos-navlink3 a.link">
              Sobre mi
            </Link>
            <Link to="/servicios" className="proyectos-navlink4 a.link">
              Servicios
            </Link>
            <Link to="/proyectos" className="proyectos-navlink5 a.link">
              Proyectos
            </Link>
            <Link to="/blog" className="proyectos-navlink6 a.link">
              Blog
            </Link>
            <Link to="/contacto" className="proyectos-navlink7 a.link">
              Contacto
            </Link>
          </div>
          <div className="proyectos-socials">
            <a
              href="https://instagram.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="proyectos-link6"
            >
              <img
                alt="Instagram APE Experience"
                src="/instagram.svg"
                className="proyectos-image08 social"
              />
            </a>
            <a
              href="https://facebook.com/apeexperienceve/"
              target="_blank"
              rel="noreferrer noopener"
              className="proyectos-link7"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="proyectos-icon12 social"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://threads.com/ape_experience/"
              target="_blank"
              rel="noreferrer noopener"
              className="proyectos-link8"
            >
              <img
                alt="Threads APE Experience"
                src="/Material web/threads-600h.png"
                className="proyectos-image09 social"
              />
            </a>
          </div>
          <span className="proyectos-copyright">
            Política de Privacidad — Términos y Condiciones — Cookies © 2024
            Derechos reservados por APE Experience.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Proyectos
