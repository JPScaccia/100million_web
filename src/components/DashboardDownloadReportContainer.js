import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
import fetchDownloadReportUrlActionCreator from '../actions/fetchDownloadReportUrlActionCreator'
import DashboardDownloadReportComponent from './DashboardDownloadReportComponent'


class DashboardDownloadReportContainer extends Component {
  constructor(props) {
    super(props)
    this.handleDownload = this.handleDownload.bind(this)
  }

  componentDidMount() {
  }

  async handleDownload(values) {
    try {
      let response = await this.props.fetchDownloadReportUrl(this.props.userSurveyId)
      window.open(response.url)
    }
    catch (error) {
      throw new SubmissionError({
        _error: 'Error on backend!'
      })
    }
  }

  render() {
    const { error, handleSubmit, submitting } = this.props

    return (
      <DashboardDownloadReportComponent
        onSubmit={handleSubmit(this.handleDownload)}
        submitting={submitting}
        error={error} />
    )
  }
}

const mapStateToProps = (state) => {
  var props = {
    userSurveyId: state.dashboardReducer.userSurveyId
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDownloadReportUrl: (userSurveyId) => dispatch(fetchDownloadReportUrlActionCreator(userSurveyId))
  }
}

DashboardDownloadReportContainer = reduxForm({
  form: ComponentConsts.DownloadReportFormComponent
})(DashboardDownloadReportContainer)

export default DashboardDownloadReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDownloadReportContainer)
