<template>
  <div class="flex flex-col h-screen justify-between">
    <Navbar />
    <router-view></router-view>
    <!-- <GoogleMap /> -->
    <!-- <div>
      <SvgIcon class="search" name="search" width="2rem" height="2rem"/>
      <SvgIcon name="tour" />
      <SvgIcon name="brand" />
    </div> -->
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import GoogleMap from '../components/GoogleMap.vue'
// import { cityScenicSpot } from '@/api/Api'

export default {
  name: 'HomePage',
  components: { Navbar, Footer },
  created() {
    // cityScenicSpot('NewTaipei', { $top: 10 })
  },
}
</script>
