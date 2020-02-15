import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { withRouter } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import ComponentConsts from '../consts/ComponentConsts'
import Consts from '../consts/Consts'
import updateAccountActionCreator from '../actions/updateAccountActionCreator'
import Validations from '../Validations'
import util from 'util'
import AccountComponent from './AccountComponent'


class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async handleUpdate(values, dispatch) {
    try {
      validateForm(values)
    }
    catch (error) {
      throw new SubmissionError({
        user: error,
        _error: 'Could not update account'
      })
    }

    try {
      let accountInfo = { ...values.user }
      let result = await this.props.updateAccount(this.props.userId, accountInfo)
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
    const { error, handleSubmit, submitting, isAuthenticated } = this.props

    if (!isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <AccountComponent
        onSubmit={handleSubmit(this.handleUpdate)}
        submitting={submitting}
        error={error} />
    )
  }
}

const validateForm = (values, dispatch) => {
  const validations = new Validations()

  const user = values.user
  const { company, firstname, lastname, username, email, phone, password, confirmPassword } = user
  const userErrors = {}
  let error = null

  error = validations.firstname(firstname)

  if (error !== null) {
    userErrors.firstname = error
  }

  error = validations.lastname(lastname)

  if (error !== null) {
    userErrors.lastname = error
  }

  error = validations.username(username)

  if (error !== null) {
    userErrors.username = error
  }

  error = validations.email(email)

  if (error !== null) {
    userErrors.email = error
  }

  error = validations.phone(phone)

  if (error !== null) {
    userErrors.phone = error
  }

  error = validations.company(company)

  if (error !== null) {
    userErrors.company = error
  }

  if (Object.keys(userErrors).length !== 0 && userErrors.constructor === Object) {
    throw userErrors
  }
}

const mapStateToProps = (state, ownProps) => {
  let props = {
    initialValues: {
      user: {
        firstname: state.authReducer.user.firstname,
        lastname: state.authReducer.user.lastname,
        username: state.authReducer.user.username,
        email: state.authReducer.user.email,
        phone: state.authReducer.user.phone,
        company: state.authReducer.user.company ? state.authReducer.user.company.name : ""
      }
    },
    isAuthenticated: state.authReducer.isAuthenticated,
    userId: state.authReducer.user.id
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: (userId, accountInfo) => dispatch(updateAccountActionCreator(userId, accountInfo)),
  }
}

AccountContainer = reduxForm({
  form: ComponentConsts.AccountFormComponent
})(AccountContainer)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContainer))
