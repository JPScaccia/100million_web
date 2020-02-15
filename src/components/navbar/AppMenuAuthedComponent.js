import React from 'react'
import { Link } from 'react-router-dom'


const AppMenuAuthedComponent = (props) => {
  const { onSignout, username } = props

  return (
    <div id="navBarRow1">
      <a href="" onClick={onSignout}>
        <span id='navBarBlueButton' className="caption">
          Sign Out
          </span>
      </a>
      <Link to="/account">
        <span id='navBarLightBlueButton' className="caption">
          {username}
        </span>
      </Link>
    </div>
  )
}

export default AppMenuAuthedComponent
