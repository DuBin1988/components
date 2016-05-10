<template>
  <div>
    添加子 父节点id：{{subForm.parentid}}
    <validator name='vSub'>
      <form novalidate>
        <div>
          用户名:
          <input type="text" v-model="subForm.name" v-validate:name='{ required: true }'>
          <span v-if="$vSub.name.required">不能为空</span>
        </div>
        <div>
          <button v-if='$vSub.valid' @click="$post('/rs/entity/t_project', subForm)">保存</button>
        </div>
      </form>
    </validator>
    添加根
    <validator name='v'>
      <form novalidate>
        <div>
          用户名:
          <input type="text" v-model="form.name" v-validate:name='{ required: true }'>
          <span v-if="$v.name.required">不能为空</span>
        </div>
        <div>
          <button v-if='$v.valid' @click="$post('/rs/entity/t_project', form)" >保存</button>
        </div>
    </form>
  </validator>
  </dv>
</template>

<script>
export default {
  props: ['parent'],
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
    'parent': function (val, oldVal) {
      let parentid = val ? val.id : null
      this.subForm.parentid = parentid
    }
  }
}
</script>
