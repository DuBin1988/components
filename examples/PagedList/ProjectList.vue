<template>
  <div>
    List
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <list :model="model">
        <span partial>
          {{ row.name }}
          <button v-if='isSelected(row)' @click='model.remove("rs/entity/t_project", row)'>x</button>
        </span>
      </list>
    </template>
  </div>
</template>

<script>
import List from '../../src/components/List'
import PagedList from '../../src/stores/PagedList'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 20)
    }
  },
  methods: {
    search (args) {
      this.model.search('1=1', {})
    }
  },
  components: { List }
}
</script>
