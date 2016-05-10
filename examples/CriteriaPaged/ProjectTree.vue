<template>
  <div>
    <criteria-paged :model="model" :pager='false'>
      <criteria partial='criteria' @condition-changed='search'>
        <span partial>
          <div>
          用户名:
          <input type="text" v-model="model.name" v-on:keyup.enter="search"
          condition="name like '{}%'" defaultvalue="'13'">
          </div>
          <div>
            <button v-on:click="search()">查询</button>
          </div>
        </span>
      </criteria>
      <tree :model="model.rows" url='rs/sql/subproject.sql' partial='list'>
        <span partial>
          {{ row.name }}
          <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
        </span>
      </tree>
    </criteria-paged>
    <p>共{{model.rows.length}}项</p>
  </div>
</template>

<script>
import CriteriaPaged from '../../src/components/CriteriaPaged'
import Criteria from '../../src/components/Criteria'
import Tree from '../../src/components/Tree'
import TreeList from '../../src/stores/TreeList'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/project.sql')
    }
  },
  components: { CriteriaPaged, Criteria, Tree }
}
</script>
