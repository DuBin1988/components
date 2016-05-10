<template>
  <span>
    第{{pageIndex}}/{{totalPage}}页 共{{count}}行 每页<input size='4' v-model='pageSize' number>行
    <a v-if='pageIndex > 1' href="#" @click="gotoFirst">首页</a>
    <a v-if='pageIndex > 1 ' href="#" @click="gotoPre">上页</a>
    <a v-if='pageIndex < totalPage' href="#" @click="gotoNext">下页</a>
    <a v-if='pageIndex < totalPage' href="#" @click="gotoLast">末页</a>
  </span>
</template>

<script>
export default {
  props: {
    count: 0,
    pageSize: {
      type: Number,
      default: 20
    }
  },

  data () {
    return {
      pageIndex: 1
    }
  },

  computed: {
    totalPage () {
      let total = Math.floor((this.count - 1) / this.pageSize) + 1
      return total
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
