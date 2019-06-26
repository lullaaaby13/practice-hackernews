import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    item: {},
    tab: 'news',
    page: 1,
    user: {},
  },
  mutations: {
    clearList (state) {
      state.list = []
    },
    pushList (state, data) {
      data.forEach((item, index) => {
        state.list.push(item)
      })
    },
    addPage (state) {
      state.page++
    },
    setTab (state, data) {
      state.tab = data
    },
    setItem (state, data) {
      state.item = data
    },
    setUser (state, data) {
      state.user = data
    }
  },
  actions: {
    async GET_ITEMS ({ commit }, { type, page }) {
      const url = `https://api.hnpwa.com/v0/${type}/${page}.json`
      const { data } = await axios.get(url)
      commit('pushList', data)
    },
    async GET_ITEM ({ commit }, { id }) {
      const url = `https://api.hnpwa.com/v0/item/${id}.json`
      const { data } = await axios.get(url)
      commit('setItem', data)
    },
    async GET_USER ({ commit }, { id }) {
      const url = `https://api.hnpwa.com/v0/user/${id}.json`
      const { data } = await axios.get(url)
      commit('setUser', data)
    }
  },
});
