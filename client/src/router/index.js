import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Cart from '../components/cart.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
})