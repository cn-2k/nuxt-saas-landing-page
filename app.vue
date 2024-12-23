<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  bodyAttrs: {
    class: "bg-white dark:bg-gray-950 dark:text-gray-200 transition-colors antialiased;",
  },
  htmlAttrs: {
    lang: "en",
  },
})

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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
