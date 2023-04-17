export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
  ],
  components: [
    "~/components",
  ],
  css: [
    "~/assets/variable.scss",
    "@unocss/reset/tailwind.css",
    "~/assets/main.scss",
  ],
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Nuxt Starter" },
      ],
      noscript: [
        { children: "JavaScript is required" },
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  runtimeConfig: {
    key: process.env.pwd,
  },
});
