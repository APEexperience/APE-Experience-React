import React from 'react'

import PropTypes from 'prop-types'

import './contact-form4.css'

const ContactForm4 = (props) => {
  return (
    <div
      className={`contact-form4-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-row thq-section-max-width contact-form4-max-width">
        <div className="contact-form4-content thq-flex-column">
          <div className="contact-form4-section-title thq-card">
            <div className="contact-form4-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form4-input">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                Nombre
              </label>
              <input
                type="text"
                id="contact-form-4-name"
                placeholder="Nombre"
                className="contact-form4-text-input thq-input"
              />
            </div>
            <div className="contact-form4-input1">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Correo
              </label>
              <input
                type="email"
                id="contact-form-4-email"
                required="true"
                placeholder="Correo"
                className="contact-form4-text-input1 thq-input"
              />
            </div>
            <div className="contact-form4-container">
              <label
                htmlFor="contact-form-4-message"
                className="thq-body-small"
              >
                Mensaje
              </label>
              <textarea
                id="contact-form-4-message"
                rows="3"
                placeholder="Escribe tu mensaje"
                className="contact-form4-textarea thq-input"
              ></textarea>
            </div>
            <div className="contact-form4-checkbox">
              <input
                type="checkbox"
                id="contact-form-4-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-4-check"
                className="contact-form4-text5 thq-body-small"
              >
                Yo acepto todos los términos y políticas de APE Experience.
              </label>
            </div>
            <button
              type="submit"
              className="contact-form4-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm4.defaultProps = {
  rootClassName: '',
  content2: 'Get in touch with us',
  content1:
    'Envíame un correo con tu duda directamente a mi correo corporativo mediante este formulario.',
  heading1: 'Contáctame vía correo electrónico',
  action: 'Enviar',
}

ContactForm4.propTypes = {
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm4
