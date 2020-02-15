import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import AccountPasswordContainer from './AccountPasswordContainer.js'
import AccountContainer from './AccountContainer.js'


class AccountPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    else {
      return (
        <div>
          <AccountContainer />
          <br />
          <AccountPasswordContainer />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let props = {
    isAuthenticated: state.authReducer.isAuthenticated,
  }

  return props
}

export default withRouter(connect(
  mapStateToProps,
  null
)(AccountPageContainer))
