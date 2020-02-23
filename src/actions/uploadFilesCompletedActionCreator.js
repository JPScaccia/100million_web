import ActionConsts from '../consts/ActionConsts'


const uploadFilesCompletedActionCreator = () => {
  return (dispatch, getState) => {
    return dispatch({ type: ActionConsts.UploadFilesCompleted })
  }
}

export default uploadFilesCompletedActionCreator
