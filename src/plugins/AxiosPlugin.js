import axios from 'axios'
import jsSHA from 'jssha'
import { CONFIG } from '@/constants/config'

const { apiURL, appId, appKey } = CONFIG

const instance = axios.create({
  baseURL: apiURL,
  headers: GetAuthorizationHeader(),
  timeout: 20000,
})

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
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

export default function (method, url, data = null, config) {
  method = method.toLowerCase()
  switch (method) {
    case 'post':
      return instance.post(url, data, config)
    case 'get':
      return instance.get(url)
    case 'delete':
      return instance.delete(url, { params: data })
    case 'put':
      return instance.put(url, data)
    case 'patch':
      return instance.patch(url, data)
    default:
      console.log(`未知的 method: ${method}`)
      return false
  }
}

function GetAuthorizationHeader() {
  const GMTString = new Date().toGMTString()
  const shaObj = new jsSHA('SHA-1', 'TEXT')
  shaObj.setHMACKey(appKey, 'TEXT')
  shaObj.update('x-date: ' + GMTString)
  const HMAC = shaObj.getHMAC('B64')
  const Authorization = `hmac username="${appId}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`

  return {
    // 'Accept-Encoding': 'gzip',
    'Content-Type': 'application/json',
    'X-Date': GMTString,
    Authorization,
  }
}
