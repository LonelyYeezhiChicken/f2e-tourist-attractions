<template>
  <footer
    class="
      px-3
      py-4
      bg-primary-600
      dark:bg-gray-800
      text-2 text-grey-100
      font-bold
      dark:text-gray-200
      transition-colors
      duration-200
    "
  >
    <div class="flex flex-col">
      <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
      <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
        <nav
          class="
            py-1
            flex-1 flex flex-col
            items-center
            justify-center
            md:items-center md:border-r
            border-primary-600
            md:pr-5
          "
        >
          <a
            aria-current="page"
            href="/"
            class="mt-1 hover:text-gray-700 dark:hover:text-white"
          >
            <img
              class="mx-auto"
              alt="powered-by"
              src="../assets/brand-white.png"
            />
          </a>
          <div class="flex justify-evenly">
            <a
              aria-current="page"
              href="#"
              class="mt-1 hover:text-gray-700 dark:hover:text-white"
            >
              <SvgIcon name="facebook" class="mx-1 mt-1" />
            </a>
            <a
              aria-current="page"
              href="#"
              class="mt-1 hover:text-gray-700 dark:hover:text-white"
            >
              <SvgIcon name="line" class="mx-1 mt-1" />
            </a>
            <a
              aria-current="page"
              href="#"
              class="mt-1 hover:text-gray-700 dark:hover:text-white"
            >
              <SvgIcon name="twiter" class="mx-1 mt-1" />
            </a>
          </div>
        </nav>
        <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
        <div
          class="
            mt-4
            md:mt-0
            text-center
            flex-1 flex
            items-center
            justify-center
            md:border-r
            border-primary-600
            space-x-6
          "
        >
          <router-link to="/">
            <div>找景點</div>
            <div>主題景點</div>
          </router-link>
          <router-link to="/">
            <div>找餐廳</div>
            <div>主題餐廳</div>
          </router-link>
          <router-link to="/">
            <div>找飯店</div>
            <div>主題飯店</div>
          </router-link>
          <router-link to="/">
            <div>會員登入</div>
            <div>商家專區</div>
          </router-link>
        </div>
        <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
        <div
          class="
            mt-7
            md:mt-0
            flex-1 flex flex-col
            items-center
            justify-center
            md:items-start md:pl-5
          "
        >
          <span class="ml-36"> CopyRight © </span>
        </div>
      </div>
    </div>
  </footer>
</template>
