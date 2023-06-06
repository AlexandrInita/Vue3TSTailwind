import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import Planner from '../pages/Planner.vue'
import SimplePage from '../pages/SimplePage.vue'
import CanbanPage from '../pages/CanbanPage.vue'
import MindMapPage from '../pages/MindMapPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/planner',
    name: 'Planner',
    component: Planner
  },
  {
    path: '/simplePage',
    name: 'SimplePage',
    component: SimplePage
  },
  {
    path: '/canbanPage',
    name: 'CanbanPage',
    component: CanbanPage
  },
  {
    path: '/mindMapPage',
    name: 'MindMapPage',
    component: MindMapPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
