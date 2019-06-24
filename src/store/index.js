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
    setList (state, data) {
      state.list = data
    },
  },
  actions: {
    async GET_NEWS () {
      console.log('GET_NEWS')

    },
    async GET_ITEMS ({ commit }, { type, page }) {
      const url = `https://api.hnpwa.com/v0/${type}/${page}.json`
      const { data } = await axios.get(url)
      commit('setList', data)
    }
  },
});
