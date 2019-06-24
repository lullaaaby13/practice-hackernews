import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    tab: 'news',
    page: 1,
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
    }
  },
  actions: {
    async GET_ITEMS ({ commit }, { type, page }) {
      const url = `https://api.hnpwa.com/v0/${type}/${page}.json`
      const { data } = await axios.get(url)
      commit('pushList', data)
    }
  },
});
