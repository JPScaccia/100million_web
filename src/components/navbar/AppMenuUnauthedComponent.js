import React from 'react'
import { Link } from 'react-router-dom'


const AppMenuUnathedComponent = (props) => {
  return (
    <div id="navBarRow1">
      <Link to="/signin">
        <span id='navBarBlueButton' className="caption">
          Sign In
          </span>
      </Link>
      <Link to="/signup">
        <span id='navBarLightBlueButton' className="caption">
          Sign Up
          </span>
      </Link>
    </div>
  )
}

export default AppMenuUnathedComponent
