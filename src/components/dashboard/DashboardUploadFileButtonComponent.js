import React from 'react'
import { Form } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import RemoteSubmitButtonComponent from '../RemoteSubmitButtonComponent'


const DashboardUploadFileButtonComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <RemoteSubmitButtonComponent
          formName={ComponentConsts.UploadFileButtonFormComponent}
          buttonText="Upload Files"
          disabled={submitting} />
      </Form>
    </div>
  )
}

export default DashboardUploadFileButtonComponent
