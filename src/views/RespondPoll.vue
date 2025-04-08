<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ poll?.question }}</h1>
    <div v-for="option in poll?.options" :key="option.id" class="mb-4">
      <label class="flex items-center space-x-3">
        <input
          type="radio"
          :value="option.id"
          v-model="selectedOption"
          class="form-radio text-blue-600"
        />
        <span class="text-lg">{{ option.text }}</span>
      </label>
    </div>
    <div class="text-center">
      <button
        @click="submitVote"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-all duration-300"
      >
        Votar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePollStore } from '@/stores/pollStore'
const pollStore = usePollStore()
const route = useRoute()
const router = useRouter()
const pollId = route.params.id as string
const selectedOption = ref<string | null>(null)
const poll = computed(() => pollStore.getPollById(pollId))
function submitVote() {
  if (poll.value && selectedOption.value) {
    pollStore.votePoll(poll.value.id, selectedOption.value)
    router.push(`/poll/results/${poll.value.id}`)
  }
}
</script>
