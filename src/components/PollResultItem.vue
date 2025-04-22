<template>
  <li
    v-for="opt in options"
    :key="opt.id"
    class="flex justify-between border-b border-gray-200 pb-2"
  >
    <span class="text-lg">{{ opt.text }}</span>
    <span class="text-lg font-semibold">{{ opt.votes }} votos</span>
  </li>
</template>

<script setup lang="ts">
// Importamos el tipo PollOption de nuestro fichero de tipos
import type { PollOption } from '@/types/poll'

// Desestructuramos la prop que sí usamos: options
const { options } = defineProps<{
  options: PollOption[]
}>()
</script>
