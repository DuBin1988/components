<template>
  <div id='app'>
    <child></child>
    <parent></parent>
    <!--route :comp='{name: "parent"}'></route-->
  </div>
</template>

<script>
import Parent from './Parent'
import Child from './Child'

export default {
  title: 'App',
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
