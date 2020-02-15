import React, { Component } from 'react'
import { connect } from 'react-redux'
import signOutActionCreator from '../actions/signOutActionCreator'
import { purgeStoredState } from 'redux-persist'
import { persistConfig, persistor } from '../store'
import AppComponent from './AppComponent'


class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isAuthenticated, signOut, username } = this.props

    return (
      <AppComponent
        isAuthenticated={isAuthenticated}
        signOut={signOut}
        username={username} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    username: state.authReducer.user ? state.authReducer.user.username : '',
    company: state.authReducer.user && state.authReducer.user.company ? state.authReducer.user.company.name : ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: async () => {
      await dispatch(signOutActionCreator())
      await purgeStoredState(persistConfig)
      await persistor.flush()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
