<template>
  <Button
    type="icon"
    @click="toggleColorMode"
  >
    <LightIcon v-if="colorMode.preference === 'dark'" />
    <DarkIcon v-if="colorMode.preference === 'light'" />
  </Button>
</template>

<script setup lang="ts">
import LightIcon from "@/components/Icons/LightIcon.vue"
import DarkIcon from "@/components/Icons/DarkIcon.vue"

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light"
}
</script>
