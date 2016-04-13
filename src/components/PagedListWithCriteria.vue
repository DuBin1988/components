<template>
  <div id='app'>
    <criteria :model="model">
      <partial name="customCriteria" partial="criteria">
      </partial>
    </criteria>
    <list :model="listModel">
      <partial name="customList" partial="default">
      </partial>
    </list>
    <pager :model="pagerModel">
      <span partial='pager' v-show='model.visible'>
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
import Pager from '../../src/components/Pager'
import Criteria from '../../src/components/Criteria'
import List from '../../src/components/List'
import PagedListWithCriteriaModel from '../../src/models/PagedListWithCriteriaModel'

export default {
  beforeCompile () {
    let pageSize = this.$options.el.attributes.pageSize
    if (pageSize) {
      pageSize = pageSize.nodeValue
    } else {
      pageSize = 20
    }

    this.$data = Object.assign({}, this.$data, new PagedListWithCriteriaModel(this.$options.el.attributes.url.nodeValue,
      pageSize))
  },
  components: { Criteria, List, Pager }
}
</script>
