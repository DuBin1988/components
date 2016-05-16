<template>
  <div>
    <modal :show.sync="msg.show" v-ref:modal>
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">提醒</h4>
      </div>
      <div slot="modal-body" class="modal-body"> {{ msg.msg }} </div>
      <div slot="modal-footer" class="modal-footer">
        <button v-show="msg.cancelShow" type="button" class="btn btn-default" @click='close'>取消</button>
        <button v-show="msg.confirmShow" type="button" class="btn btn-success" @click='confirm'>确认</button>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from 'vue-strap/src/modal'
import MessageBox from '../plugins/MessageBox'

export default {
  data () {
    return {
      msg: MessageBox
    }
  },
  watch: {
    'msg.show' (val, oldVal) {
      console.log(`val: ${val}, oldVal: ${oldVal}`)
    }
  },
  methods: {
    confirm () {
      // this.$closeMessage()
      this.$refs.modal.show = false
      MessageBox.resolve('confirm')
    },
    close () {
      // this.$closeMessage()
      this.$refs.modal.show = false
      MessageBox.resolve('cancel')
    }
  },
  components: { Modal }
}
</script>
