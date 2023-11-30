import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('../views/login/zhuCe.vue')
  },
  {
    path: '/dengLu',
    name: 'dengLu',
    component: () => import('../views/login/dengLu.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
