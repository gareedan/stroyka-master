<script setup>
import catalogData from '@/stores/categoriesItem.json'

const categories = catalogData.categories || catalogData || []
</script>

<template>
  <div class="catalog-page">
    <div class="breadcrumb">
      <a href="/">Главная</a>
      <span class="separator">→</span>
      <span class="current">Каталог</span>
    </div>

    <h1 class="page-title">Каталог товаров</h1>

    <div class="catalog-grid">
      <div
          v-for="category in categories"
          :key="category.name"
          class="category-card"
      >
        <div class="category-header">
          <span class="category-icon">{{ category.icon }}</span>
          <h2 class="category-name">{{ category.name }}</h2>
        </div>

        <ul class="subcategory-list">
          <li
              v-for="sub in category.subcategories"
              :key="sub"
              class="subcategory-item"
          >
            <a href="#">{{ sub }}</a>
          </li>
        </ul>
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

/* Хлебные крошки */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #8b8d92;
  margin-bottom: 12px;
}

.breadcrumb a {
  color: #8b8d92;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #3CC6F1;
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
  margin-bottom: 30px;
}

/* Сетка категорий */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.category-card {
  background: #ffffff;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  padding: 24px 20px 20px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.category-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 2px solid #f0f0f0;
}

.category-icon {
  font-size: 28px;
  line-height: 1;
}

.category-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
}

.subcategory-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subcategory-item {
  padding: 6px 0;
  border-bottom: 1px solid #f5f5f5;
}

.subcategory-item:last-child {
  border-bottom: none;
}

.subcategory-item a {
  text-decoration: none;
  color: #2d2d44;
  font-size: 14px;
  transition: color 0.2s ease;
  display: block;
}

.subcategory-item a:hover {
  color: #3CC6F1;
}
</style>