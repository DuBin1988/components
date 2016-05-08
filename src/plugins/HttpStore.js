import Vue from 'vue'
import co from 'co'

// delete执行过程
let deleteGen = function * (url, data, {warn = '删除数据不可恢复，确认删除吗？', ok = '恭喜！删除成功！'} = {}) {
  // 如果需要提醒，显示提醒框
  let ret = 'confirm'
  if (warn) {
    ret = yield Vue.showMessage(warn, ['confirm', 'cancel'])
  }
  if (ret === 'confirm') {
    yield HttpStore.deletePromise(url, data)
    if (ok) {
      // 删除成功后，提醒删除成功
      yield Vue.showMessage(ok)
    }
  }
}

let HttpStore = {
  // 当前运行的http总数
  count: 0,
  // 等待运行的http队列
  https: [],

  install (Vue, options) {
    // 给Vue增添post方法
    Vue.post = Vue.prototype.$post = function (url, data) {
      return new Promise((resolve, reject) => {
        HttpStore.http('POST', url, data, resolve, reject)
      })
    }

    // 给Vue增添delete方法
    // confirm: 删除前后是否提醒，true - 提醒（默认），false - 不提醒
    Vue.delete = Vue.prototype.$delete = function (url, data, confirm = true) {
      let gen = deleteGen(url, data, confirm)
      return co(gen)
    }
  },

  // 把删除Promise提取出来公用
  deletePromise (url, data) {
    return new Promise((resolve, reject) => {
      HttpStore.http('DELETE', `${url}/${data.id}`, {},
        (response) => {
          // 执行后续操作后，提示操作成功
          resolve(response)
        },
        (error) => {
          // 执行后续操作后，提示操作失败
          reject(error)
        }
      )
    })
  },

  // 请求返回后的处理过程
  httpEnd () {
    this.count--

    // 从等待发送队列中获取一个未发送的请求，进行发送
    if (this.https.length > 0) {
      let send = this.https.splice(0, 1)[1]
      this.http(send.method, send.url, send.body, send.success, send.fail)
    }

    // 如果没有东西进行发送，设置busy状态为假
    if (this.count === 0) {
      this.isBusy = false
    }
  },

  // 处理http请求
  http (method, url, body, success, fail) {
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
        // 有success，调用success
        if (success) {
          success(response)
        }
      }).catch((response) => {
        // 处理结束，从循环队列里找下一个请求执行
        this.httpEnd()
        // 有fail，调用fail
        if (fail) {
          fail(response)
        }
      })
    } else {
      // 将发送请求放到待发送队列中
      this.https.push({method, url, body, success, fail})
    }
  }
}

// HttpStore是否正在工作
Vue.set(HttpStore, 'isBusy', false)

export default HttpStore
