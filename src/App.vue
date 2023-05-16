<template>
  <div class="max-w-screen-xl mx-auto font-main">
    <the-header />
    
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/App/TheHeader.vue';

</script>

<style scoped>
</style>
