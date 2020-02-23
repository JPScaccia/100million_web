import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/dashboard.css'


const DashboardAuthComponent = (props) => {
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
          Your tailored assessments will appear here.<br />
          To continue, please
        </p>
        <div>
          <Link
            className="dashboard_row2Button"
            to="/signin">
            Sign In
          </Link>
          <span id="dashboard_row2ButtonSeparator">
            or
          </span>
          <Link
            className="dashboard_row2Button"
            to="/signup">
            Sign Up
        </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardAuthComponent
