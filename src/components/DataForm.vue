<template>
  <div>
    <partial name='default'></partial>
  </div>
</template>

<script>
import { post } from '../../src/vuex/actions'

export default {
  props: ['model'],
  vuex: {
    actions: {
      post
    }
  },
  methods: {
    save (url) {
      post(this.$store, url, this.model,
        (response) => { this.$showMessage(this.$store, '操作成功') },
        (response) => { this.$showMessage(this.$store, `错误：${response}`) }
      )
    }
  }
}
</script>
