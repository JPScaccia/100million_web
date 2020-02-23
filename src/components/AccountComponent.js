import React from 'react'
import { Form, FormSection, Field } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
import InputField from './form/InputField'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'
import util from 'util'
import { createTextMask } from 'redux-form-input-masks'


const phoneMask = createTextMask({
  "pattern": "(999) 999-9999",
  "placeholder": " ",
  "guide": true,
  "stripMask": true,
  "allowEmpty": false
})

const AccountComponent = (props) => {
  const { error, onSubmit, submitting } = props

  return (
    <div>
      <h2>
        Account
      </h2>

      <p>Personal details<br /></p>

      <div className="form">
        <div className="formError">
          {error}
        </div>

        <Form onSubmit={onSubmit}>
          <FormSection name="user">
            <div>
              <Field
                id="firstname"
                name="firstname"
                placeholder="First Name"
                component={InputField}
                type="text" />
            </div>
            <div>
              <Field
                name="lastname"
                placeholder="Last Name"
                component={InputField}
                type="text" />
            </div>
            <div>
              <Field
                name="username"
                placeholder="Username"
                component={InputField}
                type="text" />
            </div>
            <div>
              <Field
                name="email"
                placeholder="Email"
                component={InputField}
                type="email" />
            </div>
            <div>
              <Field
                name="phone"
                placeholder="Phone"
                component={InputField}
                {...phoneMask}
                type="text" />
            </div>
            <div>
              <Field
                name="company"
                placeholder="Company"
                component={InputField}
                type="text" />
            </div>
          </FormSection>
          <RemoteSubmitButtonComponent
            formName={ComponentConsts.AccountFormComponent}
            disabled={submitting}
            buttonText={"Save changes"} />
        </Form>

      </div>
    </div>
  )
}

export default AccountComponent
