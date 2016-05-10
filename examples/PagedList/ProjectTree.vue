<template>
  <div>
    Tree
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <tree :model="model.rows">
        <span partial>
          {{ row.name }}
          <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
        </span>
      </tree>
    </template>
  </div>
</template>

<script>
import Tree from '../../src/components/Tree'
import PagedList from '../../src/models/PagedList'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 20, {
        types: {
          default (row) {
            row.parent = null
            row.children = []
            return row
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
