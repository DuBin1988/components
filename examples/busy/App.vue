<template>
  <div id='app' class='auto'>
    <busy :is-busy="isBusy">
      <span slot='normal'>
        {{ normalMsg }} - isBusy = {{ isBusy }}
      </span>
      <span slot='busy'>
        {{ busyMsg }} - isBusy = {{ isBusy }}
      </span>
    </busy>
  </div>
  <button v-if='!isBusy' @click='isBusy = true'>忙</busy>
  <button v-if='isBusy' @click='isBusy = false'>闲</busy>
</template>

<script>
import Busy from '../../src/components/Busy'

export default {
  data () {
    return {
      isBusy: false,
      normalMsg: '测试正常内容',
      busyMsg: '测试繁忙内容'
    }
  },
  components: { Busy }
}
</script>
