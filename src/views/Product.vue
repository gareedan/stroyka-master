<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import productsData from '@/stores/ProductsAll.json'
import Btn_Buy from '@/components/ComponentsMini/Btn_Buy.vue'

const route = useRoute()
const router = useRouter()

const products = productsData.products || []
const productId = computed(() => parseInt(route.params.id))

const product = computed(() => {
  return products.find(p => p.id === productId.value)
})

const goBack = () => {
  router.push('/catalog')
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
  <div class="product-page" v-if="product">
    <!-- Хлебные крошки -->
    <div class="breadcrumb">
      Главная
      <span class="separator">→</span>
     Каталог
      <span class="separator">→</span>
     {{ product.category }}
      <span class="separator">→</span>
      <span class="current">{{ product.name }}</span>
    </div>

    <div class="product-layout">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>

      <div class="product-details">
        <h1 class="product-title">{{ product.name }}</h1>
        <div class="product-stock">
          <span class="in-stock">
            <img src="@/images/icons/check-circle.svg" alt="">
            В наличии</span>
        </div>
        <div class="product-price">{{ product.price }} ₽</div>

        <div class="product-actions">
          <Btn_Buy
              :item="product"
              @add-to-cart="handleAddToCart"
              @update-cart="handleUpdateCart"
              @remove-from-cart="handleRemoveFromCart"
          />
        </div>

        <div class="product-supplier">
          <strong>Поставщик:</strong> {{ product.supplier }}
        </div>
        <div class="product-delivery">
          Доставка осуществляется курьером поставщика или службой курьеров Доставка. Также товар можно забрать самостоятельно от поставщика.
        </div>
      </div>
    </div>


    <div class="product-description">
      <h2>Описание</h2>
      <p>{{ product.fullDescription || product.description }}</p>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Товар не найден</h2>
    <button @click="goBack">Вернуться в каталог</button>
  </div>
</template>

<style scoped>
.product-page {
  max-width: 1200px;
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
  margin-bottom: 24px;
  flex-wrap: wrap;
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

.product-layout {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
  border-radius: 12px;
  border: 1px solid #e8e9ea;
}

.product-image {
  flex: 0 0 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-right: 1px solid #e8e9ea;
  max-width: 100%;
}

.product-image img {
  width: 572px;
  height: 370px;
}


.product-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
  padding-top: 10px;
}

.product-stock {
  margin-bottom: 16px;
}

.in-stock {
  color: #E9002A;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center; gap: 10px;
}
.in-stock img {
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
}

.product-price {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.product-actions {
  margin-bottom: 20px;
  max-width: 200px;
}

.product-supplier {
  font-size: 16px;
  color: #2d2d44;
  margin-bottom: 8px;
}

.product-delivery {
  font-size: 14px;
  color: #8b8d92;
  line-height: 1.6;
}

.product-description {
  background-color: #F6F6F6;
  padding-top: 30px;
  border-radius: 10px;
}

.product-description h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.product-description p {
  font-size: 16px;
  line-height: 1.8;
  color: #2d2d44;
  margin-bottom: 16px;
}

.description-details h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 20px 0 8px 0;
}

.description-details ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.description-details ul li {
  font-size: 16px;
  line-height: 1.8;
  color: #2d2d44;
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}

.not-found h2 {
  font-size: 28px;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.not-found button {
  padding: 12px 32px;
  background: #3CC6F1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>