<template>
  <div class="text-center">
    <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Tailwind jit" />
    <img class="mx-auto my-8" alt="powered-by" src="./assets/powered-by-vitawind-bright.png">
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>