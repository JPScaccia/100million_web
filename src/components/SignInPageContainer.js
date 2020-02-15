import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { Redirect } from 'react-router-dom'
import ComponentConsts from '../consts/ComponentConsts'
import Consts from '../consts/Consts'
import signInActionCreator from '../actions/signInActionCreator'
import util from 'util'
import SignInComponent from './SignInComponent'
import Validations from '../Validations'


class SignInPageContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  async handleSignIn(values, dispatch) {
    try {
      validateForm(values)
    }
    catch (error) {
      throw new SubmissionError({
        user: error,
        _error: 'Could not sign in'
      })
    }

    try {
      let result = await dispatch(signInActionCreator(values.user))
    }
    catch (error) {
      let message = Consts.BackendError

      if (error.response) {
        if (error.response.data) {
          if (error.response.data.error) {
            message = error.response.data.error.message
          }
        }
      }

      throw new SubmissionError({
        _error: message
      })
    }
  }

  render() {
    const { error, handleSubmit, submitting, isAuthenticated, location } = this.props

    if (isAuthenticated) {
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }

    return (
      <SignInComponent
        onSubmit={handleSubmit(this.handleSignIn)}
        submitting={submitting}
        error={error} />
    )
  }
}

const validateForm = (values, dispatch) => {
  const validations = new Validations()

  const user = values.user
  const { username, password } = user
  const userErrors = {}
  let error = null

  error = validations.username(username)

  if (error !== null) {
    userErrors.username = error
  }

  error = validations.password(password)

  if (error !== null) {
    userErrors.password = error
  }

  if (Object.keys(userErrors).length !== 0 && userErrors.constructor === Object) {
    throw userErrors
  }
}


const mapStateToProps = (state, ownProps) => {
  let props = null

  if (process.env.REACT_APP_ENV === 'development') {
    props = {
      initialValues: {
        user: {
          username: 'jonny2kx',
          password: 'x'
        }
      },
      isAuthenticated: state.authReducer.isAuthenticated
    }
  }
  else {
    props = {
      initialValues: {
      },
      isAuthenticated: state.authReducer.isAuthenticated
    }
  }

  return props
}

SignInPageContainer = reduxForm({
  form: ComponentConsts.SignInFormComponent,
})(SignInPageContainer)

export default SignInPageContainer = connect(
  mapStateToProps
)(SignInPageContainer)
