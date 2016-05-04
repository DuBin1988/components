import Vue from 'vue'
import Vuex from 'vuex'

import http from './modules/http'
import MessageBox from './modules/MessageBox'

Vue.use(Vuex)

export default new Vuex.Store({
  // combine sub modules
  modules: {
    http,
    MessageBox
  }
})
