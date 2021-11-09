import axios from 'axios'
import { CONFIG } from '@/constants/config'
import { getAuthorizationHeader } from '@/utils/getAuthorizationHeader'

const { apiURL } = CONFIG

const instance = axios.create({
  baseURL: apiURL,
  headers: getAuthorizationHeader(),
  timeout: 20000,
})

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // e.g. show loading
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    // e.g. hide loading
    return response
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('你要找的頁面不存在')
          break
        case 500:
          console.log('程式發生問題')
          break
        default:
          console.log(error.message)
      }
    }
    if (!window.navigator.onLine) {
      alert('網路出了點問題，請重新連線後重整網頁')
      return
    }
    return Promise.reject(error)
  }
)

function get(url, data = null, config) {
  return instance.get(url, { params: { ...data, $format: 'JSON' }, ...config })
}

function post(url, data = null, config) {
  return instance.post(url, data, config)
}

function deleteRequest(url, data = null, config) {
  return instance.delete(url, { params: data, ...config })
}

function put(url, data = null, config) {
  return instance.put(url, data, config)
}

function patch(url, data = null, config) {
  return instance.patch(url, data, config)
}

const req = {
  get,
  post,
  delete: deleteRequest,
  put,
  patch,
}

export default req
