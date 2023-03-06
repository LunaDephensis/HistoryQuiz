import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz/:topicId',
      name: 'quiz',
      component: () => import('../views/Quiz.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/Achievements.vue')
    }
  ]
})

export default router
