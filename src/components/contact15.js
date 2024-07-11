import React from 'react'

import PropTypes from 'prop-types'

import './contact15.css'

const Contact15 = (props) => {
  return (
    <div
      className={`contact15-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact15-max-width thq-section-max-width">
        <div className="contact15-section-title">
          <div className="contact15-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact15-text01 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="contact15-row">
          <div className="contact15-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                className=""
              ></path>
            </svg>
            <div className="contact15-contact-info">
              <div className="contact15-content2">
                <h3 className="contact15-text02 thq-heading-3">Correo</h3>
                <p className="contact15-text03 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <a
                href="mailto:info@ape-experience.com?subject=Detalles sobre un servicio"
                className="contact15-email thq-body-small"
              >
                {props.email1}
              </a>
            </div>
          </div>
          <div className="contact15-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                className=""
              ></path>
            </svg>
            <div className="contact15-contact-info1">
              <div className="contact15-content4">
                <h3 className="contact15-text04 thq-heading-3">Chat En Vivo</h3>
                <p className="contact15-text05 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact15-email1 thq-body-small">
                {props.link1}
              </span>
            </div>
          </div>
          <div className="contact15-content5">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact15-icon4 thq-icon-medium"
            >
              <path
                d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"
                className=""
              ></path>
            </svg>
            <div className="contact15-contact-info2">
              <div className="contact15-content6">
                <h3 className="contact15-text06 thq-heading-3">WhatsApp</h3>
                <p className="contact15-text07 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <a
                href="https://wa.me/c/584126930629"
                target="_blank"
                rel="noreferrer noopener"
                className="contact15-phone thq-body-small"
              >
                {props.phone1}
              </a>
            </div>
          </div>
          <div className="contact15-content7">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                className=""
              ></path>
            </svg>
            <div className="contact15-contact-info3">
              <div className="contact15-content8">
                <h3 className="contact15-text08 thq-heading-3">Oficina</h3>
                <p className="contact15-text09 thq-body-large">
                  {props.content6}
                </p>
              </div>
              <span className="contact15-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact15.defaultProps = {
  phone1: '+58 (412) 69 30 629',
  link1: 'Iniciar un nuevo chat',
  content4:
    'Escribe al chat de soporte para ponerte en contacto conmigo inmediatamente.',
  content6: 'Próximamente',
  email1: 'info@ape-experience.com',
  address1: 'Maracaibo, Venezuela.',
  content5:
    'Puedes ponerte en contacto directamente vía whatsapp a mi número de atención.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading1: 'Contáctame',
  content1: 'Get in touch with us today!',
  content3:
    'Puedes enviarme un correo electrónico a mi correo corporativo para cualquier duda o problema técnico.',
  rootClassName: '',
}

Contact15.propTypes = {
  phone1: PropTypes.string,
  link1: PropTypes.string,
  content4: PropTypes.string,
  content6: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content5: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  content3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Contact15
