<template>
  <table>
    <tr valign="top">
      <td>
        <paged-list-with-criteria :model="model1" url="/rs/sql/test.sql">
          <span partial="customCriteria">
            <div>
            用户名2: <input type="text" v-model="model.userName" v-on:keyup.enter="search('param')" condition=" userName like '%{}%'" defaultvalue="'13'">
            </div>
            <div>
            地址: <input type="text" v-model="model.address" condition=" address like '%{}%'" defaultvalue="this.model.address.split('').reverse().join('')">
            密码: <input type="text" v-model="model.password" condition=" password > '{}'" defaultvalue="Date.now().toString()">
            </div>
            <div v-show="hasError">
            {{error}}
            </div>
            <div>
              <button v-on:click="search('param')" >查询</button>
            </div>
          </span>
          <span partial="customList">
            {{data.ENAME}} -- {{data.NAME}} -- {{data.F_PARENTNAME}}</span>
          </span>
        </paged-list-with-criteria>
      </td>
      <td>
        <paged-list-with-criteria  :model="model2"  url="/rs/sql/test.sql" pageSize="30">
          <span partial="customCriteria">
            <div>
            用户名: <input type="text" v-model="model.userName" v-on:keyup.enter="search('param')" condition="like '%{}%'" defaultvalue="'13'">
            </div>
            <div>
            地址: <input type="text" v-model="model.address" condition="= '{}'" defaultvalue="this.model.address.split('').reverse().join('')">
            密码: <input type="text" v-model="model.password" condition="> '{}'" defaultvalue="Date.now().toString()">
            </div>
            <div v-show="hasError">
            {{error}}
            </div>
            <div>
              <button v-on:click="search('param')" >查询</button>
            </div>
          </span>
          <span partial="customList">
            {{data.ENAME}} -- {{data.NAME}} -- {{data.F_PARENTNAME}}</span>
          </span>
        </paged-list-with-criteria>
      </td>
    </tr>
  </table>
</template>

<script>
import PagedListWithCriteria from '../../src/components/PagedListWithCriteria'

// 第一个分页组件的查询条件
let namedConditions1 = [
  {name: 'userName', condition: 'userName like \'%{{this.model.userName}}%\' and address like \'{{this.model.address}}\''},
  {name: 'address', condition: 'userName like \'%{{this.model.userName}}%\' and address like \'{{this.model.address}}\''}
]

// 第二个分页组件的查询条件
let namedConditions2 = [
  {name: 'userName', condition: 'userName like \'%{{this.model.userName}}%\' and address like \'{{this.model.address}}\''},
  {name: 'address', condition: 'userName like \'%{{this.model.userName}}%\' and address like \'{{this.model.address}}\''}
]

export default {
  data () {
    return {
      model1: {exps: namedConditions1},
      model2: {exps: namedConditions2}
    }
  },
  methods: {
    // 如果要在外部拼定制查询条件，用此函数
    // param (pairs) {
    //   // 回调，提供给后台请求参数
    //   let condition = ' 1 = 1'
    //   let that = this
    //   pairs.map((pair) => {
    //     let value = that[pair.name]
    //     if (value && value.length > 0) {
    //       condition += ' and ' + pair.value.replace('{}', value)
    //     }
    //   })
    //   return condition
    // }
  },
  components: { PagedListWithCriteria }
}
</script>
