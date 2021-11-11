<template>
  <div class="w-full bg-white h-48 px-20">
    <div class="flex justify-between font-bold mb-5">
        <span class="text-xl text-black">{{title}}</span>
        <button class="rounded-3xl py-2 px-4 bg-primary-700 text-grey-100">查看更多</button>
    </div>
    <div class="flex justify-center">
      <Card v-for="card in 4" :key="card" />
    </div>
  </div>
</template>
<script>
import Card from '../Card.vue'
export default {
  name: 'cardGroups',
  props: { title: { type: String } },
  components: { Card },
}
</script>
