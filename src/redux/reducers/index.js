import {combineReducers} from 'redux-immutable'
import global from './global'

export default combineReducers({
  ...global
})