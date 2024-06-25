// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  app: {
    head: {
      title: "Nuxt 3 SaaS Starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  site: {
    url: "https://nuxt-saas-landing-page.vercel.app/",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
  ],
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
})
