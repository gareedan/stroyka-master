import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import Brend from './views/Brend.vue'
import Contact from './views/ContactsView.vue'
import Delivery from './views/DeliveryView.vue'
import Document from './views/DocumentView.vue'
import Refund from './views/RefundView.vue'
import Catalogue from './views/Catalog.vue'
import Filters from './views/Filters.vue'
import Product from './views/Product.vue'
import Cart from './views/CartView.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/Brend',
            component: Brend
        },
        {
            path: '/Сontact',
            component: Contact
        },
        {
            path: '/Delivery',
            component: Delivery
        },
        {
            path: '/Document',
            component: Document
        },
        {
            path: '/Refund',
            component: Refund
        },
        {
            path: '/Catalogue',
            component: Catalogue
        },
        {
            path: '/Filters',
            component: Filters
        },
        {
            path: '/Product/:id',
            component: Product
        },
        {
            path: '/Cart',
            component: Cart
        },
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')