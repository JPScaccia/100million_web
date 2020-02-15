import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'
import SurveyStage from '../consts/SurveyStage'


const startSurveyActionCreator = (userId, surveyId) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.StartSurvey
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.put('/api/survey/start', { userId, surveyId })

        if (response.status >= 200 && response.status < 300) {
          dispatch({
            type: type,
            subType: ActionConsts.AsyncSuccess,
            sheetNumber: 0,
            userId: response.data.userId,
            surveyId: response.data.surveyId,
            userSurveyId: response.data.userSurveyId,
            surveyStage: SurveyStage.Sheets
          })
          return resolve()
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

export default startSurveyActionCreator
