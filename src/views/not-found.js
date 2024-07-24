import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Not-Found - APE Experience</title>
        <meta property="og:title" content="Not-Found - APE Experience" />
      </Helmet>
      <NotFound4 rootClassName="not-found4-root-class-name"></NotFound4>
    </div>
  )
}

export default NotFound
