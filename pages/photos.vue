<template>
  <div class="bg-gray-100">
    <Header />
    <div class="flex flex-wrap justify-center gap-4 py-8">
      <div v-for="photo in photos" :key="photo.id" class="w-64 rounded overflow-hidden shadow-lg">
        <Photo :photo="photo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const { find } = useStrapi4()

const photos = ref([])
onBeforeMount(async () => {
  const response = await find('photos', { populate: 'media,createdBy' })
  photos.value = response.data
})
</script>
