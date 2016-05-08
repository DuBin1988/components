<template>
  <div id='app'>
    <http-busy>
      <div slot='normal'>
        <button @click="post('rs/dd')">发送请求</button>
      </div>
    </http-busy>
  </div>
</template>

<script>
import HttpBusy from '../../src/components/HttpBusy'

export default {
  methods: {
    post (url) {
      this.$post(url, {}).then(
        (response) => console.log(`发送成功: ${response.data}`)
      ).catch(
        (response) => console.log(`发送失败: ${response.status}`)
      )
    }
  },
  components: { HttpBusy }
}
</script>
