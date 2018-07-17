import Immutable from 'immutable'
import * as types from '../types'
import {storage} from '../../utils'

const initialState = Immutable.Map({})

const userInfo = (state = initialState, action) => {
  switch(action.type) {
    case types.HANDLE_USERINFO:
    storage.set('userInfo', action.payload)
      return action.payload
    default:
      return state
  }
}
const login = (state = false, action) => {
  switch(action.type) {
    case types.HANDLE_LOGIN:
      return action.payload
    default:
      return state
  }
}
const loading = (state = false, action) => {
  switch(action.type) {
    case types.HANDLE_LOADING:
      return action.payload
    default:
      return state
  }
}
const currentMenu = (state = null, action) => {
  switch(action.type) {
    case types.SET_CURRENT_MENU:
      return action.payload
    default:
      return state
  }
}

export default {
  userInfo,
  login,
  loading,
  currentMenu
}