<template>
  <div id='app'>
    <parent :model="model">
      <child partial :model="data">
        <span partial="a">片段a: {{model.name}}</span>
        <span partial>默认片段：{{model.name}}</span>
      </child>
    </parent>
    <parent :model="model">
    </parent>
    <parent :model="model">
    </parent>
  </div>
</template>

<script>
import Parent from './Parent'
import Child from './Child'

export default {
  data () {
    return {
      model: [
        {name: '片段测试'}
      ]
    }
  },
  components: { Parent, Child }
}
</script>
