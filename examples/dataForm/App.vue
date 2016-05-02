<template>
  <div id='app'>
    <table>
      <tr>
        <td>
          <paged-list-with-criteria :model="list">
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
          </paged-list-with-criteria>
        </td>
        <td>
          <data-form :model='form'>
            <div partial>
              <div>
              用户名:
              <input type="text" v-model="model.name">
              </div>
              <div>
                <button @click="post('/rs/entity/t_project')" >保存</button>
              </div>
            </div>
          </data-form>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DataForm from '../../src/components/DataForm'
import Criteria from '../../src/components/Criteria'
import DataGrid from '../../src/components/DataGrid'
import PagedListWithCriteria from '../../src/components/PagedListWithCriteria'
import PagedList from '../../src/models/PagedList'

export default {
  data () {
    return {
      list: new PagedList('/rs/sql/project.sql', 20),
      form: {
        name: ''
      }
    }
  },
  components: { DataForm, Criteria, DataGrid, PagedListWithCriteria }
}
</script>
