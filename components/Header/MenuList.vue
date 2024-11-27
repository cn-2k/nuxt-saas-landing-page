<template>
  <ul
    class="flex"
    :class="props.isCol ? 'flex-col' : 'flex-row'"
  >
    <li
      v-for="item in props.items"
      :key="item.title"
    >
      <LinkButton
        type="bg"
        :to="item.href"
        :is-external="item.isExternal"
      >
        {{ item.title }}
      </LinkButton>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import LinkButton from "@/components/Button/LinkButton.vue"

interface MenuItemProps {
  title: string
  href: string
  isExternal?: boolean
}

const props = defineProps<{
  items: MenuItemProps[]
  isExternal?: boolean
  isCol?: boolean
}>()
</script>
