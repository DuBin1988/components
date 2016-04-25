<template>
  <div id='app'>
    <pager :model="model" :page-size="20" @page-changed='showPage'>
    </pager>
    <input type="text" v-model="model.count"/>
    <p>{{ pageSize }}</p>
  </div>
</template>

<script>
import Pager from '../../src/components/Pager'

export default {
  data () {
    return {
      model: {
        count: 100
      },
      pageSize: 0
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
