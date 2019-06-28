import 'whatwg-fetch'

const BASE_URL = 'http://localhost:3002'
const api = {
  post(url, { body = '', ...option }) {
    if (body) body = JSON.stringify(body)
    const options = {
      credentials: 'include', // omit include same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body,
      ...option,
      method: 'POST'
    }
    return fetch(BASE_URL + url, options).then(res => {
      console.log(res)
      return res.json()
    })
  },
  get(url, option) {
    const options = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      ...option,
      method: 'GET'
    }
    return fetch(BASE_URL + url, options).then(res => {
      return res.json()
    })
  }
}
export default {
  Login(data) {
    return api.post(`/api/login`, data)
  },
  Register(data) {
    return api.post(`/api/register`, data)
  },
  GetUserInfo() {
    return api.get(`/api/user`)
  }
}
