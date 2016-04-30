<template>
  <table replace='table'>
    <thead a-partial='head'>
    </thead>
    <tbody>
      <tr
        v-for='data in model'
        @click="select(data)"
        a-partial='body'>
        <td>
          <span v-for='n of data.level'>&nbsp;</span>
          <span v-if="isFolder(data)" @click="toggle(data)">
            <span v-if="data.open">-</span>
            <span v-else>+</span>
          </span>
          <partial name='default'></partial>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Vue from 'vue'
import DataGrid from './DataGrid'
import selector from '../mixins/selector'

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

export default {
  props: [ 'model' ],
  created () {
    // 给model中的数据设置open为false, level为0
    for (let data of this.model) {
      Vue.set(data, 'open', false)
      data.level = 0
    }
  },
  methods: {
    test () {
      this.model[1].tname = 'bdfd'
    },
    toggle (data) {
      if (data.size <= 0) {
        return
      }

      data.open = !data.open
      // 还没有加载子，调用model的加载子的过程
      if (data.open && data.children.length === 0) {
        data.loadChild()
      }
      // 如果展开数据，把数据的所有子添加到列表中，否则把子从列表中去掉
      let index = this.model.indexOf(data)
      for (let child of data.children) {
        // 设置子数据的初始状态为未打开，level为父level + 1
        Vue.set(child, 'open', false)
        child.level = data.level + 1
        // 展开，添加这个元素, 否则，移走
        if (data.open) {
          this.model.$set(++index, child)
        } else {
          // 移走元素及其后代
          remove(this.model, child)
        }
      }
    },
    isFolder (data) {
      return data.size > 0
    }
  },
  mixins: [selector],
  components: { DataGrid }
}
</script>
