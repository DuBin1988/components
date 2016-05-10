<template>
  <div>
    添加子 父节点id：{{subForm.parentid}}
    <data-form :model='subForm'>
      <div partial>
        <div>
        用户名:
        <input type="text" v-model="model.name">
        </div>
        <div>
          <button @click="post('/rs/entity/t_project')" >保存</button>
        </div>
      </div>
    </data-form>
    添加根
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
  </dv>
</template>

<script>
import DataForm from '../../src/components/DataForm'

export default {
  props: ['parentid'],
  data () {
    return {
      subForm: {
        parentid: null,
        name: ''
      },
      form: {
        name: ''
      }
    }
  },
  watch: {
    'parentid': function (val, oldVal) {
      this.subForm.parentid = val
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
