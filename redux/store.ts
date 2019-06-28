import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  userInfo: null,
  login: false
})

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const middlewares =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger)
const enhancer = composeEnhancers(middlewares)

export const makeStore = (state = initialState) => {
  return createStore(reducer, state, enhancer)
}
