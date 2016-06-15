<template>
  <div id='app' class='auto'>
    <http-busy>
      <div>
        <div>
          <button @click="post('rs/entity/t_project', {name: 'abc'})">发送错误请求</button>
          <button @click="post('rs/dd', {rejectMsg: null})">无错误提醒发送</button>
          <button @click="post('rs/sql/project.sql/n')">发送正确请求</button>
        </div>
        <div>
          <button @click="post('rs/sql/project.sql/n', {warnMsg: '确认发送信息到服务器吗？'})">有确认提醒发送</button>
          <button @click="post('rs/sql/project.sql/n', {resolveMsg: null})">无成功提醒发送</button>
          <button @click="postAll('rs/sql/project.sql/n', {resolveMsg: null, rejectMsg: null})">发送10个请求</button>
        </div>
      </div>
    </http-busy>
    <div v-for='row in rows' track-by="$index">
      {{ row }}
    </div>
    <message-box></message-box>
  </div>
</template>

<script>
import HttpBusy from '../../src/components/HttpBusy'
import MessageBox from '../../src/components/MessageBox'

export default {
  data () {
    return {
      rows: ['请发送请求']
    }
  },
  methods: {
    post (url, options) {
      this.$post(url, {condition: '1=1'}, options).then(
        (response) => {
          this.rows.push(`发送成功: ${JSON.stringify(response.data)}`)
        }
      ).catch(
        (response) => {
          this.rows.push(`发送失败: ${response.status}, ${response.statusText}`)
        }
      )
    },
    postAll (url, options) {
      for (let i = 0; i < 7; i++) {
        let j = i * 2
        this.rows.push(`开始发送第${j}项`)
        this.$post(url, {i: j}, options).then(
          (response) => {
            this.rows.push(`第${j}项发送成功: ${JSON.stringify(response.data)}`)
          }
        ).catch(
          (response) => {
            this.rows.push(`第${j}项发送失败: ${response.status}`)
          }
        )
        let k = i * 2 + 1
        this.rows.push(`开始发送第${k}项`)
        this.$post('rs/dd', {i: k}, options).then(
          (response) => {
            this.rows.push(`第${k}项发送成功: ${JSON.stringify(response.data)}`)
          }
        ).catch(
          (response) => {
            this.rows.push(`第${k}项发送失败: ${response.status}`)
          }
        )
      }
    }
  },
  components: { HttpBusy, MessageBox }
}
</script>
