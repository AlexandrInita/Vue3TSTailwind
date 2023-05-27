<template>
  <div>
    <h1 class="text-3xl font-bold text-center">
      Планировщик
    </h1>

    <div class="mt-6 py-6 max-w-md mx-auto bg-white rounded-xl shadow-sm flex flex-col items-center space-y-4">
      <div class="min-w-full flex justify-end">
        <button 
          class="py-2 px-4 mr-4 rounded-lg text-center font-bold text-white bg-indigo-500 hover:bg-indigo-600"
          @click="openTaskDialog"
        >
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span class="ml-2">Добавить</span>
          </div>
        </button>
      </div>

      <div class="mt-6 min-w-full">
        <transition-group name="flip-list" tag="ul">
          <li
            v-for="task in tasks" :key="task.id"
            class="px-4 flex justify-between items-center cursor-pointer
                  hover:bg-sky-50"
            @click.self="editTask(task)"
          >
            <div 
              class="text-2xl"
              @click.stop="editTask(task)"
            >
              <span>{{task.id}}</span>
              <span class="ml-3">{{task.name}}</span>
            </div>
            <input 
              class="h-6 w-6"
              type="checkbox"
              v-model="task.completed"
              @change="sort" 
            />
          </li>
        </transition-group>
      </div>
    </div>

    <TaskDialog 
      :show="addEditTaskDialog"
      :taskProp="selectedTask"
      @close="closeTaskDialog"
      @save="saveTask"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue"
import TaskDialog from "../components/planner/dialogs/TaskDialog.vue"
import ITask from '../interface/ITask'
import { taskDialogHook } from "../hooks/taskDialogHook"
export default defineComponent ({
  components: { TaskDialog },
  setup () {

    let tasks = reactive<ITask[]>([
      {id:1, name: 'TypeScript', text:'Изучить TypeScripte', completed: false},
      {id:2, name: 'Vue 3', text:'Изучить Vue 3', completed: false},
      {id:3, name: 'Tailwind', text:'Изучить Tailwind', completed: false}
    ]) 

    const { addEditTaskDialog, openTaskDialog, closeTaskDialog } = taskDialogHook();

    const selectedTask = ref(null as ITask | null)

    function editTask(task: ITask): void {
      selectedTask.value = Object.assign({}, task)
      openTaskDialog()
    }

    function saveTask(task: ITask): void {
      if (task.id) {
        const index = tasks.findIndex(el => el.id === task.id)
        tasks[index] = Object.assign({},task)
      } else {
        const body = Object.assign({},task)
        body.id = new Date().getTime()
        tasks.push(body)
      }
    }

    function sort(): void {
      tasks = tasks.sort((a,b) => a.id - b.id)

      tasks = tasks.sort((a,b) => {
        const aa = a.completed ? 1 : 0
        const bb = b.completed ? 1 : 0
        return bb - aa
      })
    }

    return { tasks, addEditTaskDialog, selectedTask, 
            sort, openTaskDialog, editTask, saveTask, closeTaskDialog }
  },

  methods: {
  }
})
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s ease;
}
</style>