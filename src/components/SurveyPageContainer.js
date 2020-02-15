import React, { Component } from 'react'
import { connect } from 'react-redux'
import SurveyPageComponent from './SurveyPageComponent'
import SurveyStage from '../consts/SurveyStage'


class SurveyPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
  }

  render() {
    return (
      <SurveyPageComponent
        surveyStage={this.props.surveyStage} />
    )
  }
}

const mapStateToProps = (state) => {
  let surveyStage = SurveyStage.Auth

  if (state.authReducer.isAuthenticated) {
    surveyStage = state.surveyReducer.surveyStage || SurveyStage.Select

    if (surveyStage === SurveyStage.Finished)
      surveyStage = SurveyStage.Select
  }

  return {
    surveyStage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPageContainer)
