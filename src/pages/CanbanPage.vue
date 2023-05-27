<template>
  <div>
    <h1 class="mt-2 text-3xl font-bold text-center">
      Канбан
    </h1>
    
    <div class="mt-4 flex flex-row mx-auto justify-center">
      <div 
        class="my-12 drag-el"
        draggable="true"
        @dragstart="startDrag($event, newTask)"
      >
        <input 
          placeholder="Заголовок" class="p-2 resize-none border border-indigo-500 rounded-md" 
          v-model="newTask.title" 
        />
        <textarea
          placeholder="Задача" class="p-2 mt-2 resize-none border border-indigo-500 rounded-md" 
          v-model="newTask.text" 
        />
      </div>

      <StateColumn 
        v-for="col in stateColumns" :key="col.id + 'col'"
        :title="col.title"
        :items="getList(col.id)"
        @onDrop="onDrop($event, col.id)"
        @startDrag="startDrag"
      />

      <div 
        class="ml-5 mt-12"
        @drop="onRemove($event)"
        @dragenter.prevent
        @dragover.prevent
      >
        <svg  class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import StateColumn from '../components/Canban/StateColumn.vue'

export default defineComponent ({
  components: { StateColumn },
  setup () {
    const items = ref([
      { id: 0, title: 'Item A', text: '', list: 0},
      { id: 1, title: 'Item B', text: '', list: 1},
      { id: 2, title: 'Item C', text: '', list: 2},
    ])

    const stateColumns = [
      {id: 0, title: 'Нужно сделать'},
      {id: 1, title: 'В работе'},
      {id: 2, title: 'Выполнено'},
    ]

    const newTask = reactive( { id: -1, title: '', text: '', list: 0})

    const getList = (list: any) => {
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event: any, item: any) => {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    }

    const onDrop = (event: any, list: any) => {
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id == itemID)
      if (item) item.list = list
      else {
        const task = Object.assign({}, newTask)
        task.id = new Date().getTime()
        task.list = list
        newTask.title = ''
        newTask.text = ''
        items.value.push(task)
      }
    }

    const onRemove = (event: any) => {
      const itemID : number = event.dataTransfer.getData('itemID')
      const id : number = items.value.findIndex(item => item.id == itemID)

      items.value.splice(id, 1)
    }

    return {
      newTask,
      stateColumns,
      getList,
      startDrag,
      onDrop,
      onRemove
    }
  }
})
</script>

<style lang="scss">
.drop-zone {
  @apply w-[20rem] ml-4 my-12 border border-indigo-500 rounded-lg p-3 min-h-[0.75rem]
}

.drag-el {
  @apply  w-[18rem] h-36 bg-white flex flex-col shadow-lg rounded-lg p-5 mb-3 last-of-type:mb-0
}

</style>