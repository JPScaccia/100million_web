import React, { Component } from 'react'
import { connect } from 'react-redux'
import setDashboardReportActionCreator from '../../actions/setDashboardReportActionCreator'
import fetchAllFinishedSurveysActionCreator from '../../actions/fetchAllFinishedSurveysActionCreator'
import DashboardAuthComponent from './DashboardAuthComponent'
import DashboardNoSurveysComponent from './DashboardNoSurveysComponent'
import DashboardFinishedSurveysComponent from './DashboardFinishedSurveysComponent'
import DashboardUploadFilesContainer from './DashboardUploadFilesContainer'

class DashboardPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { isAuthenticated, userId, finishedSurveys,
      userSurveyId, fetchAllFinishedSurveys, setDashboardReport } = this.props

    if (isAuthenticated) {
      const finishedSurveys = await fetchAllFinishedSurveys(userId)

      if (finishedSurveys && finishedSurveys.length > 0) {
        if (userSurveyId) {
          await setDashboardReport(userSurveyId)
        }
        else {
          await setDashboardReport(finishedSurveys[0].id)
        }
      }
    }
  }

  render() {
    const { isAuthenticated, isDashboardFileUploads, finishedSurveys } = this.props
    let component = null

    if (isAuthenticated) {
      if (isDashboardFileUploads) {
        component = <DashboardUploadFilesContainer />
      }
      else if (finishedSurveys && finishedSurveys.length > 0) {
        component = <DashboardFinishedSurveysComponent />
      }
      else {
        component = <DashboardNoSurveysComponent />
      }
    }
    else {
      component = <DashboardAuthComponent />
    }

    return (
      <div>
        {component}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  var props = {
    initialValues: {
    },
    isAuthenticated: state.authReducer.isAuthenticated,
    userSurveyId: state.dashboardReducer.userSurveyId,
    userId: state.authReducer.user.id,
    finishedSurveys: state.dashboardReducer.finishedSurveys || [],
    isDashboardFileUploads: state.dashboardReducer.isDashboardFileUploads
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFinishedSurveys: (userId) => dispatch(fetchAllFinishedSurveysActionCreator(userId)),
    setDashboardReport: (userSurveyId) => dispatch(setDashboardReportActionCreator(userSurveyId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPageContainer)
