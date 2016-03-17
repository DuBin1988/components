import Vue from 'vue'
import VueAsyncData from 'vue-async-data'

import partial from '../src/mixins/partial'

export default function () {
  Vue.use(VueAsyncData)
  Vue.mixin(partial)
}
