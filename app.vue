<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Nuxt 3 SaaS Starter",
  ogTitle: "Nuxt 3 SaaS Starter",
  description: "A modern, simple Nuxt 3 landing page for your next software/SaaS project!",
  ogDescription: "A modern, simple Nuxt 3 landing page for your next software/SaaS project!",
})

defineOgImageComponent("Frame", {
  headline: false,
  title: "Nuxt 3 SaaS Starter",
  description: "A modern, simple Nuxt 3 landing page for your next software/SaaS project!",
})
</script>
