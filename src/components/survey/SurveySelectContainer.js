import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import fetchAllSurveysActionCreator from '../../actions/fetchAllSurveysActionCreator'
import fetchSurveyActionCreator from '../../actions/fetchSurveyActionCreator'
import startSurveyActionCreator from '../../actions/startSurveyActionCreator'
import SurveySelectComponent from './SurveySelectComponent'


class SurveySelectContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllSurveys()
  }

  render() {
    const { error, handleSubmit, submitting, surveys } = this.props

    return (
      <SurveySelectComponent
        surveys={surveys}
        onSubmit={handleSubmit(this.handleSelect)}
        submitting={submitting}
        error={error} />
    )
  }

  async handleSelect(values, dispatch) {
    try {
      this.validateForm(values)
    }
    catch (error) {
      throw new SubmissionError({
        survey: error,
        _error: 'Survey selection failed!'
      })
    }

    try {
      await this.props.fetchSurvey(values.survey.id)
      await this.props.startSurvey(this.props.userId, values.survey.id)
    }
    catch (error) {
      throw new SubmissionError({
        _error: 'Error on backend!'
      })
    }
  }

  validateForm(values, dispatch) {
    var errors = {}

    const survey = values.survey
    const { id } = survey

    if (!id || id === -1) {
      errors.id = 'Survey required'
    }

    if (Object.keys(errors).length !== 0) {
      throw errors
    }
  }
}

const mapStateToProps = (state) => {
  var props = {
    initialValues: {
      survey: {
        id: -1
      }
    },
    userId: state.authReducer.user.id,
    surveys: state.surveyReducer.surveys || []
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSurveys: () => dispatch(fetchAllSurveysActionCreator()),
    startSurvey: (userId, surveyId) => dispatch(startSurveyActionCreator(userId, surveyId)),
    fetchSurvey: (surveyId) => dispatch(fetchSurveyActionCreator(surveyId)),
  }
}

SurveySelectContainer = reduxForm({
  form: ComponentConsts.SelectSurveyFormComponent
})(SurveySelectContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveySelectContainer)
