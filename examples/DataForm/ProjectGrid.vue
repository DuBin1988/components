<template>
  <div>
    <criteria-paged :model="model">
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
      <data-grid :model="model" partial='list'>
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
    </criteria-paged>
  </div>
</template>

<script>
import CriteriaPaged from '../../src/components/CriteriaPaged'
import Criteria from '../../src/components/Criteria'
import DataGrid from '../../src/components/DataGrid'
import PagedList from '../../src/stores/PagedList'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 20)
    }
  },
  components: { CriteriaPaged, Criteria, DataGrid }
}
</script>
