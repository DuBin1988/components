import Vue from 'vue'
import all from '../../src/all'
import App from './App'

// 调用全局配置
all()
require('../../bootstrap/less/bootstrap.less')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
