import ActionConsts from '../consts/ActionConsts'
import Consts from '../consts/Consts'


const signOutActionCreator = () => {
  localStorage.removeItem(Consts.AccessToken)
  localStorage.removeItem(Consts.SignOutTimerId)

  return {
    type: ActionConsts.SignOut,
  }
}

export default signOutActionCreator
