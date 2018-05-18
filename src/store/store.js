import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    displayLoginModal: false
  },
  mutations: {
    switchLoginModal (state) {
      state.displayLoginModal = !state.displayLoginModal
    }
  },
  getters: {
    getLoginModal (state) {
      return state.displayLoginModal
    }
  }
})
export default store
