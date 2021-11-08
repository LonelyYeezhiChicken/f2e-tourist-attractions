import Vue from 'vue';
// 引入寫好的icon元件
import icon from '@/components/icons/icon';
// 註冊到全域性元件
Vue.component('Icon', icon)

// 將./svg下不包括子目錄的所有字尾名.svg的檔案賦值給變數req
const requireContext = require.context('./svg', false, /\.svg$/)
// 函式 全部匯入
const importAll = r => r.keys().map(r)

importAll(requireContext)