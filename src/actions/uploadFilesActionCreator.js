import ActionConsts from '../consts/ActionConsts'


const uploadFilesActionCreator = () => {
  return (dispatch, getState) => {
    return dispatch({ type: ActionConsts.UploadFiles })
  }
}

export default uploadFilesActionCreator
