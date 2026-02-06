import { createRouter, createWebHistory } from 'vue-router'
import ShelfView from '../views/ShelfView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: ShelfView,
    }
  ],
})

export default router
