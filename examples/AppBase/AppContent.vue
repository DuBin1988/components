<template>
  <div>
    <button @click="post('rs/dd')">发送请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    post (url) {
      this.$post(url, {}).then(
        () => { this.$showMessage('发送请求成功') }
      ).catch(
        (response) => {
          this.$showMessage(`发送请求失败: ${response.status}`)
        }
      )
    }
  }
}
</script>
