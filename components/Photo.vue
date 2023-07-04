<template>
  <div class="border p-4 rounded text-slate-800">
    <nuxt-img :src="`${useStrapiMedia()}${props.photo.attributes.media.data.attributes.formats.medium.url}`"
    :srcset="`${useStrapiMedia()}${props.photo.attributes.media.data.attributes.formats.medium.url} 500w,
                      ${useStrapiMedia()}${props.photo.attributes.media.data.attributes.formats.large.url} 1000w`"
      class="w-full h-full object-cover mb-2" />
    <div class="text-base font-normal">{{ photo.attributes.caption }}</div>
    <div class="text-sm text-slate-500 my-1">{{ formatDateTime(photo.attributes.recordedAt ?? photo.attributes.createdAt,
      locale) }}</div>
    <div class="flex">
      <p class="text-sm pr-2" v-for="hashtag in photo.attributes.hashtags?.data" :key="hashtag.id">#{{
        hashtag.attributes.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const { locale } = useI18n()

// 使用 `props` 接收傳入的 `photo` 參數
const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})
</script>
