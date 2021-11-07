import req from '../plugins/AxiosPlugin';

export const allScenicSpot = (data) => {
  //取得所有觀光景點資料
  return req('get', `/Tourism/ScenicSpot?${data}`);
};

export const cityScenicSpot = (params, data) => {
  //取得指定縣市觀光景點資料
  return req('get', `/Tourism/ScenicSpot/${params}?${data}`);
};

export const allRestaurant = (data) => {
  //取得所有觀光餐飲資料
  return req('get', `/Tourism/Restaurant?${data}`);
};

export const cityRestaurant = (params, data) => {
  //取得指定[縣市]觀光餐飲資料
  return req('get', `/Tourism/Restaurant/${params}?${data}`);
};

export const allHotel = (data) => {
  //取得所有觀光旅宿資料
  return req('get', `/Tourism/Hotel?${data}`);
};

export const cityHotel = (params, data) => {
  //取得指定[縣市]觀光旅宿資料
  return req('get', `/Tourism/Hotel/${params}?${data}`);
};

export const allActivity = (data) => {
  //取得所有觀光活動資料
  return req('get', `/Tourism/Activity?${data}`);
};

export const cityActivity = (params, data) => {
  //取得指定[縣市]觀光活動資料
  return req('get', `/Tourism/Activity/${params}?${data}`);
};

