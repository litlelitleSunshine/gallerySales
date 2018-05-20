import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import concat from '@/components/concat'
import register from '@/components/register'
import show from '@/components/show'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/concat',
      name: 'concat',
      component: concat
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
