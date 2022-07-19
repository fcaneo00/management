import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/Login.vue'
import ListPage from '@/views/List.vue'
import ProductPage from '@/views/Product.vue'
import SavedOrders from '@/views/Saved.vue'
import OrderPage from '@/views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/list",
    component: ListPage,
  },
  {
    path: "/saved",
    component: SavedOrders,
  },
  {
    path: "/product/:code",
    component: ProductPage
  },
  {
    path: "/order",
    component: OrderPage
  },
  {
    path: "*",
    redirect: "/login"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
