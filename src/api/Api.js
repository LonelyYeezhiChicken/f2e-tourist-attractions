import req from '../utils/axiosPlugin'

/** 取得所有觀光景點資料 */
export const allScenicSpot = (data) => {
  return req.get(`/Tourism/ScenicSpot`, data)
}

/** 取得指定縣市觀光景點資料 */
export const cityScenicSpot = (params, data) => {
  return req.get(`/Tourism/ScenicSpot/${params}`, data)
}

/** 取得所有觀光餐飲資料 */
export const allRestaurant = (data) => {
  return req.get(`/Tourism/Restaurant`, data)
}

/** 取得指定[縣市]觀光餐飲資料 */
export const cityRestaurant = (params, data) => {
  return req.get(`/Tourism/Restaurant/${params}`, data)
}

/** 取得所有觀光旅宿資料 */
export const allHotel = (data) => {
  return req.get(`/Tourism/Hotel`, data)
}

/** 取得指定[縣市]觀光旅宿資料 */
export const cityHotel = (params, data) => {
  return req.get(`/Tourism/Hotel/${params}`, data)
}

/** 取得所有觀光活動資料 */
export const allActivity = (data) => {
  return req.get(`/Tourism/Activity`, data)
}

/** 取得指定[縣市]觀光活動資料 */
export const cityActivity = (params, data) => {
  return req.get(`/Tourism/Activity/${params}`, data)
}
