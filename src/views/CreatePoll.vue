<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">Crear Encuesta</h1>
    <input
      v-model="question"
      placeholder="Escribe tu pregunta aquí"
      class="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:border-blue-500 transition"
    />
    <div v-for="(option, index) in options" :key="index" class="mb-3">
      <input
        v-model="options[index]"
        placeholder="Opción"
        class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
      />
    </div>
    <div class="flex justify-between">
      <button
        @click="addOption"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300"
      >
        Agregar Opción
      </button>
      <button
        @click="createNewPoll"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-all duration-300"
      >
        Crear Encuesta
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { usePollStore } from '@/stores/pollStore'
import { useRouter } from 'vue-router'
const pollStore = usePollStore()
const router = useRouter()
const question = ref('')
const options = ref<string[]>([''])
function addOption() {
  options.value.push('')
}
function createNewPoll() {
  const pollId = pollStore.createPoll(question.value, options.value)
  router.push(`/poll/respond/${pollId}`)
}
</script>
