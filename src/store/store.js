import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    displayLoginModal: true,
    count: 1
  },
  mutations: {
    switchLoginModal (state) {
      state.displayLoginModal = true
    },
    closeLoginModal (state) {
      state.displayLoginModal = false
    }
  }
})
export default store
