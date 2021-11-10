<template>
<router-link :to="router">
  <button class="bg-grey-100 hover:bg-primary-100 text-primary-700 border-primary-700 border font-bold py-1.5 px-6 rounded-3xl inline-flex items-center">
      <span>{{label}}</span>
      <SvgIcon :name="icon" class="pl-2" width="1.5rem"/>
  </button>
</router-link>
  
</template>
<script>
export default {
  name: 'IconButton',
  props: { icon: { type: String }, label: { type: String }, router: { type: String } },
  methods: {
  }
}
</script>