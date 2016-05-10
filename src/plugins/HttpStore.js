import Vue from 'vue'
import co from 'co'

// post执行过程
let postGen = function * (method, url, data, {warnMsg, resolveMsg, rejectMsg}) {
  // 如果需要提醒，显示提醒框
  let msgRet = 'confirm'
  if (warnMsg) {
    msgRet = yield Vue.showMessage(warnMsg, ['confirm', 'cancel'])
  }
  if (msgRet === 'confirm') {
    try {
      let dataRet = yield HttpStore.http(method, url, data)
      if (resolveMsg) {
        // 提交成功后，提醒提交成功
        yield Vue.showMessage(resolveMsg)
      }
      return dataRet
    } catch (error) {
      if (rejectMsg) {
        // 提交失败后，提醒提交失败
        yield Vue.showMessage(`${rejectMsg}错误状态：${error.status}，错误内容：${error.statusText}`)
      }
      throw error
    }
  } else if (msgRet === 'cancel') {
    // 按下取消按钮，返回取消按钮按下状态
    let error = {status: 301, statusText: '用户按下了取消按钮，未提交请求'}
    throw error
  }
}

let HttpStore = {
  // 当前运行的http总数
  count: 0,
  // 等待运行的http队列
  https: [],

  install (Vue, options) {
    // 给Vue增添post方法
    Vue.post = Vue.prototype.$post = function (url, data,
    {
      warnMsg = null,
      resolveMsg = '恭喜！提交成功！',
      rejectMsg = '提交错误！'
    } = {}) {
      let gen = postGen('POST', url, data, {warnMsg, resolveMsg, rejectMsg})
      return co(gen)
    }

    // 给Vue增添delete方法
    Vue.delete = Vue.prototype.$delete = function (url, data,
    {
      warnMsg = '删除数据不可恢复，确认删除吗？',
      resolveMsg = '恭喜！删除成功！',
      rejectMsg = '删除失败：'
    } = {}) {
      let gen = postGen('DELETE', `${url}/${data.id}`, {}, {warnMsg, resolveMsg, rejectMsg})
      return co(gen)
    }
  },

  // 请求返回后的处理过程
  httpEnd () {
    this.count--

    // 从等待发送队列中获取一个未发送的请求，进行发送
    if (this.https.length > 0) {
      let send = this.https.splice(0, 1)[0]
      this.http(send.method, send.url, send.body).then(
        (response) => send.resolve(response)
      ).catch(
        (response) => send.reject(response)
      )
    }

    // 如果没有东西进行发送，设置busy状态为假
    if (this.count === 0) {
      this.isBusy = false
    }
  },

  // 处理http请求
  http (method, url, body) {
    return new Promise((resolve, reject) => {
      if (this.isBusy === false) {
        this.isBusy = true
      }

      // 如果未超过发送限制，直接发送请求
      if (this.count < 5) {
        this.count++
        // 没有body，发送空对象
        if (!body) {
          body = {}
        }

        Vue.http({
          url: url,
          data: JSON.stringify(body),
          method: method
        }).then((response) => {
          // 处理结束，从循环队列里找下一个请求执行
          this.httpEnd()
          resolve(response)
        }).catch((response) => {
          // 处理结束，从循环队列里找下一个请求执行
          this.httpEnd()
          reject(response)
        })
      } else {
        // 将发送请求放到待发送队列中
        console.log(`put: ${JSON.stringify(body)}`)
        this.https.push({method, url, body, resolve, reject})
      }
    })
  }
}

// HttpStore是否正在工作
Vue.set(HttpStore, 'isBusy', false)

export default HttpStore
