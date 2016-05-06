<template>
  <div id='app'>
    <app-base>
      <project partial></project>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import Project from './Project'

export default {
  components: { AppBase, Project }
}
</script>
