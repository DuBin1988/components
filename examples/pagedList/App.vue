<template>
  <div id='app'>
    <http-busy>
      <list-tree partial></list-tree>
    </http-busy>
  </div>
</template>

<script>
import HttpBusy from '../../src/components/HttpBusy'
import ListTree from './ListTree'

export default {
  components: { HttpBusy, ListTree }
}
</script>
