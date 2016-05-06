import Vue from 'vue'

let messageStore = {}
Vue.set(messageStore, 'show', false)
Vue.set(messageStore, 'msg', '')

function showMessage (msg, success) {
  messageStore.msg = msg
  messageStore.show = true
}

function closeMessage () {
  messageStore.show = false
}

export { messageStore, showMessage, closeMessage }
