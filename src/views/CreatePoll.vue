<template>
  <Card>
    <h1 class="text-3xl font-bold mb-6 text-center">Crear Encuesta</h1>

    <BaseInput v-model="question" placeholder="Escribe tu pregunta aquí" />

    <OptionInput
      v-for="(opt, i) in options"
      :key="i"
      v-model="options[i]"
      @remove="() => options.splice(i, 1)"
    />

    <div class="flex space-x-2">
      <BaseButton @click="options.push('')">Agregar Opción</BaseButton>
      <BaseButton @click="createPoll" :disabled="!canSubmit">Crear Encuesta</BaseButton>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePollStore } from '@/stores/pollStore'
import Card from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import OptionInput from '@/components/OptionInput.vue'

const question = ref('')
const options = ref<string[]>([''])
const pollStore = usePollStore()
const router = useRouter()

const canSubmit = computed(
  () => question.value.trim() !== '' && options.value.every((o) => o.trim() !== ''),
)

function createPoll() {
  if (!canSubmit.value) return
  const id = pollStore.createPoll(question.value, options.value)
  router.push(`/poll/respond/${id}`)
}
</script>
