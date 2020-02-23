import React, { Component } from 'react'
import { Form, FormSection, Field } from 'redux-form'
import InputField from './form/InputField'
import ComponentConsts from '../consts/ComponentConsts'
import Consts from '../consts/Consts'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'


const AccountPasswordComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <p>Change your password<br /></p>

      <div className="form">
        <div className="formError">
          {error}
        </div>

        <Form onSubmit={onSubmit}>
          <FormSection name="password">
            <div>
              <Field
                name="currentPassword"
                placeholder="Current password"
                component={InputField}
                type="password" />
            </div>
            <div>
              <Field
                name="newPassword"
                placeholder="New password"
                component={InputField}
                type="password" />
            </div>
            <div>
              <Field
                name="confirmPassword"
                placeholder="Confirm password"
                component={InputField}
                type="password" />
            </div>
          </FormSection>
          <RemoteSubmitButtonComponent
            formName={ComponentConsts.AccountPasswordFormComponent}
            disabled={submitting}
            buttonText={"Save password"} />
        </Form>
      </div>
    </div>
  )
}

export default AccountPasswordComponent
