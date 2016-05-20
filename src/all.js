import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource'
import Partial from './plugins/Partial'
import MessageBoxPlugin from './plugins/MessageBox'
import HttpStore from '../src/plugins/HttpStore'
import State from '../src/plugins/State'
import RoutePlugin from '../src/plugins/Route'

import VueValidator from 'vue-validator'

// 引入所有组件
import AppBase from './components/AppBase'
import Busy from './components/Busy'
import Criteria from './components/Criteria'
import CriteriaPaged from './components/CriteriaPaged'
import DataGrid from './components/DataGrid'
import GridTree from './components/GridTree'
import HttpBusy from './components/HttpBusy'
import List from './components/List'
import MessageBox from './components/MessageBox'
import Pager from './components/Pager'
import Tree from './components/Tree'
import Route from './components/Route'

require('./client.less')

export default function () {
  Vue.config.debug = true
  Vue.use(Vuex)
  Vue.use(VueResource)
  Vue.mixin(Partial)
  Vue.mixin(State)
  Vue.mixin(RoutePlugin)
  Vue.use(MessageBoxPlugin)
  Vue.use(HttpStore)
  Vue.use(VueValidator)

  // 全局注册基础组件
  Vue.component('app-base', AppBase)
  Vue.component('busy', Busy)
  Vue.component('criteria', Criteria)
  Vue.component('criteria-paged', CriteriaPaged)
  Vue.component('data-grid', DataGrid)
  Vue.component('grid-tree', GridTree)
  Vue.component('http-busy', HttpBusy)
  Vue.component('list', List)
  Vue.component('message-box', MessageBox)
  Vue.component('pager', Pager)
  Vue.component('tree', Tree)
  Vue.component('route', Route)
}
