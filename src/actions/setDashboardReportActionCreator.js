import ActionConsts from '../consts/ActionConsts'


const setDashboardReportActionCreator = (userSurveyId) => {
  return (dispatch, getState) => {
    return dispatch({ type: ActionConsts.SetDashboardReport, userSurveyId })
  }
}

export default setDashboardReportActionCreator
