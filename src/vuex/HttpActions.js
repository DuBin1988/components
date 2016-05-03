import Vue from 'vue'

// 请求返回后的处理过程
function proc (dispatch, state, response) {
  dispatch('DEC_COUNT')

  // 从等待发送队列中获取一个未发送的请求，进行发送
  let send = state.https.pop()
  if (send) {
    http(send.url, send.body)
  }

  // 如果没有东西进行发送，设置busy状态为假
  if (state.count === 0) {
    dispatch('SET_BUSY', false)
  }
}

// 发送http请求
export const http = function ({dispatch, state}, url, body, success, fail) {
  if (state.isBusy === false) {
    dispatch('SET_BUSY', true)
  }

  // 如果未超过发送限制，直接发送请求
  if (state.count < 5) {
    dispatch('INC_COUNT')
    Vue.http.post(url, JSON.stringify(body)).then((response) => {
      proc(dispatch, state, response)
      success(response)
    }).catch((response) => {
      proc(dispatch, state, response)
      fail(response)
    })
  } else {
    // 将发送请求放到待发送队列中
    state.https.push({url, body})
  }
}
