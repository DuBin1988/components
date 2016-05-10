import Vue from 'vue'

// 移走自己及后代
function remove (array, data) {
  // 移走自己
  array.$remove(data)
  if (!data.children) {
    return
  }

  // 对子进行递归调用
  for (let child of data.children) {
    remove(array, child)
  }
}

// 依据data状态，对数据进行处理
function proc (model, data) {
  let index = model.indexOf(data)
  for (let child of data.children) {
    // 设置子数据的初始状态为未打开，level为父level + 1
    Vue.set(child, 'open', false)
    child.level = data.level + 1
    // 展开，添加子, 否则，移走
    if (data.open) {
      model.splice(index + 1, 0, child)
    } else {
      // 移走子及其后代
      remove(model, child)
    }
  }
}

export default {
  props: ['url'],
  created () {
    // 给model中的数据设置open为false, level为0
    for (let data of this.model) {
      Vue.set(data, 'open', false)
      data.level = 0
    }
  },
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
        node.children = Array.from(response.data, (data) => {
          data.parend = node
          data.loaded = false
          data.children = []
          data.level = node.level + 1
          data.open = false
          return data
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
    remove (url, data) {
      data.delete()
    }
  }
}
