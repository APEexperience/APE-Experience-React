import React from 'react'

import PropTypes from 'prop-types'

import './section-numeral.css'

const SectionNumeral = (props) => {
  return (
    <div className="section-numeral-section-numeral">
      <div className="section-numeral-divide"></div>
      <p className="section-numeral-text">{props.number}</p>
    </div>
  )
}

SectionNumeral.defaultProps = {
  number: '01',
}

SectionNumeral.propTypes = {
  number: PropTypes.string,
}

export default SectionNumeral
