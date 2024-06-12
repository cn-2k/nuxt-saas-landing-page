<template>
  <button
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: string
}>()

const buttonClass = computed(() => {
  const baseClasses = "px-3 bg-transparent text-gray-500 dark:text-gray-300"

  switch (props.type) {
    case "icon":
      return `${baseClasses} rounded hover:bg-gray-200/50 dark:hover:bg-gray-700/70 duration-300 transition-colors p-2`
    default:
      return baseClasses
  }
})
</script>
