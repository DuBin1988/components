<template>
  <div class='auto'>
    <message-box>
    </message-box>
    <div>
      <button @click='show'>显示带提示</button>
      <button @click='correctConfirm'>仅确认按钮提示</button>
      <button @click='cancelConfirm'>仅取消按钮提示</button>
      <button @click="$showMessage('按按钮不会有提示')">显示不提示</button>
    </div>
    <div>
      <button @click="$showMessage('按按钮不会有提示', ['confirm'])">只有确认按钮</button>
      <button @click="$showMessage('按按钮不会有提示', ['cancel'])">只有取消按钮</button>
      <button @click="$showMessage('按按钮不会有提示', ['cancel', 'confirm'])">两个按钮都有</button>
    </div>
    <div v-for='row in rows' track-by="$index">
      {{ row }}
    </div>
  </div>
</template>

<script>
import MessageBox from '../../src/components/MessageBox'

export default {
  data () {
    return {
      rows: ['请按按钮']
    }
  },
  methods: {
    show () {
      this.$showMessage('按按钮会在下面提示', ['cancel', 'confirm']).then(
        (response) => {
          if (response === 'confirm') {
            this.rows.push('按下了确认按钮')
          } else if (response === 'cancel') {
            this.rows.push('按下了取消按钮')
          }
        }
      )
    },
    correctConfirm () {
      this.$showMessage('确认按钮提示', ['confirm', 'cancel']).then(
        (response) => {
          if (response === 'confirm') {
            this.rows.push('按下了确认按钮')
          }
        }
      )
    },
    cancelConfirm () {
      this.$showMessage('取消按钮提示', ['confirm', 'cancel']).then(
        (response) => {
          if (response === 'cancel') {
            this.rows.push('按下了取消按钮')
          }
        }
      )
    }
  },
  components: { MessageBox }
}
</script>
