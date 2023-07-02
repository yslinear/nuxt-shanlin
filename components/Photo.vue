<template>
  <div class="border p-4 rounded">
    <img :src="imageUrl" class="w-full h-full object-cover mb-2">
    <div class="text-base font-normal">{{ photo.attributes.caption }}</div>
    <div class="text-sm text-gray-500 my-1">{{ formatDate(photo.attributes.createdAt) }}</div>
    <div>
      <p class="text-sm" v-for="hashtag in photo.attributes.hashtags?.data" :key="hashtag.id">
      #{{ hashtag.attributes.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'
const { locale } = useI18n()

// 使用 `props` 接收傳入的 `photo` 參數
const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})

// 使用計算屬性來生成圖片的 URL
const imageUrl = computed(() => `http://localhost:1337${props.photo.attributes.media.data.attributes.url}`)

// 格式化日期函式
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(locale.value, options)
}
</script>
