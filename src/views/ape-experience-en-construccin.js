import React from 'react'

import { Helmet } from 'react-helmet'

import './ape-experience-en-construccin.css'

const APEExperienceEnConstruccin = (props) => {
  return (
    <div className="ape-experience-en-construccin-container">
      <Helmet>
        <title>APE Experience</title>
        <meta property="og:title" content="APE Experience" />
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
        <div className="ape-experience-en-construccin-hero-content">
          <h1 className="ape-experience-en-construccin-text">
            <span>Estamos en  </span>
            <span className="ape-experience-en-construccin-text2">
              Construcción
            </span>
            <span> para ofrecerte un mejor servicio de Diseño Web.</span>
          </h1>
          <div className="ape-experience-en-construccin-caption">
            <a
              href="https://ape-experience.com/instagram.svg"
              target="_blank"
              rel="noreferrer noopener"
              className="ape-experience-en-construccin-instagram button-style-1 button"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="ape-experience-en-construccin-icon"
              >
                <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
            </a>
            <p className="ape-experience-en-construccin-caption1">
              <span className="ape-experience-en-construccin-text4">
                Síguenos en Instagram
              </span>
              <span className="ape-experience-en-construccin-text5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ape-experience-en-construccin-text6">
                para mantenerte informado.
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </section>
      <div className="ape-experience-en-construccin-container2">
        <img
          alt="APE Experience"
          src="/Material web/logo-optimizado-200h.png"
          className="ape-experience-en-construccin-image1"
        />
      </div>
    </div>
  )
}

export default APEExperienceEnConstruccin
