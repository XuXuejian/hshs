import 'whatwg-fetch'

const api = {
  post(url, {body, ...option}) {
    const options = {
      credentials: 'same-origin', // omit include
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      ...option,
      method: 'POST'
    }
    fetch(url, options).then(res => {
      console.log(res)
    })
  }
}
export default {
  Login(data) {
    return api.post('/api/login', data)
  }
}