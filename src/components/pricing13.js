import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing13.css'

const Pricing13 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`pricing13-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="pricing13-max-width thq-section-max-width">
        <div className="pricing13-section-title">
          <span className="pricing13-text thq-body-small">
            {props.content1}
          </span>
          <div className="pricing13-content">
            <h2 className="pricing13-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing13-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        {isMonthly && (
          <div className="pricing13-container">
            <div className="pricing13-column thq-card">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="pricing13-icon"
              >
                <path
                  d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"
                  className=""
                ></path>
              </svg>
              <div className="pricing13-price">
                <div className="pricing13-price1">
                  <p className="pricing13-text03 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing13-text04 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing13-list">
                  <div className="pricing13-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing13-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing13-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing13-button thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing13-column1 thq-card">
              <div className="pricing13-price2">
                <svg
                  viewBox="0 0 1243.4285714285713 1024"
                  className="pricing13-icon08"
                >
                  <path
                    d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"
                    className=""
                  ></path>
                </svg>
                <div className="pricing13-price3">
                  <p className="pricing13-text10 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing13-text11 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="pricing13-text12 thq-body-large">
                    {props.plan2Yearly}
                  </p>
                </div>
                <div className="pricing13-list1">
                  <div className="pricing13-list-item03">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing13-icon10 thq-icon-small"
                    >
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="pricing13-text13 thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing13-list-item04">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing13-icon12 thq-icon-small"
                    >
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="pricing13-text14 thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing13-list-item05">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing13-icon14 thq-icon-small"
                    >
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="pricing13-text15 thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing13-list-item06">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing13-icon16 thq-icon-small"
                    >
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="pricing13-text16 thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing13-button1 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing13-container1">
            <div className="pricing13-column2 thq-card">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="pricing13-icon18"
              >
                <path
                  d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"
                  className=""
                ></path>
              </svg>
              <div className="pricing13-price4">
                <div className="pricing13-price5">
                  <span className="pricing13-text18 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing13-text19 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing13-list2">
                  <div className="pricing13-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing13-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing13-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing13-button2 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing13-column3 thq-card">
              <div className="pricing13-price6">
                <svg
                  viewBox="0 0 1243.4285714285713 1024"
                  className="pricing13-icon26"
                >
                  <path
                    d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"
                    className=""
                  ></path>
                </svg>
                <div className="pricing13-price7">
                  <span className="pricing13-text25 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing13-text26 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing13-list3">
                  <div className="pricing13-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing13-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing13-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing13-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing13-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing13.defaultProps = {
  plan2Action1: 'Get started',
  plan21: 'Business plan',
  plan1Feature21: 'Feature text goes here',
  plan2Price: '$29/mo',
  plan2Feature2: 'Feature text goes here',
  plan2Action: 'Get started',
  plan1Action1: 'Get started',
  plan2Feature4: 'Feature text goes here',
  plan2Feature3: 'Feature text goes here',
  rootClassName: '',
  plan1: 'Basic plan',
  plan2Feature21: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  plan11: 'Basic plan',
  plan2Feature11: 'Feature text goes here',
  plan1Feature3: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  content1: 'Choose the perfect plan for you',
  plan2Yearly1: 'or $29 monthly',
  plan1Yearly1: 'or $20 monthly',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan2Price1: '$299/yr',
  heading1: 'Pricing plan',
  plan2Feature1: 'Feature text goes here',
  plan1Feature31: 'Feature text goes here',
  plan2Feature41: 'Feature text goes here',
  plan1Feature1: 'Feature text goes here',
  plan2Yearly: 'or $299 yearly',
  plan2: 'Business plan',
  plan1Price: '$20/mo',
  plan1Action: 'Get started',
  plan1Feature2: 'Feature text goes here',
  plan1Yearly: 'or $200 yearly',
  plan1Price1: '$200/yr',
}

Pricing13.propTypes = {
  plan2Action1: PropTypes.string,
  plan21: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan2Price: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Action: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Feature3: PropTypes.string,
  rootClassName: PropTypes.string,
  plan1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan11: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Feature11: PropTypes.string,
  content1: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  content2: PropTypes.string,
  plan2Price1: PropTypes.string,
  heading1: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan2: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan1Price1: PropTypes.string,
}

export default Pricing13
