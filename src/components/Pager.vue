<template>
  <span>
    共{{totalPage}}页 当前第{{pageIndex}}页
    <a href="#" @click="gotoFirst">首页</a>
    <a href="#" @click="gotoPre">上页</a>
    <a href="#" @click="gotoNext">下页</a>
    <a href="#" @click="gotoLast">末页</a>
  </span>
</template>

<script>
export default {
  data () {
    return {
      pageIndex: 1
    }
  },

  computed: {
    // 总页数，根据model中的count计算获得
    totalPage () {
      return Math.floor((this.model.count - 1) / this.pageSize) + 1
    }
  },

  props: {
    model: Object,
    pageSize: {
      type: Number,
      default: 20
    }
  },

  methods: {
    gotoPage (pageNo) {
      // 页号没变，直接返回
      if (pageNo === this.pageIndex) {
        return
      }

      // 超出范围，回到头尾
      if (pageNo < 1) {
        this.pageIndex = 1
      } else if (pageNo > this.totalPage) {
        this.pageIndex = this.totalPage
      } else {
        this.pageIndex = pageNo
      }
      this.$dispatch('page-changed', this.pageIndex)
    },

    gotoFirst () {
      this.gotoPage(1)
    },

    gotoLast () {
      this.gotoPage(this.totalPage)
    },

    gotoNext () {
      this.gotoPage(this.pageIndex + 1)
    },

    gotoPre () {
      this.gotoPage(this.pageIndex - 1)
    }
  }
}
</script>
