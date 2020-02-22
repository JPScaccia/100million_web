import ActionConsts from '../consts/ActionConsts'


const setUploadFileActionCreator = () => {
  return (dispatch, getState) => {
    return dispatch({ type: ActionConsts.SetUploadFile })
  }
}

export default setUploadFileActionCreator
