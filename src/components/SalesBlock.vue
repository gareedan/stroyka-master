<script setup>
import products from '../stores/products.json'

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
          <img :src="item.image" :alt="item.title" />
        </div>

        <div class="product-info">
          <div class="product-title">            {{ item.title }}
          </div>

          <div class="price-row">
            <span class="price">{{ item.price }} ₽</span>
            <span class="old-price">{{ item.oldPrice }} ₽</span>
          </div>

          <button class="cart-btn">
            В корзину
          </button>
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.sales-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.sales-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: -0.3px;
}

.all-sales {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2d7aff;
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
  background: #2d7aff;
  color: #ffffff;
  text-decoration: none;
}

.all-sales img {
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
  filter: brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(1000%) hue-rotate(200deg);
}

.all-sales:hover img {
  transform: translateX(4px);
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

.product-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
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
  padding: 16px;
  background: #f8f9fc;
  border-right: 1px solid #e8e9ea;
}

.product-image img {
  width: 120px;
  height: 120px;
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

.cart-btn {
  height: 40px;
  padding: 0 28px;
  border: none;
  border-radius: 6px;
  background: #2d7aff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2px;
}

.cart-btn:hover {
  background: #1a1a2e;
  box-shadow: 0 4px 12px rgba(26, 26, 46, 0.15);
  transform: translateY(-1px);
}

.cart-btn:active {
  transform: scale(0.97);
}
</style>