import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
