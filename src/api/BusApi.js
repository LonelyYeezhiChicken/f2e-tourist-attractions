import req from '../utils/axiosPlugin'

const cate = '/Tourism/Bus'

/** 取得台灣好行公車的動態定時資料(A1) */
export const allRealTimeByFrequency = (data) => {
  return req.get(`${cate}/RealTimeByFrequency/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車的動態定時資料(A1) */
export const itineraryRealTimeByFrequency = (params, data) => {
  return req.req(`${cate}/RealTimeByFrequency/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車的動態定點資料(A2) */
export const allRealTimeNearStop = (data) => {
  return req.get(`${cate}/RealTimeNearStop/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車的動態定點資料(A2) */
export const itineraryRealTimeNearStop = (params, data) => {
  return req.get(`${cate}/RealTimeNearStop/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車的預估到站資料(N1) */
export const allEstimatedTimeOfArrival = (data) => {
  return req.req(`${cate}/EstimatedTimeOfArrival/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車的預估到站資料(N1) */
export const itineraryEstimatedTimeOfArrival = (params, data) => {
  return req.req(`${cate}/EstimatedTimeOfArrival/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車路線資料 */
export const allRoute = (data) => {
  return req.get(`${cate}/Route/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車路線資料 */
export const itineraryRoute = (params, data) => {
  return req.get(`${cate}/Route/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車路線與站牌資料 */
export const allStopOfRoute = (data) => {
  return req.get(`${cate}/StopOfRoute/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車路線與站牌資料 */
export const itineraryStopOfRoute = (params, data) => {
  return req.get(`${cate}/StopOfRoute/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車路線班表資料 */
export const allSchedule = (data) => {
  return req.get(`${cate}/Schedule/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車路線班表資料 */
export const itinerarySchedule = (params, data) => {
  return req.get(`${cate}/Schedule/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車線型資料 */
export const allShape = (data) => {
  return req.get(`${cate}/Shape/TaiwanTrip`, data)
}

/** 取得指定[路線名稱]的台灣好行公車線型資料 */
export const itineraryShape = (params, data) => {
  return req.get(`${cate}/Shape/TaiwanTrip/${params}`, data)
}

/** 取得台灣好行公車線型資料 */
export const s2TravelTime = (data) => {
  return req.get(`${cate}/S2TravelTime/TaiwanTrip`, data)
}

/** 取得台灣好行公車線型資料 */
export const News = (data) => {
  return req.get(`${cate}/News/TaiwanTrip`, data)
}
