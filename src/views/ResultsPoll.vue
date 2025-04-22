<template>
  <Card>
    <h1 class="text-3xl font-bold mb-6 text-center">Resultados: {{ poll?.question }}</h1>
    <ul>
      <PollResultItem :options="poll?.options || []" />
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePollStore } from '@/stores/pollStore'
import Card from '@/components/BaseCard.vue'
import PollResultItem from '@/components/PollResultItem.vue'

const route = useRoute()
const pollStore = usePollStore()
const id = route.params.id as string
const poll = computed(() => pollStore.getPollById(id))
</script>
