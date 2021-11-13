<template>
  <div class="w-full h-60 relative">
      <div class="absolute font-extrabold text-5xl text-grey-100 ml-64 mt-14">{{title}}</div>
      <img :src="`src/assets/${imgurl}.png`" class="w-full">
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    imgurl: { type: String },
    title: { type: String }
  },
  created () {
      console.log(this.imgurl)
  }
}
</script>