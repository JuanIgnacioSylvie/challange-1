<template>
  <textarea
    :value="String(modelValue)"
    @input="onInput"
    :placeholder="placeholder"
    class="w-full border border-gray-300 p-2 mb-2 rounded focus:outline-none focus:border-blue-500 transition"
  ></textarea>
</template>

<script setup lang="ts">
// ✂️ BORRAR este import:
// import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: string | number
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

const placeholder = props.placeholder ?? ''

function onInput(e: Event) {
  const val = (e.target as HTMLTextAreaElement).value
  emit('update:modelValue', val)
}
</script>
