import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/surveys.css'


const SurveyAuthComponent = (props) => {
  return (
    <div>
      <div id="surveys_row1">
        <div id="surveys_row1Tint">
          <p id="surveys_row1Header">
            Surveys
        </p>
        </div>
      </div>
      <div id="surveys_row2">
        <p id="surveys_row2Body">
          We assess your strengths and provide services and tools for strengthening other areas.<br />
          To continue, please
         </p>
        <div>
          <Link
            className="surveys_row2Button"
            to="/signin">
            Sign In
          </Link>
          <span id="surveys_row2ButtonSeparator">
            or
          </span>
          <Link
            className="surveys_row2Button"
            to="/signup">
            Sign Up
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SurveyAuthComponent
