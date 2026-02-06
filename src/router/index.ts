import { createRouter, createWebHistory } from 'vue-router'
import ShelfView from '../views/ShelfView.vue'
import BookDetailView from '../views/BookDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: ShelfView,
    },
    {
      path: '/book/:id',
      name: 'book-detail',
      component: BookDetailView,
    },
  ],
})

export default router
