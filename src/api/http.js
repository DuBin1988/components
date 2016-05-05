import store from '../vuex/store'
import { showMessage, httpDelete } from '../vuex/actions'

// 删除数据，将提醒是否删除，删除成功或者失败后有提醒，成功后，调用回调函数进行后续处理
export function deleteData (url, data, success) {
  showMessage(store, '删除数据不可恢复，确认删除吗？', () => {
    httpDelete(store, `${url}/${data.id}`,
      (response) => {
        // 删除成功，调用后续处理
        if (success) {
          success()
        }
        showMessage(store, '删除数据成功')
      },
      (response) => {
        showMessage(store, '删除数据失败')
      }
    )
  })
}
