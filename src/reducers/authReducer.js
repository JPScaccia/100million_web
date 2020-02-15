import ActionConsts from '../consts/ActionConsts'


var initState = {
  user: {},
  error: null,
  isAuthenticated: false
}

export default function authReducer(state = initState, action) {
  if (action.subType === ActionConsts.AsyncStart) {
  }
  else if(action.subType === ActionConsts.AsyncSuccess ||
          action.subType === ActionConsts.AsyncError) {
  }

  switch (action.type) {
    case ActionConsts.SignUp:
    case ActionConsts.SignIn:
      if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          jwt: action.data.jwt,
          user: action.data.user,
          isAuthenticated: true
        }
      }
      else if(action.subType === ActionConsts.AsyncError) {
        return {
          ...state,
          error: action.error,
          isAuthenticated: false
        }
      }
    break

    case ActionConsts.SignOut:
      return initState
    break

    case ActionConsts.UnauthorizedError:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false
      }
    break

    case ActionConsts.UpdateAccount:
      if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          user: action.data.user,
        }
      }
    break

    default:
      return state
  }

  return state
}
