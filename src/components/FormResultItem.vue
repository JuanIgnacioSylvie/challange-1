<template>
  <li v-for="(ans, qId) in response" :key="qId" class="flex justify-between mb-2">
    <span class="font-semibold">{{ getQuestionText(qId) }}</span>
    <span>{{ ans }}</span>
  </li>
</template>

<script setup lang="ts">
// Desestructuramos directamente las props que sí usamos
const { response, getQuestionText } = defineProps<{
  response: Record<string, string | number>
  getQuestionText: (id: string) => string
}>()
</script>
