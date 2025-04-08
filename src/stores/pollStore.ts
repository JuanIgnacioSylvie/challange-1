import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Poll } from '@/types/poll'

export const usePollStore = defineStore('pollStore', () => {
  const polls = ref<Poll[]>([])

  // Crear una encuesta
  function createPoll(question: string, options: string[]) {
    const newPoll: Poll = {
      id: crypto.randomUUID(),
      question,
      options: options.map((optionText) => ({
        id: crypto.randomUUID(),
        text: optionText,
        votes: 0,
      })),
    }
    polls.value.push(newPoll)
    return newPoll.id
  }

  // Agregar un voto
  function votePoll(pollId: string, optionId: string) {
    const poll = polls.value.find((p) => p.id === pollId)
    if (poll) {
      const option = poll.options.find((o) => o.id === optionId)
      if (option) {
        option.votes++
      }
    }
  }

  // Obtener encuesta por ID
  function getPollById(id: string) {
    return polls.value.find((p) => p.id === id)
  }

  return {
    polls,
    createPoll,
    votePoll,
    getPollById,
  }
})
