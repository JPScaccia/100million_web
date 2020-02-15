import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store, { persistor } from './store'
import 'sanitize.css/sanitize.css'
import './css/index.css'
import './css/navbar.css'
import util from 'util'
import AppContainer from './components/AppContainer'
import './interceptor'


const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  root)
