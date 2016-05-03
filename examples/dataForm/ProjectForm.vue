<template>
  <data-form :model='form'>
    <div partial>
      <div>
      用户名:
      <input type="text" v-model="model.name">
      </div>
      <div>
        <button @click="post('/rs/entity/t_project')" >保存</button>
        <button @click='$parent.test'>测试父组件</button>
      </div>
    </div>
  </data-form>
</template>

<script>
import DataForm from '../../src/components/DataForm'

export default {
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    test () {
      console.log('父组件')
    }
  },
  components: { DataForm }
}
</script>
