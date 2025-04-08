<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ form?.title }}</h1>
    <form @submit.prevent="submitForm" class="space-y-6">
      <div
        v-for="question in form?.questions"
        :key="question.id"
        class="border border-gray-300 p-4 rounded shadow-sm"
      >
        <label class="block mb-2">{{ question.question }}</label>
        <div v-if="question.type === 'short'">
          <input
            v-model="responses[question.id]"
            type="text"
            :placeholder="question.placeholder"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        <div v-else-if="question.type === 'long'">
          <textarea
            v-model="responses[question.id]"
            :placeholder="question.placeholder"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
          ></textarea>
        </div>
        <div v-else-if="question.type === 'number'">
          <input
            v-model.number="responses[question.id]"
            type="number"
            :placeholder="question.placeholder"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        <div v-else-if="question.type === 'radio'">
          <div
            v-for="(option, optIndex) in question.options"
            :key="optIndex"
            class="flex items-center mb-2"
          >
            <input
              type="radio"
              :name="question.id"
              :value="option"
              v-model="responses[question.id]"
              class="mr-2 form-radio text-blue-600"
            />
            <span>{{ option }}</span>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-all duration-300"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
type Answer = string | number
type FormAnswers = Record<string, Answer>
const formStore = useFormStore()
const route = useRoute()
const router = useRouter()
const formId = route.params.id as string
const form = computed(() => formStore.getFormById(formId))
const responses = reactive<FormAnswers>({})
function submitForm() {
  formStore.addResponse(formId, { ...responses })
  router.push(`/form/results/${formId}`)
}
</script>
