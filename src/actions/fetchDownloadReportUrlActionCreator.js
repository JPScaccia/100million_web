import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'


const fetchDownloadReportUrlActionCreator = (userSurveyId) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.DownloadReportUrl
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.get(`/api/survey/${userSurveyId}/report`)

        if (response.status >= 200 && response.status < 300) {
          dispatch({ type: type, subType: ActionConsts.AsyncSuccess, results: response.data })
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

export default fetchDownloadReportUrlActionCreator
