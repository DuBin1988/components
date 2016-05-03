<template>
  <div>
    <busy :is-busy='isBusy'>
      <partial name='default' partial></partial>
    </busy>
  </div>
</template>

<script>
import Busy from './Busy'
import store from '../../src/vuex/HttpStore'
import { getIsBusy } from '../../src/vuex/HttpGetters'

export default {
  vuex: {
    getters: {
      isBusy: getIsBusy
    }
  },
  store,
  components: { Busy }
}
</script>
