<template>
  <div>
    <component v-for='card in cards' :is='card.name' v-show='top() === card'></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: []
    }
  },
  props: {
    comp: {
      type: Object,
      default: null
    },
    index: Number
  },
  ready () {
    // 把初始参数指定的内容放到路由器里
    if (this.comp) {
      this.cards = [{name: this.comp.name, props: this.comp.props}]
    }
  },
  methods: {
    // 返回最上组件
    top () {
      return this.cards[this.cards.length - 1]
    },
    // 设置自己Title，组件切换进来后调用
    setTitle (title) {
      // 给组件最上层card设置title，以便back时能取到title
      let top = this.top()
      top.title = title
      // 发送路由结束事件
      this.$dispatch('route-end', top.name, top.title)
    }
  },
  events: {
    // 子组件路由事件处理
    'route' (name, props, self) {
      // 在本页签路由，才处理，否则，不处理
      if (self) {
        this.cards.push({name, props})
      } else {
        // 否则，继续抛出事件
        this.$dispatch('route-tab', name, props)
      }
    },
    // 从路由器回退到上一个组件事件处理
    'back' () {
      this.cards.pop()
      // 发送路由结束事件
      let top = this.top()
      this.$dispatch('route-end', top.name, top.title)
    },
    // 处理从上面广播下来的路由事件
    'route-init' (index, name, props) {
      if (this.index === index) {
        this.cards = [{name, props}]
      }
    }
  }
}
</script>
