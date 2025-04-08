<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Resultados del Formulario: {{ form?.title }}
    </h1>
    <div v-if="responses && responses.length" class="space-y-6">
      <div
        v-for="(response, index) in responses"
        :key="index"
        class="p-4 border border-gray-300 rounded shadow-sm"
      >
        <h2 class="font-bold text-lg mb-3">Respuesta {{ index + 1 }}</h2>
        <ul class="space-y-2">
          <li
            v-for="(answer, questionId) in response"
            :key="questionId"
            class="flex justify-between border-b border-gray-200 pb-1"
          >
            <span class="font-semibold">{{ getQuestionText(questionId) }}:</span>
            <span>{{ answer }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-lg">No hay respuestas aún.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
const route = useRoute()
const formStore = useFormStore()
const formId = route.params.id as string
const form = computed(() => formStore.getFormById(formId))
const responses = computed(() => formStore.getResponses(formId))
function getQuestionText(questionId: string | number) {
  const question = form.value?.questions.find((q) => q.id === String(questionId))
  return question ? question.question : ''
}
</script>
