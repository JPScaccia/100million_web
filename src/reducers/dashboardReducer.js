import ActionConsts from '../consts/ActionConsts'


let initialState = {}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionConsts.FinishSurvey:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        let newState = {
          ...state,
          userSurveyId: action.userSurveyId
        }
        return newState
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return state
      }
      break

    case ActionConsts.SetDashboardReport:
      return {
        ...state,
        userSurveyId: action.userSurveyId
      }
      break

    case ActionConsts.FetchAllFinishedSurveys:
      if (action.subType === ActionConsts.AsyncStart) {
        return state
      }
      else if (action.subType === ActionConsts.AsyncSuccess) {
        return {
          ...state,
          finishedSurveys: action.finishedSurveys
        }
      }
      else if (action.subType === ActionConsts.AsyncError) {
        return {
          ...state,
          error: action.error
        }
      }
      break

    case ActionConsts.SetUploadFile:
      return {
        ...state,
        isDashboardFileUploads: true
      }
      break

    case ActionConsts.UploadFilesCompleted:
      return {
        ...state,
        isDashboardFileUploads: false
      }
      break

    default:
      return state
  }
}

export default dashboardReducer
