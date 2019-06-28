import * as types from '../types'

const initialState = false
const login = (state = initialState, action) => {
  switch (action.type) {
    case types.ROOT_LOGIN:
      return action.type

    default:
      return state
  }
}

export default login
