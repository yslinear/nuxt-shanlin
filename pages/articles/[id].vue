<template>
  <div>
    <div class="rounded bg-slate-200 mb-4 p-4 text-slate-800">
      <h2 class="text-lg mb-4">
        {{ article.value?.attributes.title }}
      </h2>
      <p>{{ article.value?.attributes.content }}</p>
    </div>
    <div v-for="photo in article.value?.attributes.photos.data" :key="photo.id">
      <Photo :photo="photo" />
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
  const router = useRouter();
  try {
    const { data } = await findOne('articles', route.params.id, { populate: 'localizations,createdBy,photos.media,photos.hashtags', locale: locale.value })
    article.value = data

    if (article.value.attributes.locale !== locale.value) {
      const correctLocalization = article.value.attributes.localizations.data.find(localization => localization.attributes.locale === locale.value)
      if (correctLocalization) {
        const correctId = correctLocalization.id;
        const redirectUrl = `/articles/${correctId}`;
        router.push(redirectUrl);
        return;
      }
    }
  } catch (error) {
    console.error(error);
  }
});
</script>
