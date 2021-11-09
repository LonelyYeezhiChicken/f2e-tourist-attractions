<template>
  <div>
    <Navbar />
    <GoogleMap />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import GoogleMap from '../components/GoogleMap.vue'

export default {
  name: 'HomePage',
  components: { Navbar, GoogleMap },
  created() {
    console.log('test hello')
  },
}
</script>
