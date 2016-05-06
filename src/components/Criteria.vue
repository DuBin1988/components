<template>
  <span>
    <partial name="default"></partial>
  </span>
</template>

<script>
export default {
  beforeCompile () {
    this.model.names = []
    let elements = this.$options.partials['default'].querySelectorAll('[condition]')
    // each callback is not used on elements array here because of function context issues
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i]
      let name = el.getAttribute('v-model').substring('model.'.length)
      let value = el.getAttribute('condition')
      let defaultvalue = el.getAttribute('defaultvalue')
      try {
        /*eslint-disable */
        this.model[name] = eval(defaultvalue)
        /*eslint-enable */
      } catch (e) {
        console.warn(`Evaluation error, default: ${defaultvalue}, error: ${e}`)
      }
      // this.model.names放的是查询条件
      this.model.names.push({'name': name, 'value': value})
    }
  },

  data () {
    return {
      model: {},
      condition: ''
    }
  },

  methods: {
    search (params) {
      let condition
      // 如果查询条件比较复杂，由上层组件自己产生
      let parent = this.$parent
      while (params && parent) {
        if (parent.$options && parent.$options && parent.$options.methods && parent.$options.methods[params]) {
          condition = parent.$options.methods[params].call(this.model, this.model.names)
          break
        } else {
          parent = parent.$parent
        }
      }

      // 产生查询条件
      if (!condition) {
        condition = ' 1=1 '
        this.model.names.forEach((pair) => {
          let value = this.model[pair.name]
          if (value && (value + '').length > 0) {
            condition += ' and ' + pair.value.replace('{}', this.model[pair.name] + '')
          }
        })
      }

      // 通知外部查询条件变化了
      this.condition = condition
      this.$dispatch('condition-changed', {
        condition: this.condition,
        model: this.model
      })
    }
  }
}
</script>
