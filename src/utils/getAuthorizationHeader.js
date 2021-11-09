import jsSHA from 'jssha'
import { CONFIG } from '@/constants/config'

const { appId, appKey } = CONFIG

export function getAuthorizationHeader() {
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
