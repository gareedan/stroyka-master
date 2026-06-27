<script setup>
import Btn_Buy from '../components/ComponentsMini/Btn_Buy.vue'
import productsData from '../stores/PopularProducts.json'

const products = productsData.sales || productsData

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
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
  <div class="popular-products">
    <div class="popular-header">
      <h2>Популярные товары</h2>
    </div>

    <div class="products-grid">
      <div
          v-for="item in products"
          :key="item.id"
          class="product-card"
      >
        <div class="product-image">
          <img :src="item.image" :alt="item.name" />
        </div>

        <div class="product-info">
          <div class="product-title">
            {{ item.name }}
          </div>

          <div class="product-subtitle" v-if="item.subtitle">
            {{ item.subtitle }}
          </div>

          <div class="price-row">
            <span class="price">{{ formatPrice(item.price) }} ₽</span>
            <span class="old-price" v-if="item.oldPrice">{{ formatPrice(item.oldPrice) }} ₽</span>
          </div>

          <div class="btn-wrapper">
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
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

.popular-products {
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 0;
  padding: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.popular-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.popular-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: -0.3px;
}


.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.2s ease;
}
.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  min-height: 180px;
  width: 100%;
  border-bottom: 1px solid #E8E9EA;
}
.product-image img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}
.product-info {
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
}
.product-title {
  font-size: 16px;
  color:#2F323A;
  margin-bottom: 4px;
  min-height: 40px;
}
.price-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  margin-top: auto;
}
.price {
  font-size: 20px;
  font-weight: 700;
  color: #171B24;
  padding-top: 20px;
}
.old-price {
  font-size: 16px;
  color: #8b8d92;
  text-decoration: line-through;
  font-weight: 400;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
@media (max-width: 375px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  .popular-products {
    max-width: 1200px;
    width: 100%;
    margin: 40px auto 0;
    padding: 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .popular-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .popular-header h2 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
    letter-spacing: -0.3px;
  }

  .all-products {
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
  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .product-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #e8e9ea;
    border-radius: 12px;
    background: #ffffff;
    overflow: hidden;
    transition: box-shadow 0.25s ease, transform 0.2s ease;
  }
  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: white;
    min-height: 180px;
    width: 100%;
    border-bottom: 1px solid #E8E9EA;
  }
  .product-image img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    padding: 16px;
    flex: 1;
  }
  .product-title {
    font-size: 16px;
    color:#2F323A;
    margin-bottom: 4px;
    min-height: 40px;
  }
  .price-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    margin-top: auto;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
    color: #171B24;
    padding-top: 20px;
  }
  .old-price {
    font-size: 16px;
    color: #8b8d92;
    text-decoration: line-through;
    font-weight: 400;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>