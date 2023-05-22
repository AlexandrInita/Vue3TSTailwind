<template>
  <div class="w-80 h-96 bg-white rounded-xl shadow-sm overflow-hidden">
    <div class="p-3 bg-indigo-500 text-white font-bold flex flex-col">
      <div class="flex justify-center">{{ com_currentDate }}</div>

      <div class="flex justify-between items-center">
        <div class="relative ml-3">
          <span class="month-picker" @click="showMonthMenu = !showMonthMenu">{{ com_currentMonth }}</span>

          <div 
            class="scroll absolute left-0 z-10 mt-2 py-1 h-48 w-48 origin-top-right rounded-md 
                   bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto"
            v-show="showMonthMenu"
          >
            <span 
              class="month-list-item"
              v-for="(month, index) in months" :key="'month'+index"
              @click="chooseMonth(index)"
            >
              {{ month }}
            </span>
          </div>
        </div>

        <div class="flex items-center">
          <span class="year-change" @click="prevYear">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span class="year">{{ selectedYear }}</span>
          <span class="year-change" @click="nextYear">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </div>
    </div>

      <div class="p-3">
        <transition :name="transitionName">
        <div v-show="showDays">
          <div class="grid grid-cols-7 gap-1 font-semibold cursor-default text-gray-900">
            <div class="w-9 h-9 flex justify-center " v-for="w_day,index in week_days" :key="'w_day'+index">{{ w_day }}</div>
          </div>

          <div class="grid grid-cols-7 gap-1 text-gray-900">
            <div 
              v-for="day,index in days" :key="index" 
              :class="[day !== null ? 'calendar-days': 'hidden-calendar-days', 
                currentDate.getFullYear() === selectedYear && 
                currentDate.getMonth() === selectedMonth &&
                currentDate.getDate() === day && 'active-day']"
              @click="chooseDay(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </transition>
      </div>
  </div>      
</template>

<script lang="ts">
import { defineComponent, ref, computed, toRefs } from 'vue';

export default defineComponent ({

  name: 'UICalendar',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  emits: ['update:value'],

  setup(props, { emit }) {
    const { value } = toRefs(props)

    const transitionName = ref('slide-fade-right')

    const week_days = ['Пн', 'Вт', 'Ср','Чт','Пт','Сб','Вс']
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const currentDate = computed((): Date => {
      const date_arr = value?.value?.split('.').map(el => Number(el))
      return date_arr ? new Date(date_arr[2],date_arr[1]-1,date_arr[0]): new Date()
    })
    
    const selectedYear = ref(currentDate.value.getFullYear()) 
    const selectedMonth = ref(currentDate.value.getMonth()) 

    const showDays = ref(true)
    const showMonthMenu = ref(false)

    const com_currentDate = computed(() => String(currentDate.value.getDate()).padStart(2,'0') + '.' + 
                                           String(currentDate.value.getMonth() + 1).padStart(2,'0') + '.' + 
                                           currentDate.value.getFullYear())
                                           
    const com_currentMonth = computed(() => months[selectedMonth.value])

    const days = computed(() => {
      const first_month_date = new Date(selectedYear.value, selectedMonth.value, 1)
      const first_week_day = first_month_date.getDay() === 0 ? 6 : first_month_date.getDay() - 1
      const n_days = new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate() 

      return [...Array(first_week_day + n_days).keys()].map(el => el >= first_week_day  ? el + 1 - first_week_day : null)
    })

    function chooseDay(day : number | null): void {
      day !== null ? emit('update:value', String(day).padStart(2,'0') + '.' + String(selectedMonth.value + 1).padStart(2,'0') + '.' + selectedYear.value) : ''
    }

    function chooseMonth(month : number): void {
      selectedMonth.value = month
      showMonthMenu.value = false
    }

    function prevYear(): void {
      transitionName.value = 'slide-fade-left'
      showDays.value = false
      selectedYear.value = selectedYear.value - 1
      setTimeout(() =>  showDays.value = true, 300)
    }

    function nextYear(): void {
      transitionName.value = 'slide-fade-right'
      showDays.value = false
      selectedYear.value = selectedYear.value + 1
      setTimeout(() =>  showDays.value = true, 300)
    }

    return {
      months, week_days, days, currentDate, showDays, selectedYear, selectedMonth,
      com_currentDate, com_currentMonth, transitionName, showMonthMenu,
      chooseDay, chooseMonth, prevYear, nextYear
    }
  },
})
</script>

<style scoped>
.calendar-days {
  @apply w-9 h-9 flex items-center justify-center 
         relative cursor-pointer
         hover:bg-indigo-200 hover:rounded-xl hover:text-white
}

.hidden-calendar-days {
  @apply w-9 h-9
}

.active-day {
  @apply bg-indigo-500 hover:bg-indigo-500 rounded-xl text-white
}

.month-picker {
  @apply py-1 px-3 rounded-xl cursor-pointer
         hover:bg-indigo-700
}

.month-list-item {
  @apply block m-1 px-4 py-2 text-sm text-gray-700 rounded-xl cursor-pointer
         hover:bg-indigo-500 hover:text-white
}

.year-change {
  @apply h-8 w-8 rounded-xl grid place-content-center my-0 mx-3 cursor-pointer
         hover:bg-indigo-700 transition
}

/*.year {
  @apply hover:cursor-pointer hover:scale-125 hover:transition
}*/

.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-enter-from {
  transform: translateX(-20px);
}

.slide-fade-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-right-enter-from {
  transform: translateX(20px);
}

.slide-fade-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.scroll::-webkit-scrollbar {
  width: 8px;               
}
.scroll::-webkit-scrollbar-track {
  @apply bg-transparent
}
.scroll::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-3xl  
}
</style>