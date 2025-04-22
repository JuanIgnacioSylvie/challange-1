<template>
  <button
    :type="type"
    @click="onClick"
    class="px-4 py-2 rounded-lg shadow font-medium transition hover:shadow-md"
    :class="variantClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Props
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit'
}>()

// Emit declaration
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// Valores por defecto
const variant = props.variant ?? 'primary'
const type = props.type ?? 'button'

// Clases según la variante
const variantClass = computed<string>(() => {
  switch (variant) {
    case 'secondary':
      return 'bg-blue-100 hover:bg-blue-200 text-blue-900'
    case 'danger':
      return 'bg-blue-700 hover:bg-blue-800 text-white'
    default:
      return 'bg-blue-500 hover:bg-blue-600 text-white'
  }
})

function onClick(event: MouseEvent) {
  emit('click', event)
}
</script>
