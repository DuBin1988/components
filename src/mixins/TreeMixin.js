import Vue from 'vue'
import TreeList from '../stores/TreeList'
import co from 'co'

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
  // 展开，添加子, 否则，移走
  if (data.open) {
    let index = model.indexOf(data)
    for (let child of data.children) {
      open(model, child, index)
      index++
    }
  } else {
    for (let child of data.children) {
      // 关闭子及其后代
      close(model, child)
    }
  }
}

// toggle方法的general函数
let toggleGen = function * (row, comp) {
  row.open = !row.open
  // 还没有加载子，调用加载子的过程
  if (row.open && row.children.length === 0) {
    yield comp.loadChild(row)
  }
  // 把数据转换成树节点
  TreeList.toTreeNode(row.children, row, row.level + 1)
  proc(comp.model, row)
}

export default {
  props: ['url', 'model'],
  created () {
    // 如果开始有数据，把数据转换成树节点
    if (this.model && this.model.length > 0) {
      TreeList.toTreeNode(this.model)
    }
  },
  methods: {
    toggle (node) {
      let gen = toggleGen(node, this)
      return co(gen)
    },

    // 看节点是否含子
    isFolder (data) {
      return data.size > 0
    },

    // 加载子节点
    loadChild (node) {
      return new Promise((resolve, reject) => {
        if (node.loaded) {
          return
        }
        // 发送加载数据请求
        this.$post(
          this.url,
          {id: node.id},
          {resolveMsg: null}
        ).then((response) => {
          node.children = response.data
          node.loaded = true
          Vue.set(node, 'state', '成功')
          resolve()
        }).catch(() => {
          node.open = false
          Vue.set(node, 'state', '错误')
        })
      })
    },

    // 删除节点
    remove (url, node) {
      Vue.remove(url, node).then(() => {
        // 从model移除
        this.model.$remove(node)
        // 如果有父，从父中移除
        if (node.parent) {
          node.parent.children.$remove(node)
          // 纠正父节点size
          node.parent.size = node.parent.children.length
        }
        // 删除以后，当前选中项变空
        if (this.select) {
          this.select(null)
        }
      })
    }
  }
}
