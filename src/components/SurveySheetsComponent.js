import React from 'react'
import SurveySheetIntroComponent from './SurveySheetIntroComponent'
import SurveySheetMatrixComponent from './SurveySheetMatrixComponent'
import '../css/surveys_sheets.css'


const SurveySheetsComponent = (props) => {
  const { introduction, matrix, buttonText, surveyName, onChange, onNextPage } = props

  return (
    <div id="surveys_sheets_row1">
      <p id="surveys_sheets_row1Header">
        {surveyName}
      </p>

      <SurveySheetIntroComponent
        introduction={introduction} />

      <SurveySheetMatrixComponent
        matrix={matrix}
        onChange={onChange} />

      <input
        className="surveys_sheetsNextButton"
        type="button"
        onClick={onNextPage}
        value={buttonText} />
    </div>
  )
}

export default SurveySheetsComponent
