<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 py-8">
      <h2>
        {{ article.value?.attributes.title }}
      </h2>
    </div>
    <div>
      <p>{{ article.value?.attributes.content }}</p>
    </div>
    <div>

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
    const { data } = await findOne('articles', route.params.id, { populate: 'photos.media,localizations,createdBy', locale: locale.value })
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
