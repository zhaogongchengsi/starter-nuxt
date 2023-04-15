export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
  ],
  css: [
    "@unocss/reset/tailwind.css",
    "~/assets/main.scss",
    "~/assets/variable.scss",
  ],
  app: {
    head: {
      noscript: [
        { children: "JavaScript is required" },
      ],
    },
  },
  runtimeConfig: {
	key: process.env.pwd
  },
});
