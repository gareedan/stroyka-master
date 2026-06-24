<script setup lang="ts">
import { ref } from 'vue'
import { brands } from '@/stores/brands'

const activeLetter = ref('Все')

const alphabet = [
  'Все',
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','Z',
  'А','Б','Г','Д','Е','Ж','З','И','К','Л','М',
  'Н','О','П','Р','С','Т','У','Ф','Ш','Э','Я',
]

// Типизация для брендов
type BrandsType = {
  [key: string]: string[]
}

// Приводим brands к правильному типу
const brandsData = brands as BrandsType

function scrollToLetter(letter: string) {
  activeLetter.value = letter

  if (letter === 'Все') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  document
      .getElementById(`letter-${letter}`)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
}
</script>

<template>
  <div class="brands">
    <div class="brands__nav">
      <button
          v-for="letter in alphabet"
          :key="letter"
          :class="[
          'brands__letter',
          { active: activeLetter === letter }
        ]"
          @click="scrollToLetter(letter)"
      >
        {{ letter }}
      </button>
    </div>

    <div
        v-for="(items, letter) in brandsData"
        :id="`letter-${letter}`"
        :key="letter"
        class="brands__section"
    >
      <div class="brands__title">
        {{ letter }}
      </div>

      <div class="brands__grid">
        <a
            v-for="brand in items"
            :key="brand as string"
            href="#"
            class="brands__item"
        >
          {{ brand }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brands {
  max-width: 1200px;
  margin: 0 auto;
}

.brands__nav {
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.brands__letter {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 999px;
  background: #f3f4f6;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #8B8D92;
}

.brands__letter:hover {
  background: #2F323A;
  color: #fff;
}

.brands__letter.active {
  background: #27b0d7;
  color: #fff;
}

.brands__section {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 32px;
  padding: 32px 0;
  border-bottom: 1px solid #eee;
}

.brands__title {
  font-size: 42px;
  font-weight: 700;
  color: #2F323A;
}

.brands__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 16px 40px;
}

.brands__item {
  color: #333;
  text-decoration: none;
  transition: .2s;
  padding: 4px 0;
}

.brands__item:hover {
  color: #27b0d7;
}

</style>