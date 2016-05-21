<template>
  <div id='app' style="display: -webkit-flex; -webkit-flex-direction: column; height: 100%;">
    <dynamic :comp="{comp: 'tab1'}"></dynamic>
  </div>
</template>

<script>
import tab1 from './Tab1'
import tab2 from './Tab2'

export default {
  components: { tab1, tab2 }
}
</script>
