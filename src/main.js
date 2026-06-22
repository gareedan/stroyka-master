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
            component: HomeView
        },
        {
            path: '/',
            component: Brend
        },{
            path: '/',
            component: Contact
        },{
            path: '/',
            component: Delivery
        },{
            path: '/',
            component: Document
        },{
            path: '/',
            component: Refund
        },
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')