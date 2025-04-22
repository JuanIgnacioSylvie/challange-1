<template>
  <div class="border border-gray-300 p-4 rounded shadow-sm mb-4">
    <label class="block mb-2">{{ question.question }}</label>

    <div v-if="question.type === 'short'">
      <BaseInput v-model="internal" :placeholder="question.placeholder" />
    </div>

    <div v-else-if="question.type === 'long'">
      <BaseTextarea v-model="internal" :placeholder="question.placeholder" />
    </div>

    <div v-else-if="question.type === 'number'">
      <BaseInput v-model="internal" type="number" :placeholder="question.placeholder" />
    </div>

    <div v-else-if="question.type === 'radio'">
      <label v-for="opt in question.options" :key="opt" class="flex items-center space-x-3 mb-2">
        <input type="radio" :value="opt" v-model="internal" class="form-radio text-blue-600" />
        <span class="text-lg">{{ opt }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseTextarea from './BaseTextarea.vue'

const props = defineProps<{
  question: {
    id: string
    question: string
    type: 'short' | 'long' | 'number' | 'radio'
    options: string[]
    placeholder: string
  }
  modelValue: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

const internal = ref<string | number>(props.modelValue)

watch(internal, (v) => emit('update:modelValue', v))
watch(
  () => props.modelValue,
  (v) => (internal.value = v),
)
</script>
