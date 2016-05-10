<template>
  <div>
    Tree
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
      <tree :model="model.rows" url='rs/sql/subproject.sql'>
        <span partial>
          {{ row.name }}
          <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
        </span>
      </tree>
  </div>
</template>

<script>
import Tree from '../../src/components/Tree'
import TreeList from '../../src/stores/TreeList'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/project.sql')
    }
  },
  methods: {
    search () {
      this.model.search('1=1', {})
    }
  },
  components: { Tree }
}
</script>
