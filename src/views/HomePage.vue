<template>
  <div>
    <Navbar />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'HomePage',
    components: { Navbar },
    created () {
        console.log('test hello')
    }
}
</script>