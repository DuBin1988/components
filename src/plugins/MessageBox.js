import Vue from 'vue'

let MessageBox = {
  install (Vue, options) {
    // 给vue增添对话框显示方法
    Vue.showMessage = Vue.prototype.$showMessage = function (msg, buttons = ['confirm']) {
      return new Promise((resolve) => {
        MessageBox.msg = msg
        // 清空按钮处理函数
        MessageBox.bConfirm = null
        MessageBox.bCancel = null
        // 要显示的按钮解析
        MessageBox.confirmShow = false
        MessageBox.cancelShow = false
        for (let bName of buttons) {
          MessageBox[`${bName}Show`] = true
        }
        MessageBox.show = true
        MessageBox.resolve = resolve
      })
    }

    // 给vue增添对话框关闭方法
    Vue.closeMessage = Vue.prototype.$closeMessage = function () {
      MessageBox.show = false
    }
  },

  // 添加确认按钮处理函数
  confirm (bConfirm) {
    this.bConfirm = bConfirm
    return MessageBox
  },

  // 添加取消按钮的处理函数
  cancel (bCancel) {
    this.bCancel = bCancel
    return MessageBox
  }
}

Vue.set(MessageBox, 'show', false)
Vue.set(MessageBox, 'msg', '')
Vue.set(MessageBox, 'confirmShow', false)
Vue.set(MessageBox, 'cancelShow', false)

export default MessageBox
