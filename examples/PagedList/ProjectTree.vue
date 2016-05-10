<template>
  <div>
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <tree :model="model.rows">
        <span partial>
          {{ model.data.name }}
          <button v-if='isSelected(model)' @click='del("rs/entity/t_project", model.data)'>x</button>
        </span>
      </tree>
    </template>
  </div>
</template>

<script>
import Tree from '../../src/components/Tree'
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
  components: { Tree }
}
</script>
