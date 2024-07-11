import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing14-pricing23 thq-section-padding">
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <span className="pricing14-text thq-body-small">
            {props.content1}
          </span>
          <div className="pricing14-content">
            <h2 className="pricing14-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing14-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        {isMonthly && (
          <div className="pricing14-container">
            <div className="pricing14-column thq-card">
              <div className="pricing14-price">
                <div className="pricing14-price01">
                  <p className="pricing14-text03 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing14-text04 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large pricing14-text05">
                    {props.plan1Yearly}
                  </p>
                </div>
                <div className="pricing14-list">
                  <div className="pricing14-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button thq-button-outline thq-button-animated">
                <span>{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price02">
                <div className="pricing14-price03">
                  <p className="pricing14-text10 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing14-text11 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large pricing14-text12">
                    {props.plan2Yearly}
                  </p>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button1 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price04">
                <div className="pricing14-price05">
                  <p className="pricing14-text18 thq-body-large">
                    {props.plan3}
                  </p>
                  <h3 className="pricing14-text19 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="pricing14-text20 thq-body-large">
                    {props.plan3Yearly}
                  </p>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item07">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon14 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="pricing14-text21 thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item08">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon16 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="pricing14-text22 thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item09">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon18 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="pricing14-text23 thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item10">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon20 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="pricing14-text24 thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing14-icon22 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="pricing14-text25 thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing14-container1">
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price06">
                <div className="pricing14-price07">
                  <span className="pricing14-text27 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing14-text28 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button3 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price08">
                <div className="pricing14-price09">
                  <span className="pricing14-text34 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing14-text35 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button4 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <span className="pricing14-text42 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing14-text43 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button5 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan3Feature11: 'Feature text goes here',
  plan21: 'Business plan',
  plan3Feature21: 'Feature text goes here',
  plan1Yearly: 'or $200 yearly',
  heading1: 'Pricing plan',
  plan1Action: 'Get started',
  plan3Feature3: 'Feature text goes here',
  plan3Yearly1: 'or $49 monthly',
  plan1Feature2: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  plan3Feature41: 'Feature text goes here',
  plan2Feature2: 'Feature text goes here',
  plan2Yearly1: 'or $29 monthly',
  plan1: 'Basic plan',
  plan11: 'Basic plan',
  plan2Price1: '$299/yr',
  plan3Yearly: 'or $499 yearly',
  plan3Action: 'Get started',
  plan1Yearly1: 'or $20 monthly',
  plan2Action1: 'Get started',
  plan2Feature21: 'Feature text goes here',
  plan1Price: '$20/mo',
  plan1Feature3: 'Feature text goes here',
  plan3Feature4: 'Feature text goes here',
  plan3Feature2: 'Feature text goes here',
  plan31: 'Enterprise plan',
  plan3Price: '$49/mo',
  plan3: 'Enterprise plan',
  plan3Price1: '$499/yr',
  plan2Action: 'Get started',
  plan2: 'Business plan',
  plan1Action1: 'Get started',
  plan1Feature21: 'Feature text goes here',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan2Feature11: 'Feature text goes here',
  plan1Price1: '$200/yr',
  plan2Yearly: 'or $299 yearly',
  plan3Action1: 'Get started',
  plan3Feature1: 'Feature text goes here',
  plan2Feature3: 'Feature text goes here',
  plan2Feature1: 'Feature text goes here',
  plan2Price: '$29/mo',
  plan2Feature41: 'Feature text goes here',
  plan1Feature31: 'Feature text goes here',
  plan3Feature5: 'Feature text goes here',
  plan3Feature31: 'Feature text goes here',
  content1: 'Choose the perfect plan for you',
  plan2Feature4: 'Feature text goes here',
  plan3Feature51: 'Feature text goes here',
  plan1Feature1: 'Feature text goes here',
}

Pricing14.propTypes = {
  plan3Feature11: PropTypes.string,
  plan21: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan1Yearly: PropTypes.string,
  heading1: PropTypes.string,
  plan1Action: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan1: PropTypes.string,
  plan11: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3Action: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan31: PropTypes.string,
  plan3Price: PropTypes.string,
  plan3: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan2: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan1Feature21: PropTypes.string,
  content2: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan2Price: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature31: PropTypes.string,
  content1: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan1Feature1: PropTypes.string,
}

export default Pricing14
