<template>
  <div>
    <http-busy>
      <partial name='default' partial>
      </partial>
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
