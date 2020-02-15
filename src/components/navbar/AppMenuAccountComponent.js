import React from 'react'
import AppMenuUnauthedComponent from './AppMenuUnauthedComponent'
import AppMenuAuthedComponent from './AppMenuAuthedComponent'

const AppMenuAccountComponent = (props) => {
  const { isAuthenticated, onSignout, username } = props


  let accountMenu = null

  if (isAuthenticated) {
    accountMenu = <AppMenuAuthedComponent
      onSignout={onSignout}
      username={username} />
  }
  else {
    accountMenu = <AppMenuUnauthedComponent />
  }

  return (
    accountMenu
  )
}

export default AppMenuAccountComponent