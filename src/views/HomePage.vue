<template>
  <div class="h-screen">
    <!-- <Card img-src="http://210.69.151.212/ptngis/files/photos/l/marks/C1-13302.jpg"/> -->
    <div class="relative flex justify-center items-center">
      <p class="absolute text-grey-100 text-7xl font-extrabold animate__animated animate__bounce">開始實現你的夢想旅程</p>
      <img src="../assets/homeMain.png" class="w-full h-5/6">
    </div>
  </div>
</template>
<script>
import { cityScenicSpot, allScenicSpot } from '@/api/Api'
import 'animate.css'
// import Card from '../components/Card.vue'

export default {
  name: 'HomePage',
  // components: { Card },
  data() {
    return { cardTag: ['新北', '耶誕城'], X: 25.01383, Y: 121.461472 }
  },
  created() {
    cityScenicSpot('NewTaipei', { $top: 10 })
    allScenicSpot({ $top: 10 }).then(res=>{
      console.log(res.data)
    })
  },
  methods: {
  }
}
</script>
