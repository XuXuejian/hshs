import { combineReducers } from 'redux-immutable'

import userInfo from './userInfo'
import login from './login'

export default combineReducers({
  userInfo,
  login
})
