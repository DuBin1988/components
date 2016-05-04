import Vue from 'vue'

// 请求返回后的处理过程
function proc (dispatch, state, response) {
  dispatch('DEC_COUNT')

  // 从等待发送队列中获取一个未发送的请求，进行发送
  let send = state.http.https.pop()
  if (send) {
    http(send.url, send.body)
  }

  // 如果没有东西进行发送，设置busy状态为假
  if (state.http.count === 0) {
    dispatch('SET_BUSY', false)
  }
}

// 发送http请求
export const http = function ({dispatch, state}, url, body, success, fail) {
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

    Vue.http.post(url, JSON.stringify(body)).then((response) => {
      proc(dispatch, state, response)
      // 有success，调用success
      if (success) {
        success(response)
      }
    }).catch((response) => {
      proc(dispatch, state, response)
      // 有fail，调用fail
      if (fail) {
        fail(response)
      }
    })
  } else {
    // 将发送请求放到待发送队列中
    state.http.https.push({url, body})
  }
}

// 显示提醒对话框
export const alter = function(msg) {
}
