<template>
  <div id='app-base' class='full'>
    <http-busy>
      <slot></slot>
    </http-busy>
    <message-box></message-box>
  </div>
</template>

<script>
import HttpBusy from './HttpBusy'
import MessageBox from './MessageBox'
import $ from 'jquery'

export default {
  data () {
  },
  ready () {
    setInterval(() => {
      for (let e of $('.span', this.$el)) {
        // 高度发生变化了，纠正高度样式，以便后面继承
        if (!e.oldHeight || e.oldHeight !== e.offsetHeight) {
          e.oldHeight = e.offsetHeight
          e.style.height = e.offsetHeight + 'px'
        }
      }
    }, 200)
  },
  components: { HttpBusy, MessageBox }
}
</script>
