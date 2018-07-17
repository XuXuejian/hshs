import Service from './service'

let orderUrl=process.env.BASE_URL

const Instance = new Service(orderUrl,{'Content-Type':'application/json'})

export default {
  // 保存用户认证信息
  Save(data){
    return Instance.post(`/api/v2/auth/save`,data)
  },
}
