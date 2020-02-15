import ActionConsts from '../consts/ActionConsts'


const setSurveyAnswerActionCreator = (userSurveyId, itemNumber, value) => {
  return {
    type: ActionConsts.SetSurveyAnswer,
    userSurveyId,
    itemNumber,
    value
  }
}

export default setSurveyAnswerActionCreator
