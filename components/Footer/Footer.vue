<template>
  <footer class="bg-white dark:bg-gray-950 w-full items-center gap-5 justify-between flex flex-col lg:flex-row border-t border-gray-200 dark:border-gray-600/60 px-7 py-5 transition-colors">
    <div class="flex gap-2">
      <LinkButton type="bg">
        Footer Link
      </LinkButton>
      <LinkButton type="bg">
        Footer Link
      </LinkButton>
      <LinkButton type="bg">
        Footer Link
      </LinkButton>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-4">
      <LinkButton
        type="bg"
      >
        © Your Copyright
      </LinkButton>
      <div class="flex gap-2">
        <LinkButton
          type="bg"
          to="https://github.com/cn-2k/nuxt-saas-landing-page"
        >
          <IconsGithubIcon />
        </LinkButton>
        <LinkButton type="bg">
          <IconsXIcon />
        </LinkButton>
        <LinkButton type="bg">
          <IconsSlackIcon />
        </LinkButton>
        <LinkButton type="bg">
          <IconsLinkedinIcon />
        </LinkButton>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LinkButton from "@/components/Button/LinkButton.vue"
</script>
