<template>
  <div>
    <h1 class="text-3xl font-bold text-center">
      Главная страница
    </h1>

    <div class="mt-4 flex flex-col max-w-sm mx-auto">
      <div class="my-2 text-center">
        Этот сайт создан для наработок.
        Стек: Vue 3, TypeScript, Tailwind, Vite.
        На данный момент можно посмотреть:
      </div>

      <div class="flex">
        <div class="p-6 basis-1/2 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center space-x-4">
          <div>Планировщик</div>
          <router-link class="mt-2 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg" to="/planner">
            Посмотреть
          </router-link>
        </div>
    
        <div class="ml-2 p-6 basis-1/2 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center space-x-4">
          <div>Просто страница</div>
          <router-link class="mt-2 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg" to="/simplePage">
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
