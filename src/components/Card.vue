<template>
  <div
    class="
      relative
      overflow-hidden
      shadow-lg
      rounded-lg
      h-90
      w-60
      md:w-80
      cursor-pointer
      m-auto
    "
  >
    <a href="#" class="w-full block h-full">
      <img
        alt="blog photo"
        :src="imgSrc"
        class="max-h-60 w-full object-cover"
      />
      <div class="bg-white dark:bg-gray-800 w-full p-4">
        <button
          class="
            bg-white
            absolute
            rounded-full
            w-12
            h-12
            right-1
            top-1
            flex flex-center
          "
        >
          <SvgIcon name="favor" width="2rem" height="2rem" color="#28DAA5" />
        </button>
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {{ title }}
        </p>
        <div class="flex item-center mt-2">
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            ></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            ></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            ></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            ></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-wrap justify-starts items-center mt-4">
          <div
            v-for="(item, index) in tag"
            :key="index"
            class="
              text-xs
              mr-2
              py-1.5
              px-4
              text-gray-600
              bg-blue-100
              rounded-2xl
            "
          >
            #{{ item }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: { type: String, required: true },
    tag: { type: Array },
    imgSrc: { type: String },
  },
}
</script>
