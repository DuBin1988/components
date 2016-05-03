import Vue from 'vue'
import store from '../vuex/HttpStore'
import { http } from '../vuex/HttpActions'

export default class TreeNode {
  // 把一批普通对象转换成树节点
  static toTreeNode (data, path) {
    return Array.from(data, value => new TreeNode(value, path))
  }

  constructor (data, path, parent) {
    this.loaded = false
    this.data = data
    this.path = path
    this.parent = parent
    this.children = []
    this.size = data.size
  }

  // 添加一个子节点
  addChild (data) {
    this.children.push(new TreeNode(data, this.path))
  }

  // 移走子
  removeChild (data) {
    this.children.remove(data)
  }

  // 删除自己
  delete () {
    Vue.http.delete('/rs/entity/t_project/' + this.data.id).then(
      () => {
        this.parent.reload()
      }
    ).catch(
    )
  }

  // 重新加载所有子节点
  reload () {
    http(store, this.path, {id: this.data.id},
      a => {
        this.children = Array.from(
          a.data, value => new TreeNode(value, this.path, this)
        )
        this.size = this.children.length
      },
      a => {
        Vue.set(this, 'state', '错误')
      }
    )
  }

  // 加载子节点
  loadChild () {
    if (this.loaded) {
      return
    }

    this.reload()
    this.loaded = true
  }
}
