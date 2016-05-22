<template>
  <div role="tabpanel" class="tab-pane"
      v-bind:class="{hide:!show}"
      v-show="show"
      :transition="transition"
  >
    <slot></slot>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    }
  },
  data () {
    return {
      index: 0,
      show: false
    }
  },
  watch: {
    'header' (val) {
      // header变化时，通知tabset
      let data = this.$parent.renderData.find((v) => v.comp === this)
      data.header = val
    }
  },
  computed: {
    show () {
      return (this.$parent.active === this.index)
    },
    transition () {
      return this.$parent.effect
    }
  },
  created () {
    this.$parent.renderData.push({
      comp: this,
      header: this.header,
      disabled: this.disabled
    })
  },
  ready () {
    // 找到当前tab的索引
    this.index = this.$parent.$children.findIndex((v) => v.$el === this.$el)
  },
  beforeDestroy () {
    this.$parent.renderData.splice(this.index, 1)
  }
}
</script>

<style scoped>
  .tab-content > .tab-pane {
    display: block;
  }
</style>
