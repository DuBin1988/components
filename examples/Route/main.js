import Vue from 'vue'
import all from '../../src/all'
import App from './App'

// 调用全局配置
all()

// 异步注册应用组件
Vue.component('foo', (resolve) => { require(['./Foo'], resolve) })
Vue.component('bar', (resolve) => { require(['./Bar'], resolve) })

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
