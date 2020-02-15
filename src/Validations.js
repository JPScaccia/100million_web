import Consts from './consts/Consts.js'
import validator from 'validator'


class Validations {
  company(company) {
    let error = null

    if (!company) {
      error = 'Company required'
    }
    else {
      const trimmed = company.trim()

      if (trimmed.length < Consts.MinCompanyNameLength) {
        error = `Company must be at least ${Consts.MinCompanyNameLength} characters`
      }
    }

    return error
  }

  firstname(firstname) {
    let error = null

    if (!firstname) {
      error = 'First name required'
    }
    else {
      const trimmed = firstname.trim()

      if (trimmed.length < Consts.MinFirstNameLength) {
        error = `First name must be at least ${Consts.MinFirstNameLength} characters`
      }
      else if (!validator.isAlpha(trimmed)) {
        error = 'First name can only contain letters'
      }
    }

    return error
  }

  lastname(lastname) {
    let error = null

    if (!lastname) {
      error = 'Last name required'
    }
    else {
      const trimmed = lastname.trim()

      if (trimmed.length < Consts.MinLastNameLength) {
        error = `Last name must be at least ${Consts.MinLastNameLength} characters`
      }
      else if (!validator.matches(trimmed, /^[a-zA-Z -]+$/)) {
        error = 'Last name can only contain letters, spaces, or hyphens'
      }
    }

    return error
  }

  username(username) {
    let error = null

    if (!username) {
      error = "Username required"
    }
    else {
      const trimmed = username.trim()

      if (validator.isEmail(trimmed)) {
        error = 'Username cannot be email'
      }
      else if (trimmed.length < Consts.MinUserNameLength) {
        error = `Username must be at least ${Consts.MinUserNameLength} characters`
      }
      else if (!validator.matches(trimmed, /^[0-9a-zA-Z_]+$/)) {
        error = 'Username can only contain letters, numbers, or underscore'
      }
    }

    return error
  }

  email(email) {
    let error = null

    if (!email) {
      error = "Email required"
    }
    else {
      const trimmed = email.trim()

      if (!validator.isEmail(trimmed)) {
        error = 'Invalid email'
      }
    }

    return error
  }

  phone(phone) {
    let error = null

    if (!phone) {
      error = "Phone required"
    }
    else if (phone.length !== Consts.PhoneLength) {
      error = `Phone must have ${Consts.PhoneLength} digits`
    }

    return error
  }

  password(password) {
    let error = null

    if (!password) {
      error = "Password required"
    }
    else {
      const trimmed = password.trim()

      if (trimmed.length < Consts.MinPasswordLength) {
        error = `Password must be at least ${Consts.MinPasswordLength} characters`
      }
    }

    return error
  }

  passwordConfirmation(password, confirmPassword) {
    let error = null

    if (!confirmPassword) {
      error = "Password confirmation required"
    }
    else {
      const trimmed = confirmPassword.trim()

      if (trimmed.length < Consts.MinPasswordLength) {
        error = `Password confirmation must be at least ${Consts.MinPasswordLength} characters`
      }
      else if (confirmPassword !== password) {
        error = "Password confirmation does not match"
      }
    }

    return error
  }

  normalizePhone(value, previousValue) {
    if (!value) {
      return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    if (!previousValue || value.length > previousValue.length) {
      // typing forward
      if (onlyNums.length === 3) {
        return onlyNums + '-'
      }
      if (onlyNums.length === 6) {
        return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
      }
    }

    if (onlyNums.length <= 3) {
      return onlyNums
    }

    if (onlyNums.length <= 6) {
      return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
    }

    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
  }
}

export default Validations
