<template>
  <Card>
    <h1 class="text-3xl font-bold mb-6 text-center">{{ form?.title }}</h1>

    <form @submit.prevent="submitForm" class="space-y-6">
      <QuestionRenderer
        v-for="q in questions"
        :key="q.id"
        :question="q"
        v-model="responses[q.id]"
      />
      <div class="text-center">
        <BaseButton type="submit">Enviar Respuestas</BaseButton>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
// Vue
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Store
import { useFormStore } from '@/stores/formStore'

// Componentes
import Card from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import QuestionRenderer from '@/components/QuestionRenderer.vue'

// Tipos locales
type QuestionType = 'short' | 'long' | 'number' | 'radio'

interface RawQuestion {
  id: string
  question: string
  type: QuestionType
  options?: string[]
  placeholder?: string
  required?: boolean
}

interface Question {
  id: string
  question: string
  type: QuestionType
  options: string[] // siempre definido
  placeholder: string // siempre definido
  required: boolean
}

type Answer = string | number
type FormAnswers = Record<string, Answer>

// Ruta y store
const route = useRoute()
const router = useRouter()
const formStore = useFormStore()
const formId = route.params.id as string

// Formulario original
const form = computed(() => formStore.getFormById(formId))

// Normalizamos el array de preguntas para que options y placeholder nunca sean undefined
const questions = computed<Question[]>(() => {
  const raw: RawQuestion[] = form.value?.questions ?? []
  return raw.map((q) => ({
    id: q.id,
    question: q.question,
    type: q.type,
    options: q.options ?? [],
    placeholder: q.placeholder ?? '',
    required: q.required ?? false,
  }))
})

// Respuestas reactivas
const responses = reactive<FormAnswers>({})

// Envío
function submitForm() {
  formStore.addResponse(formId, { ...responses })
  router.push(`/form/results/${formId}`)
}
</script>
