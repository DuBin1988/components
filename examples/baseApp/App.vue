<template>
  <div id='app'>
    <base-app>
      <app-content partial>
      </app-content>
    </base-app>
  </div>
</template>

<script>
import BaseApp from '../../src/components/BaseApp'
import AppContent from './AppContent'

export default {
  components: { BaseApp, AppContent }
}
</script>
