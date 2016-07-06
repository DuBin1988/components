<template>
  <span>
    <partial name="default"></partial>
  </span>
</template>

<script>
export default {
  beforeCompile () {
    let elements = this.$options.partials['default'].querySelectorAll('[condition]')
    // each callback is not used on elements array here because of function context issues
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i]
      let name = el.getAttribute('v-model').substring('model.'.length)
      let conditon = el.getAttribute('condition')
      // this.conditions放的是查询条件
      this.conditions[name] = conditon

      // 计算默认值
      let defaultValue = el.getAttribute('default-value')
      if (defaultValue) {
        try {
          /*eslint-disable */
          this.$set(`model.${name}`, eval(defaultValue))
          /*eslint-enable */
        } catch (e) {
          console.warn(`Evaluation error, default: ${defaultValue}, error: ${e}`)
        }
      }
    }
  },

  data () {
    return {
      // 保存用户输入的数据
      model: {userName: 'ddd'},
      // 配置的条件内容
      conditions: {},
      // 最终产生的查询条件
      condition: ''
    }
  },

  methods: {
    search () {
      let condition = ' 1=1 '
      // 产生查询条件
      for (let name in this.conditions) {
        let value = this.model[name]
        if (value && (value + '').length > 0) {
          condition += ' and ' + this.conditions[name].replace('{}', this.model[name] + '')
        }
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
