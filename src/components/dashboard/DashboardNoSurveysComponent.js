import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/dashboard.css'


const DashboardNoSurveysComponent = (props) => {
  return (
    <div>
      <div id="dashboard_row1">
        <div id="dashboard_row1Tint">
          <p id="dashboard_row1Header">
            Dashboard
          </p>
        </div>
      </div>
      <div id="dashboard_row2">
        <p id="dashboard_row2Body">
          You have not completed any surveys yet.
        </p>
        <div>
          <Link
            className="dashboard_row2Button"
            to="/surveys">
            Surveys
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardNoSurveysComponent
