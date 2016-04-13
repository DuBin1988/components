<template>
  <div id='app'>
    <criteria :model="model">
      <span partial="criteria">
        <div>
        用户名: <input type="text" v-model="model.userName" v-on:keyup.enter="search('param')" id="userName" condition="like '%{}%'" defaultvalue="'13'">
        </div>
        <div>
        地址: <input type="text" v-model="model.address" id="address" condition="= '{}'" defaultvalue="this.model.address.split('').reverse().join('')">
        </div>
        <div>
        密码: <input type="text" v-model="model.password" id="password" condition="> '{}'" defaultvalue="Date.now()">
        </div>
        <div v-show="model.hasError">
        {{model.error}}
        </div>
        <div>
          <button v-on:click="search('param')" >查询</button>
        </div>
      </span>
    </criteria>
    <list :model="listModel">
      <span partial>{{data.ENAME}} - {{data.NAME}} -- {{data.F_PARENTNAME}}</span>
    </list>
    <pager :model="pagerModel">
      <span partial="pager" v-show="model.visible">
        共{{model.totalPage}}页 当前第{{model.pageIndex}}页
        <a href="#" @click="gotoFirst">首页</a>
        <a href="#" @click="gotoPre">上页</a>
        <a href="#" @click="gotoNext">下页</a>
        <a href="#" @click="gotoLast">末页</a>
      </span>
    </pager>
  </div>
</template>

<script>
import Criteria from '../../src/components/Criteria'
import List from '../../src/components/List'
import PagedListWithCriteriaModel from '../../src/models/PagedListWithCriteriaModel'
import Pager from '../../src/components/Pager'

export default {
  data () {
    return new PagedListWithCriteriaModel('/rs/sql/test.sql', 20)
  },
  methods: {
    // 如果要在外部拼定制查询条件，用此函数
    // param (pairs) {
    //   // 回调，提供给后台请求参数
    //   console.log(JSON.stringify(this.$data))
    //   let conditon = {}
    //   pairs.map((pair) => {
    //     let value = this.$data.model[pair.name]
    //     if (value && value.length > 0) {
    //       condition[pair.name] = pair.value.replace('{}', this.$data.model[pair.name])
    //     }
    //   })
    //   return conditon
    // }
  },
  components: { Criteria, List, Pager }
}
</script>
