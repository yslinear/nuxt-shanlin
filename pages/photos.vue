<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 py-8">
      <div v-for="photo in photos" :key="photo.id">
        <Photo :photo="photo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const { find } = useStrapi4()
const { locale } = useI18n()

const photos = ref([])

onBeforeMount(async () => {
  const response = await find('photos', { populate: 'media,createdBy', locale: locale.value })
  photos.value = response.data
})
</script>
