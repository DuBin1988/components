import { SHOW_MESSAGE } from '../MutationTypes'

const state = {
  // 是否显示提醒框
  show: false,
  // 提醒框的显示内容
  msg: ''
}

const mutations = {
  [SHOW_MESSAGE] (state, msg) {
    state.msg = msg
    state.show = true
  }
}

export default {
  state,
  mutations
}
