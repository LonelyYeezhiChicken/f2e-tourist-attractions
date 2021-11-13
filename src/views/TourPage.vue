<template>
    <div class="h-auto">
        <Banner :imgurl="'tour-banner'" title="景點列表"/>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
export default {
    name: 'TourPage',
    components: { Banner }
}
</script>