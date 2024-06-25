<template>
  <Button
    type="icon"
    aria-label="Toggle color mode"
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
  if (colorMode.value === "light") {
    setColorMode("dark")
  }
  else {
    setColorMode("light")
  }
}

const setColorMode = (mode: "light" | "dark") => {
  colorMode.value = mode
  colorMode.preference = mode
}
</script>
