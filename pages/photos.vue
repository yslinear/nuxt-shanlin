<template>
  <div class="gap-4 grid grid-cols-1 lg:grid-cols-2">
    <div v-for="photo in photos.value" :key="photo.id">
      <Photo :photo="photo" />
    </div>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
const { find } = useStrapi4()
const { locale } = useI18n()

const photos = reactive([])

onBeforeMount(async () => {
  const response = await find('photos', { populate: 'media,hashtags,createdBy,recordedAt', locale: locale.value })
  photos.value = response.data
})
</script>
