<template>
  <div id='app'>
    <pager :count="count" :page-size="pageSize" @page-changed='showPage'>
    </pager>
    <input type="text" v-model="count"/>
    <p>pageNo: {{pageNo}}</p>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'

export default {
  data () {
    return {
      count: 100,
      pageSize: 20,
      pageNo: 1
    }
  },
  methods: {
    showPage (pageNo) {
      this.pageNo = pageNo
    }
  },
  components: { Pager }
}
</script>
