import Vue from 'vue'

export default class TreeNode {
  constructor (data, path, parent) {
    this.loaded = false
    this.data = data
    this.path = path
    this.parent = parent
    this.children = []
    this.size = data.size
  }

  // 重新加载所有子节点
  reload (success, fail) {
    Vue.post(this.path, {id: this.data.id}).then(
      a => {
        this.children = Array.from(
          a.data, value => new TreeNode(value, this.path, this)
        )
        this.size = this.children.length
        this.loaded = true

        Vue.set(this, 'state', '成功')
        // 有成功回调函数
        if (success) {
          success()
        }
      }
    ).caatch(
      a => {
        Vue.showMessage('加载子节点出错')
        Vue.set(this, 'state', '错误')
        if (fail) {
          fail()
        }
      }
    )
  }

  // 加载子节点
  loadChild (success, fail) {
    if (this.loaded) {
      return
    }

    this.reload(success, fail)
  }
}
