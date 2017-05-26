import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools';

export default function configureStore() {

  const store = createStore(app, composeWithDevTools(
    applyMiddleware(thunk,logger)));
  return store;
}
