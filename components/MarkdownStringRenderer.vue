<script setup>
import { defineProps, ref } from 'vue';
import markdownParser from '@nuxt/content/transformers/markdown';

const props = defineProps({
  value: {
    type: String,
    required: true,
  }
});

const record = ref('');

import { onMounted } from 'vue';
onMounted(async () => {
  record.value = await markdownParser.parse(Math.random(), props.value);
});
</script>

<template>
  <ContentRendererMarkdown :value="record" />
</template>
