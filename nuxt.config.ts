// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxtjs/color-mode"],
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
