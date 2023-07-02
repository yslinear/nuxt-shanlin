// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxtjs/strapi",
  ],
  i18n: {
    locales: [
      { code: "zh", iso: "zh-TW", file: "zh.json", dir: "ltr" },
      { code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  headlessui: {
    prefix: "Headless",
  },
});
