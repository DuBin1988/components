<template>
  <div>
    <component v-for='card of cards' :is='card.name' v-show='isTop(card)'></component>
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
    }
  },
  watch: {
    // 当组件参数发生变化时，把原来路由内容清空，新组件放到路由器里
    'comp' (val, oldVal) {
      this.cards = [val]
    }
  },
  ready () {
    // 把初始参数指定的内容放到路由器里
    this.cards.push(this.comp)
  },
  methods: {
    // 看卡片card是否在顶部，只显示顶部card
    isTop (card) {
      return this.cards[this.cards.length - 1] === card
    },
    // 往路由器中添加一个组件
    route (name, props) {
      this.cards.push({name, props})
    }
  },
  events: {
    // 子组件路由事件处理
    'route' (name, props, self) {
      // 在本页签路由，才处理，否则，不处理
      if (self) {
        // 获取组件的title
        this.cards.push({name, props})
      }
    },
    // 从路由器回退到上一个组件事件处理
    'back' () {
      this.cards.pop()
    }
  }
}
</script>
