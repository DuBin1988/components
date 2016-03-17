<template>
  <div id='app'>
    <list :model="model">
      <span partial>{{data.name}} - {{data.age}}</span>
    </list>
  </div>
</template>

<script>
import List from '../../src/components/List'

function fill () {
  let result = []
  for (let i = 0; i < 10000; i++) {
    result.push({ name: '测试', age: 10 })
  }
  return result
}

export default {
  data () {
    return {
      model: fill()
    }
  },
  components: { List }
}
</script>
