<script setup>
import InputTag from './components/InputTag.vue'
</script>

<template>
  <header>
    <h1 class="title">Tag Input</h1>
  </header>
  <main class="container">
    <InputTag />
  </main>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: calc(3.5rem + 1.5vw);
  margin-bottom: calc(2rem + 0.25vh);
}
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
