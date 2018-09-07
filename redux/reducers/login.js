import * as types from '../types'

const login = (state, action) => {
  switch (action.type) {
    case types.ROOT_LOGIN:
      return action.payload

    default: return state
  }
}
const userInfo = (state, action) => {
  switch (action.type) {
    case types.ROOT_SET_USERINFO:
      return state.merge(action.payload)

    default: return state
  }
}

export default {
  login,
  userInfo
}