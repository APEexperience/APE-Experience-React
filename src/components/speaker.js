import React from 'react'

import PropTypes from 'prop-types'

import './speaker.css'

const Speaker = (props) => {
  return (
    <div className={`speaker-speaker ${props.rootClassName} `}>
      <img alt="image" src={props.image} className="speaker-image" />
      <div className="speaker-deails">
        <h3 className="speaker-name">{props.name}</h3>
        <div className="speaker-position">
          <div className="speaker-point"></div>
          <span className="speaker-caption">{props.detail}</span>
        </div>
      </div>
    </div>
  )
}

Speaker.defaultProps = {
  image: '/speakers-1-1500w.png',
  name: 'Samantha Johnson',
  detail: 'CEO, Opary',
  rootClassName: '',
}

Speaker.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  detail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Speaker
