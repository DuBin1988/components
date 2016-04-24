import $ from 'jquery'

export default {
  beforeCompile () {
    // 从父传递给自己的内容中，获取partial内容
    let partials = {}
    $('[partial]', this.$options._content).each((i, el) => {
      let name = el.getAttribute('partial')
      // 未给出具体partial名，用default
      if (!name) {
        name = 'default'
      }
      // 如果内容本身是partial，获取父传递过来的内容
      if (el.tagName.toLowerCase() === 'partial') {
        let pName = el.getAttribute('name')
        partials[name] = this.$parent.$options.partials[pName]
      } else {
        partials[name] = el
      }
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

    // 找到有a-partial属性的元素，把partail内容放到该元素下面
    $('[a-partial]', this.$el).each((i, el) => {
      let name = el.getAttribute('a-partial')
      if (partials[name]) {
        el.innerHTML = partials[name].innerHTML
      } else if (this.$parent && this.$parent.$options.partials && this.$parent.$options.partials[name]) {
        el.innerHTML = this.$parent.$options.partials[name].innerHTML
      }
    })
  },

  created () {
    // 从父组件中继承所有子组件
    if (this.$parent) {
      for (let name in this.$parent.$options.components) {
        this.$options.components[name] = this.$parent.$options.components[name]
      }
    }
  }
}
