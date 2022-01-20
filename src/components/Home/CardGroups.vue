<template>
  <div class="w-full bg-white h-60 px-20">
    <div class="flex justify-between font-bold mb-5">
      <span class="text-xl text-black">{{ title }}</span>
      <button class="rounded-3xl py-2 px-4 bg-primary-700 text-grey-100">
        查看更多
      </button>
    </div>
    <div class="flex justify-center">
      <Card
        v-for="(card, index) in imgList"
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>
<script>
import Card from '../Card.vue'
import { allScenicSpot } from '@/api/Api'
export default {
  name: 'CardGroups',
  components: { Card },
  props: { title: { type: String }, cardArray: { type: Array } },
  data() {
    return {
      imgList: [],
    }
  },
  created() {
    this.get()
  },
  methods: {
    get() {
      allScenicSpot({ $top: 2500 }).then((res) => {
        const imgList = res.data.filter(
          (el) => el.Picture.PictureUrl1 && el.Class1 && el.Class2 && el.Class3
        )
        this.randomPictureWithLabel(imgList)
      })
    },
    randomPictureWithLabel(list) {
      for (let i = 0; i < 4; i++) {
        // 隨機取四個有圖片且有圖片標籤的景點
        const index = Math.floor(Math.random() * list.length)
        this.imgList.push({
          ...list[index],
          label: [list[index].Class1, list[index].Class2, list[index].Class3],
        })
      }
    },
  },
}
</script>
