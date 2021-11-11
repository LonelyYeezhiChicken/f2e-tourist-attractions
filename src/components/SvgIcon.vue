<template>
  <svg
    class="svg-icon"
    :class="svgClass"
    v-bind="$attrs"
    :style="{ color, fill, stroke, width, height }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
  color: {
    type: String,
  },
  fill: {
    type: String,
  },
  stroke: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => `icon-${props.name} ${props.class}`)
</script>

<style scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  vertical-align: middle;
}
</style>
