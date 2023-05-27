<template>
    <teleport to="body" v-if="showModal">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/3"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <strong>{{ task.id ? 'Редактирование задачи' : 'Добавление новой задачи' }}</strong>

          <div class="my-5">
            <div>
              <label>Название задачи</label>
              <input 
                class="mt-1 pl-2 block w-full bg-white border border-slate-300 
                      rounded-md shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                      focus:invalid:border-indigo-600 focus:invalid:ring-indigo-600"
                placeholder="Введите Название задачи"
                v-model="task.name"
              />
            </div>

            <div class="mt-2">
              <label>Подробности задачи</label>
              <textarea 
                class="mt-1 pl-2 mt-1 resize-none block w-full bg-white border border-slate-300 
                      rounded-md shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                      focus:invalid:border-indigo-600 focus:invalid:ring-indigo-600"
                placeholder="Введите Название задачи"
                v-model="task.text"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button 
              class="py-2 px-4 rounded-lg text-center font-bold text-white bg-gray-400 hover:bg-gray-500"
              @click="close"
            >
              Закрыть
            </button>

            <button 
              class="ml-1 py-2 px-4 rounded-lg text-center font-bold text-white bg-indigo-500 hover:bg-indigo-600"
              @click="save"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { ref, defineComponent, watch, reactive, PropType } from 'vue';
import ITask from '../../../interface/ITask';
const props = {
  show: {
    type: Boolean,
    default: false,
  },

  taskProp: {
    type: Object as PropType<ITask | null>
  }
};

export default defineComponent ({

  name: 'TaskDialog',
  props,
  emits: ['close', 'save'],

setup(props, { emit }) {
  const showModal = ref(false);
  const task = reactive<ITask>({id:0, name: '', text:'', completed: false})
  
  function close(): void {
    emit('close')
    clearDialog()
  }

  function save(): void {
    emit('save',task)
    emit('close')
    clearDialog()
  }

  function clearDialog(): void {
    task.id = 0
    task.name = ''
    task.text = ''
    task.completed = false
  }

  watch(() => props.taskProp, taskProp => { 
    task.id = taskProp?.id || 0
    task.name = taskProp?.name || ''
    task.text = taskProp?.text || ''
    task.completed = taskProp?.completed || false
  })
  watch(() => props.show, show => { showModal.value = show })


  return {
    showModal,
    close,
    save,
    task
  };
},
})
</script>