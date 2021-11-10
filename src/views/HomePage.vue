<template>
  <div>
    <Navbar />
    <Card
      title="新北耶誕城"
      :tag="cardTag"
      imgSrc="https://cdn.walkerland.com.tw/images/upload/subject/2019/10/1653f11606fde4c760755aa2206c274df7c46598.jpg"
    />
    <GoogleMap />
    <div>
      <SvgIcon class="search" name="search" width="2rem" height="2rem" />
      <SvgIcon name="tour" />
      <SvgIcon name="brand" />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import GoogleMap from '../components/GoogleMap.vue'
// import { cityScenicSpot } from '@/api/Api'
import Card from '../components/Card.vue'
export default {
  name: 'HomePage',
  //components: { Navbar, GoogleMap },
  components: { Navbar, GoogleMap, Card },
  data() {
    return { cardTag: ['新北', '耶誕城'] }
  },
  created() {
    // cityScenicSpot('NewTaipei', { $top: 10 })
  },
}
</script>
