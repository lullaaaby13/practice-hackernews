import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
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
  },
});
