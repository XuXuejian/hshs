import * as types from '../types'

const login = (payload) => ({
  type: types.ROOT_LOGIN,
  payload
})

export const handleLogin = (status) => {
  return dispatch => {
    dispatch(login(status))
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