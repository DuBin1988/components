<template>
  <div>
    <partial name='default'></partial>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: ['model'],
  methods: {
    post (url) {
      Vue.http.post(url, JSON.stringify(this.model)).then((response) => {
        this.state = '正确'
      }).catch(() => {
        this.state = '错误'
        this.error = '保存数据出错，请重试'
        console.log('保存数据出错，请重试')
      })
    }
  }
}
</script>
