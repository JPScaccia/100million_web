import React from 'react'
import SurveyAuthContainer from './SurveyAuthContainer'
import SurveySelectContainer from './SurveySelectContainer'
import SurveySelect2Container from './SurveySelect2Container'
import SurveySheetsContainer from './SurveySheetsContainer'
import SurveyScoringContainer from './SurveyScoringContainer'
import SurveyStage from '../consts/SurveyStage'


const SurveyPageComponent = (props) => {
  const { surveyStage } = props
  let component = null

  switch (surveyStage) {
    case SurveyStage.Auth:
      component = <SurveyAuthContainer />
    break

    case SurveyStage.Select:
      component = <SurveySelect2Container />
    break

    case SurveyStage.Sheets:
      component = <SurveySheetsContainer />
    break

    case SurveyStage.Scoring:
      component = <SurveyScoringContainer />
    break
  }

  return (
    <div>
      {component}
    </div>
  )
}

export default SurveyPageComponent
