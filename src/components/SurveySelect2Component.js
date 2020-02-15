import React from 'react'
import '../css/surveys.css'
import '../css/surveys_select.css'


const SurveySelect2Component = (props) => {
  const { onClick, transitions } = props

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
          Please choose from the following options.<br />
        </p>
        <div>
          {transitions.map(transition => {
            return (
              <>
                <button className="surveySelectButton"
                  value={transition.stateName}
                  onClick={onClick}>
                  {transition.text}
                </button>
                <br />
              </>
            )
          })
          }
        </div>
      </div>
      <div id="surveys_selectRow3">

      </div>
    </div>
  )
}

export default SurveySelect2Component
