<template>
  <div>
    <busy :is-busy='http.isBusy'>
      <partial name='default' partial></partial>
    </busy>
  </div>
</template>

<script>
import Busy from './Busy'
import HttpStore from '../plugins/HttpStore'

export default {
  data () {
    return {
      http: HttpStore
    }
  },
  components: { Busy }
}
</script>
