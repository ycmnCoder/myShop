import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shopView from '../views/shopView.vue'
import detailsView from '../views/detailsView.vue'
import cartView from '../views/cartView.vue'
import AccountView from '@/views/accountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: shopView
    },
        {
          path: '/product/:id',
          name: 'product-details',
          component: detailsView,
          props: true
        },
        {
          path: '/cart',
          name: 'cart',
          component: cartView
        },{
          path: '/account',
          name: 'account',
          component: AccountView
        }
  ],
  scrollBehavior(to, from, savedPosition) {
    پ
    if (savedPosition) {
      return savedPosition
    } else {
      
      return { top: 0 }
    }
    }
})

export default router
