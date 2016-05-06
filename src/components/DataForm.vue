<template>
  <div>
    <partial name='default'></partial>
  </div>
</template>

<script>
export default {
  props: ['model'],
  methods: {
    post (url) {
      this.$post(url, this.model).then(
        (response) => {
          this.$showMessage('操作成功')
        }
      ).catch(
        (response) => {
          this.$showMessage(`错误：${response.status}`)
        }
      )
    }
  }
}
</script>
