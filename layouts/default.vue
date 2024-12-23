<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <MainContent>
      <slot />
    </MainContent>
    <Footer />
    <div
      v-if="$route.path === '/'"
      class="absolute inset-0 -z-10 flex items-center justify-center"
    >
      <div class="w-80 h-80 bg-green-500 rounded-full mt-52 lg:mt-28 opacity-90 dark:opacity-60 blur-[120px]" />
      <ClientOnly>
        <DotPattern
          :class="clsx(
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-40 lg:opacity-100',
          )"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx"
import Footer from "@/components/Footer/Footer.vue"
import DotPattern from "@/components/BackgroundPatterns/DotPattern.vue"
import AppHeader from "~/components/Header/AppHeader.vue"
</script>
