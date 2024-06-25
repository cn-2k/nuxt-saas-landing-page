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
          aria-label="Toggle language"
        >
          <TranslateIcon />
        </Button>

        <LinkButton
          type="bg"
          to="https://github.com/cn-2k/nuxt-saas-landing-page"
        >
          <GithubIcon />
        </LinkButton>
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
          <TranslateIcon />
        </Button>
        <LinkButton
          type="bg"
          to="https://github.com/cn-2k/nuxt-saas-landing-page"
        >
          <GithubIcon />
        </LinkButton>
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
import LinkButton from "@/components/Button/LinkButton.vue"

const menu = [
  {
    title: "Home",
    label: "Home",
    href: "/",
  },
  {
    title: "About",
    label: "About",
    href: "/about",
  },
  {
    title: "Download",
    label: "Download",
    href: "#",
  },
  {
    title: "Blog",
    label: "Blog",
    href: "#",
  },
  {
    title: "Docs",
    label: "Docs",
    href: "#",
    isExternal: true,
  },
  {
    title: "Certification",
    label: "Certification",
    href: "#",
    isExternal: true,
  },
]

const showMobileMenu = ref(false)
</script>
