import { ref, computed, watch } from 'vue'

const CART_KEY = 'stroyka_cart'

// Загрузка корзины из localStorage
const loadCart = () => {
    try {
        const data = localStorage.getItem(CART_KEY)
        return data ? JSON.parse(data) : []
    } catch {
        return []
    }
}

// Сохранение корзины в localStorage
const saveCart = (items) => {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch (e) {
        console.error('Ошибка сохранения корзины:', e)
    }
}

// Реактивное состояние корзины
const cartItems = ref(loadCart())

// Автоматическое сохранение при изменении
watch(cartItems, (newItems) => {
    saveCart(newItems)
}, { deep: true })

export const useCart = () => {
    // Добавить товар
    const addToCart = (item) => {
        const existing = cartItems.value.find(i => i.id === item.id)
        if (existing) {
            existing.quantity += item.quantity || 1
        } else {
            cartItems.value.push({
                ...item,
                quantity: item.quantity || 1,
                addedAt: Date.now()
            })
        }
    }

    // Обновить количество
    const updateQuantity = (item) => {
        const existing = cartItems.value.find(i => i.id === item.id)
        if (existing) {
            existing.quantity = item.quantity
            if (existing.quantity <= 0) {
                removeFromCart(item)
            }
        }
    }

    // Удалить товар
    const removeFromCart = (item) => {
        const index = cartItems.value.findIndex(i => i.id === item.id)
        if (index > -1) {
            cartItems.value.splice(index, 1)
        }
    }

    // Очистить корзину
    const clearCart = () => {
        cartItems.value = []
    }

    // Общее количество
    const totalItems = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    // Общая сумма
    const totalPrice = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    })

    // Получить поставщика (если все товары от одного)
    const supplier = computed(() => {
        if (cartItems.value.length === 0) return null
        const firstSupplier = cartItems.value[0]?.supplier
        const allSame = cartItems.value.every(item => item.supplier === firstSupplier)
        return allSame ? firstSupplier : 'Разные поставщики'
    })

    return {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        supplier
    }
}