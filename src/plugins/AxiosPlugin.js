import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000
  });

  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },
    function (error) {
      if (error.response){
        switch (error.response.status) {
          case 404:
            console.log("你要找的頁面不存在")
            break
          case 500:
            console.log("程式發生問題")
            break
          default:
            console.log(error.message)
        }
      } 
      if (!window.navigator.onLine) {
        alert("網路出了點問題，請重新連線後重整網頁");
        return;
      }
      return Promise.reject(error);
    }
  );

  export default function(method, url, data = null, config) {
    method = method.toLowerCase();
    switch (method) {
      case "post":
        return instance.post(url, data, config);
      case "get":
        return instance.get(url);
      case "delete":
        return instance.delete(url, { params: data });
      case "put":
        return instance.put(url, data);
      case "patch":
        return instance.patch(url, data);
      default:
        console.log(`未知的 method: ${method}`);
        return false;
    }
  }