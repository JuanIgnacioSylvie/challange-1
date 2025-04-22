<template>
  <select
    :value="modelValue"
    @change="onChange"
    class="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:border-blue-500 transition"
  >
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
// Desestructuramos directamente los props que usamos
const { modelValue, options } = defineProps<{
  modelValue: string
  options: Array<{ value: string; label: string }>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}
</script>
