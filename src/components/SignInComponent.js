import React from 'react'
import { Form, FormSection, Field } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
import InputField from './form/InputField'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'
import '../css/signin.css'
import '../css/signinform.css'

const SignInComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <div id="signin_row1">
        <div id="signin_row1Tint">
          <p id="signin_row1Header">
            Sign In
        </p>
        </div>
      </div>

      <div id="signin_row2">
        <div id="signin_row2Body">
          Please sign in.
        </div>
        <div id="signin_form">
          <Form onSubmit={onSubmit}>
            <FormSection name="user">
              <table id="signin_table">
                <tr className="signin_table_row">
                  <td>
                  </td>
                  <td>
                    <div id="formError">
                      {error}
                    </div>
                  </td>
                </tr>
                <tr className="signin_table_row">
                  <td className="signin_form_fieldLabel">
                    Username
                  </td>
                  <td>
                    <Field
                      name="username"
                      component={InputField}
                      type="text" />

                  </td>
                </tr>
                <tr className="signin_table_row">
                  <td className="signin_form_fieldLabel">
                    Password
                  </td>
                  <td>
                    <Field
                      name="password"
                      component={InputField}
                      type="password" />
                  </td>
                </tr>
              </table>
              <div>
              </div>
              <div>
              </div>
            </FormSection>
            <RemoteSubmitButtonComponent
              formName={ComponentConsts.SignInFormComponent}
              disabled={submitting}
              buttonText={'Sign In!'} />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignInComponent
