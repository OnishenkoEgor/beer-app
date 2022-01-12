import { createRouter, createWebHistory } from 'vue-router'
import BeerPage from '../views/BeerPage.vue'

const routes = [
  {
    path: '/',
    name: 'BeerPage',
    component: BeerPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
