import React from 'react'
import { Form, Field } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import UploadFileInputField from '../UploadFileInputField'
import RemoteSubmitButtonComponent from '../RemoteSubmitButtonComponent'
// import '../css/dashboard.css'
// import '../css/dashboardform.css'

const DashboardUploadFilesComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <div id="dashboard_row1">
        <div id="dashboard_row1Tint">
          <p id="dashboard_row1Header">
            Upload
        </p>
        </div>
      </div>

      <div id="dashboard_row2">
        <div id="dashboard_row2Body">
          Upload files
        </div>
        <div id="dashboard_form">
          <Form onSubmit={onSubmit}>
            <table id="dashboard_table">
              <tbody>
                <tr className="dashboard_table_row">
                  <td>
                    <div id="formError">
                      {error}
                    </div>
                  </td>
                </tr>
                <tr className="dashboard_table_row">
                  <td>
                    <Field
                      name="filename"
                      component={UploadFileInputField}
                      type="file" />
                  </td>
                </tr>
              </tbody>
            </table>
            <RemoteSubmitButtonComponent
              formName={ComponentConsts.DashboardUploadFileFormComponent}
              disabled={submitting}
              buttonText={'Upload'} />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default DashboardUploadFilesComponent
