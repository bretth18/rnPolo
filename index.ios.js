import React from 'react'
import {
  AppRegistry
} from 'react-native'
import './shim.js'

import { Provider } from 'react-redux'
import configureStore from './App/configureStore'
import App from './App/app'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('rnPolo', () => ReduxApp);
