// 看系统是否繁忙
export function getIsBusy (state) {
  return state.http.isBusy
}

// 获取系统提示框的信息
export function getMsg (state) {
  return state.messageBox.msg
}

// 获取是否显示提示框
export function getShow (state) {
  return state.messageBox.show
}
