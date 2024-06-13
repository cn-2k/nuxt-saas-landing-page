<template>
  <Button
    type="icon"
    @click="toggleColorMode"
  >
    <LightIcon v-if="colorMode.value === 'dark'" />
    <DarkIcon v-if="colorMode.value === 'light'" />
  </Button>
</template>

<script setup lang="ts">
import LightIcon from "@/components/Icons/LightIcon.vue"
import DarkIcon from "@/components/Icons/DarkIcon.vue"

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light"
}
</script>
