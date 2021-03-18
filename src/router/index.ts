import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Home3 from '../views/Home3.vue'
import Home4 from '../views/Home4.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/home3',
    name: 'Home3',
    component: Home3
  },
  {
    path: '/home4',
    name: 'Home4',
    component: Home4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
