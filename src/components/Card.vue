<template>
  <div
    class="
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
        <!-- <button
          class="
            text-red-400
            hover:text-red-600
            absolute
            rounded-full
            w-12
            h-12
            right-8
            -top-6
          "
        >
          <svg
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"
            ></path>
          </svg>
        </button> -->
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