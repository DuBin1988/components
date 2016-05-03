import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isBusy: false,
  count: 0,
  https: []
}

const mutations = {
  SET_BUSY (state, v) {
    state.isBusy = v
  },

  INC_COUNT (state) {
    state.count++
  },

  DEC_COUNT (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
