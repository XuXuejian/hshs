import * as types from '../types'

const login = (payload) => ({
  type: types.ROOT_LOGIN,
  payload
})
const logout = (payload) => ({
  type: types.ROOT_LOGOUT,
  payload
})

export const handleLogin = () => {
  return dispatch => {
    dispatch(login())
  }
}

const setUserInfo = (payload) => ({
  type: types.ROOT_SET_USERINFO,
  payload
})
export const handleUserInfo = (payload) => {
  return dispatch => {
    dispatch(setUserInfo(payload))
  }
}