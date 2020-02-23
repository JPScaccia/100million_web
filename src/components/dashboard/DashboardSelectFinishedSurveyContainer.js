import React, { Component } from 'react'
import { connect } from 'react-redux'
import setDashboardReportActionCreator from '../../actions/setDashboardReportActionCreator'
import { reduxForm, SubmissionError } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import DashboardSelectFinishedSurveyComponent from './DashboardSelectFinishedSurveyComponent'


class DashboardSelectFinishedSurveyContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
  }

  async handleSelection(event) {
    const { setDashboardReport } = this.props

    const userSurveyId = parseInt(event.target.value)
    await setDashboardReport(userSurveyId)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { error, handleSubmit, submitting,
      finishedSurveys, userSurveyId } = this.props

    let listSize = 1
    let selectedUserSurveyId = userSurveyId

    if (finishedSurveys.length > 0) {
      if (!userSurveyId) {
        selectedUserSurveyId = finishedSurveys[0].id
      }

      if (finishedSurveys.length >= 5) {
        listSize = 5
      }
      else if (finishedSurveys.length >= 1) {
        listSize = finishedSurveys.length
      }
    }

    return (
      <DashboardSelectFinishedSurveyComponent
        listSize={listSize}
        submitting={submitting}
        selectedUserSurveyId={selectedUserSurveyId}
        onChange={this.handleSelection}
        onSubmit={this.handleSubmit}
        finishedSurveys={finishedSurveys}
        error={error} />
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    userId: state.authReducer.user.id,
    finishedSurveys: state.dashboardReducer.finishedSurveys || [],
    userSurveyId: state.dashboardReducer.userSurveyId
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDashboardReport: (userSurveyId) => dispatch(setDashboardReportActionCreator(userSurveyId)),
  }
}

DashboardSelectFinishedSurveyContainer = reduxForm({
  form: ComponentConsts.SelectSurveyFormComponent
})(DashboardSelectFinishedSurveyContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSelectFinishedSurveyContainer)
