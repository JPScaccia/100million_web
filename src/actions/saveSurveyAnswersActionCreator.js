import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'


const saveSurveyAnswersActionCreator = (userSurveyId, answers, lastSheetVisited) => {
  return async (dispatch, getState) => {
    const type = ActionConsts.SaveSurveyAnswers
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.put('/api/survey/answers', { userSurveyId, answers, lastSheetVisited })

        console.log("saveSurveyAnswersActionCreator " + JSON.stringify(response))

        dispatch({ type: type, subType: ActionConsts.AsyncSuccess })
        return resolve()
      }
      catch (error) {
        dispatch({ type: type, subType: ActionConsts.AsyncError, error: error })
        return reject(error)
      }
    })

    return promise
  }
}

export default saveSurveyAnswersActionCreator
