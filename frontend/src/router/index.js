import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useTokenStore } from '../stores/tokenStore';

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
      component: () => import('../views/Quiz.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/Achievements.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const tokenStore = useTokenStore();
  if((to.meta.requiresAuth || to.path === '/') && !tokenStore.hasToken) {
    const success = await tokenStore.refresh();
    if(success || to.path === '/') {
      next();
    }
    else {
      next({name: 'login'});
    }
  }
  else {
    next()
  }
})

export default router
