<template>
  <span>
    <partial name="criteria"></partial>
  </span>
</template>

<script>
export default {
  beforeCompile () {
    this.model.names = []
    let elements = this.$options.partials['criteria'].querySelectorAll('[condition]')
    // each callback is not used on elements array here because of function context issues
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i]
      let name = el.getAttribute('v-model').substring('model.'.length)
      let value = el.getAttribute('condition')
      let defaultvalue = el.getAttribute('defaultvalue')
      console.log(defaultvalue)
      try {
        /*eslint-disable */
        this.model[name] = eval(defaultvalue)
        /*eslint-enable */
      } catch (e) {
        console.log('Evaluation error: ' + defaultvalue)
      }
      this.model.names.push({'name': name, 'value': value})
    }
  },

  props: ['model'],

  methods: {
    search (params) {
      let condition
      // 如果查询条件比较复杂，从外面获得
      let parent = this.$parent
      while (parent) {
        if (parent.$options && parent.$options && parent.$options.methods && parent.$options.methods[params]) {
          condition = parent.$options.methods[params].call(this.model, this.model.names)
          break
        } else {
          parent = parent.$parent
        }
      }

      if (!condition) {
        condition = ' 1=1 '
        this.model.names.map((pair) => {
          let value = this.model[pair.name]
          if (value && value.length > 0) {
            condition += ' and ' + pair.value.replace('{}', this.model[pair.name] + '')
          }
        })
      }

      this.model.http.condition = {condition: ' ' + condition + ' '}
      this.model.store.dispatch('CRITERIA_CHANGED')
    }
  }
}
</script>
