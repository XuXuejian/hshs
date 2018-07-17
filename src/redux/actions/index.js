import * as types from '../types'
import api from '../../api'

export const handleLoading = (data) => ({
  type: types.HANDLE_LOADING,
  payload: data
})

export const handleUserInfo = (data) => ({
  type: types.HANDLE_USERINFO,
  payload: data
})

export const login = (data) => ({
  type: types.HANDLE_LOGIN,
  payload: data
})
export const handleLogin = (data) => {
  return dispatch => {
    return api.Login(data).then(res => {
      dispatch(login(true))
      dispatch(handleUserInfo(res.get('result')))
      return res.get('success')
    }).catch(err => {
      dispatch(login(false))
      dispatch(handleUserInfo({}))
    })
  }
}
export const handleLogout = () => {
  return dispatch => {
    return api.LoginOut().then(res => {
      dispatch(login(false))
      dispatch(handleUserInfo({}))
      return res.get('success')
    })
  }
}
export const setCurrentMenu = payload => ({
  type: types.SET_CURRENT_MENU,
  payload
})
