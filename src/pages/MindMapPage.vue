<template>
  <div class="h-4/5">
    <h1 class="text-3xl font-bold text-center">
      Mindmap
    </h1>

    <div class="mt-4 h-full mx-auto">
      <div ref="box" class="p-6 overflow-hidden border border-red-500 rounded-xl h-full" @click="newItem">
        <UIRenderItem :list="list"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from "vue"
import UIRenderItem from "../components/ui/render/UIRenderItem.vue"

export default defineComponent ({
  components: { UIRenderItem },
  
  setup () {
    const box = ref(null)
    let dragItem: any = null 
    //let boxX: number = 0
    //let boxY: number = 0

    const moveAt = function(e: any) {
      // dragItem.style.left = e.pageX - boxX - dragItem.offsetWidth / 2  + 'px'
      // dragItem.style.top = e.pageY - boxY - dragItem.offsetHeight / 2 + 'px'
      dragItem.style.left = e.pageX - dragItem.offsetWidth / 2 + 'px'
      dragItem.style.top = e.pageY - dragItem.offsetHeight / 2 + 'px'
    }

    const onMouseDown = function(e: any) { 
      dragItem = e.target

      //boxX = box.value.getBoundingClientRect().left
      //boxY = box.value.getBoundingClientRect().top

      document.onmousemove = function(e) {
        moveAt(e)
      }

      document.onmouseup = function() {
        document.onmousemove = null
        dragItem.onmouseup = null
        setTimeout(() => dragItem = null, 100)
      },

      dragItem.ondragstart = function() {
        return false
      };
    }

    const list: Ref<any[]> = ref([])

    const newItem = function(e: any) {
      if (!dragItem) {
        //boxX = box.value.getBoundingClientRect().left
        //boxY = box.value.getBoundingClientRect().top

        list.value.push(h('div', { class: "px-4 w-32 h-10 absolute border border-2 border-indigo-500 rounded-lg select-none", 
                                  style: { top: e.pageY + 'px', left: e.pageX + 'px' },
                                  onmousedown: onMouseDown
                                }, e.pageY + 'x' + e.pageX ))
      }
    }

    return { newItem, list, box }
  }
})
</script>

<style lang="scss">
@import "../assets/scss/simplePage.scss";

.date-input {
  @apply mb-2 my-1 py-2 px-4 border border-purple-500 rounded-lg
}
</style>