import $ from 'jquery'

export default {
  beforeCompile () {
    // 从父传递给自己的内容中，获取partial内容
    let partials = {}
    $('> [partial]', this.$options._content).each((i, el) => {
      let name = el.getAttribute('partial')
      // 未给出具体partial名，用default
      if (!name) {
        name = 'default'
      }
      partials[name] = el
    })

    // 获取自己的partial内容，当做默认值。partial处理顺序为：
    // 1. 从父传递过来的内容中取
    // 2. 从父的partial中继承
    // 3. 取自己的默认值
    $('partial', this.$options.template).each((i, el) => {
      let name = el.getAttribute('name')
      if (partials[name]) {
        this.$options.partials[name] = partials[name]
      } else if (this.$parent && this.$parent.$options.partials && this.$parent.$options.partials[name]) {
        this.$options.partials[name] = this.$parent.$options.partials[name]
      } else {
        this.$options.partials[name] = el.innerHTML
      }
    })
  },
  created () {
    // 从父组件中继承所有子组件
    if (this.$parent) {
      for (let name in this.$parent.$options.components) {
        this.$options.components[name] = this.$parent.$options.components[name]
      }
      // Object.assign(this.$options.components, this.$parent.$options.components)
    }
  }
}
