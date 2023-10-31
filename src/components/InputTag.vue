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
    },
    focusOnInput() {
      this.$refs.input.focus()
    },
    adjustInputSize() {
      const input = this.$refs.input
      input.style.width = 'auto' // Restablece el ancho automático

      const container = this.$el.querySelector('.form-container')
      const containerWidth = container.offsetWidth
      const containerPadding = 32 // Ajusta este valor según el padding de tu contenedor
      const formWidth = containerWidth - containerPadding

      const inputWidth = Math.min(formWidth, input.scrollWidth) // Utiliza Math.min en lugar de Math.max
      input.style.width = `${inputWidth}px`
    }
  }
}
</script>

<template>
  <div class="inputTag" @click="focusOnInput">
    <div class="tags">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :style="{ backgroundColor: tag.bg, color: tag.color }"
      >
        {{ tag.value }}
        <button @click="deleteTag(tag.value)" :style="{ color: tag.color }">
          X
        </button>
      </div>
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <input
            ref="input"
            class="input"
            type="text"
            v-model="currentValue"
            @keydown="handleKeyDown"
            @input="adjustInputSize"
          />
        </form>
      </div>
    </div>
    <p class="helper">press enter to add and backspace to remove last tag</p>
  </div>
</template>

<style scoped>
.inputTag,
.inputTag form,
.inputTag input,
tags,
tag,
.tag button {
  font-size: calc(1.5rem + 0.5vw);
}

.inputTag {
  border: solid 2px #ccc;

  padding: 1rem;
  width: 40ch;
  border-radius: 0.5rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
}

.inputTag .form-container {
  flex-grow: 1;
  width: 10ch;
}

.inputTag form {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
}

.inputTag input {
  background: transparent;
  /* border: solid 2px #ccc;
  border-radius: 0.5rem; */
  border: none;
  outline: none;
  padding: 0.5rem;
  min-width: 4ch;
  width: auto;
  max-width: 100%;
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
.tag button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.helper {
  text-align: center;
  color: #6d6d6d;
  font-style: italic;
  font-size: calc(0.5rem + 0.25vw);
}
.tag button {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem;
}
.tag button:hover {
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
