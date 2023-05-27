<template>
  <div 
    class="drop-zone"
    @drop="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div class="m-2 select-none">{{ title }}</div>
    <div 
      v-for="item in items" 
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event,item)"
    >
      <p>{{ item.title }}</p>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { CardTask } from '../../models/CardTask'

export default defineComponent ({
  props: {
    title: String,
    items: Array<CardTask>
  },

  emit:['onDrop', 'startDrag'],

  setup (props, { emit }) {
    const onDrop = (event: any) => {
      emit('onDrop', event)
    }

    const startDrag = (event: any, item: any) => {
      emit('startDrag', event, item)
    }

    return {
      onDrop,
      startDrag
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