<template>
  <div class="flex items-center space-x-2 mb-2">
    <BaseInput v-model="internal" placeholder="Opción" />
    <BaseButton variant="danger" @click="$emit('remove')"> Eliminar </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

// ✂️ BORRAR defineProps, defineEmits de aquí:
const props = defineProps<{ modelValue: string }>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
  (e: 'remove'): void
}>()

const internal = ref(props.modelValue)

watch(internal, (v) => emit('update:modelValue', v))
watch(
  () => props.modelValue,
  (v) => (internal.value = v),
)
</script>
