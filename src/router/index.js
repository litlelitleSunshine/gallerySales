import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import concat from '@/components/concat'
import register from '@/components/register'
import show from '@/components/show'
import order from '@/components/order'
import personal from '@/components/personal'
import orderDetail from '@/components/orderDetail'
import chineseSource from '@/components/chineseSource'
import ancientPoetry from '@/components/ancientPoetry'
import story from '@/components/story'

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
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/chineseSource',
      name: 'chineseSource',
      component: chineseSource
    },
    {
      path: '/ancientPoetry',
      name: 'ancientPoetry',
      component: ancientPoetry
    },
    {
      path: '/story',
      name: 'story',
      component: story
    }
  ]
})
