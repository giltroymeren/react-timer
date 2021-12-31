import React from "react";
import "./index.css";
import PropTypes from 'prop-types'

const Timer = ({ initial }) => {
  return (
    <div className="mt-100 layout-column align-items-center justify-content-center" >
      <div className="timer-value" data-testid="timer-value">{initial}</div>
      <button className="large" data-testid="stop-button">Stop Timer</button>
    </div >
  )
}

Timer.propTypes = {
  initial: PropTypes.number.isRequired,
}

export default Timer