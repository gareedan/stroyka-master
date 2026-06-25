<script setup>
import catalogData from '@/stores/categoriesItem.json'

const categories = catalogData.categories || catalogData || []
</script>

<template>
  <div class="catalog-page">
    <div class="catalog-grid">
      <!-- Сантехника -->
      <div class="category-card">
        <img src="@/images/catalog/plumbing.svg" alt="Сантехника" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Ванны</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Комплектующие для ванн</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Душевые</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Унитазы и биде</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Смесители</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Душевое оборудование</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Раковины</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Пьедесталы для раковин</a></li>
        </ul>
      </div>

      <!-- Стройматериалы -->
      <div class="category-card">
        <img src="@/images/catalog/materials.svg" alt="Стройматериалы" />
        <ul class="subcategory-list">
          <li><router-link to="/Filters"><span class="arrow-icon">→</span> Сухие смеси</router-link></li>
          <li><a href="#"><span class="arrow-icon">→</span> Пиломатериалы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Гипсокартон</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Профиль для гипсокартона</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Изоляционные материалы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Армирующие материалы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Кровля</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Ленты строительные</a></li>
        </ul>
      </div>

      <!-- Напольные покрытия -->
      <div class="category-card">
        <img src="@/images/catalog/flooring.svg" alt="Напольные покрытия" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Линолеум</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Ламинат</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Ковролин</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Плинтус напольный</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Пороги</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Подложки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Ковровые дорожки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Плитка ПВХ, виниловый ламинат</a></li>
        </ul>
      </div>

      <!-- Отделка стен и потолка -->
      <div class="category-card">
        <img src="@/images/catalog/wall_decor.svg" alt="Отделка стен и потолка" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Обои</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Стеновые панели</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Плинтус потолочный</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Углы к потолочному плинтусу</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Потолочная плитка</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Профили алюминиевые</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Декоративные молдинги, багеты</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Пленки самоклеящиеся</a></li>
        </ul>
      </div>

      <!-- Керамическая плитка -->
      <div class="category-card">
        <img src="@/images/catalog/tile.svg" alt="Керамическая плитка" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Настенная плитка</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Напольная плитка</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Керамогранит</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Декоративная плитка</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Системы выравнивания плитки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Уголки и профили для плитки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Керамический плинтус</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Мозаика</a></li>
        </ul>
      </div>

      <!-- Двери и окна -->
      <div class="category-card">
        <img src="@/images/catalog/doors_windows.svg" alt="Двери и окна" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Межкомнатные двери</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Входные двери</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Дверные коробки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Арки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Дверные наличники</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Дверные доборы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Раздвижные двери</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Скобяные изделия</a></li>
        </ul>
      </div>

      <!-- Лакокрасочные материалы -->
      <div class="category-card">
        <img src="@/images/catalog/paint.svg" alt="Лакокрасочные материалы" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Краски</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Эмали</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Грунтовки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Монтажные пены</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Герметики</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Клеи</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Покрытия для дерева</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Лаки</a></li>
        </ul>
      </div>

      <!-- Климат и отопление -->
      <div class="category-card">
        <img src="@/images/catalog/climate.svg" alt="Климат и отопление" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Радиаторы отопления</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Теплый пол</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Электрические камины</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Вентиляция</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Тепловое оборудование</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Котлы отопительные</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Расширительные баки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Насосы циркуляционные</a></li>
        </ul>
      </div>

      <!-- Инструменты -->
      <div class="category-card">
        <img src="@/images/catalog/tools.svg" alt="Инструменты" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Электроинструмент</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Расходные материалы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Малярный инструмент</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Штукатурный инструмент</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Шлифовальный инструмент</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Измерительный инструмент</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Шпатели</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Спецодежда и средства защиты</a></li>
        </ul>
      </div>

      <!-- Крепеж и фурнитура -->
      <div class="category-card">
        <img src="@/images/catalog/fasteners.svg" alt="Крепеж и фурнитура" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Саморезы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Дюбель</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Гвозди</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Анкер</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Болты</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Гайки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Шуруп</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Шайбы</a></li>
        </ul>
      </div>

      <!-- Освещение -->
      <div class="category-card">
        <img src="@/images/catalog/lighting.svg" alt="Освещение" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Лампы</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Люстры</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Потолочные светильники</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Светодиодные светильники</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Подвесные светильники</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Светодиодные панели</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Бра</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Настольные лампы</a></li>
        </ul>
      </div>

      <!-- Электротовары -->
      <div class="category-card">
        <img src="@/images/catalog/electrical.svg" alt="Электротовары" />
        <ul class="subcategory-list">
          <li><a href="#"><span class="arrow-icon">→</span> Розетки и выключатели</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Кабели и комплектующие</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Телекоммуникации</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Счетчики электроэнергии</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Автоматические выключатели</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Электрические щитки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Тройники для розетки</a></li>
          <li><a href="#"><span class="arrow-icon">→</span> Удлинители электрические</a></li>
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

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.category-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px 20px 20px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.category-card img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  display: block;
  margin-bottom: 16px;
}

.category-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
  padding-bottom: 12px;
}

.subcategory-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subcategory-list li {
  padding: 5px 0;
}

.subcategory-list li:last-child {
  border-bottom: none;
}

.subcategory-list li a {
  text-decoration: none;
  color: #2F323A;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}

.arrow-icon {
  display: inline-block;
  font-size: 20px;
  opacity: 0;
  transition: opacity 0.2s ease;
  color: #2F323A;
}

.subcategory-list li a:hover .arrow-icon {
  opacity: 1;
}

.subcategory-list li a:hover {
  color: #2F323A;
}
</style>