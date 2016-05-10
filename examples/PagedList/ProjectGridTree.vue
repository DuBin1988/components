<template>
  <div>
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <grid-tree :model="model">
        <template partial='head'>
          <tr>
            <th>操作</th>
            <th>姓名</th>
          </tr>
        </template>
        <template partial='body'>
          <td v-bind:class="{ 'selected': isSelected(row) }">
            <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
          </td>
        </template>
        <span partial>{{row.name}}</span>
      </grid-tree>
    </template>
  </div>
</template>

<script>
import GridTree from '../../src/components/GridTree'
import PagedList from '../../src/models/PagedList'
import TreeNode from '../../src/models/TreeNode'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 20, {
        types: {
          default (row) {
            return new TreeNode(row, '/rs/sql/subproject.sql')
          }
        }
      })
    }
  },
  methods: {
    search (args) {
      this.model.search('1=1', {})
    }
  },
  components: { GridTree }
}
</script>
