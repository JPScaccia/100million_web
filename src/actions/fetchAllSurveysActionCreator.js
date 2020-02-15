import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'


const fetchAllSurveysActionCreator = () => {
  return async (dispatch, getState) => {
    const type = ActionConsts.FetchAllSurveys
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.get('/api/survey')

        if (response.status >= 200 && response.status < 300) {
          dispatch({ type: type, subType: ActionConsts.AsyncSuccess, surveys: response.data.surveys })
          return resolve(response.data.surveys)
        } // 401 is handled and resolved() by axios.interceptors
      }
      catch(error) {
        dispatch({ type: type, subType: ActionConsts.AsyncError, error: error })
        return reject(error)
      }
    })

    return promise
  }
}

export default fetchAllSurveysActionCreator
