<template>
  <div>
    <criteria-paged :model="model" :pager='false'>
      <criteria partial='criteria' @condition-changed='search'>
        <span partial>
          <div>
          用户名:
          <input type="text" v-model="model.name" v-on:keyup.enter="search"
          condition="name like '{}%'" defaultvalue="'13'">
          <button v-on:click="search()">查询</button>
          </div>
        </span>
      </criteria>
      <grid-tree :model="model.rows" url='rs/sql/subproject.sql' partial='list'>
        <template partial='head'>
          <tr>
            <th>姓名</th>
            <th>操作</th>
          </tr>
        </template>
        <template partial='body'>
          <td v-bind:class="{ 'selected': isSelected(row) }">
            <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
          </td>
        </template>
        <span partial>{{row.name}}</span>
      </grid-tree>
    </criteria-paged>
    <p>共{{model.rows.length}}项</p>
  </div>
</template>

<script>
import CriteriaPaged from '../../src/components/CriteriaPaged'
import Criteria from '../../src/components/Criteria'
import GridTree from '../../src/components/GridTree'
import TreeList from '../../src/stores/TreeList'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/project.sql')
    }
  },
  components: { CriteriaPaged, Criteria, GridTree }
}
</script>
