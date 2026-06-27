<template>
  <div class="add-to-cart-wrapper">
    <!-- Кнопка "В корзину" -->
    <button
        v-if="!localQuantity || localQuantity === 0"
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
      <button class="qty-btn" @click="decreaseQuantity">
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
          <path d="M1 1H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <span class="qty-number">{{ localQuantity }}</span>
      <button class="qty-btn" @click="increaseQuantity">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/stores/cart.js'

export default {
  name: "Btn_Buy",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    const cart = useCart()
    const existingItem = cart.cartItems.value.find(i => i.id === this.item.id)
    return {
      isHovered: false,
      localQuantity: existingItem?.quantity || 0
    }
  },
  watch: {
    'item.id': {
      handler() {
        const cart = useCart()
        const existingItem = cart.cartItems.value.find(i => i.id === this.item.id)
        this.localQuantity = existingItem?.quantity || 0
      },
      immediate: true
    }
  },
  mounted() {
    this.cartInterval = setInterval(() => {
      const cart = useCart()
      const existingItem = cart.cartItems.value.find(i => i.id === this.item.id)
      if (existingItem?.quantity !== this.localQuantity) {
        this.localQuantity = existingItem?.quantity || 0
      }
    }, 100)
  },
  beforeUnmount() {
    clearInterval(this.cartInterval)
  },
  methods: {
    addToCart() {
      const cart = useCart()
      this.localQuantity = 1
      const updatedItem = { ...this.item, quantity: 1 }
      cart.addToCart(updatedItem)
      this.$emit('add-to-cart', updatedItem)
    },
    increaseQuantity() {
      const cart = useCart()
      this.localQuantity++
      const updatedItem = { ...this.item, quantity: this.localQuantity }
      cart.updateQuantity(updatedItem)
      this.$emit('update-cart', updatedItem)
    },
    decreaseQuantity() {
      const cart = useCart()
      if (this.localQuantity > 1) {
        this.localQuantity--
        const updatedItem = { ...this.item, quantity: this.localQuantity }
        cart.updateQuantity(updatedItem)
        this.$emit('update-cart', updatedItem)
      } else {
        this.localQuantity = 0
        const updatedItem = { ...this.item, quantity: 0 }
        cart.removeFromCart(updatedItem)
        this.$emit('remove-from-cart', updatedItem)
      }
    }
  }
}
</script>

<style scoped>
.add-to-cart-wrapper {
  display: flex;
  align-items: center;
  min-height: 38px;
}

.cart-btn {
  height: 38px;
  padding: 0 80px;
  border: none;
  border-radius: 6px;
  background: #3CC6F1;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.cart-btn.btn-hover {
  background: #2F323A;
}

.cart-btn:active {
  transform: scale(0.97);
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 60px;
  height: 38px;
  border: 1px solid #D1D1D3;
  border-radius: 6px;
  background: #ffffff;
  overflow: hidden;
}

.qty-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 100%;
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  padding: 0;
}

.qty-btn:hover {
  background: #16AFF0;
  color: white;
}

.qty-btn:active {
  background: #2F323A;
  transform: scale(0.96);
  border-radius: 5px;
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
@media (max-width: 375px) {
  .cart-btn {
    padding: 10px 60px;
    font-size: 15px;
    min-width: 70px;
  }

  .add-to-cart-wrapper {
    min-height: 30px;
  }

  .quantity-controls {
    height: 30px;
    min-width: 70px;
    gap: 3px;
  }

  .qty-btn {
    width: 44px;
    min-width: 24px;
  }

  .qty-btn svg {
    width: 10px;
    height: 10px;
  }

  .qty-number {
    min-width: 20px;
    font-size: 12px;
  }
}

</style>