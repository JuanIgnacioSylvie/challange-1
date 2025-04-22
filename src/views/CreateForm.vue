<template>
  <Card>
    <!-- Título -->
    <h1 class="text-3xl mb-6 text-center text-gray-800 font-black">Crear Formulario</h1>

    <!-- Input del título con touched -->
    <BaseInput
      v-model="title"
      placeholder="Título del formulario"
      @input="titleTouched = true"
      @blur="titleTouched = true"
    />
    <p v-if="titleError" class="text-red-500 text-sm mb-4">
      {{ titleError }}
    </p>

    <!-- Lista de preguntas -->
    <div v-for="(q, i) in questions" :key="i" class="mb-6">
      <QuestionBuilder :q="q" @remove="() => removeQuestion(i)" />
    </div>

    <!-- Botones: agregar pregunta + crear formulario -->
    <div class="flex space-x-2">
      <BaseButton type="button" variant="secondary" @click="addQuestion">
        Agregar Pregunta
      </BaseButton>

      <BaseButton type="button" variant="primary" @click="submit" :disabled="!canSubmit">
        Crear Formulario
      </BaseButton>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'

import Card from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import QuestionBuilder from '@/components/QuestionBuilder.vue'

type QuestionType = 'short' | 'long' | 'number' | 'radio'
interface Question {
  text: string
  type: QuestionType
  options: string[]
}

// Estado reactivo
const title = ref('')
const titleTouched = ref(false)
const questions = ref<Question[]>([])

const router = useRouter()
const formStore = useFormStore()

// Error del título, sólo tras interactuar
const titleError = computed(() => {
  if (!titleTouched.value) return ''
  return title.value.trim() === '' ? 'El título es obligatorio.' : ''
})

// Validación general
const canSubmit = computed(() => {
  if (title.value.trim() === '' || questions.value.length === 0) {
    return false
  }
  return questions.value.every((q) => {
    if (q.text.trim() === '') return false
    if (q.type === 'radio') {
      return q.options.length > 0 && q.options.every((o) => o.trim() !== '')
    }
    return true
  })
})

// Añade una sola pregunta
function addQuestion() {
  questions.value.push({
    text: '',
    type: 'short',
    options: [],
  })
}

// Elimina la pregunta en el índice dado
function removeQuestion(index: number) {
  questions.value.splice(index, 1)
}

// Crea el formulario y redirige
function submit() {
  if (!canSubmit.value) return

  const formId = formStore.createForm(title.value.trim())
  questions.value.forEach((q) =>
    formStore.addQuestion(formId, {
      question: q.text,
      type: q.type,
      options: q.options,
      required: false,
      placeholder: '',
    }),
  )
  router.push(`/form/respond/${formId}`)
}
</script>

<style scoped>
/* Si quieres añadir estilos adicionales, aquí */
</style>
