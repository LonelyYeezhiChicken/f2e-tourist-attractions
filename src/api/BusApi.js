import { toQS } from '../utils/toQS'
import req from '../plugins/AxiosPlugin'

export const allRealTimeByFrequency = (data) => {
  //取得台灣好行公車的動態定時資料(A1)
  return req('get', `/Tourism/Bus/RealTimeByFrequency/TaiwanTrip?${toQS(data)}`)
}

export const itineraryRealTimeByFrequency = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車的動態定時資料(A1)
  return req(
    'get',
    `/Tourism/Bus/RealTimeByFrequency/TaiwanTrip/${params}?${toQS(data)}`
  )
}

export const allRealTimeNearStop = (data) => {
  //取得台灣好行公車的動態定點資料(A2)
  return req('get', `/Tourism/Bus/RealTimeNearStop/TaiwanTrip?${toQS(data)}`)
}

export const itineraryRealTimeNearStop = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車的動態定點資料(A2)
  return req(
    'get',
    `/Tourism/Bus/RealTimeNearStop/TaiwanTrip/${params}?${toQS(data)}`
  )
}

export const allEstimatedTimeOfArrival = (data) => {
  //取得台灣好行公車的預估到站資料(N1)
  return req(
    'get',
    `/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip?${toQS(data)}`
  )
}

export const itineraryEstimatedTimeOfArrival = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車的預估到站資料(N1)
  return req(
    'get',
    `/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/${params}?${toQS(data)}`
  )
}

export const allRoute = (data) => {
  //取得台灣好行公車路線資料
  return req('get', `/Tourism/Bus/Route/TaiwanTrip?${toQS(data)}`)
}

export const itineraryRoute = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車路線資料
  return req('get', `/Tourism/Bus/Route/TaiwanTrip/${params}?${toQS(data)}`)
}

export const allStopOfRoute = (data) => {
  //取得台灣好行公車路線與站牌資料
  return req('get', `/Tourism/Bus/StopOfRoute/TaiwanTrip?${toQS(data)}`)
}

export const itineraryStopOfRoute = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車路線與站牌資料
  return req(
    'get',
    `/Tourism/Bus/StopOfRoute/TaiwanTrip/${params}?${toQS(data)}`
  )
}

export const allSchedule = (data) => {
  //取得台灣好行公車路線班表資料
  return req('get', `/Tourism/Bus/Schedule/TaiwanTrip?${toQS(data)}`)
}

export const itinerarySchedule = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車路線班表資料
  return req('get', `/Tourism/Bus/Schedule/TaiwanTrip/${params}?${toQS(data)}`)
}

export const allShape = (data) => {
  //取得台灣好行公車線型資料
  return req('get', `/Tourism/Bus/Shape/TaiwanTrip?${toQS(data)}`)
}

export const itineraryShape = (params, data) => {
  //取得指定[路線名稱]的台灣好行公車線型資料
  return req('get', `/Tourism/Bus/Shape/TaiwanTrip/${params}?${toQS(data)}`)
}

export const s2TravelTime = (data) => {
  //取得台灣好行公車線型資料
  return req('get', `/Tourism/Bus/S2TravelTime/TaiwanTrip?${toQS(data)}`)
}

export const News = (data) => {
  //取得台灣好行公車線型資料
  return req('get', `/Tourism/Bus/News/TaiwanTrip?${toQS(data)}`)
}
