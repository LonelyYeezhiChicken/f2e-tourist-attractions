<template>
<div>
    <nav class="bg-grey-200 dark:bg-gray-800  ">
        <div class="max-w-7xl mx-auto px-5">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <router-link to="/">
                        <img class="mx-auto" alt="powered-by" src="../assets/brand.png">
                    </router-link>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a class="text-grey-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-bold" href="/#">
                                <search :label="'想要去哪?'"></search>
                            </a>
                            <a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white pl-40  py-2 rounded-md text-sm font-medium" href="/#">
                                <IconButton :icon="'tour-green'" :label="'找景點'" :router="'tour'"></IconButton>
                            </a>
                            <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white py-2  rounded-md text-sm font-medium" href="/#">
                                <IconButton :icon="'food-green'" :label="'找餐廳'" :router="'restaurant'"></IconButton>
                            </a>
                            <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white  py-2 pr-10 rounded-md text-sm font-medium" href="/#">
                                <IconButton :icon="'bed-green'" :label="'找飯店'" :router="'bed'"></IconButton>
                            </a>
                            <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white  py-2 rounded-md text-sm font-medium" href="/#">
                                <button class="bg-primary-700 hover:bg-primary-800 focus:bg-primary-700 text-white border-primary-700 border font-bold py-1.5 px-3.5 rounded-3xl inline-flex items-center">我的旅程</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Home
                </a>
                <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Gallery
                </a>
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Content
                </a>
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
import IconButton from './IconButton.vue'
import search from './Input.vue'
export default {
    name: 'Navbar',
   components: { search, IconButton },
   methods: {
   }
}
</script>
