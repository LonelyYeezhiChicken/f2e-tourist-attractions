<template>
  <div>
    <Navbar />
    <GoogleMap />
    <div>
      <SvgIcon class="search" name="search" width="2rem" height="2rem" />
      <SvgIcon name="tour" />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import GoogleMap from '../components/GoogleMap.vue'
// import { cityScenicSpot } from '@/api/Api'

export default {
  name: 'HomePage',
  components: { Navbar, GoogleMap },
  created() {
    // cityScenicSpot('NewTaipei', { $top: 10 })
  },
}
</script>
