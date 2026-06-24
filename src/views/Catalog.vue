<script>
import Sellers from "@/components/Sellers.vue";
import Categories from "@/components/Categories.vue";


export default {
  components: {
    Sellers,
    Categories,
  }
}
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
      <!-- Сантехника -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/plumbing.svg" alt="Сантехника" />
        </div>
        <h3 class="category-name">Сантехника</h3>
        <ul class="subcategory-list">
          <li><a href="#">Ванны</a></li>
          <li><a href="#">Комплектующие для ванн</a></li>
          <li><a href="#">Душевые</a></li>
          <li><a href="#">Унитазы и биде</a></li>
          <li><a href="#">Смесители</a></li>
          <li><a href="#">Душевое оборудование</a></li>
          <li><a href="#">Раковины</a></li>
          <li><a href="#">Пьедесталы для раковин</a></li>
        </ul>
      </div>

      <!-- Стройматериалы -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/materials.svg" alt="Стройматериалы" />
        </div>
        <h3 class="category-name">Стройматериалы</h3>
        <ul class="subcategory-list">
          <li><a href="#">Сухие смеси</a></li>
          <li><a href="#">Пиломатериалы</a></li>
          <li><a href="#">Гипсокартон</a></li>
          <li><a href="#">Профиль для гипсокартона</a></li>
          <li><a href="#">Изоляционные материалы</a></li>
          <li><a href="#">Армирующие материалы</a></li>
          <li><a href="#">Кровля</a></li>
          <li><a href="#">Ленты строительные</a></li>
        </ul>
      </div>

      <!-- Напольные покрытия -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/flooring.svg" alt="Напольные покрытия" />
        </div>
        <h3 class="category-name">Напольные покрытия</h3>
        <ul class="subcategory-list">
          <li><a href="#">Линолеум</a></li>
          <li><a href="#">Ламинат</a></li>
          <li><a href="#">Ковролин</a></li>
          <li><a href="#">Плинтус напольный</a></li>
          <li><a href="#">Пороги</a></li>
          <li><a href="#">Подложки</a></li>
          <li><a href="#">Ковровые дорожки</a></li>
          <li><a href="#">Плитка ПВХ, виниловый ламинат</a></li>
        </ul>
      </div>

      <!-- Отделка стен и потолка -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/wall_decor.svg" alt="Отделка стен и потолка" />
        </div>
        <h3 class="category-name">Отделка стен и потолка</h3>
        <ul class="subcategory-list">
          <li><a href="#">Обои</a></li>
          <li><a href="#">Стеновые панели</a></li>
          <li><a href="#">Плинтус потолочный</a></li>
          <li><a href="#">Углы к потолочному плинтусу</a></li>
          <li><a href="#">Потолочная плитка</a></li>
          <li><a href="#">Профили алюминиевые</a></li>
          <li><a href="#">Декоративные молдинги, багеты</a></li>
          <li><a href="#">Пленки самоклеящиеся</a></li>
        </ul>
      </div>

      <!-- Керамическая плитка -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/tile.svg" alt="Керамическая плитка" />
        </div>
        <h3 class="category-name">Керамическая плитка</h3>
        <ul class="subcategory-list">
          <li><a href="#">Настенная плитка</a></li>
          <li><a href="#">Напольная плитка</a></li>
          <li><a href="#">Керамогранит</a></li>
          <li><a href="#">Декоративная плитка</a></li>
          <li><a href="#">Системы выравнивания плитки</a></li>
          <li><a href="#">Уголки и профили для плитки</a></li>
          <li><a href="#">Керамический плинтус</a></li>
          <li><a href="#">Мозаика</a></li>
        </ul>
      </div>

      <!-- Двери и окна -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/doors_windows.svg" alt="Двери и окна" />
        </div>
        <h3 class="category-name">Двери и окна</h3>
        <ul class="subcategory-list">
          <li><a href="#">Межкомнатные двери</a></li>
          <li><a href="#">Входные двери</a></li>
          <li><a href="#">Дверные коробки</a></li>
          <li><a href="#">Арки</a></li>
          <li><a href="#">Дверные наличники</a></li>
          <li><a href="#">Дверные доборы</a></li>
          <li><a href="#">Раздвижные двери</a></li>
          <li><a href="#">Скобяные изделия</a></li>
        </ul>
      </div>

      <!-- Лакокрасочные материалы -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/paint.svg" alt="Лакокрасочные материалы" />
        </div>
        <h3 class="category-name">Лакокрасочные материалы</h3>
        <ul class="subcategory-list">
          <li><a href="#">Краски</a></li>
          <li><a href="#">Эмали</a></li>
          <li><a href="#">Грунтовки</a></li>
          <li><a href="#">Монтажные пены</a></li>
          <li><a href="#">Герметики</a></li>
          <li><a href="#">Клеи</a></li>
          <li><a href="#">Покрытия для дерева</a></li>
          <li><a href="#">Лаки</a></li>
        </ul>
      </div>

      <!-- Климат и отопление -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/climate.svg" alt="Климат и отопление" />
        </div>
        <h3 class="category-name">Климат и отопление</h3>
        <ul class="subcategory-list">
          <li><a href="#">Радиаторы отопления</a></li>
          <li><a href="#">Теплый пол</a></li>
          <li><a href="#">Электрические камины</a></li>
          <li><a href="#">Вентиляция</a></li>
          <li><a href="#">Тепловое оборудование</a></li>
          <li><a href="#">Котлы отопительные</a></li>
          <li><a href="#">Расширительные баки</a></li>
          <li><a href="#">Насосы циркуляционные</a></li>
        </ul>
      </div>

      <!-- Инструменты -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/tools.svg" alt="Инструменты" />
        </div>
        <h3 class="category-name">Инструменты</h3>
        <ul class="subcategory-list">
          <li><a href="#">Электроинструмент</a></li>
          <li><a href="#">Расходные материалы</a></li>
          <li><a href="#">Малярный инструмент</a></li>
          <li><a href="#">Штукатурный инструмент</a></li>
          <li><a href="#">Шлифовальный инструмент</a></li>
          <li><a href="#">Измерительный инструмент</a></li>
          <li><a href="#">Шпатели</a></li>
          <li><a href="#">Спецодежда и средства защиты</a></li>
        </ul>
      </div>

      <!-- Крепеж и фурнитура -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/fasteners.svg" alt="Крепеж и фурнитура" />
        </div>
        <h3 class="category-name">Крепеж и фурнитура</h3>
        <ul class="subcategory-list">
          <li><a href="#">Саморезы</a></li>
          <li><a href="#">Дюбель</a></li>
          <li><a href="#">Гвозди</a></li>
          <li><a href="#">Анкер</a></li>
          <li><a href="#">Болты</a></li>
          <li><a href="#">Гайки</a></li>
          <li><a href="#">Шуруп</a></li>
          <li><a href="#">Шайбы</a></li>
        </ul>
      </div>

      <!-- Освещение -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/lighting.svg" alt="Освещение" />
        </div>
        <h3 class="category-name">Освещение</h3>
        <ul class="subcategory-list">
          <li><a href="#">Лампы</a></li>
          <li><a href="#">Люстры</a></li>
          <li><a href="#">Потолочные светильники</a></li>
          <li><a href="#">Светодиодные светильники</a></li>
          <li><a href="#">Подвесные светильники</a></li>
          <li><a href="#">Светодиодные панели</a></li>
          <li><a href="#">Бра</a></li>
          <li><a href="#">Настольные лампы</a></li>
        </ul>
      </div>

      <!-- Электротовары -->
      <div class="category-card">
        <div class="category-image">
          <img src="@/images/catalog/electrical.svg" alt="Электротовары" />
        </div>
        <h3 class="category-name">Электротовары</h3>
        <ul class="subcategory-list">
          <li><a href="#">Розетки и выключатели</a></li>
          <li><a href="#">Кабели и комплектующие</a></li>
          <li><a href="#">Телекоммуникации</a></li>
          <li><a href="#">Счетчики электроэнергии</a></li>
          <li><a href="#">Автоматические выключатели</a></li>
          <li><a href="#">Электрические щитки</a></li>
          <li><a href="#">Тройники для розетки</a></li>
          <li><a href="#">Удлинители электрические</a></li>
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

.category-image {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: #f6f8fa;
  border-radius: 8px;
  overflow: hidden;
}

.category-image img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.category-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
}

.subcategory-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subcategory-list li {
  padding: 5px 0;
  border-bottom: 1px solid #f5f5f5;
}

.subcategory-list li:last-child {
  border-bottom: none;
}

.subcategory-list li a {
  text-decoration: none;
  color: #2d2d44;
  font-size: 14px;
  transition: color 0.2s ease;
  display: block;
}

.subcategory-list li a:hover {
  color: #3CC6F1;
}
</style>