<template>
  <div>
    <tabset>
      <tab v-for='tab of tabs' header='a'>
        <route :comp='tab'></route>
      </tab>
    </tabset>
  </div>
</template>

<script>
import tabset from 'vue-strap/src/Tabset'
import tab from 'vue-strap/src/Tab'

export default {
  data () {
    return {
      tabs: []
    }
  },
  props: ['comp'],
  ready () {
    this.$log('comp')
    // 把初始组件放到tab中
    this.tabs.push(this.comp)
  },
  events: {
    'route' (comp, props) {
      let tab = this.tabs.find((v) => v.comp.$options.title === comp.$options.title)
      // 如果标签页存在，给该标签页的路由器设置初始组件
      if (tab) {
        tab.comp = comp
        tab.props = props
      } else {
        // 往tab页添加新页签
        this.tabs.push({comp, props})
      }
    }
  },
  components: { tabset, tab }
}
</script>
