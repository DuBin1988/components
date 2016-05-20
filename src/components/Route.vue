<template>
  <div class='full'>
    <component v-for='card of cards' :is='card.comp' v-show='isTop(card)'></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: []
    }
  },
  methods: {
    // 看卡片card是否在顶部，只显示顶部card
    isTop (card) {
      return this.cards[this.cards.length - 1] === card
    },
    // 往路由器中添加一个组件
    route (name, comp, props) {
      this.cards.push({name, comp, props})
    }
  },
  events: {
    // 子组件路由事件处理
    'route' (name, comp, props) {
      console.log('route', name, comp, props)
      this.cards.push({name, comp, props})
    },
    // 从路由器回退到上一个组件事件处理
    'back' () {
      this.cards.pop()
    }
  }
}
</script>
