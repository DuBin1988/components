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
      this.$showMessage('测试对话框显示')
    }
  },
  components: { MessageBox }
}
</script>
