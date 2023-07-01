// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@nuxtjs/strapi"],
  headlessui: {
    prefix: "Headless",
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",

    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
