<template>

  <button class="city-trigger" @click="open = true">
    <img src="@/images/geo_icon.svg" alt="">
    {{ selectedCity }}
  </button>


  <Teleport to="body">
    <div v-if="open" class="overlay" @click.self="open = false">
      <div class="modal">

        <button class="close-btn" @click="open = false">✕</button>

        <h2 class="modal-title">Выберите ваш город</h2>


        <div class="search-wrap">
          <input
              v-model="query"
              class="search-input"
              placeholder="Поиск"
              autofocus
          />
          <span class="search-icon"> <img src="@/images/search_icon.svg" alt=""> </img></span>
        </div>


        <div class="cities-grid">
          <button
              v-for="city in filteredCities"
              :key="city"
              class="city-btn"
              :class="{ active: city === selectedCity }"
              @click="selectCity(city)"
          >
            <span v-if="city === selectedCity" class="arrow">→</span>
            {{ city }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const open = ref(false)
const query = ref('')
const selectedCity = ref('Москва')

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск',
  'Екатеринбург', 'Пыталово', 'Кислодрищенск',
  'Челябинск', 'Самара', 'Ростов-на-Дону',
  'Грязи', 'Томск', 'Красноярск',
  'Воронеж', 'Пермь', 'Волгоград',
  'Саки', 'Саратов', 'Дно',
  'Тольятти', 'Ижевск', 'Барнаул',
]

const filteredCities = computed(() => {
  if (!query.value.trim()) return cities
  return cities.filter(c =>
      c.toLowerCase().includes(query.value.toLowerCase())
  )
})

const selectCity = (city) => {
  selectedCity.value = city
  query.value = ''
  open.value = false
}
</script>

<style scoped>

.city-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  cursor: pointer;
  color: #5D6066;
}

.city-trigger:hover {
  border-color: #3CC6F1;
  background: #d0f2ff;
}


.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}


.modal {
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 32px 28px 28px;
  width: 520px;
  max-width: calc(100vw - 32px);
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.2s ease;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18);
}

@keyframes slideUp {
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  font-size: 18px;
  color: #8b8d92;
  cursor: pointer;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}

.close-btn:hover {
  color: #1a1a2e;
  background: #f0f0f0;
}

.modal-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 20px;
}


.search-wrap {
  position: relative;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 14px;
  border: 1px solid #e8e9ea;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  outline: none;
  transition: border-color 0.2s;
  background: #fafafa;
}

.search-input:focus {
  border-color: #3CC6F1;
  background: #fff;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: #8b8d92;
  pointer-events: none;
}


.cities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px 0;
}

.city-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-size: 14px;
  color: #1a1a2e;
  text-align: left;
  padding: 7px 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.city-btn:hover {
  background: #f0fbff;
  color: #3CC6F1;
}

.city-btn.active {
  color: #1a1a2e;
  font-weight: 500;
}

.arrow {
  color: #1a1a2e;
  font-size: 13px;
}
</style>