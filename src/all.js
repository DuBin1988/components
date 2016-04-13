import Vue from 'vue'
import VueResource from 'vue-resource'
import partial from '../src/mixins/partial'

export default function () {
  Vue.config.debug = true
  Vue.use(VueResource)
  Vue.mixin(partial)
}
