import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import DemonicItem from "../components/demo/DemonicItem";
// import DemonicItem from "../components/demo/DemonicItem";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/WordView')
    },
    {
      path: '/home',
      name: 'home2',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView')
    },
    {
      path: '/word',
      name: 'word',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WordView')
    },
    {
      path: '/demo',
      component: DemonicItem
    }
  ]
})

export default router
