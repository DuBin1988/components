export default {
  activate (done) {
    // 父为路由组件，组件切换进来时，获取标题，把标题设置到路由组件的标题，同时把参数传递给切换进来的组件
    if (this.$parent && this.$parent.$options.name === 'route') {
      let title = this.$options.title
      if (!title) {
        let err = `组件缺少title：${this.$options.name}`
        throw err
      }
      this.$parent.setTitle(title)

      // 给组件传递参数
      let props = this.$parent.top().props
      Object.assign(this, props)
    }
    done()
  },
  methods: {
    $goto (name, props = {}, self = true) {
      this.$dispatch('route', name, props, self)
    },
    $back () {
      this.$dispatch('back')
    }
  }
}
