import { httpDelete, showMessage } from '../vuex/actions'
import store from '../vuex/store'

export default {
  methods: {
    del (url, data, success) {
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
  }
}
