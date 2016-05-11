<template>
  <div id='app'>
    <app-base>
      <div class='container-fluid'>
        <div class="row">
          <div class="col-md-6">
            <tabset>
              <tab header="项目树">
                <project-grid-tree :select-store='selectStore'></project-grid-tree>
              </tab>
              <tab header="项目表">
                <project-grid></project-grid>
              </tab>
            </tabset>
          </div>
          <div class="col-md-6">
            <project-form :parent='selectStore.selected'></project-form>
          </div>
        </div>
      </div>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import SelectStore from '../../src/stores/SelectStore'
import ProjectGrid from './ProjectGrid'
import ProjectGridTree from './ProjectGridTree'
import ProjectForm from './ProjectForm'
import Tabset from 'vue-strap/src/Tabset'
import Tab from 'vue-strap/src/Tab'

export default {
  data () {
    return {
      selectStore: new SelectStore()
    }
  },
  methods: {
    test () {
      console.log(this.$refs.list)
    }
  },
  components: { AppBase, ProjectGrid, ProjectGridTree, ProjectForm, Tab, Tabset }
}
</script>
