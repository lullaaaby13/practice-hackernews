import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Home from '../views/Home.vue'
import News from '../views/News.vue'
import List from '../views/List.vue'

Vue.use(Router);

async function beforeEnter (to, from, next) {
  const { name } = to
  store.commit('setTab', name)
  store.commit('clearList')
  await store.dispatch('GET_ITEMS', { type: name, page: 1 })
  next()
}

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
      beforeEnter,
    },
    {
      path: '/newest',
      name: 'newest',
      component: List,
      beforeEnter,
    },
    {
      path: '/ask',
      name: 'ask',
      component: List,
      beforeEnter,
    },
    {
      path: '/show',
      name: 'show',
      component: List,
      beforeEnter,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: List,
      beforeEnter,
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
