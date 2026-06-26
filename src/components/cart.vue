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

<template>
  <div class="cart-page">
    <h1 class="cart-title">Корзина</h1>

    <!-- Пустая корзина -->
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Корзина пуста</p>
      <router-link to="/Catalogue" class="continue-btn">Перейти в каталог</router-link>
    </div>

    <!-- Непустая корзина -->
    <div v-else class="cart-layout">

      <!-- Блок итогов СЛЕВА -->
      <div class="cart-summary">
        <h3 class="summary-section-title">Итого</h3>
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

        <hr class="summary-divider" />

        <h3 class="summary-section-title">Способ оплаты</h3>
        <div class="payment-options ">
          <label class="payment-option row">
            Картой
            <input type="radio" class="checkbox-input" name="payment" value="card" checked />

          </label>
          <label class="payment-option row">
            Наличными
            <input type="radio" name="payment" value="cash" />

          </label>

        </div>

        <button class="checkout-btn" @click="checkout">Оформить заказ</button>

        <div class="delivery-info">
          <div class="delivery-row">
            <div class="delivery-icon"><img src="@/images/icons/info.svg" alt=""></div>
            <p class="delivery-text">Можно сделать заказ только от одного поставщика</p>
          </div>
          <div class="delivery-row">
            <div class="delivery-icon"><img src="@/images/icons/car.svg" alt=""> </div>
            <p class="delivery-text">Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</p>
          </div>
          <div class="delivery-row">
            <div class="delivery-icon"><img src="@/images/icons/box.svg" alt=""></div>
            <p class="delivery-text">Точная сумма доставки будет определена после последнего подтверждения заказа</p>
          </div>
        </div>
      </div>

      <!-- Товары СПРАВА -->
      <div class="cart-items">
        <div
            v-for="item in cartItems"
            :key="item.id"
            class="cart-item"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="item-body">
            <div class="item-top">
              <p class="item-name">{{ item.name }}</p>
              <span class="item-code">Код товара:<br />{{ item.code || '34078988-0047' }}</span>
            </div>



            <div class="item-bottom">
              <div class="BottomFirst">
                <span class="item-price">{{ item.price }} ₽</span>
              </div>
              <div class="BottomSecond">
                <div class="item-controls">

                  <Btn_Buy
                      :item="item"
                      @update-cart="handleUpdate"
                      @remove-from-cart="handleRemove"/>

                  <button class="remove-btn" @click="removeItem(item)">Удалить товар</button>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.cart-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px 20px 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.cart-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
}

/* ── Пустая корзина ── */
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
  background: #2ab0d8;
}

/* ── Основной layout ── */
.cart-layout {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* ── Summary (левый блок) ── */
.cart-summary {
  flex: 0 0 260px;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  background: #fafafa;
  padding: 20px;
  position: sticky;
  top: 20px;
}

.summary-section-title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #5a5b60;
  padding: 5px 0;
}

.summary-row span:last-child {
  color: #1a1a2e;
  font-weight: 500;
}

.summary-divider {
  border: none;
  border-top: 1px solid #e8e9ea;
  margin: 14px 0;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #1a1a2e;
  cursor: pointer;
}

.payment-option input[type="radio"] {
  accent-color: #1a1a2e;
  width: 15px;
  height: 15px;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #3CC6F1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 16px;
}

.checkout-btn:hover {
  background: #2ab0d8;
}

.delivery-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.delivery-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.delivery-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1px;
}

.delivery-text {
  font-size: 15px;
  color: #454950;
}


.cart-items {
  flex: 1;
  min-width: 0;
}

.cart-item {
  display: flex;
  gap: 20px;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  margin-bottom: 16px;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 278px;
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  border-left: 1px solid #e8e9ea;
}

.item-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
}

.item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a2e;
  line-height: 1.45;
  flex: 1;
}

.item-code {
  font-size: 12px;
  color: #8b8d92;
  flex-shrink: 0;
  white-space: nowrap;
  text-align: right;
}

.item-bottom {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.item-price {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: #3CC6F1;
  cursor: pointer;
  padding: 0;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}

.remove-btn:hover {
  color: #e74c3c;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.BottomFirst{
  display: flex;
  justify-content: start;
}
.BottomSecond{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
</style>