import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import partial from '../src/mixins/partial'
import MessageBox from '../src/plugins/MessageBox'
import HttpStore from '../src/plugins/HttpStore'

require('bootstrap.css')

export default function () {
  Vue.config.debug = true
  Vue.use(Vuex)
  Vue.use(VueResource)
  Vue.mixin(partial)
  Vue.use(MessageBox)
  Vue.use(HttpStore)
}
