import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import HomeView from '@/views/system/HomeView.vue'
import FareView from '@/views/system/FareView.vue'
import ContactView from '@/views/system/ContactView.vue'
import RoutesView from '@/views/system/RoutesView.vue'
// import MulticabView from '@/views/system/MulticabView.vue'
// import TricycleView from '@/views/system/TricycleView.vue'
// import ProfileView from '@/views/system/ProfileView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/fare',
      name: 'fare',
      component: FareView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      path: '/routes',
      name: 'routes',
      component: RoutesView,
      meta: { requiresAuth: true, isDefault: true },
    },
    {
      // path: '/multicab',
      // name: 'multicab',
      // component: MulticabView,
      // meta: { requiresAuth: true, isDefault: true },
    },
    {
      // path: '/tricycle',
      // name: 'tricycle',
      // component: TricycleView,
      // meta: { requiresAuth: true, isDefault: true },
    },
    {
      // path: '/profile',
      // name: 'profile',
      // component: ProfileView,
      // meta: { requiresAuth: true, isDefault: true },
    },
  ],
})

export default router
