<template>
  <div class='flex'>
    <partial name="criteria"></partial>
    <p v-if="model.state === '初始'">请输入查询条件进行查询！</p>
    <p v-if="model.state === '错误'">{{ model.error }}</p>
    <div v-show="model.state === '正确'" class='span'>
      <partial name="list"></partial>
    </div>
    <pager v-show="model.state === '正确'" v-if='pager' :model="model" @page-changed='loadPage' :count='model.count' :page-size.sync='model.pageSize'>
    </pager>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'

export default {
  props: {
    model: Object,
    pager: {
      type: Boolean,
      default: true
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
  components: { Pager }
}
</script>
