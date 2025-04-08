<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
}
</style>
