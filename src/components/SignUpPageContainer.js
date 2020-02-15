import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { withRouter } from "react-router-dom"
import ComponentConsts from '../consts/ComponentConsts'
import Consts from '../consts/Consts'
import signUpActionCreator from '../actions/signUpActionCreator'
import Validations from '../Validations'
import SignUpComponent from './SignUpComponent'


class SignUpPageContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  async handleSignUp(values, dispatch) {
    try {
      validateForm(values)
    }
    catch (error) {
      throw new SubmissionError({
        user: error,
        _error: 'Could not sign up'
      })
    }

    try {
      let result = await dispatch(signUpActionCreator(values.user))
      this.props.history.push('/account')
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
    const { error, handleSubmit, submitting } = this.props

    return (
      <SignUpComponent
        onSubmit={handleSubmit(this.handleSignUp)}
        submitting={submitting}
        error={error} />
    )
  }
}

const validateForm = (values, dispatch) => {
  const validations = new Validations()

  const user = values.user
  const { username, email, password, confirmPassword } = user
  const userErrors = {}
  let error = null

  error = validations.username(username)

  if (error !== null) {
    userErrors.username = error
  }

  error = validations.email(email)

  if (error !== null) {
    userErrors.email = error
  }

  error = validations.password(password)

  if (error !== null) {
    userErrors.password = error
  }

  error = validations.passwordConfirmation(password, confirmPassword)

  if (error !== null) {
    userErrors.confirmPassword = error
  }

  if (Object.keys(userErrors).length !== 0 && userErrors.constructor === Object) {
    throw userErrors
  }
}

const mapStateToProps = (state, ownProps) => {
  let props = null

  console.log("process.env.REACT_APP_ENV is " + process.env.REACT_APP_ENV)

  if (process.env.REACT_APP_ENV === 'development') {

    console.log("mapStateToProps is prepopulating form")

    props = {
      initialValues: {
        user: {
          username: 'jonny2kx',
          email: 'jq@rmc2.org',
          password: 'x',
          confirmPassword: 'x'
        }
      }
    }
  }
  else {
    console.log("mapStateToProps is not prepopulating form")

    props = {
      initialValues: {}
    }
  }

  console.log("mapStateToProps props is: " + JSON.stringify(props))

  return props
}

SignUpPageContainer = reduxForm({
  form: ComponentConsts.SignUpFormComponent
})(SignUpPageContainer)

export default withRouter(connect(
  mapStateToProps,
  null
)(SignUpPageContainer))
