import { ref } from 'vue'

export function taskDialogHook() {
  const addEditTaskDialog = ref(false)
   
  function openTaskDialog(): void {
    addEditTaskDialog.value = true
  }

  function closeTaskDialog(): void {
    addEditTaskDialog.value = false
  }

  return { addEditTaskDialog, openTaskDialog, closeTaskDialog }
}