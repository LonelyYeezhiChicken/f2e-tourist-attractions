<template>
  <div class="h-auto">
    <div class="relative flex justify-center items-center">
      <p
        class="
          absolute
          text-grey-100 text-7xl
          font-extrabold
          animate__animated animate__bounce
        "
      >
        開始實現你的夢想旅程
      </p>
      <img src="../assets/homeMain.png" class="w-full h-5/6" />
    </div>
    <Groups class="my-10 mt-20" title="熱門打卡景點" :card-array="cardArry" />
    <div class="relative flex justify-center items-center mt-40">
      <div class="absolute text-grey-100 text-5xl font-extrabold">
        你不能錯過的著名景點
      </div>
      <button
        class="
          mt-32
          absolute
          rounded-3xl
          py-2
          px-4
          bg-primary-700
          text-grey-100
        "
      >
        賞楓秘境看這裡
      </button>
      <img src="../assets/homeFooter.png" class="w-full h-5/6" />
    </div>
    <Groups class="my-10" :title="'Rainbow Life!'" :card-array="cardArry" />
  </div>
</template>
<script>
import { cityScenicSpot, allScenicSpot } from '@/api/Api'
import 'animate.css'
import Groups from '../components/Home/CardGroups.vue'

export default {
  name: 'HomePage',
  components: { Groups },
  data() {
    return { X: 25.01383, Y: 121.461472, cardArry: [] }
  },
  created() {
    let _self = this
    cityScenicSpot('NewTaipei', { $top: 10 })
    allScenicSpot({ $top: 10 }).then((res) => {
      for (let i = 0; i < 4; i++) {
        _self.cardArry.push(res.data[i])
      }
    })
  },
  methods: {},
}
</script>
