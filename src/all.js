import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import partial from '../src/mixins/partial'

require('bootstrap.css')

export default function () {
  Vue.config.debug = true
  Vue.use(Vuex)
  Vue.use(VueResource)
  Vue.mixin(partial)
}
