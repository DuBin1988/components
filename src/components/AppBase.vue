<template>
  <div id='app-base'>
    <http-busy>
      <slot></slot>
    </http-busy>
    <message-box></message-box>
  </div>
</template>

<script>
import HttpBusy from './HttpBusy'
import MessageBox from './MessageBox'

export default {
  data () {
  },
  components: { HttpBusy, MessageBox }
}
</script>
