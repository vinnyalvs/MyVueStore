import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { createRouter, createWebHistory } from 'vue-router';



createApp(App)
.use(createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/cart',
        component: () => import('./pages/Cart.vue')
    }, {
        path: '/products',
        component: () => import('./pages/Products.vue')
    }, {
        path: '/products/:productId',
        component: () => import('./pages/Product.vue')
    }, {
        path: '/:pathMatch(.*)*',
        component: () => import('./pages/NotFound.vue')
    
    }]
}))
.mount('#app')
