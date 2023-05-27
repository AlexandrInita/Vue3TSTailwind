<template>
  <div class="text-center h-[calc(100%-6rem)] 
              bg-gradient-to-t from-indigo-500">
    <h1 class="pt-14 text-6xl font-bold tracking-tight">
      Vue3TsTailwind
    </h1>
    <p class="mt-6 text-lg text-gray-900">
      Этот сайт создан для наработок.
      Стек: Vue 3, TypeScript, Tailwind, Vite.
      На данный момент можно посмотреть:
    </p>

    <div class="mt-4 flex flex-col max-w-sm mx-auto">
      <div class="mt-10 flex">
        <div class="p-6 basis-1/2 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center">
          <div>Планировщик</div>
          <router-link class="mt-2 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg" to="/planner">
            Посмотреть
          </router-link>
        </div>
    
        <div class="ml-2 p-6 basis-1/2 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center">
          <div>Просто страница</div>
          <router-link class="mt-2 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg" to="/simplePage">
            Посмотреть
          </router-link>
        </div>
      </div>

      <div class="mt-2 flex justify-center">
        <div class="p-6 basis-1/2 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center">
          <div>Канбан</div>
          <router-link class="mt-2 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg" to="/canbanPage">
            Посмотреть
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
  setup () {
  },
})
</script>

<style scoped>
</style>
