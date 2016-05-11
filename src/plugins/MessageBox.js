import Vue from 'vue'

let MessageBox = {
  install (Vue, options) {
    // 给vue增添对话框显示方法
    Vue.showMessage = Vue.prototype.$showMessage = function (msg, buttons = ['confirm']) {
      return new Promise((resolve) => {
        MessageBox.msg = msg
        // 要显示的按钮解析
        MessageBox.confirmShow = false
        MessageBox.cancelShow = false
        for (let bName of buttons) {
          MessageBox[`${bName}Show`] = true
        }
        setTimeout(() => {
          MessageBox.show = true
        }, 300)
        MessageBox.resolve = resolve
      })
    }

    // 给vue增添对话框关闭方法
    Vue.closeMessage = Vue.prototype.$closeMessage = function () {
      MessageBox.show = false
    }
  }
}

Vue.set(MessageBox, 'show', false)
Vue.set(MessageBox, 'msg', '')
Vue.set(MessageBox, 'confirmShow', false)
Vue.set(MessageBox, 'cancelShow', false)

export default MessageBox
