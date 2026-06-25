<template>
  <div class="cart-page">
    <h1 class="cart-title">Корзина</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Корзина пуста</p>
      <router-link to="/catalog" class="continue-btn">Перейти в каталог</router-link>
    </div>
    <div class="cart-summary">
      <h3>Итого</h3>
      <div class="summary-row">
        <span>Количество товара</span>
        <span>{{ totalItems }} шт.</span>
      </div>
      <div class="summary-row">
        <span>Товаров на сумму</span>
        <span>{{ totalPrice }} ₽</span>
      </div>
      <div class="summary-row" v-if="cartItems.length > 0">
        <span>Поставщик</span>
        <span>{{ supplier }}</span>
      </div>

      <h3>Способ оплаты</h3>
      <div class="payment-options">
        <label>
          <input type="radio" name="payment" value="card" checked />
          Картой
        </label>
        <label>
          <input type="radio" name="payment" value="cash" />
          Наличными
        </label>
      </div>

      <button class="checkout-btn" @click="checkout">Оформить заказ</button>

      <div class="delivery-info">
        <p>1. Можно сделать заказ только от одного поставщика</p>
        <p>2. Доставка осуществляется курьером поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</p>
        <p>3. Точная сумма доставки будет определена после последнего подтверждения заказа</p>
      </div>
    </div>
    <div v-else class="cart-layout">
      <div class="cart-items">
        <div
            v-for="item in cartItems"
            :key="item.id"
            class="cart-item"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="item-info">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-price">{{ item.price }} ₽</div>
            <div class="item-supplier">Поставщик: {{ item.supplier }}</div>
          </div>
          <div class="item-quantity">
            <Btn_Buy
                :item="item"
                @update-cart="handleUpdate"
                @remove-from-cart="handleRemove"
            />
          </div>
          <div class="item-total">{{ item.price * item.quantity }} ₽</div>
          <button class="remove-btn" @click="removeItem(item)">✕</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '@/stores/cart.js'
import Btn_Buy from '@/components/ComponentsMini/Btn_Buy.vue'

const cart = useCart()
const cartItems = computed(() => cart.cartItems.value)
const totalItems = computed(() => cart.totalItems)
const totalPrice = computed(() => cart.totalPrice)
const supplier = computed(() => cart.supplier)

const handleUpdate = (item) => {
  cart.updateQuantity(item)
}

const handleRemove = (item) => {
  cart.removeFromCart(item)
}

const removeItem = (item) => {
  cart.removeFromCart(item)
}

const checkout = () => {
  if (cartItems.value.length === 0) {
    alert('Корзина пуста')
    return
  }
  alert('Заказ оформлен! Спасибо за покупку!')
  cart.clearCart()
}
</script>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.cart-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
}

.empty-cart {
  text-align: center;
  padding: 80px 20px;
}

.empty-cart p {
  font-size: 20px;
  color: #8b8d92;
  margin-bottom: 20px;
}

.continue-btn {
  display: inline-block;
  padding: 12px 40px;
  background: #3CC6F1;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  transition: background 0.2s ease;
}

.continue-btn:hover {
  background: #2a9fc4;
}

.cart-layout {
  display: flex;
  gap: 40px;
}

.cart-items {
  flex: 1;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #e8e9ea;
}

.item-image {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #f6f8fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.item-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.item-price {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
}

.item-supplier {
  font-size: 13px;
  color: #8b8d92;
}

.item-quantity {
  flex-shrink: 0;
}

.item-total {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  min-width: 100px;
  text-align: right;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #c1c1c1;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s ease;
}

.remove-btn:hover {
  color: #e74c3c;
}

.cart-summary {
  flex: 0 0 320px;
  padding: 24px;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  background: #fafafa;
  position: sticky;
  top: 20px;
}

.cart-summary h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 15px;
  color: #2d2d44;
  border-bottom: 1px solid #f0f0f0;
}

.summary-row:last-of-type {
  border-bottom: none;
}

.payment-options {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.payment-options label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #2d2d44;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  padding: 14px;
  background: #3CC6F1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 16px;
}

.checkout-btn:hover {
  background: #2a9fc4;
}

.delivery-info {
  font-size: 13px;
  color: #8b8d92;
  line-height: 1.6;
}

.delivery-info p {
  margin-bottom: 6px;
}

.delivery-info p:last-child {
  margin-bottom: 0;
}
</style>