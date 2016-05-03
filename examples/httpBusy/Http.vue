<template>
  <div>
    {{ msg }} abc
    <button @click="post('rs/dd')">发送请求</button>
  </div>
</template>

<script>
import { http } from '../../src/vuex/HttpActions'

export default {
  data () {
    return {
      msg: 'abc'
    }
  },
  vuex: {
    actions: {
      http
    }
  },
  methods: {
    post (url) {
      http(this.$store, url)
    }
  }
}
</script>
