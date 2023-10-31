<script>
import {
  getOppositeColor,
  whiteOrBlack,
  randomColor
} from '../utils/colorInHex'

export default {
  data() {
    return {
      currentValue: '',
      tags: []
    }
  },

  methods: {
    handleKeyDown(event) {
      if (event.key === 'Backspace' && this.currentValue === '') {
        this.tags.pop()
      }
    },
    handleSubmit() {
      if (this.currentValue !== '') {
        const exist = this.tags.find((tag) => tag.value === this.currentValue)

        if (!exist) {
          const bg = randomColor()
          const color = whiteOrBlack(getOppositeColor(bg))
          this.tags.push({
            value: this.currentValue,
            color,
            bg
          })
          this.currentValue = ''
        }
      }
    },
    deleteTag(name) {
      this.tags = this.tags.filter((tag) => tag.value !== name)
    }
  }
}
</script>

<template>
  <div class="inputTag">
    <div class="tags">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :style="{ backgroundColor: tag.bg, color: tag.color }"
      >
        {{ tag.value }} <button @click="deleteTag(tag.value)">X</button>
      </div>
      <form @submit.prevent="handleSubmit">
        <input
          class="input"
          type="text"
          v-model="currentValue"
          @keydown="handleKeyDown"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.inputTag {
  border: solid 2px #ccc;
  margin: 0 auto;
  padding: 1rem;
  width: 80ch;
  border-radius: 0.5rem;

  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
}

.inputTag form {
  display: inline-flex;
}

.inputTag input {
  border: none;
  outline: none;
  padding: 0.5rem;
}

.tags {
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
