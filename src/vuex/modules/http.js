import { SET_BUSY, INC_COUNT, DEC_COUNT } from '../MutationTypes'

const state = {
  isBusy: false,
  count: 0,
  https: []
}

const mutations = {
  [SET_BUSY] (state, v) {
    state.isBusy = v
  },

  [INC_COUNT] (state) {
    state.count++
  },

  [DEC_COUNT] (state) {
    state.count--
  }
}

export default {
  state,
  mutations
}
