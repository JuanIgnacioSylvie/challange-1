<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">Resultados: {{ poll?.question }}</h1>
    <ul class="space-y-4">
      <li
        v-for="option in poll?.options"
        :key="option.id"
        class="flex justify-between border-b border-gray-200 pb-2"
      >
        <span class="text-lg">{{ option.text }}</span>
        <span class="text-lg font-semibold">{{ option.votes }} votos</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePollStore } from '@/stores/pollStore'
const pollStore = usePollStore()
const route = useRoute()
const pollId = route.params.id as string
const poll = computed(() => pollStore.getPollById(pollId))
</script>
