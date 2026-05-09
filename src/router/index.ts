import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import AdminComponent from '@/components/AdminComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainComponent
    },
    {
      path: '/admin',
      component: AdminComponent
    }
  ],
})

export default router
