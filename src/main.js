import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import Brend from './views/Brend.vue'
import Contact from './views/ContactsView.vue'
import Delivery from './views/DeliveryView.vue'
import Document from './views/DocumentView.vue'
import Refund from './views/RefundView.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/brands',
            name: 'brands',
            component: Brend
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contact
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: Delivery
        },
        {
            path: '/document',
            name: 'document',
            component: Document
        },
        {
            path: '/refund',
            name: 'refund',
            component: Refund
        },
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')