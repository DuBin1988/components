<template>
  <div>
    <!-- Nav tabs -->
     <ul class="nav nav-{{navStyle}}" role="tablist">
            <li
                v-for="r in renderData"
                v-bind:class="{
                  'active': ($index === active),
                  'disabled': r.disabled
                }"
                @click.prevent="handleTabListClick($index, r)"
                :disabled="r.disabled"
            >
                <a href="#">
                    <slot name="header">
                      {{{r.header}}}
                  </slot>
                </a>
            </li>
     </ul>

     <!-- Tab panes -->
     <div class="tab-content" v-el:tab-content>
        <slot></slot>
     </div>
  </div>
</template>

<script>
  export default {
    props: {
      navStyle: {
        type: String,
        default: 'tabs'
      },
      effect: {
        type: String,
        default: 'fadein'
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        // 数据格式：{comp, header，disabled}
        // - comp: 当前页签对应的tab组件
        renderData: []
      }
    },
    methods: {
      handleTabListClick (index, el) {
        if (!el.disabled) this.active = index
      }
    }
  }
</script>

<style scoped>
  .nav-tabs {
    margin-bottom: 15px
  }
</style>
