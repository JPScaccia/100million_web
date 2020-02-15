import React from 'react'
import util from 'util'
import DashboardNoSurveysComponent from './DashboardNoSurveysComponent'
import DashboardAuthComponent from './DashboardAuthComponent'
import DashboardFinishedSurveysComponent from './DashboardFinishedSurveysComponent'


const DashboardComponent = (props) => {
  const { isAuthenticated, finishedSurveys } = props
  let component = null

  if (!isAuthenticated) {
    component = <DashboardAuthComponent />
  }
  else {
    if (finishedSurveys && finishedSurveys.length > 0) {
      component = (
        <DashboardFinishedSurveysComponent />
      )
    }
    else {
      component = <DashboardNoSurveysComponent />
    }
  }

  return (
    <div>
    {component}
    </div>
  )
}

export default DashboardComponent
