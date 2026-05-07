import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import AdminComponent from '@/components/AdminComponent.vue'

const isAdminSubdomain = /^admin\./i.test(window.location.hostname)
const rootComponent = isAdminSubdomain ? AdminComponent : MainComponent

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: rootComponent
    }
  ],
})

export default router
