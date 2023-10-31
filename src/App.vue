<script setup>
import InputTag from './components/InputTag.vue'
</script>

<template>
  <header>
    <h1>Tag Input</h1>
  </header>
  <main class="container">
    <InputTag />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
