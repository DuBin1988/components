<template>
  <div>
    <message-box>
    </message-box>
    <button @click='show'>显示</button>
  </div>
</template>

<script>
import MessageBox from '../../src/components/MessageBox'

export default {
  methods: {
    show () {
      this.$showMessage('测试对话框显示').then(
        () => console.log('按下了确认按钮'),
        () => console.log('按下了取消按钮')
      )
    }
  },
  components: { MessageBox }
}
</script>
