<template>
  <div id='app'>
    <input type="text" v-model="model.userName"/>
    {{model.userName}}
    <button @click='set'>set</button>
  </div>
</template>

<script>
import Parent from './Parent'
import Child from './Child'

export default {
  title: 'App',
  ready () {
    this.$set('model.userName', 'ffsadfd')
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    set () {
      this.$set('model.userName', 'fd')
    }
  },
  components: { Parent, Child }
}
</script>
