<template>
  <div>
    <nav class="w-full bg-white dark:bg-gray-950 justify-between flex border-b border-gray-200 dark:border-gray-600/60 px-8 py-3.5 transition-colors">
      <div class="flex gap-10 items-center">
        <span class="cursor-pointer font-bold text-xl tracking-tighter">✨</span>
        <MenuList
          class="hidden lg:flex"
          :items="menu"
        />
      </div>

      <div class="hidden lg:flex gap-2">
        <ClientOnly>
          <CommandMenu />
          <ColorModePicker />
        </ClientOnly>

        <Button
          type="icon"
        >
          <TranslateIcon />
        </Button>

        <Button
          type="icon"
        >
          <GithubIcon />
        </Button>
      </div>

      <div class="flex lg:hidden">
        <MenuIcon
          v-if="!showMobileMenu"
          @click="showMobileMenu = !showMobileMenu"
        />
        <MenuClose
          v-if="showMobileMenu"
          @click="showMobileMenu = !showMobileMenu"
        />
      </div>
    </nav>

    <!-- Mobile container  -->
    <div
      v-if="showMobileMenu"
      class="flex flex-col min-w-max w-full bg-white dark:bg-gray-950 p-6 border-gray-200 dark:border-gray-600/60 border-b xl:hidden transition-colors"
    >
      <MenuList
        :items="menu"
        is-col
      />
    </div>

    <div
      v-if="showMobileMenu"
      class="flex min-w-max flex-col w-full bg-white dark:bg-gray-950 p-6 border-gray-200 dark:border-gray-600/60 border-b xl:hidden transition-colors"
    >
      <div class="flex gap-2">
        <CommandMenu />
        <ColorModePicker />
        <Button
          type="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a49 49 0 0 1 6-.371m0 0q1.681 0 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138q1.344.092 2.666.257m-4.589 8.495a18 18 0 0 1-3.827-5.802"
          /></svg>
        </Button>
        <Button
          type="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          /></svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuList from "./MenuList.vue"
import MenuClose from "@/components/Icons/MenuClose.vue"
import TranslateIcon from "@/components/Icons/TranslateIcon.vue"
import GithubIcon from "@/components/Icons/GithubIcon.vue"
import MenuIcon from "@/components/Icons/MenuIcon.vue"
import CommandMenu from "@/components/CommandMenu/CommandMenu.vue"

const menu = [
  {
    title: "Learn",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Download",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Docs",
    href: "#",
    isExternal: true,
  },
  {
    title: "Certification",
    href: "#",
    isExternal: true,
  },
]

const showMobileMenu = ref(false)
</script>
