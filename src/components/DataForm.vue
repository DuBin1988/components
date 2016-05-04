<template>
  <div>
    <partial name='default'></partial>
  </div>
</template>

<script>
import { http, showMessage } from '../../src/vuex/actions'

export default {
  props: ['model'],
  vuex: {
    actions: {
      http
    }
  },
  methods: {
    post (url) {
      http(this.$store, url, this.model,
        (response) => { showMessage(this.$store, '操作成功') },
        (response) => { showMessage(this.$store, `错误：${response}`) }
      )
    }
  }
}
</script>
