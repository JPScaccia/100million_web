import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'
import moment from 'moment'
import jwtDecode from 'jwt-decode'
import signOutActionCreator from '../actions/signOutActionCreator'


const signUpActionCreator = (user) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.SignUp
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const userParams = { ...user, clientTimestamp: moment().toDate() }
        const response = await axios.post('/api/auth/signup', userParams)

        if (response.status >= 200 && response.status < 300) {
          localStorage.setItem(Consts.AccessToken, response.data.jwt)

          const expiresIn = jwtDecode(response.data.jwt).exp - (Date.now() / 1000)

          const signOutTimerId = setTimeout(() => {
            const timerId = localStorage.getItem(Consts.SignOutTimerId)

            if (timerId) {
              dispatch(signOutActionCreator())
            }
          }, expiresIn * 1000)

          localStorage.setItem(Consts.SignOutTimerId, signOutTimerId)

          dispatch({ type: type, subType: ActionConsts.AsyncSuccess, data: response.data })
          return resolve(response.data)
        }
      }
      catch (error) {
        dispatch({ type: type, subType: ActionConsts.AsyncError, error: error })
        return reject(error)
      }
    })

    return promise
  }
}

export default signUpActionCreator
