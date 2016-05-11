<template>
  <busy :is-busy='http.isBusy'>
    <slot slot='normal'></slot>
    <p slot='busy'>正在等待服务器返回结果，请耐心等候！</p>
  </busy>
</template>

<script>
import Busy from './Busy'
import HttpStore from '../plugins/HttpStore'

export default {
  data () {
    return {
      http: HttpStore
    }
  },
  components: { Busy }
}
</script>
