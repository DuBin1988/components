<template>
  <criteria-paged :model="list">
    <criteria partial='criteria' v-ref:criteria @condition-changed='search'>
      <span partial>
        <div>
        地址:
        <input type="text" v-model="model.address" id="userName"
        condition="address like '%{}%'">
        </div>
        <div v-show="model.hasError">{{ model.error }}</div>
        <div>
          <button v-on:click="search()">查询</button>
        </div>
      </span>
    </criteria>
    <data-grid partial='list' :model="model">
      <template partial='head'>
        <tr>
          <th>操作</th>
          <th>名称</th>
        </tr>
      </template>
      <template partial='body'>
        <td><button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button></td>
        <td>{{row.name}}</td>
      </template>
    </data-grid>
  </criteria-paged>
</template>

<script>
import Criteria from '../../src/components/Criteria'
import DataGrid from '../../src/components/DataGrid'
import CriteriaPaged from '../../src/components/CriteriaPaged'
import PagedList from '../../src/models/PagedList'

export default {
  data () {
    return {
      list: new PagedList('/rs/sql/project.sql', 20)
    }
  },
  components: { Criteria, DataGrid, CriteriaPaged }
}
</script>
