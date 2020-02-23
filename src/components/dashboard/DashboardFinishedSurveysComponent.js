import React from 'react'
import DashboardSelectFinishedSurveyContainer from './DashboardSelectFinishedSurveyContainer'
import DashboardDownloadReportContainer from './DashboardDownloadReportContainer'
import DashboardReportIframeContainer from './DashboardReportIframeContainer'
import DashboardUploadFileButtonContainer from './DashboardUploadFileButtonContainer'


const DashboardFinishedSurveysComponent = (props) => {
  const { onLoad } = props

  return (
    <div id="dashboard_report_row1">
      <div id="dashboard_report_col1">
        <DashboardSelectFinishedSurveyContainer />
        <DashboardDownloadReportContainer />
        <DashboardUploadFileButtonContainer />
      </div>
      <div id="dashboard_report_col2">
        <DashboardReportIframeContainer />
      </div>
    </div>
  )
}

export default DashboardFinishedSurveysComponent
