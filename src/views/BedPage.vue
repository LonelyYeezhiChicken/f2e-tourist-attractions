<template>
  <div class="h-auto">
        <Banner :imgurl="'bed-banner'" title="飯店列表"/>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'BedPage',
  components: { Banner }
}
</script>