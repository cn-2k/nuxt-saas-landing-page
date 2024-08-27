<template>
  <button
    class="flex items-center px-3 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-300/50 dark:bg-gray-700/50 rounded-md hover:bg-gray-400/50 hover:dark:bg-gray-700/90 focus:outline-none"
    @click="showModal = true"
  >
    <SearchIcon />

    <span class="mx-1 text-sm text-gray-600 dark:text-gray-400">Start typing...</span>

    <kbd
      title="Ctrl K"
      class="flex items-center justify-end pl-1 pr-1 text-xs leading-none ml-5"
    >
      <abbr class="text-gray-600 dark:text-gray-400">Ctrl K</abbr>
    </kbd>
  </button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modal
      :show="showModal"
      @close="showModal = false"
    >
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </Modal>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Modal from "@/components/Modal/Modal.vue"
import SearchIcon from "@/components/Icons/SearchIcon.vue"

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}

defineShortcuts({
  meta_k: {
    handler: () => {
      toggleModal()
    },
  },
})
</script>
