<template>
  <div>
    Grid
    <button v-on:click="search()">查询</button>
    <p v-if="model.state === '初始'">点查询按钮，开始查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <data-grid :model="model">
        <template partial='head'>
          <tr>
            <th>操作</th>
            <th>姓名</th>
          </tr>
        </template>
        <template partial='body'>
          <td v-bind:class="{ 'selected': isSelected(row) }">
            <button v-if='isSelected(row)' @click='model.remove("rs/entity/t_project", row)'>x</button>
          </td>
          <td v-bind:class="{ 'selected': isSelected(row) }">{{row.name}}</td>
        </template>
      </data-grid>
    </template>
  </div>
</template>

<script>
import DataGrid from '../../src/components/DataGrid'
import PagedList from '../../src/models/PagedList'

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
  components: { DataGrid }
}
</script>
