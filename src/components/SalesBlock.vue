<script setup>
import products from '../stores/products.json'
import Btn_Buy from '../components/ComponentsMini/Btn_Buy.vue'
</script>

<template>
  <div class="sales">
    <div class="sales-header">
      <h1>Акции</h1>
      <a href="#" class="all-sales">
        Все акции
        <img src="../images/rightArrow.svg" alt="Стрелка" />
      </a>
    </div>

    <div class="sales-grid">
      <div
          v-for="item in products.sales"
          :key="item.id"
          class="product-card"
      >
        <div class="badge">-{{ item.discount }}%</div>

        <div class="product-image">
          <img :src="item.image" :alt="item.name" />
        </div>

        <div class="product-info">
          <div class="product-title">
            {{ item.name }}
          </div>

          <div class="price-row">
            <span class="price">{{ item.price }} ₽</span>
            <span class="old-price">{{ item.oldPrice }} ₽</span>
          </div>


          <Btn_Buy
              :item="item"
              @add-to-cart="handleAddToCart"
              @update-cart="handleUpdateCart"
              @remove-from-cart="handleRemoveFromCart"
          />
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

.sales {
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 0;
  padding: 0 20px;

}

.sales-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.sales-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: -0.3px;
}

.all-sales {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #3CC6F1;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.25s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}

.all-sales:hover {
  background: #3CC6F1;
  color: #ffffff;
  text-decoration: none;
}
.all-sales:active {
  background: #2F323A;
  color: #ffffff;
  text-decoration: none;
}

.all-sales img {
  width: 18px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(1000%) hue-rotate(200deg);
}

.all-sales:hover img {
  filter: brightness(0) saturate(100%) invert(100%);
}

.sales-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.product-card {
  position: relative;
  display: grid;
  grid-template-columns: 160px 1fr;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  min-height: 180px;
}



.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #ff1744;
  color: #ffffff;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  z-index: 2;
  line-height: 1.4;
  letter-spacing: 0.3px;
}

.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background: white;
max-height: 200px;
  width: 100%;
  border-bottom: 1px solid #E8E9EA;
}

.product-image img {
  width: 100%;
  max-width: 220px;
  height: 200px;
  object-fit: contain;
}

.product-info {
  padding: 16px 20px 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-title {
  font-size: 14px;
  line-height: 1.5;
  color: #1a1a2e;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.price {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
}

.old-price {
  font-size: 17px;
  color: #8b8d92;
  text-decoration: line-through;
  font-weight: 400;
}
</style>