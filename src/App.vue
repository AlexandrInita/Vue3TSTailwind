<template>
  <div class="max-w-screen-xl mx-auto font-main">
    <header class="px-2 border-b flex items-center justify-between">
      <router-link class="py-3 font-bold text-purple-500" to="/">Vue3TsTailwind</router-link>
      <div class="hidden md:flex">
        <router-link class="header-link" to="/">Главная страница</router-link>
        <router-link class="header-link" to="/planner">Планировщик</router-link>
        <router-link class="header-link" to="/simplePage">Просто страница</router-link>
      </div>
      <svg 
        class="inline-block md:hidden h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"  
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      >  
        <line x1="3" y1="12" x2="21" y2="12" />  
        <line x1="3" y1="6" x2="21" y2="6" />  
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </header>
    
    <router-view/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
