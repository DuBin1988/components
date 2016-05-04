<template>
  <div>
    <button @click="post('rs/dd')">发送请求</button>
  </div>
</template>

<script>
import { http, showMessage } from '../../src/vuex/actions'

export default {
  vuex: {
    actions: {
      http,
      showMessage
    }
  },
  methods: {
    post (url) {
      http(this.$store, url, {},
        (response) => { showMessage(this.$store, 'ok') },
        (response) => { showMessage(this.$store, 'error') }
      )
    }
  }
}
</script>
