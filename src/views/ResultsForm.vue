<template>
  <Card>
    <h1 class="text-3xl font-bold mb-6 text-center">
      Resultados del Formulario: {{ form?.title }}
    </h1>

    <div v-if="responses.length">
      <div
        v-for="(resp, i) in responses"
        :key="i"
        class="mb-6 p-4 border border-gray-300 rounded shadow-sm"
      >
        <h2 class="font-bold text-lg mb-3">Respuesta {{ i + 1 }}</h2>
        <ul>
          <FormResultItem :response="resp" :getQuestionText="getQuestionText" />
        </ul>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">Aún no hay respuestas.</p>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import Card from '@/components/BaseCard.vue'
import FormResultItem from '@/components/FormResultItem.vue'

const route = useRoute()
const formStore = useFormStore()
const id = route.params.id as string
const form = computed(() => formStore.getFormById(id))
const responses = computed(() => formStore.getResponses(id))

function getQuestionText(qId: string) {
  return form.value?.questions.find((q) => q.id === qId)?.question || ''
}
</script>
