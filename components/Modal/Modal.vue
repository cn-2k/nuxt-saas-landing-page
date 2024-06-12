<template>
  <Transition name="modal">
    <div
      v-if="props.show"
      class="fixed z-50 flex top-0 left-0 w-full h-full bg-gray-900/90 transition-opacity duration-300"
    >
      <div class="justify-between flex flex-col w-4/5 lg:w-1/2  max-w-3xl h-4/5 lg:h-1/2 m-auto p-5 bg-white dark:bg-gray-950 rounded-lg transition-all duration-75">
        <div class="modal-header">
          <slot name="header">
            <!-- default header -->
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <!-- default body -->
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <!-- default footer -->
            <button
              class="modal-default-button font-bold text-red-600 border p-2 border-red-500 rounded-lg"
              @click="$emit('close')"
            >
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()
</script>

<style>
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
