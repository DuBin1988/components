<template>
  <div id='app'>
    <busy :is-busy="isBusy">
      <span partial>正常组件</span>
    </busy>
  </div>
  <button @click='isBusy = true'>忙</busy>
  <button @click='isBusy = false'>闲</busy>
</template>

<script>
import Busy from '../../src/components/Busy'

export default {
  data () {
    return {
      isBusy: false
    }
  },
  components: { Busy }
}
</script>
