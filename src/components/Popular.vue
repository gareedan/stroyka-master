<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Popular"
})
</script>

<template>
  <div class="page-wrapper">
    <div class="popular-all">
      <div class="popular-FirstRow">
        <span class="popular-title">Популярные категории</span>
        <router-link to="/Catalogue">
          <button class="all-categories-btn">
          <span>Все категории</span>
          <img src="../images/rightArrow.svg" alt="Стрелка" class="arrow-icon" />
        </button>
        </router-link>
      </div>
      <div class="categories-grid">
        <a href="#" class="category-item"><span class="category-name">Душевые</span>
          <img src="../images/shower.svg" alt="Душевые" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Пиломатериалы</span>
          <img src="../images/lumber.svg" alt="Пиломатериалы" class="category-icon" />

        </a>
        <a href="#" class="category-item"> <span class="category-name">Напольные покрытия</span>
          <img src="../images/flooring.svg" alt="Напольные покрытия" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Обои</span>
          <img src="../images/wallpaper.svg" alt="Обои" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Инструменты</span>
          <img src="../images/tools.svg" alt="Инструменты" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Товары для дачи</span>
          <img src="../images/garden.svg" alt="Товары для дачи" class="category-icon" />

        </a>
        <a href="#" class="category-item"> <span class="category-name">Окна</span>
          <img src="../images/windows.svg" alt="Окна" class="category-icon" />

        </a>
        <a href="#" class="category-item"> <span class="category-name">Двери</span>
          <img src="../images/doors.svg" alt="Двери" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Сантехника</span>
          <img src="../images/plumbing.svg" alt="Сантехника" class="category-icon" />

        </a>
        <a href="#" class="category-item"><span class="category-name">Краски</span>
          <img src="../images/paints.svg" alt="Краски" class="category-icon" />

        </a>
        <a href="#" class="category-item">   <span class="category-name">Электротовары</span>
          <img src="../images/electrical.svg" alt="Электротовары" class="category-icon" />

        </a>
        <a href="#" class="category-item">
          <span class="category-name">Интерьер</span>
          <img src="../images/interior.svg" alt="Интерьер" class="category-icon" />

        </a>
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

.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.popular-all {
  max-width: 1200px;
  width: 100%;
  border-radius: 16px;
  padding: 24px 32px 32px;
}

.popular-FirstRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.popular-title {
  font-size: 24px;
  font-weight: 700;
  color: #2F323A;
  letter-spacing: -0.2px;
}
.all-categories-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none ;
  border-radius: 5px;
  padding: 8px 16px 8px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #3CC6F1;
}
.all-categories-btn span {
  color: #3CC6F1;
}
.all-categories-btn:hover {
  background: #16AFF0;
  color: white;
  transition: 0.5ms;
}
.all-categories-btn span:hover {
  color:white;
  transition: 0.5ms;
}
.all-categories-btn:active {
background: #2F323A;
  color: white;
  transition: 0.5ms;
}
.all-categories-btn span:active {
  color: white;
  transition: 0.5ms;
}
.categories-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: calc(16.666% - 7px);
  padding: 16px 6px 14px;
  background: #E8E9EA;
  text-decoration: none;
  cursor: pointer;
  min-height: 140px;
  color: black;
  font-weight: bold;
  border-radius: 8px;
}

.category-item:hover {
  background: #D1D1D3;

}

.category-icon {
  width: 180px;
  height: 120px;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
  line-height: 1.3;
}
.arrow-icon img{
  width: 24px;
  height: 24px;
}
</style>