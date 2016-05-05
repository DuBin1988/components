import { SHOW_MESSAGE, CLOSE_MESSAGE } from '../MutationTypes'

const state = {
  // 是否显示提醒框
  show: false,
  // 提醒框的显示内容
  msg: '',
  // 确认按钮的回调函数
  success: null
}

const mutations = {
  [SHOW_MESSAGE] (state, msg, success) {
    state.msg = msg
    state.show = true
    state.success = success
  },

  [CLOSE_MESSAGE] (state, msg) {
    state.show = false
  }
}

export default {
  state,
  mutations
}
