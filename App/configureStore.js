import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import socketMiddleware from './Middleware/socket'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk, socketMiddleware))
  return store
}
