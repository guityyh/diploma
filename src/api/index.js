import axios from 'axios'
import qs from 'qs'
import router from '@/router/index'

axios.interceptors.request.use(config => {
  // 这里可以加一些动作, 比如来个进度条开始动作
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // 这里可以加一些动作, 比如来个进度条结束动作
  // 如果 http 状态码正常, 则直接返回数据
  if (response.status === 200 || response.status === 304) {
    return response
    // 这里, 如果不需要除 data 外的其他数据, 可以直接 return response.data, 这样可以让后面的代码精简一些
  }
  // 异常状态下, 把错误信息返回去
  // 因为前面我们把错误扶正了, 不然像 404, 500 这样的错误是走不到这里的
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  }
}

function checkCode (res) {
  // 如果状态 code 异常(这里已经包括网络错误, 服务器错误, 后端抛出的错误), 可以弹出一个错误提示, 告诉用户
  if (res.code === 40007) { // 或者是res.code, 视上面你返回的数据来决定
    router.push('/login')
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}
