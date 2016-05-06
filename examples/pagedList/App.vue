<template>
  <div id='app'>
    <app-base>
      <list-tree partial></list-tree>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import ListTree from './ListTree'

export default {
  components: { AppBase, ListTree }
}
</script>
