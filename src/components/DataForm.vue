<template>
  <div>
    <partial name='default'></partial>
    <modal :show.sync="show">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">提醒</h4>
      </div>
      <div slot="modal-body" class="modal-body"> {{ msg }} </div>
    </modal>
  </div>
</template>

<script>
import { http } from '../../src/vuex/actions'
import { modal } from 'vue-strap'

export default {
  data () {
    return {
      show: false,
      msg: ''
    }
  },
  props: ['model'],
  vuex: {
    actions: {
      http
    }
  },
  methods: {
    post (url) {
      http(this.$store, url, this.model,
        (response) => {
          this.msg = '操作成功'
          this.show = true
        },
        (response) => {
          this.msg = `错误：${response}`
          this.show = true
        }
      )
    },
    showModal () {
      this.show = true
    }
  },
  components: { modal }
}
</script>
