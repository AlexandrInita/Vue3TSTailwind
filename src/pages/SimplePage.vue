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

    <div class="mt-4 flex flex-col max-w-sm mx-auto">
      <div class="p-6 border border-purple-500 rounded-xl">
      <h1 class="mb-6 text-xl font-bold text-center">Календарь</h1>

      <label class="ml-2 font-bold">Дата</label>
      <br>
      <input class="date-input" placeholder="Дата" v-model="date"/>
        
      <UICalendar v-model:value="date"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import UICalendar from "../components/ui/UICalendar.vue"
export default defineComponent ({
  components: { UICalendar },
  setup () {
    const email = ref('')
    const password = ref('')

    const date = ref('01.05.2023')

    return {email, password, date}
  }
})
</script>

<style lang="scss">
@import "../assets/scss/simplePage.scss";

.date-input {
  @apply mb-2 my-1 py-2 px-4 border border-purple-500 rounded-lg
}
</style>