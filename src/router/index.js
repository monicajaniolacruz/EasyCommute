import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import HomeView from '@/views/system/HomeView.vue'
import MulticabView from '@/views/system/MulticabView.vue'
import TricycleView from '@/views/system/TricycleView.vue'
import RoutesView from '@/views/system/RoutesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      path: '/multicab',
      name: 'multicab',
      component: MulticabView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      path: '/tricycle',
      name: 'tricycle',
      component: TricycleView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      path: '/routes',
      name: 'routes',
      component: RoutesView,
      meta: { requiresAuth: true, isDefault: true },
    },
  ],
})

export default router
