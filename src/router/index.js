import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name:'form.login',
      component:() => import('../views/form/Login.vue')
    },
    {
      path:'/register',
      name:'form.register',
      component:() => import('../views/form/Register.vue')
    },
    {
      path:'/user',
      name:'create.user',
      component:() => import('../components/User.vue')
    },
    {
      path:'/product',
      name:'create.product',
      component:() => import('../components/Product.vue')
    },

  ]
})

export default router
