<template>
  <div id='app'>
    <pager :count="count" :page-size="pageSize" @page-changed='showPage'>
    </pager>
    <input type="text" v-model="count"/>
    <p>{{ pageSize }}</p>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'

export default {
  data () {
    return {
      count: 100,
      pageSize: 20
    }
  },
  methods: {
    showPage (pageNo) {
      this.pageSize = pageNo
    }
  },
  components: { Pager }
}
</script>
