<template>
  <div id='app'>
    <base-app>
      <project partial></project>
    </base-app>
  </div>
</template>

<script>
import BaseApp from '../../src/components/BaseApp'
import Project from './Project'

export default {
  components: { BaseApp, Project }
}
</script>
