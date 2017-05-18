import React from 'react'
import {
  AppRegistry
} from 'react-native'
import './shim.js'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('redux4ways', () => ReduxApp);
