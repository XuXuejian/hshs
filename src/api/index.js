import Service from './service'

let orderUrl=process.env.BASE_URL
if(window.location.host.indexOf('test')>-1){
  orderUrl='http://12070-tech-other-za-airdia-gateway.test.za-tech.net'
} else if (window.location.host.indexOf('.tech')>-1) {
  orderUrl = process.env.TEST_PUBLIC_URL
}
const Instance = new Service(orderUrl,{'Content-Type':'application/json'})

export default {
  // 保存用户认证信息
  Save(data){
    return Instance.post(`/api/v2/auth/save`,data)
  },
}
