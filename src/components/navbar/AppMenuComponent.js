import React from 'react'
import { Link } from 'react-router-dom'
import AppMenuAccountComponent from './AppMenuAccountComponent'
import logo from '../../img/small-w.png'

const AppMenuComponent = (props) => {
  const { isAuthenticated, onSignout, username } = props


  return (
    <>
      <AppMenuAccountComponent
        isAuthenticated={isAuthenticated}
        onSignout={onSignout}
        username={username}
      />
      <div id="navBarRow2">
        <div id="navBarLeft">
          <Link to="/">
            <span className='caption'>Home</span>
          </Link>
          <Link to="/surveys">
            <span className='caption'>Surveys</span>
          </Link>
          <Link to="/dashboard">
            <span className='caption'>Dashboard</span>
          </Link>
        </div>
        <div id="navBarRight">
          <Link to="/about">
            <span className='caption'>About</span>
          </Link>
          <Link to="/faq">
            <span className='caption'>FAQ</span>
          </Link>
          <Link to="/rtt">
            <span className='caption'>RTT</span>
          </Link>
        </div>
      </div>
      <div id="navBarRow3">
        <div id="navBarRow3Left"></div>
        <div id="navBarRow3Right"></div>
      </div>
      <img src={logo} id="navBarLogo" />
    </>)
}

export default AppMenuComponent
