<template>
  <input
    :type="type"
    :value="modelValue"
    @input="onInput"
    :placeholder="placeholder"
    class="w-full border border-gray-300 p-2 mb-2 rounded focus:outline-none focus:border-blue-500 transition"
  />
</template>

<script setup lang="ts">
const { modelValue, placeholder, type } = defineProps<{
  modelValue: string | number
  placeholder?: string
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
