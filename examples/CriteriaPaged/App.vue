<template>
  <table>
    <tr valign="top">
      <td>
        <criteria-paged :model="model1">
          <criteria partial='criteria' v-ref:criteria @condition-changed='search'>
            <span partial>
              <div>
              用户名:
              <input type="text" v-model="model.userName" v-on:keyup.enter="search" id="userName"
              condition="username like '%{}%'" defaultvalue="'13'">
              </div>
              <div v-show="model.hasError">{{ model.error }}</div>
              <div>
                <button v-on:click="search()">查询</button>
              </div>
            </span>
          </criteria>
          <list partial='list' :model="model.rows" select-mode='none'>
            <template partial>
              <tree :model='data'>
                <span partial>{{ model.data.name }}</span>
              </tree>
            </template>
          </list>
        </criteria-paged>
      </td>
      <td>
        <criteria-paged :model="model2" url="/rs/sql/test.sql" pageSize="30">
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
          <data-grid partial='list' :model="model.rows">
            <template partial='head'>
              <tr>
                <th>名称</th>
              </tr>
            </template>
            <template partial='body'>
              <td >{{data.name}}</td>
            </template>
          </data-grid>
        </criteria-paged>
      </td>
    </tr>
  </table>
</template>

<script>
import CriteriaPaged from '../../src/components/CriteriaPaged'
import Criteria from '../../src/components/Criteria'
import List from '../../src/components/List'
import DataGrid from '../../src/components/DataGrid'
import Tree from '../../src/components/Tree'
import PagedList from '../../src/models/PagedList'
import TreeNode from '../../src/models/TreeNode'

export default {
  data () {
    return {
      model1: new PagedList('/rs/sql/project.sql', 2, {
        params: {
          name: 'this.model.userName'
        },
        types: {
          default (row) {
            return new TreeNode(row, '/rs/sql/subproject.sql')
          }
        }
      }),
      model2: new PagedList('/rs/sql/test.sql', 4)
    }
  },
  components: { CriteriaPaged, Criteria, List, DataGrid, Tree }
}
</script>
