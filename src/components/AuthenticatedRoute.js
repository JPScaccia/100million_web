import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


let AuthenticatedRoute = ({ component: Component, ...rest }) => {

  return (<Route {...rest} render={(props) => {

    return (
    rest.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/signin',
        state: {
          from: props.location
        }
      }} />
    )
  }}
  />)
}

const mapStateToProps = (state, ownProps) => {
  var props = {
    isAuthenticated: state.authReducer.isAuthenticated
  }
  return props
}

export default AuthenticatedRoute = connect(mapStateToProps)(AuthenticatedRoute)
