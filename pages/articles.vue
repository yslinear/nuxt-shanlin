<template>
  <div class="bg-gray-100">
    <Header />
    <div class="flex flex-wrap justify-center gap-4 py-8">
      <ul>
        <li v-for="article in articles" :key="article.id">
          <img src="https://fakeimg.pl/300x250/" class="w-64 h-64 object-cover rounded-md mb-4 shadow-lg">
          <div class="text-sm mb-4">{{ article.attributes.createdAt }}</div>
          <div class="text-base font-bold mb-4">{{ article.attributes.title }}</div>
          <p class="text-sm">{{ article.attributes.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const { find } = useStrapi4()

const articles = ref([])
onBeforeMount(async () => {
  const response = await find('articles', { populate: 'media,createdBy' })
  articles.value = response.data
})
</script>
