<template>
  <div>
    <h1 class="text-3xl font-bold text-center">
      Главная страница
    </h1>

    <div class="mt-4 flex flex-col max-w-sm mx-auto">
      <div class="my-2 text-center">
        Этот сайт создан для наработок.
        Стек: Vue 3, TypeScript, Tailwind, Vite.
        На данный момент можно посмотреть:</div>
      <router-link 
        class="py-2 px-6 bg-blue-400 text-white font-semibold rounded-r-full rounded-l-sm" 
        to="/planner"
      >Планировщик</router-link>
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
