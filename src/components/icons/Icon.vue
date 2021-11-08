<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconClass" />
  </svg>
</template>

<script>
export default {
  name: 'SvgClass',
  props: {
    //  使用icon的圖示型別
    iconName: {
      type: String,
      required: true,
    },
    // 是否新增class樣式
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconClass() {
      return `#icon-${this.iconName}`
    },
    svgClass() {
      if (this.className) {
        return `icon ${this.className}`
      } else {
        return `icon`
      }
    },
  },
}
</script>

<style type="text/css" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>