import req from '../plugins/AxiosPlugin';

export const allScenicSpot = (data) => {
  //取得所有觀光景點資料
  return req('get', `/Tourism/ScenicSpot?${data}`);
};

export const cityScenicSpot = (params, data) => {
  //取得指定縣市觀光景點資料
  return req('get', `/Tourism/ScenicSpot/${params}?${data}`);
};

