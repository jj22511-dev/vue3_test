import { createRouter, createWebHashHistory} from 'vue-router'

import Products from '../components/Products.vue'
import Cart from '../components/Cart.vue'
import About from '../components/About.vue'
import ItemDetails from '../components/ItemDetails.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: About },
        { path: '/products', component: Products },
        { path: '/cart', component: Cart },
        { path: '/product/:productID', component: ItemDetails }
    ]
})