<template>
  <Card>
    <h1 class="text-3xl font-bold mb-6 text-center">
      {{ poll?.question }}
    </h1>

    <form @submit.prevent="submitVote" class="space-y-4">
      <div v-for="opt in poll?.options" :key="opt.id" class="flex items-center space-x-3">
        <input
          type="radio"
          :value="opt.id"
          v-model="selectedOption"
          class="form-radio text-blue-600"
        />
        <span class="text-lg">{{ opt.text }}</span>
      </div>

      <div class="text-center mt-4">
        <BaseButton type="submit" :disabled="!selectedOption"> Votar </BaseButton>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePollStore } from '@/stores/pollStore'

import type { Poll } from '@/types/poll'

// Componentes
import Card from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const pollStore = usePollStore()

// ID que llega por ruta
const pollId = route.params.id as string

// Usamos generics para que TS sepa que `poll` es Poll | undefined
const poll = computed<Poll | undefined>(() => pollStore.getPollById(pollId))

// Ref para la opción seleccionada
const selectedOption = ref<string>('')

function submitVote() {
  if (!poll.value || !selectedOption.value) return

  pollStore.votePoll(poll.value.id, selectedOption.value)
  router.push(`/poll/results/${poll.value.id}`)
}
</script>
