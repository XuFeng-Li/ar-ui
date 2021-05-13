import axios from 'axios'
import { Modal, message } from 'antd'
import {
  API_CODE,
  LOCAL_USER,
  LOCAL_HOST,
  isRevit,
  LOCAL_ENV
} from './constants.js'

// axios实例
let fetcher = axios.create({
  method: 'post',
  baseURL: LOCAL_HOST,
  headers: {
    'Content-Type': 'application/json',
    'x-application-type': '3'
  }
})

// 拦截器,请求发起前
fetcher.interceptors.request.use(
  function(config) {
    // 不用每次发起请求都去storage获取用户信息和host
    if (!config.headers['x-access-token'] || !config.headers['x-user-id']) {
      console.log('IN_REVIT: ', isRevit());
      if (isRevit()) {
        const baseInfo = JSON.parse(localStorage.getItem('baseInfo') || '{}')
        console.log('baseInfo.baseUrl: ', baseInfo.baseUrl);
        config.baseURL = baseInfo.baseUrl
        config.headers = {
          ...config.headers,
          'x-access-token': baseInfo.token,
          'x-user-id': baseInfo.userid,
          'x-application-type': baseInfo.applicationType
        }
      } else {
        config.headers = {
          ...config.headers,
          'x-access-token': LOCAL_USER[LOCAL_ENV].TOKEN,
          'x-user-id': LOCAL_USER[LOCAL_ENV].USER_ID
        }
      }
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

let errModal = []

// 拦截器,response之后
fetcher.interceptors.response.use(
  function(response) {
    const { data, config } = response
    const { success, code, error, result } = data
    if (code === API_CODE.OK && success) {
      return result
    }
    message.error(error || `${config.url} can't handle your request exactly`)
    return null
  },
  function(error) {
    // 捕获http错误
    if (errModal.length === 0) {
      Modal.error({
        title: '接口状态异常',
        content: error.message,
        onOk() {
          errModal.shift()
        }
      })
      errModal.push(1)
    }
    return null
  }
)

export const get = (url, params) => {
  params = params || {}
  // params.t = new Date().getTime()
  return fetcher.get(url, { params })
}
export const post = (url, params) => {
  return fetcher.post(url, params)
}

export const put = (url, params) => {
  return fetcher.put(url, params)
}

export const del = (url, params) => {
  return fetcher.delete(url, { params })
}
export default fetcher
