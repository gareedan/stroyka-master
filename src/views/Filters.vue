<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import productsData from '@/stores/ProductsAll.json'
import Btn_Buy from '@/components/ComponentsMini/Btn_Buy.vue'

const router = useRouter()
const products = productsData.products || []

// Фильтры
const priceMin = ref(0)
const priceMax = ref(100000)
const selectedBrands = ref([])
const searchQuery = ref('')
const sortType = ref('popular')

// Бренды для фильтра
const brands = computed(() => {
  const unique = [...new Set(products.map(p => p.supplier))]
  return unique.sort()
})

// Максимальная цена для слайдера
const maxPrice = computed(() => {
  const max = Math.max(...products.map(p => p.price))
  return Math.ceil(max / 1000) * 1000 || 100000
})

const filteredProducts = computed(() => {
  let result = products.filter(p => {
    if (searchQuery.value && !p.name.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false
    }
    if (p.price < priceMin.value || p.price > priceMax.value) {
      return false
    }
    if (selectedBrands.value.length > 0 && !selectedBrands.value.includes(p.supplier)) {
      return false
    }
    return true
  })

  // Сортировка
  switch (sortType.value) {
    case 'popular':
      // По id (как популярность)
      break
    case 'cheap':
      result.sort((a, b) => a.price - b.price)
      break
    case 'expensive':
      result.sort((a, b) => b.price - a.price)
      break
    case 'alphabet':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      break
  }

  return result
})

const toggleBrand = (brand) => {
  const index = selectedBrands.value.indexOf(brand)
  if (index > -1) {
    selectedBrands.value.splice(index, 1)
  } else {
    selectedBrands.value.push(brand)
  }
}

const resetFilters = () => {
  priceMin.value = 0
  priceMax.value = maxPrice.value
  selectedBrands.value = []
  searchQuery.value = ''
  sortType.value = 'popular'
}

const goToProduct = (id) => {
  router.push(`/Product/${id}`)
}

const handleAddToCart = (item) => {
  console.log('Товар добавлен в корзину:', item.name)
}

const handleUpdateCart = (item) => {
  console.log('Количество обновлено:', item.name, 'x' + item.quantity)
}

const handleRemoveFromCart = (item) => {
  console.log('Товар удалён из корзины:', item.name)
}
</script>

<template>
  <div class="catalog-page">
    <div class="breadcrumb">
      Главная
      <span class="separator">→</span>
      Каталог
      <span class="separator">→</span>
      Стройматериалы
      <span class="separator">→</span>
      <span class="current">Сухие смеси</span>
    </div>

    <h1 class="page-title">Сухие смеси</h1>

    <div class="catalog-layout">
      <!-- Фильтры -->
      <div class="filters-sidebar">
        <h3>Цена</h3>
        <div class="price-range">
          <span>{{ priceMin }} ₽</span>
          <span>{{ priceMax }} ₽</span>
        </div>
        <div class="slider-container">
          <input
              type="range"
              v-model.number="priceMin"
              :min="0"
              :max="maxPrice"
              class="slider min-slider"
          />
          <input
              type="range"
              v-model.number="priceMax"
              :min="0"
              :max="maxPrice"
              class="slider max-slider"
          />
        </div>
        <div class="price-inputs">
          <input type="number" v-model.number="priceMin" min="0" :max="priceMax" />
          <input type="number" v-model.number="priceMax" :min="priceMin" :max="maxPrice" />
        </div>

        <h3>Бренд</h3>
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Поиск"
            class="brand-search"
        />
        <div class="brand-list">
          <label v-for="brand in brands" :key="brand">
            <input
                type="checkbox"
                :value="brand"
                @change="toggleBrand(brand)"
            />
            {{ brand }}
          </label>
        </div>

        <div class="filter-actions">
          <button class="apply-btn">Применить</button>
          <button class="reset-btn" @click="resetFilters">Сбросить</button>
        </div>
      </div>

      <!-- Товары -->
      <div class="products-wrapper">
        <!-- Сортировка -->
        <div class="sorting-bar">
          <span class="sort-label">Сортировка:</span>
          <button
              class="sort-btn"
              :class="{ active: sortType === 'popular' }"
              @click="sortType = 'popular'"
          >
            Популярные
          </button>
          <button
              class="sort-btn"
              :class="{ active: sortType === 'cheap' }"
              @click="sortType = 'cheap'"
          >
            Дешевле
          </button>
          <button
              class="sort-btn"
              :class="{ active: sortType === 'expensive' }"
              @click="sortType = 'expensive'"
          >
            Дороже
          </button>
          <button
              class="sort-btn"
              :class="{ active: sortType === 'alphabet' }"
              @click="sortType = 'alphabet'"
          >
            По алфавиту
          </button>
          <span class="products-count">Найдено: {{ filteredProducts.length }}</span>
        </div>

        <!-- Товары -->
        <div class="products-grid">
          <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="product-card"
              @click="goToProduct(product.id)"
          >
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-info">
              <div class="product-name">
                {{ product.name }}
              </div>
              <div class="product-price">
                {{ product.price }} ₽
              </div>
              <div class="btn-wrapper" @click.stop>
                <Btn_Buy
                    :item="product"
                    @add-to-cart="handleAddToCart"
                    @update-cart="handleUpdateCart"
                    @remove-from-cart="handleRemoveFromCart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.catalog-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 20px 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #8b8d92;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.separator {
  color: #c1c1c1;
}

