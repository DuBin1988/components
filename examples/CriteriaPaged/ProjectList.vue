<template>
  <div>
    <criteria-paged :model="model">
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
      <list partial='list' :model="model" select-mode='none'>
        <span partial>{{ row.name }}</span>
      </list>
    </criteria-paged>
  </div>
</template>

<script>
import CriteriaPaged from '../../src/components/CriteriaPaged'
import Criteria from '../../src/components/Criteria'
import List from '../../src/components/List'
import PagedList from '../../src/stores/PagedList'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 2)
    }
  },
  components: { CriteriaPaged, Criteria, List }
}
</script>
