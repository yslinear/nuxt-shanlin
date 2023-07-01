<template>
  <div class="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md">
    <div class="flex items-center space-x-1">
      <img class="w-6 h-6 rounded-full">
      <div class="text-xs text-gray-500">{{ photo.attributes.createdBy.data.attributes.firstname }}</div>
    </div>
    <img :src="imageUrl" class="w-64 h-64 object-cover rounded-lg mb-2">
    <div class="text-base font-semibold">{{ photo.attributes.caption }}</div>
    <div class="text-xs text-gray-500 my-1">{{ formatDate(photo.attributes.createdAt) }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps, ref } from 'vue'

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
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>
