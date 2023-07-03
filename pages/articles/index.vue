<template>
  <ul class="gap-4 grid grid-cols-1 lg:grid-cols-2">
    <li v-for="article in articles.value" :key="article.id">
      <a :href="`articles/${article.id}`">
        <img :src="`${useStrapiMedia()}${article.attributes.photos.data[0].attributes.media.data.attributes.formats.medium.url}`"
        :srcset="`${useStrapiMedia()}${article.attributes.photos.data[0].attributes.media.data.attributes.formats.medium.url} 500w,
                      ${useStrapiMedia()}${article.attributes.photos.data[0].attributes.media.data.attributes.formats.large.url} 1000w`"
          class="w-full h-96 object-cover mb-4">
        <div class="text-sm mb-4 font-bold">{{ formatDateTime(article.attributes.createdAt, locale) }}</div>
        <h3 class="text-lg font-bold mb-4">{{ article.attributes.title }}</h3>
        <p class="text-sm mb-4">{{ article.attributes.content }}</p>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
const { find } = useStrapi4()
const { locale } = useI18n()

const articles = reactive([])

onBeforeMount(async () => {
  const response = await find('articles', { populate: 'photos.media,createdBy', locale: locale.value })
  articles.value = response.data
})
</script>