.current {
  color: #1a1a2e;
  font-weight: 500;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
}

.catalog-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* Фильтры */
.filters-sidebar {
  flex: 0 0 200px;
  border: 1px solid #F6F6F6;
  padding: 16px;
  border-radius: 10px;
  position: sticky;
  top: 20px;
}

.filters-sidebar h3 {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 14px 0 8px 0;
}

.filters-sidebar h3:first-child {
  margin-top: 0;
}

.price-range {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #2d2d44;
  margin-bottom: 4px;
}

.slider-container {
  position: relative;
  height: 20px;
  margin-bottom: 4px;
}

.slider {
  position: absolute;
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #3CC6F1;
  cursor: pointer;
  pointer-events: auto;
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #3CC6F1;
  cursor: pointer;
  pointer-events: auto;
  border: 2px solid white;
}

.slider.min-slider::-webkit-slider-runnable-track {
  height: 4px;
  background: #e8e9ea;
  border-radius: 2px;
}

.slider.max-slider::-webkit-slider-runnable-track {
  height: 4px;
  background: #e8e9ea;
  border-radius: 2px;
}

.price-inputs {
  display: flex;
  gap: 8px;
}

.price-inputs input {
  width: 50%;
  padding: 4px 8px;
  border: 1px solid #e8e9ea;
  border-radius: 6px;
  font-size: 13px;
}

.brand-search {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #e8e9ea;
  border-radius: 6px;
  font-size: 13px;
  margin-bottom: 6px;
}

.brand-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-height: 160px;
  overflow-y: auto;
}

.brand-list label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #2d2d44;
  cursor: pointer;
}

.brand-list input[type="checkbox"] {
  width: 14px;
  height: 14px;
  cursor: pointer;
}

.filter-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.apply-btn,
.reset-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.apply-btn {
  background: #3CC6F1;
  color: #fff;
}

.apply-btn:hover {
  background: #2a9fc4;
}

.apply-btn:active {
  background: #2d2d44;
}

.reset-btn {
  background: #f0f0f0;
  color: #2d2d44;
}

.reset-btn:hover {
  background: #e0e0e0;
}

.reset-btn:active {
  background: #2d2d44;
  color: white;
}

/* Товары */
.products-wrapper {
  flex: 1;
}

.sorting-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.sort-label {
  font-size: 14px;
  color: #8b8d92;
  margin-right: 4px;
}

.sort-btn {
  padding: 4px 12px;
  border: 1px solid #e8e9ea;
  border-radius: 16px;
  background: white;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #2d2d44;
}

.sort-btn:hover {
  background: #f5f5f5;
}

.sort-btn.active {
  background: #3CC6F1;
  color: white;
  border-color: #3CC6F1;
}

.products-count {
  font-size: 13px;
  color: #8b8d92;
  margin-left: auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.product-card {
  border: 1px solid #e8e9ea;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.product-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 12px;
  flex-shrink: 0;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-size: 16px;
  color: #2d2d44;
  min-height: 32px;
  margin-bottom: 4px;
  line-height: 1.3;
  font-weight: 500;
  flex-shrink: 0;
}

.product-name:hover {
  color: #3CC6F1;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
  flex-shrink: 0;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
}
</style>