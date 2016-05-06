<template>
  <div id='app'>
    <app-base>
      <app-content partial>
      </app-content>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import AppContent from './AppContent'

export default {
  components: { AppBase, AppContent }
}
</script>
