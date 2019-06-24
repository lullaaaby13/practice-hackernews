import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Home from '../views/Home.vue'
import News from '../views/News.vue'
import List from '../views/List.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: List,
      async beforeEnter(to, from, next) {
        await store.dispatch('GET_ITEMS', { type: 'news', page: 1 })
        next()
      },
    },
    {
      path: '/newest',
      name: 'newest',
      component: List,
      async beforeEnter(to, from, next) {
        await store.dispatch('GET_ITEMS', { type: 'newest', page: 1 })
        next()
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: List,
      async beforeEnter(to, from, next) {
        await store.dispatch('GET_ITEMS', { type: 'ask', page: 1 })
        next()
      },
    },
    {
      path: '/show',
      name: 'show',
      component: List,
      async beforeEnter(to, from, next) {
        await store.dispatch('GET_ITEMS', { type: 'show', page: 1 })
        next()
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: List,
      async beforeEnter(to, from, next) {
        await store.dispatch('GET_ITEMS', { type: 'jobs', page: 1 })
        next()
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    },

  ],
});
