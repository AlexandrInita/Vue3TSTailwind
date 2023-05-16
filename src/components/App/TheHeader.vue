<template>
  <header>
    <div class="px-2 border-b flex items-center justify-between">
      <router-link class="py-3 font-bold text-purple-500" to="/">Vue3TsTailwind</router-link>
      <div class="hidden md:flex">
        <router-link class="header-link" to="/">Главная страница</router-link>
        <router-link class="header-link" to="/planner">Планировщик</router-link>
        <router-link class="header-link" to="/simplePage">Просто страница</router-link>
      </div>
  
      <button class="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-gray-500 
                      hover:bg-gray-700 hover:text-white 
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="isShowMenu = !isShowMenu">
        <svg v-show="!isShowMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>


        <svg v-show="isShowMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="md:hidden" v-show="isShowMenu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link active-class="active-mobile-header-link" class="mobile-header-link" to="/">Главная страница</router-link>
        <router-link active-class="active-mobile-header-link" class="mobile-header-link" to="/planner">Планировщик</router-link>
        <router-link active-class="active-mobile-header-link" class="mobile-header-link" to="/simplePage">Просто страница</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent ({

  name: 'TheHeader',

  setup() {
    const isShowMenu = ref(false)
    return { isShowMenu }
  },
})
</script>