import React from 'react'
import { Form, FormSection, Field } from 'redux-form'
import SelectField from '../SelectField'
import '../../css/dashboard_report.css'

const DashboardSelectFinishedSurveyComponent = (props) => {
  const { error, onSubmit, submitting, listSize,
    selectedUserSurveyId, onChange, finishedSurveys } = props

  return (
    <div>
      <p id="dashboard_report_col1Header">
        Completed Surveys
      </p>

      <Form onSubmit={onSubmit}>
        <FormSection name="survey">
          <Field
            name="id"
            size={listSize}
            component={SelectField}
            selection={selectedUserSurveyId}
            onChange={onChange}>
            {finishedSurveys.map(finishedSurvey => {
              return (
                <option
                  key={finishedSurvey.id}
                  value={finishedSurvey.id}>
                  {finishedSurvey.name}
                </option>
              )
            })}
          </Field>
        </FormSection>
        <div>
          {error && <strong>{error}</strong>}
        </div>
        <br />
      </Form>
    </div>
  )
}

export default DashboardSelectFinishedSurveyComponent
