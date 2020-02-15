import axios from 'axios'
import ActionConsts from '../consts/ActionConsts'


const fetchChooseYourOwnAdventureActionCreator = () => {
  return async (dispatch, getState) => {
    const type = ActionConsts.FetchChooseYourOwnAdventure
    dispatch({ type: type, subType: ActionConsts.AsyncStart })

    const promise = new Promise(async (resolve, reject) => {

      try {
        const response = await axios.get('/api/survey/cyoa')

        if (response.status >= 200 && response.status < 300) {
          dispatch({ type: type, subType: ActionConsts.AsyncSuccess })
          return resolve(response.data.cyoa)
        } // 401 is handled and resolved() by axios.interceptors
      }
      catch (error) {
        dispatch({ type: type, subType: ActionConsts.AsyncError, error: error })
        return reject(error)
      }
    })

    return promise
  }
}

export default fetchChooseYourOwnAdventureActionCreator
