

// import md5 from '../md5.js'
import common from './common.js'
import errorCode from './code'
import Taro from '@tarojs/taro';
const { httpErrorCode, serverErrorCode } = errorCode
const baseUrl = 'http://127.0.0.1:3000'


const prodDomain = {
  mini: 'http://127.0.0.1:3000',
  stats: 'http://127.0.0.1:3000'
}
let domain = {}
if (process.env.NODE_ENV === 'development') {
  domain = prodDomain
} else {
  domain = prodDomain
}

// 加 时间戳 和 签名
const addStamp = data => {
  let sign = ''
  data.time = Date.now().toString()

  for (let key of Object.keys(data).sort()) {
    sign += data[key] + ''
  }
  // sign += 'sd_secret' // 加盐

  // data.sign = md5(sign).toUpperCase() // MD5 加密
  return data
}
// 请求方法内核
const core = ({ url, data, domain, header = {}, method = 'POST' }) => {
  url = domain + url
  // 怕有没做处理的情况，再做一次深拷
  data = common.deepCopy(data)

  return Taro.request({
    method,
    url,
    data,
    header
  })
    .then((res) => {
      const { data, statusCode } = res
      let httpError = httpErrorCode[Math.min(statusCode / 100)]
      let serverError = serverErrorCode[data.code]
      return Promise.resolve(data)
    })
    .catch(err => {
      // 统一的错误处理
      if (err.errMsg) {
        Taro.showToast({
          title: err.errMsg,
          icon: 'none',
          fail: (err) => console.log(err)
        })
      }
      return Promise.reject(err)
    })
}
// 业务用 post 方法
/**
 * @post
 * @param {String} url - 请求地址
 * @param {Object} [data={}] - 传参
 */
const post = (url, data = {}, customizedDomain) => {
  // const header = {
  //   Cookie: 'token=' + store.state.sysInfo.sysStore.token,
  //   pf: 6,
  //   'SD-UserID': store.state.sysInfo.sysStore.userinfo.userId || 0,
  //   ao: store.state.sysInfo.sysInfo.platform === 'ios' ? 4 : 3,
  // }
  return core({
    url,
    data: addStamp(common.deepCopy(data)),
    domain: customizedDomain || domain['mini'],
    // header
  })
    .then(data => {
      if (data.token) {
        data.data.token = data.token
      }
      return Promise.resolve(data.data)
    }).catch(err => {
      return Promise.reject(err)
    })
}
const get = (url, data) => {
  return core({
    url,
    data,
    domain: domain['mini'],
    method: 'GET'
  })
    .then(data => Promise.resolve(data)).catch(err => {
      console.log(err)
    })
}
const reqMethod = {
  post, get
}
export function ajax({ url, method, data }) {
  return new Promise((resolve, reject) => {
    reqMethod[method](url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  post,
  get,
  core,
  ajax
}
