<template>
  <Navbar />
  <router-view />
  <Footer class="mt-52"/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Navbar, Footer }
}
</script>