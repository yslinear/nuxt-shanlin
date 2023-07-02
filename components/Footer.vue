<template>
  <div class="bg-slate-200 text-slate-800">
    <div class="mx-auto w-full max-w-screen-md p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center p-2 bg-sky-950 rounded">
            <img src="https://www.shanlin.co/templates/g5_helium/custom/images/logo-no-background.png" class="h-8"
              alt="ShanLin Logo" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
          <div>
            <h2 class="mb-6 text-sm font-semibold" v-t="`language`"></h2>
            <ul class="font-medium">
              <li v-for="locale in availableLocales" :key="locale.code">
                <a class="hover:text-slate-500" href="/" @click.prevent.stop="handleSetLocale(locale.code)">{{ locale.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-slate-800 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="sm:text-center">© 2023 <a href="#"
            class="hover:underline">Shan Lin</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://www.instagram.com/the.shan.lin" class="text-2xl">
            <Icon name="ph:instagram-logo"/>
            <span class="sr-only">Instagram page</span>
          </a>
          <a href="https://github.com/yslinear" class="text-2xl">
            <Icon name="ph:github-logo"/>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

function handleSetLocale(code) {
  setLocale(code)
    .then(() => {
      location.reload()
    })
}
</script>