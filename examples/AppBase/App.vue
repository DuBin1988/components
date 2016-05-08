<template>
  <div id='app'>
    <app-base>
      <button @click="post('rs/dd')">发送错误请求</button>
      <button @click="post('rs/sql/project.sql/n')">发送正确请求</button>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'

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
  },
  components: { AppBase }
}
</script>
