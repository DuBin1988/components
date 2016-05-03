<template>
  <div>
    <partial name='default'></partial>
    <modal :show.sync="show">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div slot="modal-body" class="modal-body">...</div>
    </modal>
    <button @click="showModal">显示model</button>
  </div>
</template>

<script>
import { http } from '../../src/vuex/HttpActions'
import { modal } from 'vue-strap'

export default {
  data () {
    return {
      show: false
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
        (response) => { this.show = true },
        (response) => { this.show = true }
      )
    },
    showModal () {
      this.show = true
    }
  },
  components: { modal }
}
</script>
