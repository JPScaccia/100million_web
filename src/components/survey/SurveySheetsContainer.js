import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import util from 'util'
import nextSurveyPageActionCreator from '../../actions/nextSurveyPageActionCreator'
import saveSurveyAnswersActionCreator from '../../actions/saveSurveyAnswersActionCreator'
import setSurveyAnswerActionCreator from '../../actions/setSurveyAnswerActionCreator'
import finishSurveyActionCreator from '../../actions/finishSurveyActionCreator'
import SurveySheetsComponent from './SurveySheetsComponent'


class SurveySheetsContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
  }

  async componentDidMount() { }

  handleChange(event) {
    console.log("handleChange: " + util.inspect(event.target.name))
    console.log("handleChange: " + JSON.stringify(event.target.value))
    // console.log("handleChange: " + util.inspect(event.target.value, false, null, true))
    // console.log("handleChange: " + util.inspect(event.target))

    // names have the pattern:
    // name_item_<item_number>_option
    const itemInfo = event.target.name.split('_')
    const itemNumber = itemInfo[2]
    const value = event.target.value

    this.props.setAnswer(this.props.userSurveyId, itemNumber, value)
  }

  async handleNextPage(event) {
    const { userSurveyId, answers, sheetNumber, survey, saveAnswers, nextPage, finishSurvey } = this.props

    await saveAnswers(userSurveyId, answers, sheetNumber)

    const nextSheetNumber = sheetNumber + 1

    if (nextSheetNumber < survey.sheets.length) {
      nextPage(nextSheetNumber)
    }
    else {
      finishSurvey(userSurveyId)
    }
  }

  render() {
    const { introduction, matrix, sheetNumber, survey } = this.props

    let buttonText = "Next"
    const nextSheetNumber = sheetNumber + 1

    if (nextSheetNumber === survey.sheets.length) {
      buttonText = "Finish"
    }

    return (
      <SurveySheetsComponent
        surveyName={survey.name}
        introduction={introduction}
        matrix={matrix}
        onChange={this.handleChange}
        onNextPage={this.handleNextPage}
        buttonText={buttonText} />
    )
  }
}

const mapStateToProps = state => {
  const sheetNumber = state.surveyReducer.sheetNumber || 0
  const introduction = state.surveyReducer.survey.sheets[sheetNumber].introduction
  const matrix = state.surveyReducer.survey.sheets[sheetNumber].matrix

  return {
    surveyId: state.surveyReducer.surveyId,
    survey: state.surveyReducer.survey,
    sheetNumber: sheetNumber,
    introduction: introduction,
    matrix: matrix,
    answers: state.surveyReducer.answers,
    userId: state.authReducer.user.id,
    userSurveyId: state.surveyReducer.userSurveyId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextPage: (page) => dispatch(nextSurveyPageActionCreator(page)),
    saveAnswers: (userSurveyId, answers, lastSheetVisited) => dispatch(saveSurveyAnswersActionCreator(userSurveyId, answers, lastSheetVisited)),
    setAnswer: (userSurveyId, itemNumber, value) => dispatch(setSurveyAnswerActionCreator(userSurveyId, itemNumber, value)),
    finishSurvey: (userSurveyId, answers) => dispatch(finishSurveyActionCreator(userSurveyId, answers))
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveySheetsContainer))
