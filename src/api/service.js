import axios from 'axios'
// import store from '@/redux/store/store' import {storage} from '@/utils'
// import {handleToast} from '@/redux/action'
import qs from 'querystring'

// http服务类
export default class {
  /**
   * http服务类构造函数
   * @param url api基地址
   * @returns {AxiosInstance}
   */
  constructor(url, headers, token) {
    // 创建实例
    const Instance = axios.create({
      baseURL: url,
      // timeout: 30000,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    // http request 拦截器
    Instance
      .interceptors
      .request
      .use(config => {
        // store.dispatch({type:'SHOW_LOADING'})
        // Object.assign(config.headers,{'token':storage.get('token')&&storage.get('token
        // ')}) if(!token){
        // Object.assign(config.headers,{'token':storage.get('token')&&storage.get('token
        // ')}) }else{
        // Object.assign(config.headers,{'userId':storage.get('userInfo')&&storage.get('u
        // serInfo').userId}) }
        // Object.assign(config.headers,{'userId':storage.get('userInfo')&&storage.get('u
        // serInfo').userId})
        if (config.method === 'post') {
          if (headers) {
            Object.assign(config.headers, headers)
          } else {
            config.data = qs.stringify(config.data)
          }
        }
        return config
      }, error => {
        // store.dispatch(handleToast('TOAST_FAIL','参数错误'))
        return Promise.reject(error)
      })

    // http response 拦截器
    Instance
      .interceptors
      .response
      .use(res => {
        const body = res.data
        // store.dispatch({type:'HIDE_LOADING'})
        if (body.success !== true) {
          // if(body.errorCode!=='0100003'){ if(process.env.NODE_ENV==='development'){
          // store.dispatch(handleToast('TOAST_FAIL',body.returnMsg||body.errorMsg)) } }
          return Promise.reject(res)
        }
        return body
      }, error => {
        // store.dispatch({type:'HIDE_LOADING'})
        // store.dispatch(handleToast('TOAST_FAIL','网络连接错误'))
        return Promise.reject(error)
      })

    return Instance
  }
}
