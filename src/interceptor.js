import axios from 'axios'
import store from './store'
import ActionConsts from './consts/ActionConsts'
import Consts from './consts/Consts'


axios.interceptors.request.use(request => {
    const token = localStorage.getItem(Consts.AccessToken)
    request.headers.Authorization = `Bearer ${token}`
    return request
  }, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
  }, (error) => {

  switch (error.response.status) {
    case 401:
      store.dispatch({ type: ActionConsts.UnauthorizedError, error: error })
      return Promise.resolve(error)
    break
    default:
  }

  return Promise.reject(error)
})
