import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'


const updatePasswordActionCreator = (userId, currentPassword, newPassword, confirmPassword) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.UpdatePassword
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.patch(`/api/accounts/${userId}/password`, { currentPassword, newPassword, confirmPassword })

        if (response.status >= 200 && response.status < 300) {
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

export default updatePasswordActionCreator
