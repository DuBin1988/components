<template>
  <div>
    <div v-show='msg.show'>
      <modal :show.sync="true">
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
  </div>
</template>

<script>
import { modal } from 'vue-strap'
import MessageBox from '../plugins/MessageBox'

export default {
  data () {
    return {
      show: true,
      msg: MessageBox
    }
  },
  methods: {
    confirm () {
      this.$closeMessage()
      MessageBox.resolve('confirm')
    },
    close () {
      this.$closeMessage()
      MessageBox.resolve('cancel')
    }
  },
  components: { modal }
}
</script>
