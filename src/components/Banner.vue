<template>
  <div class="w-full h-60 relative ">
    <div class="absolute font-extrabold text-5xl text-grey-100 ml-64 mt-14 ">
      {{ title }}
    </div>
    <div class="absolute flex justify-start space-x-10 ml-64 mt-32 ">
      <button class="bg-grey-100 text-primary-700 w-80 border-primary-700 border font-bold rounded-3xl text-left pl-4">選擇地區</button>
      <button class="bg-grey-100 text-primary-700 w-80 border-primary-700 border font-bold rounded-3xl text-left pl-4">選擇日期</button>
      <IconButton :icon="'filter'" :label="'篩選'" :router="'/'"></IconButton>
    </div>
    <img :src="`src/assets/${imgurl}.png`" class="w-full" />
  </div>
</template>
<script>
import IconButton from '@/components/IconButton.vue'
export default {
  name: 'Banner',
  components: { IconButton },
  props: {
    imgurl: { type: String },
    title: { type: String },
  },
  created() {
    console.log(this.imgurl)
  },
}
</script>