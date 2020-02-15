import ActionConsts from '../consts/ActionConsts'


let initialState = {}

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConsts.FetchAllSurveys:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          surveys: action.surveys
        }
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return {
          ...state,
          error: action.error
        }
      }
    break

    case ActionConsts.FetchSurvey:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          survey: action.survey
        }
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return {
          ...state,
          error: action.error
        }
      }
    break

    case ActionConsts.FetchChooseYourOwnAdventure:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return state
      }
    break

    case ActionConsts.StartSurvey:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          sheetNumber: action.sheetNumber,
          surveyStage: action.surveyStage,
          surveys: action.surveys,
          userId: action.userId,
          surveyId: action.surveyId,
          userSurveyId: action.userSurveyId
        }
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return {
          ...state,
          error: action.error
        }
      }
    break

    case ActionConsts.SetSurveyAnswer:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.itemNumber]: {
            userSurveyId: action.userSurveyId,
            itemNumber: action.itemNumber,
            value: action.value
          }
        }
      }
    break

    case ActionConsts.SaveSurveyAnswers:
      return {
        ...state,
        answers: {}
      }
    break

    case ActionConsts.NextSurveyPage:
      return {
        ...state,
        sheetNumber: action.sheetNumber
      }
    break

    case ActionConsts.FinishSurvey:

    if (action.subType === ActionConsts.AsyncStart) {
      return {
        ...state,
        surveyStage: action.surveyStage
      }
    }
    else if (action.subType === ActionConsts.AsyncSuccess) {
      return {
        ...state,
        surveyStage: action.surveyStage
      }
    }
    else if (action.subType === ActionConsts.AsyncError) {
      let newState = {
        ...state,
        error: action.error
      }
      delete newState.surveyStage
      return newState
    }
    break

    default:
    return state
  }
}

export default surveyReducer
