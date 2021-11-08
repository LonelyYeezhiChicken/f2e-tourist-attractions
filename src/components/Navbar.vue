<template>
  <div class="bg-grey-200 w-full h-16">
    hello
    <IconButton :text="'想要去哪?'" />
  </div>
</template>
<script>
import IconButton from './IconButton.vue'
export default {
    name: 'Navbar',
    components: { IconButton }
}
</script>
