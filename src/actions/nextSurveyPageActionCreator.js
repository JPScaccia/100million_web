import ActionConsts from '../consts/ActionConsts'


const nextSurveyPageActionCreator = (sheetNumber) => {
  return {
    type: ActionConsts.NextSurveyPage,
    sheetNumber
  }
}

export default nextSurveyPageActionCreator
