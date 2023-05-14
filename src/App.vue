<template>
  <div>
    <div id="nav" class="text-center pt-5 pb-5 mb-4 shadow bg-white">
      <router-link class="hover:font-bold" to="/">Главная страница</router-link> |
      <router-link class="hover:font-bold" to="/planner">Планировщик</router-link> |
      <router-link class="hover:font-bold" to="/simplePage">Просто страница</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
