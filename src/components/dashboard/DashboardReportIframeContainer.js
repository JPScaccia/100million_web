import React, { Component } from 'react'
import { connect } from 'react-redux'
import IframeResizer from 'iframe-resizer-react'
import Consts from '../../consts/Consts'


class DashboardReportIframeContainer extends Component {
  constructor(props) {
    super(props)
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad(event) { }

  render() {
    const { userSurveyId } = this.props
    const token = localStorage.getItem(Consts.AccessToken)

    let reportPath = `/api/survey/report/${userSurveyId}?token=${token}`

    if (process.env.REACT_APP_ENV === 'development') {
      reportPath = `http://127.0.0.1:3001/api/survey/report/${userSurveyId}`
    }

    return (
      <IframeResizer
        frameBorder="0"
        src={reportPath}
        style={{ minWidth: '100%' }} />
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
  return {}
}

export default DashboardReportIframeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardReportIframeContainer)
