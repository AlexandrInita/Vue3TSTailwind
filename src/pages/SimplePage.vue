<template>
  <div>
    <h1 class="text-3xl font-bold text-center">
      Просто страница
    </h1>
    
    <div class="mt-4 flex flex-col max-w-sm mx-auto">
      <div class="parent">
        <h1 class="heading">Авторизация</h1>
        <input 
          class="input"
          placeholder="Почта"
          v-model="email"
        />
        <input 
          class="input"
          placeholder="Пароль"
          v-model="password"
        />
        <button class="btn">Вход</button>          
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent ({
  components: { },
  setup () {
    const email = ref('')
    const password = ref('')

    return {email, password}
  }
})
</script>

<style lang="scss">
  @import "../assets/scss/simplePage.scss";
</style>