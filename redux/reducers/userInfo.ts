import * as types from '../types'

const initialState = null
const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.ROOT_SET_USERINFO:
      return action.type

    default:
      return state
  }
}

export default userInfo
