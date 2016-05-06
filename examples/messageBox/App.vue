<template>
  <div>
    <message-box>
    </message-box>
    <div>
      <button @click='show'>显示带提示</button>
      <button @click='okConfirm'>仅确认按钮提示</button>
      <button @click='cancelConfirm'>仅取消按钮提示</button>
      <button @click='noConfirm'>显示不提示</button>
    </div>
    <div>
      <button @click='showConfirm'>只有确认按钮</button>
      <button @click='showCancel'>只有取消按钮</button>
      <button @click='showAll'>两个按钮都有</button>
    </div>
  </div>
</template>

<script>
import MessageBox from '../../src/components/MessageBox'

export default {
  methods: {
    show () {
      this.$showMessage('按按钮会在控制台提示').confirm(
        () => console.log('按下了确认按钮')
      ).cancel(
        () => console.log('按下了取消按钮')
      )
    },
    okConfirm () {
      this.$showMessage('确认按钮提示').confirm(
        () => console.log('按下了确认按钮')
      )
    },
    cancelConfirm () {
      this.$showMessage('确认按钮提示').cancel(
        () => console.log('按下了取消按钮')
      )
    },
    noConfirm () {
      this.$showMessage('按按钮不会有提示')
    },
    showConfirm () {
      this.$showMessage('按按钮不会有提示', ['confirm'])
    },
    showCancel () {
      this.$showMessage('按按钮不会有提示', ['cancel'])
    },
    showAll () {
      this.$showMessage('按按钮不会有提示', ['cancel', 'confirm'])
    }
  },
  components: { MessageBox }
}
</script>
