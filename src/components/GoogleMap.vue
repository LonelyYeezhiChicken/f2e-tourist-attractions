<template>
  <div>
    <Navbar />
  </div>
  <div class="container mt-4">
    <div class="map-container border rounded">
      <ul class="nav justify-content-center border-bottom">
        <!--營運地區 nav-->
      </ul>
      <!--地圖呈現在此-->
      <div id="map" class="google-map" />
    </div>
  </div>
</template>

<script>
const google = window.google

export default {
  name: 'GoogleMap',
  data() {
    return {
      map: null,
      // 預設經緯度在信義區附近
      lat: 25.033508,
      lng: 121.5614693,
    }
  },
  created() {
    console.log('test hello')
  },
  mounted() {
    this.initMap()
    this.setMarker()
    this.drawPolyline()
  },
  methods: {
    // 建立地圖
    initMap() {
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      this.map = new google.maps.Map(document.getElementById('map'), {
        // 設定地圖的中心點經緯度位置
        center: { lat: this.lat, lng: this.lng },
        // 設定地圖縮放比例 0-20
        zoom: 15,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false,
      })
    },
    // 建立地標
    setMarker() {
      // 建立一個新地標
      new google.maps.Marker({
        // 設定地標的座標
        position: { lat: this.lat, lng: this.lng },
        // 設定地標要放在哪一個地圖
        map: this.map,
      })
    },
    // 繪製路線
    drawPolyline() {
      const bikeCoordinates = [
        { lat: 25.0244841483025, lng: 121.552884577052 },
        { lat: 25.026234038915, lng: 121.554826502525 },
        { lat: 25.0270895323619, lng: 121.555797452839 },
        { lat: 25.0275367194568, lng: 121.556304398895 },
        { lat: 25.0281370208744, lng: 121.556772780793 },
        { lat: 25.0288345276624, lng: 121.55716605103 },
        { lat: 25.0302295341946, lng: 121.557984799345 },
        { lat: 25.0329417274652, lng: 121.559579369834 },
      ]
      new google.maps.Polyline({
        path: bikeCoordinates,
        geodesic: true,
        strokeColor: '#2563EB',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        map: this.map,
      })
    },
  },
}
</script>
<style scoped>
.google-map {
  width: 100%;
  height: 400px;
}
</style>
