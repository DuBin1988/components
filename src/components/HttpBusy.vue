<template>
  <div>
    <busy :is-busy='isBusy'>
      <partial name='default' partial></partial>
    </busy>
  </div>
</template>

<script>
import Busy from './Busy'
import { getIsBusy } from '../../src/vuex/getters'

export default {
  vuex: {
    getters: {
      isBusy: getIsBusy
    }
  },
  components: { Busy }
}
</script>
