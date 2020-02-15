import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


export const history = createBrowserHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
)

export const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2
}

function configureStore(preloadedState) {
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    preloadedState,
    composedEnhancers
  )

  return store
}

function configurePersistStore(store) {
  return persistStore(store)
}

let initialState = {}
const store = configureStore(initialState)
export const persistor = configurePersistStore(store)

export default store
