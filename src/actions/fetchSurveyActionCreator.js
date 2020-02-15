import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'
import util from 'util'


const fetchSurveyActionCreator = (surveyId) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.FetchSurvey
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.get(`/api/survey/${surveyId}`)
        // console.log("fetchSurveyActionCreator " + JSON.stringify(response))
        dispatch({ type: type, subType: ActionConsts.AsyncSuccess, survey: response.data.survey })
        return resolve(response.data.survey)
      }
      catch (error) {
        // console.log("fetchSurveyActionCreator " + util.inspect(error))
        dispatch({ type: type, subType: ActionConsts.AsyncError, error: error })
        return reject(error)
      }
    })

    return promise
  }
}

export default fetchSurveyActionCreator
