import React from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2 className="banner1-title thq-heading-2">{props.heading1}</h2>
        </div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: 'Company Name',
  content1: 'Company mission statement',
  action1: 'Call to Action',
  rootClassName: '',
}

Banner1.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner1
