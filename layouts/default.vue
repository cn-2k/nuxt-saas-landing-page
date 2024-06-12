<template>
  <div class="relative h-screen w-full bg-background overflow-x-hidden 2xl:overflow-hidden flex flex-col">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 flex items-center justify-center">
      <div class="w-80 h-80 bg-green-500 rounded-full mt-52 lg:mt-28 opacity-90 dark:opacity-60 blur-[120px]" />
      <ClientOnly>
        <DotPattern
          :class="clsx(
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] opacity-40 lg:opacity-100',
          )"
        />
      </ClientOnly>
    </div>
    <!-- Slot content -->
    <div class="relative z-10 flex flex-col h-full">
      <Nav class="flex-shrink-0" />
      <div class="flex-grow h-min p-5">
        <slot />
      </div>
      <Footer class="flex-shrink-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx"
import Nav from "@/components/Header/Nav.vue"
import Footer from "@/components/Footer/Footer.vue"
import DotPattern from "@/components/BackgroundPatterns/DotPattern.vue"
</script>
