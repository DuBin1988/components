<template>
  <app-base>
    <div class='container-fluid'>
      <div class="row">
        <div class="col-md-6">
          <project-list></project-list>
        </div>
        <div class="col-md-6">
          <project-grid></project-grid>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <project-tree></project-tree>
        </div>
        <div class="col-md-6">
          <project-grid-tree></project-grid-tree>
        </div>
      </div>
    </div>
  </app-base>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import ProjectList from './ProjectList'
import ProjectGrid from './ProjectGrid'
import ProjectTree from './ProjectTree'
import ProjectGridTree from './ProjectGridTree'

export default {
  components: { AppBase, ProjectList, ProjectGrid, ProjectTree, ProjectGridTree }
}
</script>
