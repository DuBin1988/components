<template>
  <div id='app' style="display: -webkit-flex; -webkit-flex-direction: column; height: 100%;">
    <tabset>
      <tab v-for='tab of tabs' :header='tab.name'>
        <component :is='tab.comp'></component>
      </tab>
    </tabset>
  </div>
</template>

<script>
import { tabset, tab } from 'vue-strap'
import tab1 from './Tab1'
import tab2 from './Tab2'

export default {
  data () {
    return {
      tabs: [
        { name: 'tab1', comp: 'tab1' },
        { name: 'tab2', comp: 'tab2' }
      ]
    }
  },
  components: { tabset, tab, tab1, tab2 }
}
</script>
