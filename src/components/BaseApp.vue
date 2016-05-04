<template>
  <div>
    <http-busy>
      <partial name='default' partial>
      </partial>
    </http-busy>
    <modal :show.sync="$store.state.messageBox.show">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">提醒</h4>
      </div>
      <div slot="modal-body" class="modal-body"> {{ msg }} </div>
    </modal>
  </div>
</template>

<script>
import HttpBusy from './HttpBusy'
import { modal } from 'vue-strap'

import store from '../../src/vuex/store'
import { getMsg, getShow } from '../../src/vuex/getters'

export default {
  vuex: {
    getters: {
      msg: getMsg,
      show: getShow
    }
  },
  store,
  components: { HttpBusy, modal }
}
</script>
