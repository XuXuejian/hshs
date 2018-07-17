import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from '../reducers'
import Immutalbe from 'immutable'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const initialState = Immutalbe.Map()
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
)

const store = createStore(
  reducer,
  initialState,
  enhancer
)

export default store