<template>
  <Card>
    <BaseInput v-model="q.text" placeholder="Pregunta" />

    <BaseSelect v-model="q.type" :options="typeOptions" />

    <div v-if="q.type === 'radio'" class="mb-4">
      <OptionInput
        v-for="(opt, i) in q.options"
        :key="i"
        v-model="q.options[i]"
        @remove="() => q.options.splice(i, 1)"
      />
      <BaseButton @click="q.options.push('')"> Agregar Opción </BaseButton>
    </div>

    <div class="text-right">
      <BaseButton variant="danger" @click="onRemove"> Eliminar Pregunta </BaseButton>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from './BaseCard.vue'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import OptionInput from './OptionInput.vue'

// ✂️ BORRAR defineProps, defineEmits de aquí:
const props = defineProps<{
  q: { text: string; type: 'short' | 'long' | 'number' | 'radio'; options: string[] }
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()

const q = props.q

const typeOptions = [
  { value: 'short', label: 'Respuesta Corta' },
  { value: 'long', label: 'Respuesta Larga' },
  { value: 'number', label: 'Número' },
  { value: 'radio', label: 'Opción Múltiple' },
]

function onRemove() {
  emit('remove')
}
</script>
