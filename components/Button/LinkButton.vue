<template>
  <NuxtLink
    :target="props.isExternal ? '_blank' : undefined"
    class="flex items-center gap-2 text-slate-600 dark:text-slate-200 cursor-pointer"
    :class="linkClass"
    aria-label="Link"
    :href="props.to ?? '#'"
  >
    <slot /> <NavIcon v-if="props.isExternal" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import NavIcon from "@/components/Icons/NavIcon.vue"

const props = defineProps<{
  type?: string
  to?: string
  isExternal?: boolean
}>()

const linkClass = computed(() => {
  switch (props.type) {
    case "bg":
      return `rounded px-3 bg-transparent text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/70 duration-300 transition-colors p-2`
    default:
      return ""
  }
})
</script>
