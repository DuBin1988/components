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
    // 展开，添加这个元素, 否则，移走
    if (data.open) {
      model.splice(index + 1, 0, child)
    } else {
      // 移走元素及其后代
      remove(model, child)
    }
  }
}

export default {
  created () {
    // 给model中的数据设置open为false, level为0
    for (let data of this.model) {
      Vue.set(data, 'open', false)
      data.level = 0
    }
  },
  methods: {
    toggle (data) {
      if (data.size <= 0) {
        return
      }

      data.open = !data.open
      // 还没有加载子，调用model的加载子的过程
      if (data.open && data.children.length === 0) {
        data.loadChild(
          () => {
            proc(this.model, data)
          },
          () => {
            data.open = false
          }
        )
      } else {
        proc(this.model, data)
      }
    },
    isFolder (data) {
      return data.size > 0
    },
    delete (url, data) {
      data.delete()
    }
  }
}
