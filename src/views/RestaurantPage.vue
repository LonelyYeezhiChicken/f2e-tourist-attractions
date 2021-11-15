<template>
  <div class="h-auto">
    <Banner :imgurl="'restaurant-banner'" title="餐廳列表" />
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'RestaurantPage',
  components: { Banner },
}
</script>
