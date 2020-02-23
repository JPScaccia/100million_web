import React from 'react'
import { Form, Field } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import RemoteSubmitButtonComponent from '../RemoteSubmitButtonComponent'


const DashboardDownloadReportComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <p>
        Get a printable version<br />
        of your report
      </p>
      Option 1
      <Form onSubmit={onSubmit}>
        <RemoteSubmitButtonComponent
          formName={ComponentConsts.DownloadReportFormComponent}
          buttonText="Generate and open"
          disabled={submitting} />
      </Form>
      <br />
      Option 2
      <br />
      <a href="report.txt" download="report.txt">
        <input type="button" value="Download now" />
      </a>
    </div>
  )
}

export default DashboardDownloadReportComponent
