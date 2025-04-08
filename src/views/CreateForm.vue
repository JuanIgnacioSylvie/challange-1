<template>
  <div class="p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl mb-6 text-center text-gray-800" style="font-weight: 900">
      Crear Formulario
    </h1>
    <input
      v-model="title"
      placeholder="Título del formulario"
      class="w-full border border-gray-300 p-2 mb-2 rounded focus:outline-none focus:border-blue-500 transition"
    />
    <p v-if="titleError" class="text-red-500 text-sm mb-4">{{ titleError }}</p>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="mb-6 p-4 border border-gray-200 rounded shadow"
    >
      <input
        v-model="question.text"
        placeholder="Pregunta"
        class="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:border-blue-500 transition"
      />
      <select
        v-model="question.type"
        class="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:border-blue-500 transition"
      >
        <option value="short">Respuesta Corta</option>
        <option value="long">Respuesta Larga</option>
        <option value="number">Número</option>
        <option value="radio">Opción Única</option>
      </select>
      <div v-if="question.type === 'radio'" class="mb-3">
        <div v-for="(option, optIndex) in question.options" :key="optIndex" class="mb-2">
          <input
            v-model="question.options[optIndex]"
            placeholder="Opción"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        <button
          @click="addRadioOption(index)"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 btn-custom"
        >
          Agregar Opción
        </button>
      </div>
      <div class="text-right">
        <button
          @click="removeQuestion(index)"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-all duration-300 btn-custom"
        >
          Eliminar Pregunta
        </button>
      </div>
    </div>
    <p v-if="questionsError" class="text-red-500 text-sm mb-4">{{ questionsError }}</p>
    <div class="flex justify-between">
      <button
        @click="addQuestion"
        class="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded transition-all duration-300 btn-custom"
      >
        Agregar Pregunta
      </button>
      <button
        @click="createNewForm"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-all duration-300 btn-custom"
      >
        Crear Formulario
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { useRouter } from 'vue-router'
interface Question {
  text: string
  type: 'short' | 'long' | 'number' | 'radio'
  options: string[]
}
const title = ref('')
const questions = ref<Question[]>([])
const titleError = ref('')
const questionsError = ref('')
const formStore = useFormStore()
const router = useRouter()
function addQuestion() {
  questions.value.push({ text: '', type: 'short', options: [] })
}
function removeQuestion(index: number) {
  questions.value.splice(index, 1)
}
function addRadioOption(questionIndex: number) {
  questions.value[questionIndex].options.push('')
}
function createNewForm() {
  titleError.value = ''
  questionsError.value = ''
  if (!title.value.trim()) {
    titleError.value = 'El título es obligatorio'
    return
  }
  if (questions.value.length === 0) {
    questionsError.value = 'Debe agregar al menos una pregunta'
    return
  }
  const formId = formStore.createForm(title.value)
  questions.value.forEach((q) => {
    formStore.addQuestion(formId, {
      question: q.text,
      type: q.type,
      options: q.options,
      required: false,
      placeholder: '',
    })
  })
  router.push(`/form/respond/${formId}`)
}
</script>
