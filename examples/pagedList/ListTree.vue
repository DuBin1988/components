<template>
  <div>
    <criteria v-ref:criteria @condition-changed='search'>
      <span partial>
        <div>
        用户名:
        <input type="text" v-model="model.userName" v-on:keyup.enter="search('param')" id="userName"
        condition="username like '%{}%'" defaultvalue="'13'">
        </div>
        <div v-show="model.hasError">{{ model.error }}</div>
        <div>
          <button v-on:click="search()">查询</button>
        </div>
      </span>
    </criteria>
    <p v-if="model.state === '初始'">请输入查询条件进行查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <template v-if="model.state === '正确'">
      <tree :model="model.rows">
        <span partial>{{ model.data.name }}</span>
      </tree>
      <p>{{ model.rows.length }}</p>
      <pager :model="model" @page-changed='loadPage'>
      </pager>
    </template>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'
import Criteria from '../../src/components/Criteria'
import List from '../../src/components/List'
import Tree from '../../src/components/Tree'
import PagedList from '../../src/models/PagedList'
import TreeNode from '../../src/models/TreeNode'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/project.sql', 20, {
        params: {
          name: 'this.model.userName'
        },
        types: {
          default (row) {
            return new TreeNode(row, '/rs/sql/subproject.sql')
          }
        }
      })
    }
  },
  methods: {
    loadPage (pageNo) {
      this.model.loadPage(pageNo)
    },
    search (args) {
      this.model.search(args.condition, args.model)
    }
  },
  components: { Criteria, List, Tree, Pager }
}
</script>
