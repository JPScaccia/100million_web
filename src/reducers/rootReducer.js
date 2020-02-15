import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as reduxFormReducer } from 'redux-form'
import surveyReducer from './surveyReducer'
import authReducer from './authReducer'
import dashboardReducer from './dashboardReducer'
import ActionConsts from '../consts/ActionConsts'


export default (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
    authReducer,
    surveyReducer,
    dashboardReducer
  })

  const rootReducer = (state, action) => {
    if (action.type === ActionConsts.SignOut) {
      state = undefined
    }

    return appReducer(state, action)
  }

  return rootReducer
}
