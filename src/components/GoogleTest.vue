<template>
  <div id="map"></div>
</template>

<script setup>
import { FIELDS } from '@/constants/google'
const google = window.google

// 福德水車公園生態園區 from TDX
const lat = 25.24748992919922
const lng = 121.50617218017578

const onClick = () => {
  const spot = new google.maps.LatLng(lat, lng)

  const map = new google.maps.Map(document.getElementById('map'), {
    center: spot,
    zoom: 15,
  })

  const fileds = [...FIELDS.basic, ...FIELDS.atmosphere]

  const request = {
    query: '福德水車公園生態園區',
    fields: fileds,
    language: 'zh',
    locationBias: { lat, lng },
  }

  let placeId = 'ChIJ03icGTexQjQRlaqTcp80Odo'
  const service = new google.maps.places.PlacesService(map)
  const callback = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log('🚀 ~ service.findPlaceFromQuery ~ results', results)
    }
  }

  //   service.findPlaceFromQuery(request, callback)
  service.getDetails({ ...request, placeId }, callback)
}
</script>
