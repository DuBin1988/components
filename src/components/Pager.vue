<template>
  <span>
    <partial name='pager'></partial>
  </span>
</template>

<script>
export default {
  props: ['model'],

  methods: {
    gotoPage (pageNo) {
      this.model.pageIndex = pageNo
      this.model.store.dispatch('PAGE_CHANGED')
    },

    gotoFirst () {
      this.gotoPage(1)
    },

    gotoLast () {
      this.gotoPage(this.model.totalPage)
    },

    gotoNext () {
      this.model.pageIndex = this.model.pageIndex + 1
      this.gotoPage(this.model.pageIndex)
    },

    gotoPre () {
      this.model.pageIndex = this.model.pageIndex - 1
      this.gotoPage(this.model.pageIndex)
    }
  }
}
</script>
