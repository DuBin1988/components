<template>
  <div id='app'>
    <list :model="model">
      <div partial>
        <span partial>{{row.name}} - {{row.age}}</span>
      </div>
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
      model: {
        rows: fill()
      }
    }
  },
  components: { List }
}
</script>
