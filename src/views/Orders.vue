<script>
export default {
  name: "AddToCartButton",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    addToCart() {
      const updatedItem = { ...this.item, quantity: 1 }
      this.$emit('add-to-cart', updatedItem)

      // Обновляем локальный item
      this.item.quantity = 1
    },
    increaseQuantity() {
      if (this.item) {
        this.item.quantity++
        this.$emit('update-cart', this.item)
      }
    },
    decreaseQuantity() {
      if (this.item) {
        if (this.item.quantity > 1) {
          this.item.quantity--
          this.$emit('update-cart', this.item)
        } else {
          this.item.quantity = 0
          this.$emit('remove-from-cart', this.item)
        }
      }
    }
  }
}
</script>

<template>
  <div class="add-to-cart-wrapper">
    <!-- Кнопка "В корзину" -->
    <button
        v-if="!item.quantity || item.quantity === 0"
        class="cart-btn"
        @click="addToCart"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :class="{ 'btn-hover': isHovered }"
    >
      В корзину
    </button>

    <!-- Счётчик количества -->
    <div v-else class="quantity-controls">
      <button
          class="qty-btn minus"
          @click="decreaseQuantity"
      >
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
          <path d="M1 1H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>

      <span class="qty-number">{{ item.quantity }}</span>

      <button
          class="qty-btn plus"
          @click="increaseQuantity"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.add-to-cart-wrapper {
  display: flex;
  align-items: center;
  min-height: 38px;
}

/* Кнопка "В корзину" */
.cart-btn {
  height: 38px;
  padding: 0 28px;
  border: none;
  border-radius: 6px;
  background: #2d7aff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2px;
  white-space: nowrap;
}

.cart-btn.btn-hover {
  background: #5a9aff;
  box-shadow: 0 4px 12px rgba(45, 122, 255, 0.3);
  transform: translateY(-1px);
}

.cart-btn:active {
  transform: scale(0.97);
}

/* Счётчик количества */
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0;
  height: 38px;
  border: 2px solid #2d7aff;
  border-radius: 6px;
  background: #ffffff;
  overflow: hidden;
  transition: all 0.3s ease;
}

.quantity-controls:hover {
  border-color: #1a1a2e;
  box-shadow: 0 0 0 3px rgba(26, 26, 46, 0.1);
}

.qty-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 100%;
  background: transparent;
  border: none;
  color: #1a1a2e;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  padding: 0;
}

.qty-btn:hover {
  background: #f0f4ff;
  color: #2d7aff;
}

.qty-btn:active {
  transform: scale(0.92);
}

.qty-btn.minus:hover {
  background: #fef0f0;
  color: #ff1744;
}

.qty-btn.plus:hover {
  background: #f0f7ff;
  color: #2d7aff;
}

.qty-btn svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 2;
}

.qty-number {
  min-width: 38px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  user-select: none;
}

/* Анимация появления счётчика */
.quantity-controls {
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>