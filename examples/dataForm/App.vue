<template>
  <div id='app'>
    <http-busy>
      <project partial></project>
    </http-busy>
  </div>
</template>

<script>
import HttpBusy from '../../src/components/HttpBusy'
import Project from './Project'

export default {
  components: { HttpBusy, Project }
}
</script>
