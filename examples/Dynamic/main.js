import Vue from 'vue'
import all from '../../src/all'
import App from './App'

// 调用全局配置
all()
require('../../bootstrap/less/bootstrap.less')

// 异步注册应用组件
Vue.component('tab1', (resolve) => { require(['./Tab1'], resolve) })
Vue.component('tab2', (resolve) => { require(['./Tab2'], resolve) })

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
