import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { withRouter } from "react-router-dom"
import ComponentConsts from '../consts/ComponentConsts'
import Consts from '../consts/Consts'
import updatePasswordActionCreator from '../actions/updatePasswordActionCreator'
import RemoteSubmitButtonComponent from './RemoteSubmitButtonComponent'
import Validations from '../Validations'
import AccountPasswordComponent from './AccountPasswordComponent'


class AccountPasswordContainer extends Component {
  constructor(props) {
    super(props)

    this.handleUpdate = this.handleUpdate.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  async handleUpdate(values, dispatch) {
    try {
      this.validateForm(values)
    }
    catch (error) {
      throw new SubmissionError({
        password: error,
        _error: 'Could not update password'
      })
    }

    try {
      let { currentPassword, newPassword, confirmPassword } = values.password
      let result = await this.props.updatePassword(this.props.userId, currentPassword, newPassword, confirmPassword)
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
      <AccountPasswordComponent
        onSubmit={handleSubmit(this.handleUpdate)}
        submitting={submitting}
        error={error} />
    )
  }

  validateForm(values, dispatch) {
    const validations = new Validations()
    const errors = {}
    const password = values.password

    if (!password) {
      errors.currentPassword = "Current password required"
      errors.newPassword = "New password required"
      errors.confirmPassword = "Password confirmation required"
    }
    else {
      const { currentPassword, newPassword, confirmPassword } = password
      let error = null

      error = validations.password(currentPassword)

      if (error !== null) {
        errors.currentPassword = error
      }

      error = validations.password(newPassword)

      if (error !== null) {
        errors.newPassword = error
      }

      error = validations.passwordConfirmation(newPassword, confirmPassword)

      if (error !== null) {
        errors.confirmPassword = error
      }
    }

    if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
      throw errors
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let props = {
    initialValues: {},
    userId: state.authReducer.user.id
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (userId, currentPassword, newPassword, confirmPassword) => {
      return dispatch(updatePasswordActionCreator(userId, currentPassword, newPassword, confirmPassword))
    }
  }
}

AccountPasswordContainer = reduxForm({
  form: ComponentConsts.AccountPasswordFormComponent
})(AccountPasswordContainer)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPasswordContainer))
