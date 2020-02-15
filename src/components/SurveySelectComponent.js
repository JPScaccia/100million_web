import React from 'react'
import { Form, FormSection, Field } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
import SelectField from './SelectField'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'


const SurveySelectComponent = (props) => {
  const { error, onSubmit, submitting, surveys } = props

  return (
    <div>
      <p>Please select your survey.<br/></p>

      <Form onSubmit={ onSubmit }>
        <FormSection name="survey">
          <Field
            name="id"
            component={SelectField}>
            <option
              key={-1}
              value={-1}
              >
              Select a survey...
            </option>
            {surveys.map(survey => {
              return (
                <option
                  key={survey.id}
                  value={survey.id}>
                  {survey.name}
                </option>
              )
            })}
          </Field>
        </FormSection>
        <div>
        {error && <strong>{error}</strong>}
        </div>
        <br/>

        <RemoteSubmitButtonComponent
          formName={ComponentConsts.SelectSurveyFormComponent}
          disabled={ submitting }
          buttonText={'Start'} />
      </Form>
    </div>
  )
}

export default SurveySelectComponent
