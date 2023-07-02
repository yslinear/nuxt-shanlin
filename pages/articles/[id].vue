<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 py-8">
      <h2>
        {{ article.value?.attributes.title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
import { reactive, onBeforeMount } from 'vue'
const { findOne } = useStrapi4()
const { locale } = useI18n()

const article = reactive([])

onBeforeMount(async () => {
  const response = await findOne('articles', route.params.id, { populate: 'photos.media,localizations,createdBy', locale: locale.value })
  article.value = response.data
})
</script>
