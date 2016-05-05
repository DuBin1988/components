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
import store from '../../src/vuex/store'

export default {
  store,
  components: { HttpBusy, MessageBox }
}
</script>
