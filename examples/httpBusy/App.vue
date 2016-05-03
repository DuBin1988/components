<template>
  <div id='app'>
    <http-busy>
      <div partial>
        <http></http>
      </div>
    </http-busy>
  </div>
</template>

<script>
import HttpBusy from '../../src/components/HttpBusy'
import Http from './Http'

export default {
  components: { HttpBusy, Http }
}
</script>
