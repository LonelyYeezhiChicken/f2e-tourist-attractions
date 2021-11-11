<template>
  <div class="flex flex-col h-screen justify-between">
    <router-view></router-view>
    <GoogleMap :x="X" :y="Y" />
    <Card
      title="新北耶誕城"
      :tag="cardTag"
      img-src="https://cdn.walkerland.com.tw/images/upload/subject/2019/10/1653f11606fde4c760755aa2206c274df7c46598.jpg"
    />
  </div>
</template>
<script>
import GoogleMap from '../components/GoogleMap.vue'
// import { cityScenicSpot } from '@/api/Api'
import Card from '../components/Card.vue'
export default {
  name: 'HomePage',
  //components: { Navbar, GoogleMap },
  components: { GoogleMap, Card },
  data() {
    return { cardTag: ['新北', '耶誕城'], X: 25.01383, Y: 121.461472 }
  },
  created() {
    // cityScenicSpot('NewTaipei', { $top: 10 })
  },
}
</script>
