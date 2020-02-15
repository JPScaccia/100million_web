import React from 'react'
import { Form, FormSection, Field } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
import InputField from './InputField'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'
import '../css/signin.css'
import '../css/signinform.css'


const SignUpComponent = (props) => {
  const { error, onSubmit, submitting } = props
  return (
    <div>
      <div id="signin_row1">
        <div id="signin_row1Tint">
          <p id="signin_row1Header">
            Sign Up
        </p>
        </div>
      </div>

      <div id="signin_row2">
        <div id="signin_row2Body">
          Let's create your new account.
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
                    Email
                  </td>
                  <td>
                    <Field
                      name="email"
                      component={InputField}
                      type="email" />
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
                <tr className="signin_table_row">
                  <td className="signin_form_fieldLabel">
                    Confirm password
                  </td>
                  <td>
                    <Field
                      name="confirmPassword"
                      component={InputField}
                      type="password" />
                  </td>
                </tr>
              </table>
            </FormSection>
            <RemoteSubmitButtonComponent
              formName={ComponentConsts.SignUpFormComponent}
              disabled={submitting}
              buttonText={'Sign Up!'} />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent
