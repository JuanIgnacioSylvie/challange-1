// src/stores/formStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Define aquí la estructura de tus preguntas y formularios
 */
export interface FormQuestion {
  id: string
  type: 'short' | 'long' | 'number' | 'radio'
  question: string
  options?: string[]
  required?: boolean
  placeholder?: string
}

export interface Form {
  id: string
  title: string
  questions: FormQuestion[]
}

/**
 * Cada respuesta de formulario es un objeto que mapea "questionId" a la respuesta (string o number).
 */
export interface FormResponse {
  [questionId: string]: string | number
}

/**
 * Se define un objeto que mapea el "formId" a un array de respuestas.
 * Ejemplo:
 * {
 *   "abc-123": [
 *       { "questionId-xyz": "Respuesta 1", ... },
 *       { "questionId-abc": 45, ... }
 *   ],
 *   "def-456": [ ... ]
 * }
 */
export interface FormResponsesById {
  [formId: string]: FormResponse[]
}

export const useFormStore = defineStore('formStore', () => {
  /**
   * Lista de formularios creados
   */
  const forms = ref<Form[]>([])

  /**
   * Respuestas de cada formulario, indexadas por "formId"
   */
  const formResponses = ref<FormResponsesById>({})

  /**
   * Crea un nuevo formulario y lo agrega a la lista
   */
  function createForm(title: string) {
    const newForm: Form = {
      id: crypto.randomUUID(),
      title,
      questions: [],
    }
    forms.value.push(newForm)
    return newForm.id
  }

  /**
   * Agrega una pregunta a un formulario específico
   */
  function addQuestion(formId: string, questionData: Omit<FormQuestion, 'id'>) {
    const form = forms.value.find((f) => f.id === formId)
    if (form) {
      form.questions.push({
        id: crypto.randomUUID(),
        ...questionData,
      })
    }
  }

  /**
   * Devuelve el formulario correspondiente a un ID
   */
  function getFormById(id: string) {
    return forms.value.find((f) => f.id === id)
  }

  /**
   * Agrega una respuesta (mapa de questionId => answer) al array de respuestas de un formulario
   */
  function addResponse(formId: string, responseData: FormResponse) {
    if (!formResponses.value[formId]) {
      formResponses.value[formId] = []
    }
    formResponses.value[formId].push(responseData)
  }

  /**
   * Obtiene todas las respuestas asociadas a un formulario
   */
  function getResponses(formId: string) {
    return formResponses.value[formId] || []
  }

  return {
    forms,
    formResponses,
    createForm,
    addQuestion,
    getFormById,
    addResponse,
    getResponses,
  }
})
