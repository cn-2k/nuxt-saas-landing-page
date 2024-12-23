<template>
  <NuxtLink
    :target="props.isExternal ? '_blank' : undefined"
    :href="props.href"
    class="flex items-center gap-2 text-slate-600 dark:text-slate-200 cursor-pointer transition-colors duration-300"
    :class="[
      linkClass,
      { 'hover:bg-gray-200/50 dark:hover:bg-gray-700/70': !isActive },
    ]"
    :aria-label="props.title || 'Link'"
    exact-active-class="active-link"
  >
    <slot /> <NavIcon v-if="props.isExternal" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import NavIcon from "@/components/Icons/NavIcon.vue"

const props = defineProps<{
  type?: string
  href?: string
  title?: string
  isExternal?: boolean
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.href)

const linkClass = computed(() => {
  switch (props.type) {
    case "bg":
      return `rounded px-3 bg-transparent text-gray-300 duration-300 transition-colors p-2`
    default:
      return ""
  }
})
</script>

<style lang="postcss">
.active-link {
  @apply bg-green-700 text-white dark:bg-green-800
}
</style>
