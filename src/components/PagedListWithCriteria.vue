<template>
  <div>
    <p v-if="model.state === '查询'">正在查询，请耐心等待！</p>
    <div v-show="model.state !== '查询'">
      <partial name="criteria"></partial>
      <p v-if="model.state === '初始'">请输入查询条件进行查询！</p>
      <p v-if="model.state === '错误'">{{ model.error }}</p>
      <div v-show="model.state === '正确'">
        <partial name="list"></partial>
        <pager :model="model" @page-changed='loadPage' :page-size='model.pageSize'>
        </pager>
      </div>
    </div>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'

export default {
  props: ['model'],
  methods: {
    loadPage (pageNo) {
      this.model.loadPage(pageNo)
    },
    search (args) {
      this.model.search(args.condition, args.model)
    }
  },
  components: { Pager }
}
</script>
