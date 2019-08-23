import Vue from 'vue'
import Vuex from 'vuex'
import { searchData, newText } from './search/state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchData
  },
  mutations: {
    newText
  },
  actions: {

  }
})
