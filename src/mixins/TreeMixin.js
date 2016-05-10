import Vue from 'vue'
import TreeList from '../stores/TreeList'

// 关闭自己及后代
function close (array, data) {
  // 移走自己
  array.$remove(data)
  if (!data.children) {
    return
  }

  // 对子进行递归调用
  for (let child of data.children) {
    close(array, child)
  }
}

// 展开自己及后代
function open (array, data, index) {
  array.splice(index + 1, 0, data)

  // 如果data为未展开或者没有子，直接返回
  if (!data.open || !data.children) {
    return
  }

  // 如果data的为展开，继续处理其子
  index = array.indexOf(data)
  for (let child of data.children) {
    open(array, child, index)
    index++
  }
}

// 依据data状态，对数据进行处理
function proc (model, data) {
  let index = model.indexOf(data)
  for (let child of data.children) {
    // 如果子节点展开状态未知，默认设置为false
    if (child.open === undefined) {
      Vue.set(child, 'open', false)
    }
    // 设置level为父level + 1
    child.level = data.level + 1
    // 展开，添加子, 否则，移走
    if (data.open) {
      open(model, child, index)
      index++
    } else {
      // 关闭子及其后代
      close(model, child)
    }
  }
}

export default {
  props: ['url'],
  methods: {
    toggle (node) {
      node.open = !node.open
      // 还没有加载子，调用加载子的过程
      if (node.open && node.children.length === 0) {
        this.loadChild(node)
      } else {
        proc(this.model, node)
      }
    },

    // 看节点是否含子
    isFolder (data) {
      return data.size > 0
    },

    // 加载子节点
    loadChild (node) {
      if (node.loaded) {
        return
      }

      // 发送加载数据请求
      this.$post(
        this.url,
        {id: node.id},
        {resolveMsg: null}
      ).then((response) => {
        // 把数据转换成树节点
        node.children = Array.from(response.data, (row) => {
          return TreeList.toTreeNode(row, node, node.level + 1)
        })
        // 把加载到的节点数据放到列表里
        proc(this.model, node)
        node.loaded = true
        Vue.set(node, 'state', '成功')
      }).catch(() => {
        node.open = false
        Vue.set(node, 'state', '错误')
      })
    },

    // 删除节点
    remove (url, node) {
      Vue.delete(url, node).then(() => {
        // 从model移除
        this.model.$remove(node)
        // 如果有父，从父中移除
        if (node.parent) {
          node.parent.children.$remove(node)
          // 纠正父节点size
          node.parent.size = node.parent.children.length
        }
      })
    }
  }
}
