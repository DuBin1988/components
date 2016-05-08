<template>
  <div id='app'>
    <parent :model="model">
      <span partial="b">{{model.name}}</span>
    </parent>
  </div>
</template>

<script>
import Parent from './Parent'

export default {
  data () {
    return {
      model: [
        {name: '片段测试'}
      ]
    }
  },
  components: { Parent }
}
</script>
