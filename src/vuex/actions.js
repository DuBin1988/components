import Vue from 'vue'

// 请求返回后的处理过程
function proc (dispatch, state) {
  dispatch('DEC_COUNT')

  // 从等待发送队列中获取一个未发送的请求，进行发送
  let send = state.http.https.pop()
  if (send) {
    http(dispatch, state, send.method, send.url, send.body, send.success, send.fail)
  }

  // 如果没有东西进行发送，设置busy状态为假
  if (state.http.count === 0) {
    dispatch('SET_BUSY', false)
  }
}

// 处理http请求
function http (dispatch, state, method, url, body, success, fail) {
  if (state.http.isBusy === false) {
    dispatch('SET_BUSY', true)
  }

  // 如果未超过发送限制，直接发送请求
  if (state.http.count < 5) {
    dispatch('INC_COUNT')
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
      proc(dispatch, state)
      // 有success，调用success
      if (success) {
        success(response)
      }
    }, (response) => {
      // 处理结束，从循环队列里找下一个请求执行
      proc(dispatch, state)
      // 有fail，调用fail
      if (fail) {
        fail(response)
      }
    })
  } else {
    // 将发送请求放到待发送队列中
    state.http.https.push({method, url, body, success, fail})
  }
}

// post数据到服务端
export const post = function ({dispatch, state}, url, body, success, fail) {
  http(dispatch, state, 'POST', url, body, success, fail)
}

// 删除服务端的实体
export const httpDelete = function ({dispatch, state}, url, success, fail) {
  http(dispatch, state, 'DELETE', url, {}, success, fail)
}

// 显示提醒对话框
export const showMessage = function ({dispatch, state}, msg, success) {
  dispatch('SHOW_MESSAGE', msg, success)
}

// 关闭对话框
export const closeMessage = function ({dispatch, state}) {
  dispatch('CLOSE_MESSAGE')
}
