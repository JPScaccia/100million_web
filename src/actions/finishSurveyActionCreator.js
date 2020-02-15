import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'
import SurveyStage from '../consts/SurveyStage'
import { history } from '../store'


const finishSurveyActionCreator = (userSurveyId, answers) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.FinishSurvey

    dispatch({
      type: type,
      subType: ActionConsts.AsyncStart,
      surveyStage: SurveyStage.Scoring
    })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.put('/api/survey/finish', {
           userSurveyId,
           answers
        })

        if (response.status >= 200 && response.status < 300) {
          dispatch({
            type: type,
            userSurveyId: userSurveyId,
            subType: ActionConsts.AsyncSuccess,
            surveyStage: SurveyStage.Finished
          })

          history.push('/dashboard')
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

export default finishSurveyActionCreator
