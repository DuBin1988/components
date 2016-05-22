<template>
  <div>
    <tabset v-ref:tabs>
      <tab v-for='tab of tabs' :header='tab.route.title'>
        <route :comp='tab.comp' :index='$index'></route>
      </tab>
    </tabset>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 数据格式：{comp: {name, props}, route: {name, title}}
      // - comp: 给路由器传递初始组件的对象
      // - route: 路由器返回回来的，当前路由到的对象
      tabs: []
    }
  },
  props: ['comp'],
  ready () {
    // 把初始组件放到tab中
    this.tabs.push({comp: this.comp, route: {name: this.comp.name, title: ''}})
  },
  events: {
    'route-tab' (name, props) {
      let index = this.tabs.findIndex((v) => v.route.name === name)
      // 如果标签页存在，且不是激活的页签，给该标签页的路由器设置初始组件
      if (index !== -1 && index !== this.$refs.tabs.active) {
        this.$refs.tabs.active = index
        // 通过广播通知路由器，组件变了
        this.$broadcast('route-init', index, name, props)
      } else {
        // 往tab页添加新页签
        this.tabs.push({comp: {name, props}, route: {name, title: ''}})
        this.$refs.tabs.active = this.tabs.length - 1
      }
    },
    // 路由结束处理，保存组件名及标题到激活页签
    'route-end' (name, title) {
      let tab = this.tabs[this.$refs.tabs.active]
      Object.assign(tab.route, {name, title})
    }
  }
}
</script>
