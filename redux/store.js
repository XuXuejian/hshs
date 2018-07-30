import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  login: false,
  userInfo: {}
})

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const middlewares = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunk)
  : applyMiddleware(thunk, logger)
const enhancer = composeEnhancers(middlewares)

export const makeStore = (state = initialState) => {
  return createStore(reducer, state, enhancer)
}